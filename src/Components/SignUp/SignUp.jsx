import React from "react";
import "./SignUp.css";

import googleimg from "../../Assets/img/google.svg";

export default function SignUp() {
  return (
    <div>

      <div className="signupbgdiv">

        
      <div className="alreadyaccountline">
        <p> Already have an account? <span>Login</span></p>
      </div>


        <div className="mainflexsignupdiv">
          <div className="welcomecontent">
            <h1>
              Welcome! To <span>Car Show Room</span>{" "}
            </h1>
            <p>My Amazing Lorem ipsum dolor sit amet. Cars you can see</p>
          </div>

          <div className="signcontent">
            <h2>Sign Up</h2>
            <p>Let’s Create Your Account to Join Us!</p>

            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
            <input type="password" placeholder="Enter Confirm password" />
            <div className="checkboxandp">
              <input type="checkbox" className="checke" name="" id="" />
              <p> remember me</p>
            </div>

            <button>Sign Up</button>

            <h6>OR</h6>

            <button className="googlebtnandtext">
              <img src={googleimg} alt="" />
              <p>Continue With Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
