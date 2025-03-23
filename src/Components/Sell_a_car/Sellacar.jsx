import React from 'react'
import './Sellacar.css'
import Navbar from '../Home/Navbar/Navbar'
import Header from '../Header/Header'

import whitecarimg from '../../Assets/img/whitecccar.svg'

export default function Sellacar() {
  return (
    <div>
        <Navbar/>

        <Header title={"Get  Best Price for Your Car"} paragraph={"Choosing the perfect vehicle requires careful consideration of your needs, budget, and preferences. This guide walks you through essential factors like performance, features, and reliability. Make an informed decision and drive away with confidence in your ideal car."}/>
    


        <div className="carviewdiv">
        <div className="whitecarviewdiv">
          <div className="whiteyellow">
            <img src={whitecarimg} alt="" />
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


        <div className='sellacardiv'>
            <p>Car Name</p>
            <input placeholder='Name' type="text" />
            <p>Model</p>
            <input  placeholder='Model'  type="text" />
            <p>Condition</p>
            <input placeholder='Condition'  type="text" />
            <p>Descriptions</p>
            <textarea placeholder='Descriptions' ></textarea>
        </div>

       
      </div>

    
    </div>
  )
}
