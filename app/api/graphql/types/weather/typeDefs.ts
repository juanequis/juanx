export const weatherTypeDefs = /* GraphQL */ `
  type Condition {
    icon: String
    text: String
    temperature: Float
  }

  type Location {
    country: String
    name: String
    region: String
  }

  type Weather {
    condition: Condition
    location: Location
    text: String
    temperature: Float
  }

  type Query {
    weather(latitude: Float!, longitude: Float!): Weather
    hello: String
  }
`

export type Condition = {
  icon: string
  text: string
  temperature: number
}

export type Location = {
  country: string
  name: string
  region: string
}

export type Weather = {
  condition: Condition
  location: Location
}
