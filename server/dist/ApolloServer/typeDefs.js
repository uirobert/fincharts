import { gql } from "apollo-server-express";
const typeDefs = gql `
	type Message {
		text: String!
		createdAt: String
		createdBy: String
	}

	type User {
		email: String!
		token: String
	}

	input CreateAccountInput {
		email: String
	}

	type Coin {
		id: String
		image: String
		name: String
		price: String
		marketcap: String
		volume: String
		detail: String
	}

	input CreateCoin {
		id: String
		image: String
		name: String
		price: String
		marketcap: String
		volume: String
		detail: String
	}

	type Query {
		coins: [Coin]
	}
`;
export { typeDefs };
const coins = [
    {
        id: "BTC",
        image: "../../../",
        name: "Bitcon",
        price: "$3,509.00",
        marketcap: "$3,509.00",
        volume: "12,000000",
        detail: "/login",
    },
    {
        id: "ETH",
        image: "../../../",
        name: "Bitcon",
        price: "$3,509.00",
        marketcap: "$3,509.00",
        volume: "12,000000",
        detail: "/login",
    },
];
export { coins };
module.exports = typeDefs;
