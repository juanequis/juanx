import { ApolloClient, InMemoryCache } from "@apollo/client"
import type { Weather } from "../graphql/types/weather/typeDefs";
import { gql } from "@apollo/client"

const GET_WEATHER = gql`
  query GetWeather($latitude: Float!, $longitude: Float!) {
    weather(latitude: $latitude, longitude: $longitude) {
      condition {
        icon
        text
        temperature
      }
      location
    }
  }
`

class GraphQLUserService {
  private client: ApolloClient<unknown>

  constructor() {
    this.client = new ApolloClient({
      uri: "/api/graphql",
      cache: new InMemoryCache(),
    })
  }

  async getWeather(latitude: number, longitude: number): Promise<Weather> {
    const { data } = await this.client.query({
      query: GET_WEATHER,
      variables: { latitude, longitude },
      fetchPolicy: "cache-first",
    })
    return data.weather
  }
}

export const gqlWeatherResource = new GraphQLUserService()
