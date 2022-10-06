module.exports = {
	TestData: {
		Query: {
			getCoins(parent, args, ctx, info) {
				const coin = [
					{
						symbol: "BTC",
						icon_url: "/",
						price: "33302",
						name: "BITCOIN",
						max_supply: "28390",
					},
				];
				return coin;
			},
		},
	},
};
