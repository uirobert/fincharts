import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DashBoard } from "../pages/Dashboard";
import { Profile } from "../pages/Profile";
import { SignUp } from "../pages/Signup";
import { Login } from "../pages/Login";
import { About } from "../pages/About";

export const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				(
				<Route path='/' element={<DashBoard title='Dashboard' />} />
				)
				<Route path='/signup' element={<SignUp />} />
				<Route path='/login' element={<Login />} />
				&& (
				<Route path='/profile' element={<Profile title='profile' />} />
				)
				<Route path='/about' element={<About title='about' />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
