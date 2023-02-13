import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Create from "./components/create/Create";
import Dashboard from "./components/dashboard/Dashboard";
import Error from "./components/error/Error";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Signup from "./components/signup/Signup";
import Signin from "./components/singIn/Signin";
import View from "./components/viewBlogs/View";
import "./App.css";
import Users from "./components/users/Users";
import Blogs from "./components/blogs/Blogs";
import Pin from "./components/pin/Pin";
const App = () => {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route
					path="/api/protected"
					element={<Home />}
				/>
				<Route
					path="/api/protected/about"
					element={<About />}
				/>
				<Route
					path="/api/protected/login"
					element={<Signin />}
				/>
				<Route
					path="/api/protected/signup"
					element={<Signup />}
				/>
				<Route
					path="/api/protected/dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="/api/protected/users"
					element={<Users />}
				/>
				<Route
					path="/api/protected/blogs"
					element={<Blogs />}
				/>
				<Route
					path="/api/protected/pin"
					element={<Pin />}
				/>
				<Route
					path="/api/protected/create"
					element={<Create />}
				/>
				<Route
					path="/api/protected/view-blogs"
					element={<View />}
				/>
				<Route
					path="*"
					element={<Error />}
				/>
			</Routes>
		</div>
	);
};

export default App;
