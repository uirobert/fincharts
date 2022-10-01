import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./components/Layout";
import { StyledEngineProvider } from "@mui/material";
import "./index.css";
import App from "./App";
import "./index.css";
import { StytchProvider } from "@stytch/react";
import { StytchUIClient } from "@stytch/vanilla-js";

// TODO --> Add to vite ways to handle .env -
const stytch = new StytchUIClient(
	"public-token-test-2b3adf99-a115-4f05-9a92-8bd9fe1d6bf5"
);

// Apollo Client and Related tool for GraphQL operations

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "http:/localhost:4000",
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// Apollo to help handle Graphql Operations

	// <React.StrictMode>
	<ApolloProvider client={client}>
		{/* To help deal with Tailwind and MUI interaction  */}

		{/* Authentication Provider */}
		<StytchProvider stytch={stytch}>
			<StyledEngineProvider injectFirst>
				<Layout>
					<App />
				</Layout>
			</StyledEngineProvider>
		</StytchProvider>
	</ApolloProvider>
	// {/* </React.StrictMode> */}
);
