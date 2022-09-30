import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./components/Layout";

import "./index.css";
import App from "./App";
import "./index.css";

import {
	ApolloProvider,
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client";

// for later auth set-up
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
	uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists

	const token = localStorage.getItem("token");

	// return the headers to the context so httpLink can read them

	return {
		headers: {
			...headers,

			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	uri: "http:/localhost:4000",
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ApolloProvider client={client}>
		<React.StrictMode>
			<Layout>
				<App />
			</Layout>
		</React.StrictMode>
	</ApolloProvider>
);
