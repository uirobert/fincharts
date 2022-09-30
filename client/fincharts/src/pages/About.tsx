import React from "react";

interface AboutProps {
	title: String;
}

export const About = (props: AboutProps) => {
	return <>{props.title}</>;
};
