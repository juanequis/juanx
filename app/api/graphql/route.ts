import { createYoga } from "graphql-yoga"
import { NextRequest } from "next/server"
import { createSchema } from "./schema"

// Create the yoga instance
const yoga = createYoga({
  schema: createSchema(),
  // fetchAPI: { Request: NextRequest },
})

// Export compatible route handlers for Next.js
export async function GET(request: NextRequest) {
  return yoga.handleRequest(request, {})
}

export async function POST(request: NextRequest) {
  const response = await yoga.handleRequest(request, {});

  return response;
}
