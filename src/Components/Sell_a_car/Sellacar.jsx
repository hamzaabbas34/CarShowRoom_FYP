import React, { useState } from "react";
import "./Sellacar.css";
import Navbar from "../Home/Navbar/Navbar";
import Header from "../Header/Header";

import teamimg from "../../Assets/img/teampic.svg";
import clientimg from "../../Assets/img/icon1.svg";
import whitecarimg from "../../Assets/img/whitecccar.svg";
import Topcar from "../Home/Topcar/Topcar";
import Slider from "../Home/Peoplearesayingslider/Slider";
import Footer from "../Home/Footer/Footer";

export default function Sellacar() {
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
        title={"Get  Best Price for Your Car"}
        paragraph={
          "Choosing the perfect vehicle requires careful consideration of your needs, budget, and preferences. This guide walks you through essential factors like performance, features, and reliability. Make an informed decision and drive away with confidence in your ideal car."
        }
      />

      <div className="carviewdiv">
        <div className="whitecarviewdiv">
          <div className="whiteyellow">
            <input type="file" name="" id="fileInput" />
            <div className="yelblowcolorbg"></div>
          </div>

          <div className="smallimgdivf">
            <img src={whitecarimg} alt="" />
            <img src={whitecarimg} alt="" />
            <img src={whitecarimg} alt="" />
            <img src={whitecarimg} alt="" />
          </div>

          <button>Contact ON What's up </button>
          <button>+921123132112</button>
        </div>

        <div className="sellacardiv">
          <p>Car Name</p>
          <input placeholder="Name" type="text" />
          <p>Model</p>
          <input placeholder="Model" type="text" />
          <p>Condition</p>
          <input placeholder="Condition" type="text" />
          <p>Descriptions</p>
          <textarea placeholder="Descriptions"></textarea>
        </div>
      </div>

      <div className="buycarmainflexdiv">
        <div className="ratediv">
          <h1>$25,000</h1>
          <p>Based on 8.06% APR</p>
        </div>

        <div className="buycontent">
          <h3>Sell your car in easy step</h3>
          <p>
            How much car can you afford? Find out, then see vehicles <br />
            that match your budget
          </p>
          <img src={whitecarimg} alt="" />
        </div>
      </div>

      {/* ---- Slider Section ---- */}
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

      <Slider />

      <Footer />
    </div>
  );
}
