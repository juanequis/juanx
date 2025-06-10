"use client";
import { useWeather } from '@/app/hooks/use-weather';
import Image from "next/image";
import { Box, Flex, Em, Stack, VStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const WeatherInfo = () => {
  const { weather, loading, error } = useWeather();

  if (error) return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      pt={30}
      textAlign="center"
      height={122}
      width={200}
      m={'0 auto'}
    >
      ⚠️
      <Em>  {error}</Em>
    </Box>);

  if (!weather || !weather.condition && loading) return (
    <Stack gap="6" height={122} width={200} m={'0 auto'} justify={'center'} align="center">
      <VStack width="full">
        <Skeleton width={50} height={50} m="0 auto" />
        <SkeletonText noOfLines={2} justifyContent="center" />
      </VStack>
    </Stack>
  );

  return (
    <Flex direction="column" align="center">
      <Image src={`http:${weather?.condition.icon}`} alt={weather?.condition.text} width={50} height={50} />
      <p>{weather?.condition.text}</p>
      <p>{weather?.condition.temperature}°C</p>
      <p>⚲ {weather?.location}</p>
    </Flex>
  );
}

export const WeatherWidget = () => {
  const [isActive, setIsActive] = useState(false);
  const t = useTranslations('weather-widget');

  if (!isActive) return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      pt={30}
      onClick={() => setIsActive(true)}
      cursor="pointer"
      textAlign="center"
      height={122}
      width={200}
      m={'0 auto'}
    >
      <Em >{t('inactiveText')}</Em>
    </Box>
  );

  return (
    <WeatherInfo />
  );
};