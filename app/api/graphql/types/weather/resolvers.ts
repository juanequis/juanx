export const weatherResolvers = {
  Query: {
    hello: () => "Hello from GraphQL!",
    weather: async (_: unknown, { latitude, longitude }: { latitude: number; longitude: number }) => {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=ae07976651ae49d192e185647252905&q=${latitude},${longitude}`
      )

      if (!response.ok) throw new Error("Failed to fetch weather data")

      const data = await response.json()

      return {
        condition: {
          icon: data.current.condition.icon,
          text: data.current.condition.text,
          temperature: data.current.temp_c, // Assuming you want the temperature in Celsius
        },
        location: `${data.location.name}, ${data.location.region}, ${data.location.country}`,
      }
    }
  },
}
