"use client";
import { useWeather } from '@/app/hooks/use-weather';
import Image from "next/image";
import { Flex } from "@chakra-ui/react";

export const WeatherWidget = () => {
  const { weather, loading, error } = useWeather();

  if (error) return <div>{error}</div>;
  if (!weather || !weather.condition && loading) return <div>Loading...</div>;

  return (
    <Flex direction="column" align="center">
      <Image src={`http:${weather?.condition.icon}`} alt={weather?.condition.text} width={50} height={50} />
      <p>{weather?.condition.text}</p>
      <p>{weather?.condition.temperature}°C</p>
      <p>⚲ {weather?.location}</p>
    </Flex>
  );
};