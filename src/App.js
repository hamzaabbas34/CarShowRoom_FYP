import React from "react";
import "./App.css";

// Rounting
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Buyacar from "./Components/Buy_a_car/Buyacar";
import Viewacar from "./Components/View_a_car/Viewacar";
import Sellacar from "./Components/Sell_a_car/Sellacar";
import Rentacar from "./Components/Rent_a_car/Rentacar";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "./Components/admin/Admin";

export default function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/buyacar" element={<Buyacar />} />
					<Route path="/viewacar" element={<Viewacar />} />
					<Route
						path="/sellacar"
						element={
							<ProtectedRoute>
								<Sellacar />
							</ProtectedRoute>
						}
					/>
					<Route path="/rentacar" element={<Rentacar />} />
					<Route path="/admin" element={<Admin />} />
				</Routes>
			</Router>
		</div>
	);
}
