export const weatherTypeDefs = `
  type Condition {
    icon: String
    text: String
    temperature: Float
  }

  type Weather {
    condition: Condition
    location: String
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
  location: string
}
