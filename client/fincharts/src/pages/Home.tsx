import React from "react";

interface HomeProps {
	title: String;
}

export const Home = (props: HomeProps) => {
	return <>{props.title}</>;
};
