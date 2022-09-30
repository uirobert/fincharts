import React from "react";
import Cryptos from "../components/Cyptos";
import Table from "../components/Table";

interface DashBoardProps {
	title: String;
}

export const DashBoard = (props: DashBoardProps) => {
	return (
		<>
			<Cryptos />
			<Table />
		</>
	);
};
