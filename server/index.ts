export {};
const { ApolloServer, gql } = require("apollo-server");

const test = require("./resolvers/testdata");
// MONGO SUPPORT
const mongoose = require("mongoose");
//
const {
	ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");
const fs = require("fs");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const MONGODB =
	"mongodb+srv://vercel-admin-user:u07SJ82sKigtnlQs@cluster0.qvrgowh.mongodb.net/admin";

const main = async () =>
	await mongoose.connect(MONGODB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
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
