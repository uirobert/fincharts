const { gql } = require("apollo-server");

module.exports = gql`
	type Query {
		getCoins: [Coin]
		getMessage(id: ID!): Message
		getUser(id: ID!): User
	}

	type Mutation {
		registerUser(CreateAccountInput: CreateAccountInput): User
		createcoin(CreateCoinInput: CreateCoinInput): [Coin]
		createMessages(MessageInput: MessageInput): Message!
		addtolist(symbol: String): Coin
		loginUser(LoginInput: LoginInput): User
	}

	type Message {
		content: String
		createdAt: String
		createdBy: String
	}

	input MessageInput {
		content: String
		username: String
	}

	type Coin {
		symbol: String
		icon_url: String
		price: String
		name: String
		max_supply: String
	}

	input CreateCoinInput {
		symbol: String
		icon_url: String
		price: String
		name: String
		max_supply: String
	}

	input CreateAccountInput {
		username: String
		email: String
		password: String
	}

	input LoginInput {
		email: String
		password: String
	}

	type Watchlist {
		owner: User
		coin: Coin
	}

	type User {
		username: String
		email: String
		token: String
	}
`;
