import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./components/Layout";
import { StyledEngineProvider } from "@mui/material";
import "./index.css";
import App from "./App";
import "./index.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { client } from "./Apollo/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		{/* Apollo to help handle Graphql Operations */}
		<ApolloProvider client={client}>
			{/* To help deal with Tailwind and MUI interaction  */}
			<StyledEngineProvider injectFirst>
				<Layout>
					<App />
				</Layout>
			</StyledEngineProvider>
		</ApolloProvider>
	</React.StrictMode>
);
