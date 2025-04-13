import React, { useEffect, useState } from "react";

export default function Admin() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:5000/cars/getall");
				const result = await response.json();
				setData(result);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, []);

	const handleDelete = async (id) => {
		try {
			const response = await fetch(`http://localhost:5000/cars/${id}`, {
				method: "DELETE",
			});
			if (response.ok) {
				setData((prevData) => prevData.filter((car) => car._id !== id));
				alert("Car deleted successfully!");
				window.location.reload();
			} else {
				alert("Failed to delete car.");
			}
		} catch (error) {
			console.error("Error deleting car:", error);
		}
	};

	return (
		<div className="container mt-4">
			<div className="">
				<h2 className="text-center  display-1 my-4">Admin Pages</h2>
			</div>
			<div className="row">
				{data?.map((car, index) => (
					<div className="col-md-4 mb-4" key={index}>
						<div className="card h-100 shadow">
							{car.images && car.images.length > 0 && (
								<img
									src={`http://localhost:5000${car.images[0]}`}
									className="card-img-top"
									alt={`${car.make} ${car.model}`}
									style={{ height: "200px", objectFit: "cover" }}
								/>
							)}
							<div className="card-body">
								<h5 className="card-title">
									{car.make} {car.model} ({car.year})
								</h5>
								<p className="card-text">
									<strong>Price:</strong> {car.price} PKR
								</p>
								<p className="card-text">
									<strong>Type:</strong> {car.type}
								</p>
								<p className="card-text">
									<strong>Condition:</strong> {car.condition}
								</p>
								<p className="card-text">
									<strong>Contact:</strong> {car.contact}
								</p>
								<p className="card-text">
									<strong>Location:</strong> {car.location}
								</p>
								<p className="card-text">
									<strong>Description:</strong> {car.description}
								</p>
								<button
									className="btn btn-danger mt-3"
									onClick={() => handleDelete(car._id)}>
									Delete
								</button>
							</div>
						</div>
					</div>
				))}

				{data.length === 0 && (
					<div className="col-12 text-center">
						<h4>No cars found.</h4>
					</div>
				)}
			</div>
		</div>
	);
}
