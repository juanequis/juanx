import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge"
import { makeExecutableSchema } from "@graphql-tools/schema"

// Import all type definitions
import { weatherTypeDefs } from "./types/weather/typeDefs"

// Import all resolvers
import { weatherResolvers } from "./types/weather/resolvers"

export function createSchema() {
  // Merge all type definitions
  const typeDefs = mergeTypeDefs([weatherTypeDefs])

  // Merge all resolvers
  const resolvers = mergeResolvers([weatherResolvers])

  return makeExecutableSchema({
    typeDefs,
    resolvers,
  })
}
