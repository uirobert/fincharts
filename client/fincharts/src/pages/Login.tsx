import React from "react";

interface LoginProps {
	title: String;
}

export const Login = (props: LoginProps) => {
	return <>{props.title}</>;
};
