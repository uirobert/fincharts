import React from "react";

interface ProfileProps {
	title: String;
}

export const Signup = (props: ProfileProps) => {
	return <>{props.title}</>;
};
