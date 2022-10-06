const coin = [
	{
		symbol: "BTC",
		icon_url: "/",
		price: "33302",
		name: "BITCOIN",
		max_supply: "28390",
	},
];

const resolvers = {
	//Queries
	Query: {
		getCoins(parent, args, ctx, info) {
			return coin;
		},
	},
	// Mutations
	// Mutation: {},
	//Subscriptions
	// Subscriptions: {},
};

module.exports = resolvers;
