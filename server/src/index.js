// @ts-nocheck
import express from "express";
const app = express();
import { ApolloServer, gql } from "apollo-server-express";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";

const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true, // highly recommended
	cache: "bounded",
});
const port = process.env.PORT || 4000;
server.applyMiddleware({ app });

app.listen({ port }, () => console.log(`The Server ready at port: ${port}`));
