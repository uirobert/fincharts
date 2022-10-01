// @ts-nocheck
import express from "express";
const app = express();
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolvers.ts";
import { typeDefs } from "./typeDefs.ts";
const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
});
const port = process.env.PORT || 4000;
server.applyMiddleware({ app });
app.listen({ port }, () => console.log(`The Server ready at port: ${port}`));
