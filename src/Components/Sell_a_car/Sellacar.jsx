// import React, { useState } from "react";
// import "./Sellacar.css";
// import Navbar from "../Home/Navbar/Navbar";
// import Header from "../Header/Header";

// import teamimg from "../../Assets/img/teampic.svg";
// import clientimg from "../../Assets/img/icon1.svg";
// import whitecarimg from "../../Assets/img/whitecccar.svg";
// import Topcar from "../Home/Topcar/Topcar";
// import Slider from "../Home/Peoplearesayingslider/Slider";
// import Footer from "../Home/Footer/Footer";

// export default function Sellacar() {
//   // --- Simple slider state ---
//   const reviews = [
//     {
//       name: "John",
//       title: "Car Buyer",
//       feedback:
//         "Quickly generate Lorem Ipsum placeholder text. Select a desired length and choose between paragraphs, words, bytes or lists.",
//       img: clientimg,
//     },
//     {
//       name: "Emma",
//       title: "Happy Customer",
//       feedback:
//         "Reference site about Lorem Ipsum, giving information on its origins. Very smooth process and helpful team.",
//       img: clientimg,
//     },
//     {
//       name: "Alex",
//       title: "Verified Seller",
//       feedback:
//         "Toggle between HTML and rich text. Amazing experience selling my car with best market price!",
//       img: clientimg,
//     },
//   ];

//   const [index, setIndex] = useState(0);
//   const { name, title, feedback, img } = reviews[index];

//   const prevSlide = () => {
//     setIndex(index === 0 ? reviews.length - 1 : index - 1);
//   };

//   const nextSlide = () => {
//     setIndex(index === reviews.length - 1 ? 0 : index + 1);
//   };

//   return (
//     <div>
//       <Navbar />

//       <Header
//         title={"Get  Best Price for Your Car"}
//         paragraph={
//           "Choosing the perfect vehicle requires careful consideration of your needs, budget, and preferences. This guide walks you through essential factors like performance, features, and reliability. Make an informed decision and drive away with confidence in your ideal car."
//         }
//       />

//       <div className="carviewdiv">
//         <div className="whitecarviewdiv">
//           <div className="whiteyellow">
//             <input type="file" name="" id="fileInput" />
//             <div className="yelblowcolorbg"></div>
//           </div>

//           <div className="smallimgdivf">
//             <img src={whitecarimg} alt="" />
//             <img src={whitecarimg} alt="" />
//             <img src={whitecarimg} alt="" />
//             <img src={whitecarimg} alt="" />
//           </div>

//           <button>Contact ON What's up </button>
//           <button>+921123132112</button>
//         </div>

//         <div className="sellacardiv">
//           <p>Car Name</p>
//           <input placeholder="Name" type="text" />
//           <p>Model</p>
//           <input placeholder="Model" type="text" />
//           <p>Condition</p>
//           <input placeholder="Condition" type="text" />
//           <p>Descriptions</p>
//           <textarea placeholder="Descriptions"></textarea>
//         </div>
//       </div>

//       <div className="buycarmainflexdiv">
//         <div className="ratediv">
//           <h1>$25,000</h1>
//           <p>Based on 8.06% APR</p>
//         </div>

//         <div className="buycontent">
//           <h3>Sell your car in easy step</h3>
//           <p>
//             How much car can you afford? Find out, then see vehicles <br />
//             that match your budget
//           </p>
//           <img src={whitecarimg} alt="" />
//         </div>
//       </div>

//       {/* ---- Slider Section ---- */}
//       <div className="mainflexclientreviewdiv">
//         <div className="teamimg">
//           <img src={teamimg} alt="" />
//         </div>

//         <div className="teamdivmain">
//           <h1>Team & Review</h1>
//           <p>
//             Reference site about Lorem Ipsum, giving information on its origins,
//             as well as a random
//           </p>

//           <div className="teamdiv">
//             <span>{feedback}</span>

//             <div className="picandclientreviewmaindiv">
//               <div>
//                 <img src={img} alt={name} />
//               </div>

//               <div>
//                 <h4>{name}</h4>
//                 <small>{title}</small>
//               </div>
//             </div>

//             <div className="slider-buttons">
//               <button onClick={prevSlide}>&larr;</button>
//               <button onClick={nextSlide}>&rarr;</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Topcar />

//       <Slider />

//       <Footer />
//     </div>
//   );
// }

import React, { useState } from "react";
import "./Sellacar.css";
import Navbar from "../Home/Navbar/Navbar";
import Header from "../Header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import teamimg from "../../Assets/img/teampic.svg";
import clientimg from "../../Assets/img/icon1.svg";
import whitecarimg from "../../Assets/img/whitecccar.svg";
import Topcar from "../Home/Topcar/Topcar";
import Slider from "../Home/Peoplearesayingslider/Slider";
import Footer from "../Home/Footer/Footer";
import { jwtDecode } from "jwt-decode";

