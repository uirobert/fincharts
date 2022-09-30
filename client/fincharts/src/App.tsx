import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import { DashBoard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { About } from "./pages/About";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<DashBoard title='Dashboard' />} />
				<Route path='/signup' element={<Signup title='Signup' />} />
				<Route path='/login' element={<Login title='Login' />} />
				<Route path='/profile' element={<Profile title='profile' />} />
				<Route path='/about' element={<About title='about' />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
