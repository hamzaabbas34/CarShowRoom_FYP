import React, { useEffect, useState } from "react";
import "./Rentacar.css";
import Navbar from "../Home/Navbar/Navbar";

import buyacar from "../../Assets/img/rentacar.svg";
import v8car from "../../Assets/img/v8.svg";
import whitecar from "../../Assets/img/whitecar.svg";
import redcolor from "../../Assets/img/redcar.svg";

import Footer from "../../Components/Home/Footer/Footer";
import teamimg from "../../Assets/img/teampic.svg";
import clientimg from "../../Assets/img/icon1.svg";
import { useNavigate } from "react-router-dom";
import Topcar from "../Home/Topcar/Topcar";

export default function Rentacar() {
	const navigate = useNavigate();

	const gothecarviewpage = ( cars ) => {
		navigate("/viewacar", { state: cars });
	};
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

	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("http://localhost:5000/cars/getall");
				const result = await response.json();
				setData(result);
				console.log(result);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
		fetchData();
	}, []);

	const prevSlide = () => {
		setIndex(index === 0 ? reviews.length - 1 : index - 1);
	};

	const nextSlide = () => {
		setIndex(index === reviews.length - 1 ? 0 : index + 1);
	};

	return (
		<div>
			<Navbar />

			<div className="mainbuyacar">
				<div className="buyacarcontent">
					<h1>
						Select best Car <br /> for your Rent{" "}
					</h1>
					<p>
						Explore our latest and best-selling car models, complete with
						stunning visuals, competitive pricing, and key highlights to help
						you choose your perfect ride.
					</p>
				</div>

				<div className="buyacarimg">
					<img src={buyacar} alt="" />
				</div>
			</div>

			<div className="maincarcatergoressection">
				<h1>Car Categories</h1>
				<div className="servicesmaindiv">
					{data
						.filter((car) => car.type === "rent")
						.map((cars, index) => (
							<div className="servicescarddiv" key={index}>
								<img src={`http://localhost:5000${cars.images[0]}`} alt="" />
								<h4>Buy A new Car</h4>
								<p>{cars.description}</p>
								<button onClick={() => gothecarviewpage(cars)}>View</button>
							</div>
						))}

					<div className="servicescarddiv">
						<img src={whitecar} alt="" />
						<h4>Buy A new Car</h4>
						<p>
							Choosing the perfect vehicle requires careful consideration of
							your needs, budget, and preferences. This guide walks you
						</p>
						<button onClick={gothecarviewpage}>View</button>
					</div>

					<div className="servicescarddiv">
						<img src={redcolor} alt="" />
						<h4>Buy A new Car</h4>
						<p>
							Choosing the perfect vehicle requires careful consideration of
							your needs, budget, and preferences. This guide walks you
						</p>
						<button onClick={gothecarviewpage}>View</button>
					</div>
				</div>
				<div className="servicesmaindiv">
					<div className="servicescarddiv">
						<img src={v8car} alt="" />
						<h4>Buy A new Car</h4>
						<p>
							Choosing the perfect vehicle requires careful consideration of
							your needs, budget, and preferences. This guide walks you
						</p>
						<button onClick={gothecarviewpage}>View</button>
					</div>

					<div className="servicescarddiv">
						<img src={whitecar} alt="" />
						<h4>Buy A new Car</h4>
						<p>
							Choosing the perfect vehicle requires careful consideration of
							your needs, budget, and preferences. This guide walks you
						</p>
						<button onClick={gothecarviewpage}>View</button>
					</div>

					<div className="servicescarddiv">
						<img src={redcolor} alt="" />
						<h4>Buy A new Car</h4>
						<p>
							Choosing the perfect vehicle requires careful consideration of
							your needs, budget, and preferences. This guide walks you
						</p>
						<button onClick={gothecarviewpage}>View</button>
					</div>
				</div>
			</div>

			<div className="mainflexclientreviewdiv">
				<div className="teamimg">
					<img src={teamimg} alt="" />
				</div>

				<div className="teamdivmain">
					<h1>Team & Review</h1>
					<p>
						Reference site about Lorem Ipsum, giving information on its origins,
						as well as a random
					</p>

					<div className="teamdiv">
						<span>{feedback}</span>

						<div className="picandclientreviewmaindiv">
							<div>
								<img src={img} alt={name} />
							</div>

							<div>
								<h4>{name}</h4>
								<small>{title}</small>
							</div>
						</div>

						<div className="slider-buttons">
							<button onClick={prevSlide}>&larr;</button>
							<button onClick={nextSlide}>&rarr;</button>
						</div>
					</div>
				</div>
			</div>

			<Topcar />

			<Footer />
		</div>
	);
}
