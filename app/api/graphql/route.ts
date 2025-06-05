import { createYoga } from "graphql-yoga";
import { createSchema } from "./schema";
// import { NextRequest } from "next/server";

const { handleRequest } = createYoga({
  schema: createSchema(),
  graphqlEndpoint: "/api/graphql",
  // fetchAPI: {
  //   Request: NextRequest as unknown as typeof Request,
  //   Response: Response,
  // },
});

export { handleRequest as GET, handleRequest as POST };
