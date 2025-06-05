"use client";
import { useWeather } from '@/app/hooks/use-weather';
import Image from "next/image";

export const WeatherWidget = () => {
  const { weather, loading, error } = useWeather();

  if (error) return <div>{error}</div>;
  if (!weather || !weather.condition && loading) return <div>Loading...</div>;

  return (
    <>
      <Image src={`http:${weather?.condition.icon}`} alt={weather?.condition.text} width={50} height={50} />
      <p>{weather?.condition.text}</p>
      <p>{weather?.condition.temperature}°C</p>
    </>
  );
};