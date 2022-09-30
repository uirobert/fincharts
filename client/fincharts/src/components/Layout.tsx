import React from "react";
import Footer from "./Footer";
// import Footer from "./Footer"; - Hide for
import Header from "./Header";

type LayoutProps = {
	children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
	return (
		<>
			<Header />
			{props.children}
		</>
	);
};
