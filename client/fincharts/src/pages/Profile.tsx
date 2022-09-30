import React from "react";
import { Layout } from "../components/Layout";

interface ProfileProps {
	title: String;
}

export const Profile = (props: ProfileProps) => {
	return <>{props.title}</>;
};
