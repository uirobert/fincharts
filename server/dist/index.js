"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ApolloServer, gql } = require("apollo-server");
// MONGO SUPPORT
const mongoose = require("mongoose");
//
const { ApolloServerPluginLandingPageLocalDefault, } = require("apollo-server-core");
const fs = require("fs");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const MONGODB = "mongodb+srv://vercel-admin-user:u07SJ82sKigtnlQs@cluster0.qvrgowh.mongodb.net/admin";
const server = new ApolloServer({
    typeDefs,
    resolvers,
    cache: "bounded",
    // plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});
mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
    console.log("Mongo Working!! on port -5000");
    return server.listen({ port: 5000 });
});
server.listen().then(({ url }) => {
    console.log(`🚀  Apollo Server Working at ${url}`);
});