export default function Sellacar() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [previewImages, setPreviewImages] = useState([]);
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [id, setId] = useState("");

	React.useEffect(() => {
		const user = localStorage.getItem("user");

		if (user) {
			try {
				// Parse the stringified user object
				const parsedUser = JSON.parse(user);

				// Extract and set the user ID
				console.log("user", parsedUser);
				setId(parsedUser.id);
				 // Now you can access `id` properly
			} catch (error) {
				console.error("Invalid token", error);
			}
		}
	}, []);
	console.log(id)

	// Form state
	const [formData, setFormData] = useState({
		make: "",
		model: "",
		location: "",
		year: "",
		price: "",
		condition: "used",
		type: "",
		contact: "",
		description: "",
	});

	// Handle file selection
	const handleFileChange = (e) => {
		const files = Array.from(e.target.files);

		if (files.length > 5) {
			setError("You can upload maximum 5 images");
			return;
		}

		setSelectedFiles(files);

		// Create preview URLs
		const previews = files.map((file) => URL.createObjectURL(file));
		setPreviewImages(previews);
	};

	// Handle form input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			// Create FormData for file upload
			const data = new FormData();

			// Append files
			selectedFiles.forEach((file) => {
				data.append("images", file);
			});

			// Append other form data
			for (const key in formData) {
				data.append(key, formData[key]);
			}

			// Get user ID (you might get this from auth context or localStorage)

			data.append("userId", id);

			// Make API call
			const response = await axios.post(" http://localhost:5000/cars", data, {
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			console.log(response);

			// Redirect or show success message
			navigate(`/`);
		} catch (err) {
			setError(err.response?.data?.message || "Failed to create car listing");
		} finally {
			setLoading(false);
		}
	};

	// --- Simple slider state ---
	const reviews = [
		{
			name: "John",
			title: "Car Buyer",
			feedback:
				"Quickly generate Lorem Ipsum placeholder text. Select a desired length and choose between paragraphs, words, bytes or lists.",
			img: clientimg,
		},
		{
			name: "Emma",
			title: "Happy Customer",
			feedback:
				"Reference site about Lorem Ipsum, giving information on its origins. Very smooth process and helpful team.",
			img: clientimg,
		},
		{
			name: "Alex",
			title: "Verified Seller",
			feedback:
				"Toggle between HTML and rich text. Amazing experience selling my car with best market price!",
			img: clientimg,
		},
	];

	const [index, setIndex] = useState(0);
	const { name, title, feedback, img } = reviews[index];

	const prevSlide = () => {
		setIndex(index === 0 ? reviews.length - 1 : index - 1);
	};

	const nextSlide = () => {
		setIndex(index === reviews.length - 1 ? 0 : index + 1);
	};

	return (
		<div>
			<Navbar />

			<Header
				title={"Get Best Price for Your Car"}
				paragraph={
					"Choosing the perfect vehicle requires careful consideration of your needs, budget, and preferences. This guide walks you through essential factors like performance, features, and reliability. Make an informed decision and drive away with confidence in your ideal car."
				}
			/>

			<form onSubmit={handleSubmit}>
				<div className="carviewdiv">
					<div className="whitecarviewdiv">
						<div className="whiteyellow">
							<input
								type="file"
								id="fileInput"
								multiple
								accept="image/*"
								onChange={handleFileChange}
							/>
							<div className="yelblowcolorbg"></div>
						</div>

						<div className="smallimgdivf">
							{previewImages.length > 0 ? (
								previewImages.map((img, i) => (
									<img key={i} src={img} alt={`Preview ${i}`} multiple />
								))
							) : (
								<>
									<img src={whitecarimg} alt="" />
									<img src={whitecarimg} alt="" />
									<img src={whitecarimg} alt="" />
									<img src={whitecarimg} alt="" />
								</>
							)}
						</div>

						{error && <p className="error-message">{error}</p>}
					</div>

					<div className="sellacardiv">
						<p>Car Make</p>
						<input
							placeholder="Make (e.g. Toyota)"
							type="text"
							name="make"
							value={formData.make}
							onChange={handleChange}
							required
						/>

						<p>Model</p>
						<input
							placeholder="Model"
							type="text"
							name="model"
							value={formData.model}
							onChange={handleChange}
							required
						/>

						<p>Location</p>
						<input
							placeholder="Location"
							type="text"
							name="location"
							value={formData.location}
							onChange={handleChange}
							required
						/>

						<p>Year</p>
						<input
							placeholder="Year"
							type="number"
							name="year"
							value={formData.year}
							onChange={handleChange}
						/>

						<p>Price ($)</p>
						<input
							placeholder="Price"
							type="number"
							name="price"
							value={formData.price}
							onChange={handleChange}
							required
						/>

						<p>Condition</p>
						<select
							name="condition"
							value={formData.condition}
							onChange={handleChange}>
							<option value="used">Used</option>
							<option value="new">New</option>
						</select>

						<p>Car Type</p>
						<select name="type" value={formData.type} onChange={handleChange}>
							<option value="sell">sell</option>
							<option value="rent">rent</option>
						</select>

						<p>Contact Number</p>
						<input
							placeholder="Contact"
							type="text"
							name="contact"
							value={formData.contact}
							onChange={handleChange}
							required
						/>

						<p>Description</p>
						<textarea
							placeholder="Description"
							name="description"
							value={formData.description}
							onChange={handleChange}></textarea>

						<button type="submit" disabled={loading}>
							{loading ? "Submitting..." : "List My Car"}
						</button>
					</div>
				</div>
			</form>

			{/* Rest of your existing components */}
			<div className="buycarmainflexdiv">{/* ... existing content ... */}</div>

			{/* ---- Slider Section ---- */}
			<div className="mainflexclientreviewdiv">
				{/* ... existing slider content ... */}
			</div>

			<Topcar />
			<Slider />
			<Footer />
		</div>
	);
}
