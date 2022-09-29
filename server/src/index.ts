import express, { Express } from "express";
import { ApolloServer, gql } from "apollo-server-express";

//
const main = async () => {
	//Set up express server
	const app: Express = express();

	app.get("/", (req, res) => {
		res.send("We are all systems go");
	});

	const PORT = process.env.PORT || 6000;
	app.listen(PORT, () => {
		return console.log(`Server is ready on Port: ${PORT}`);
	});
};

main().catch((error) => console.error(error));
