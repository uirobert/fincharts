import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import { DashBoard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { SignUp } from "./pages/Signup";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import { useStytchSession } from "@stytch/react";

const App = () => {
	const session = useStytchSession();
	return (
		<BrowserRouter>
			<Routes>
				{session && (
					<Route path='/' element={<DashBoard title='Dashboard' />} />
				)}

				{session && <Route path='/signup' element={<SignUp />} />}

				{session && <Route path='/login' element={<Login />} />}

				{!session && (
					<Route path='/profile' element={<Profile title='profile' />} />
				)}

				{session && <Route path='/about' element={<About title='about' />} />}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
