import React, { useEffect, useState } from "react";
import "./Buyacar.css";
import Navbar from "../Home/Navbar/Navbar";

import buyacar from "../../Assets/img/buyacar.svg";
import v8car from "../../Assets/img/v8.svg";
import whitecar from "../../Assets/img/whitecar.svg";
import redcolor from "../../Assets/img/redcar.svg";

import yellowcar from "../../Assets/img/yellowimg.svg";
import Topcar from "../Home/Topcar/Topcar";
import Footer from "../Home/Footer/Footer";

import { useNavigate } from "react-router-dom";

export default function Buyacar() {
	const navigate = useNavigate();
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
	}, []); // Empty dependency array means this runs only once on mount

	const gothecarviewpage = (cars) => {
		navigate("/viewacar", { state: cars });
	};

	return (
		<div>
			<Navbar />

			<div className="mainbuyacar">
				<div className="buyacarcontent">
					<h1>Top Picks for You</h1>
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

			{/* our cars */}

			<div className="maincarcatergoressection">
				<h1>Car Categories</h1>
				<div className="servicesmaindiv">
					{data
						.filter((car) => car.type === "sell")
						.map((cars, index) => (
							<div className="servicescarddiv" key={index}>
								<img src={`http://localhost:5000${cars.images[0]}`} alt="" />
								<h4>Buy A new Car</h4>
								<p>{cars.description}</p>
								<button onClick={() => gothecarviewpage(cars)}>View</button>
							</div>
						))}
					<div className="servicescarddiv">
						<img src={v8car} alt="" />
						<h4>Buy A new Car</h4>
						<p>
							Choosing the perfect vehicle requires careful consideration of
							your needs, budget, and preferences. This guide walks you
						</p>
						<button onClick={gothecarviewpage}>View</button>
					</div>

					{/* <div className="servicescarddiv">
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
					</div> */}
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
			<div className="yellowcardiv">
				<img src={yellowcar} alt="" />

				<h1>Backed by a warranty and guarantee</h1>
				<p>
					{" "}
					Base daily rental rates are subject to change. The base daily rental
					rate quoted above applies for standard rental vehicles higher base
					rental rates apply for vehicles priced over $35,000. The base daily
					rental rate applies only to time required paperwork, you could be
					asked to return it until payment is made or required documents are
					provided.
				</p>
			</div>

			<Topcar />

			<Footer />
		</div>
	);
}
