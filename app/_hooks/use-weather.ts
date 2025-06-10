"use client"

import { useState, useEffect } from "react"
import { Weather } from "../api/graphql/types/weather/typeDefs"
import { gqlWeatherResource } from "@/app/api/resources/weather"

export function useWeather() {
  const [weather, setWeather] = useState<Weather | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPositionAndWeather = async () => {
      try {
        setLoading(true);
        const position = await new Promise<GeolocationPosition>((resolve, reject) =>
          navigator.geolocation.getCurrentPosition(resolve, reject)
        );

        const { latitude, longitude } = position.coords;
        const weatherData = await gqlWeatherResource.getWeather(latitude, longitude);

        setWeather(weatherData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch position");
      }
    };

    fetchPositionAndWeather();
  }, []);

  return { weather, loading, error }
}
