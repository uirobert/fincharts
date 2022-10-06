import React from "react";
import { useQuery, gql } from "@apollo/client";

interface CoinProps {
	symbol: String;
	name: String;
	name_full: String;
	max_supply: String;
	icon_url: String;
}

const GET_ALL_COINS = gql`
  query GET_ALL_COINS {
  }
`;

function CoinData(props: CoinProps) {
	const { data, loading, error } = useQuery(GET_ALL_COINS);
}

// if (data) {
// 	console.log;
// }

// return(
// <>
// </>
// )
export default CoinData;
