import { createYoga } from "graphql-yoga"
import { NextRequest } from "next/server"
import { createSchema } from "./schema"

// Create the yoga instance with the merged schema
const { handleRequest } = createYoga({
  schema: createSchema(),
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Request: NextRequest },
})

export { handleRequest as GET, handleRequest as POST }
