import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.weatherapi.com"], // Add the WeatherAPI hostname here
  },
};

const withNextIntl = createNextIntlPlugin('./i18n/requests.ts');

export default withNextIntl(nextConfig);