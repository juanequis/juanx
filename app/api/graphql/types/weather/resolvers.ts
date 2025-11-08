import { GraphQLError } from "graphql";

export const weatherResolvers = {
  Query: {
    hello: () => "Hello from GraphQL!",
    weather: async (_: unknown, { latitude, longitude }: { latitude: number; longitude: number }) => {
      const apiKey = process.env.WEATHER_API_KEY;
      let response;

      if (!apiKey) throw new GraphQLError("WEATHER_API_KEY key is not defined");

      try {
        response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
      } catch (error) {

        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        
        throw new GraphQLError(`Error fetching weather data: ${errorMessage}`);
      }

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
