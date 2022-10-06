"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ApolloServer, gql } = require("apollo-server");
// MONGO SUPPORT
const mongoose = require("mongoose");
//
const { ApolloServerPluginLandingPageLocalDefault, } = require("apollo-server-core");
const fs = require("fs");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const test = require("./resolvers/testdata");
const MONGODB = "mongodb+srv://vercel-admin-user:u07SJ82sKigtnlQs@cluster0.qvrgowh.mongodb.net/admin";
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield mongoose.connect(MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});
main()
    .then(() => {
    console.log(" The Mongo DataBase is Connected");
})
    .catch((error) => console.error(error));
const server = new ApolloServer({
    typeDefs,
    test,
    resolvers,
    cache: "bounded",
    // plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀  Apollo Server Working at ${url}`);
});
