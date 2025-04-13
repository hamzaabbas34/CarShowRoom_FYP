import React from "react";
import "./Viewacar.css";
import Navbar from "../Home/Navbar/Navbar";
import Header from "../Header/Header";

import whitecarimg from "../../Assets/img/whitecccar.svg";
import Topcar from "../Home/Topcar/Topcar";
import Footer from "../Home/Footer/Footer";
import { useLocation } from "react-router-dom";

export default function Viewacar() {
	const location = useLocation();
	const cardetials = location.state;
	console.log(cardetials);

	return (
		<div>
			<Navbar />

			<Header
				title={"Vehicles Details"}
				paragraph={
					"Choosing the perfect vehicle requires careful consideration of your needs, budget, and preferences. This guide walks you through essential factors like performance, features, and reliability. Make an informed decision and drive away with confidence in your ideal car."
				}
			/>

			<div className="carviewdiv">
				<div className="whitecarviewdiv">
					<div className="whiteyellow">
						<img src={`http://localhost:5000${cardetials.images[0]}`} alt="" />
						<div className="yelblowcolorbg"></div>
					</div>

					<div className="smallimgdivf">
						{cardetials.images.map((img, index) => (
							<img key={index} src={`http://localhost:5000${img}`} alt="" />
						))}
					</div>

					<button>
						<a
							href={`https://wa.me/${cardetials.contact}`}
							target="_blank"
							rel="noopener noreferrer"
							className="text-green-600 hover:underline">
							Chat on WhatsApp
						</a>{" "}
					</button>
					<button>{cardetials.contact}</button>
				</div>

				<div className="mainflexviewcardiv">
					<div>
						<div className="carviewdataflex">
							<div className="lineyellowcar"></div>
							<div>
								<h1>Make</h1>
								<p>BMW</p>
							</div>

							<div className="lineyellowcar"></div>
							<div>
								<h1>Location</h1>
								<p>BMW</p>
							</div>
						</div>
					</div>

					<div>
						<div className="carviewdataflex">
							<div className="lineyellowcar"></div>
							<div>
								<h1>Make</h1>
								<p>BMW</p>
							</div>

							<div className="lineyellowcar"></div>
							<div>
								<h1>Location</h1>
								<p>BMW</p>
							</div>
						</div>
					</div>

					<div>
						<div className="carviewdataflex">
							<div className="lineyellowcar"></div>
							<div>
								<h1>Model</h1>
								<p>BMW</p>
							</div>

							<div className="lineyellowcar"></div>
							<div>
								<h1>Make</h1>
								<p>BMW</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Topcar />

			<Footer />
		</div>
	);
}
