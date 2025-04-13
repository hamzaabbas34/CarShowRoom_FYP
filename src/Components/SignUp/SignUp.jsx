import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import googleimg from "../../Assets/img/google.svg";

export default function SignUp() {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		remember: false,
	});

	const [errors, setErrors] = useState({});

	const gotheloginpage = () => {
		navigate("/login");
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
		) {
			newErrors.email = "Invalid email address";
		}

		if (!formData.password) {
			newErrors.password = "Password is required";
		} else if (formData.password.length < 6) {
			newErrors.password = "Password must be at least 6 characters";
		}

		if (!formData.confirmPassword) {
			newErrors.confirmPassword = "Confirm password is required";
		} else if (formData.confirmPassword !== formData.password) {
			newErrors.confirmPassword = "Passwords do not match";
		}

		return newErrors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validateForm();
		setErrors(validationErrors);

		if (Object.keys(validationErrors).length === 0) {
			try {
				// Call your login API endpoint
				const response = await fetch("http://localhost:5000/signup", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});

				const data = await response.json();

				if (response.ok) {
					// Save token and redirect on successful login
					localStorage.setItem("token", data.token);
					navigate("/"); // or wherever you want to redirect
				} else {
					// Handle login error
					setErrors({ apiError: data.message || "Login failed" });
				}
			} catch (error) {
				setErrors({ apiError: "Network error. Please try again." });
			}
		}
	};

	// Function to initiate Google login
	const handleGoogleLogin = () => {
		window.location.href = "http://localhost:5000/auth/google";
	};

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	return (
		<div>
			<div className="signupbgdiv">
				<div className="alreadyaccountline">
					<p>
						Already have an account? <span onClick={gotheloginpage}>Login</span>
					</p>
				</div>

				<form className="mainflexsignupdiv" onSubmit={handleSubmit}>
					<div className="welcomecontent">
						<h1>
							Welcome! To <span>Car Show Room</span>
						</h1>
						<p>My Amazing Lorem ipsum dolor sit amet. Cars you can see</p>
					</div>

					<div className="signcontent">
						<h2>Sign Up</h2>
						<p>Let’s Create Your Account to Join Us!</p>

						<input
							type="text"
							name="name"
							placeholder="Enter Name"
							value={formData.name}
							onChange={handleChange}
						/>
						{errors.name && <span className="error">{errors.name}</span>}

						<input
							type="text"
							name="email"
							placeholder="Enter Email"
							value={formData.email}
							onChange={handleChange}
						/>
						{errors.email && <span className="error">{errors.email}</span>}

						<input
							type="password"
							name="password"
							placeholder="Enter Password"
							value={formData.password}
							onChange={handleChange}
						/>
						{errors.password && (
							<span className="error">{errors.password}</span>
						)}

						<input
							type="password"
							name="confirmPassword"
							placeholder="Enter Confirm Password"
							value={formData.confirmPassword}
							onChange={handleChange}
						/>
						{errors.confirmPassword && (
							<span className="error">{errors.confirmPassword}</span>
						)}

						<div className="checkboxandp">
							<input
								type="checkbox"
								className="checke"
								name="remember"
								checked={formData.remember}
								onChange={handleChange}
							/>
							<p>Remember me</p>
						</div>

						<button type="submit">Sign Up</button>

						<h6>OR</h6>

						<button
							type="button"
							className="googlebtnandtext"
							onClick={handleGoogleLogin}>
							<img src={googleimg} alt="" />
							<p>Continue With Google</p>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
