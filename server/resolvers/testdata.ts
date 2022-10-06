module.exports = {
	TestData: {
		Query: {
			getCoins: (parent, args, ctx, info) => {
				return ["BTC", "/", "33302", "BITCOIN", "28390"];
			},
		},
	},
};
