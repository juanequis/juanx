import { createYoga } from "graphql-yoga"
import { NextRequest } from "next/server"
import { createSchema } from "./schema"

const { handleRequest } = createYoga({
  schema: createSchema(),
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Request: NextRequest },
})

export { handleRequest as GET, handleRequest as POST }
