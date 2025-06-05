export const weatherResolvers = {
  Query: {
    hello: () => "Hello from GraphQL!",
    weather: async (_: unknown, { latitude, longitude }: { latitude: number; longitude: number }) => {
      const apiKey = process.env.WEATHER_API_KEY;
      if (!apiKey) throw new Error("API key is not defined");

      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`
      );

      if (!response.ok) throw new Error("Failed to fetch weather data");

      const data = await response.json();

      return {
        condition: {
          icon: data.current.condition.icon,
          text: data.current.condition.text,
          temperature: data.current.temp_c, // Assuming we want the temperature in Celsius
        },
        location: `${data.location.name}, ${data.location.region}, ${data.location.country}`,
      };
    },
  },
};
