import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	gql,
} from "@apollo/client";

export const client = new ApolloClient({
	uri: "http://api.coinlayer.com/api/live?access_key=d2fab6db3211fee90319abcd325c3c30",
	cache: new InMemoryCache(),

	name: "Crypto Charts",

	version: "1.0",

	queryDeduplication: false,

	defaultOptions: {
		watchQuery: {
			fetchPolicy: "cache-and-network",
		},
	},
});
