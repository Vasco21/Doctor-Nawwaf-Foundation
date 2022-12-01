import React from "react";
import "./board.css";
import { Link } from "react-router-dom";

function Historybordcard() {
  return (
    <>
      <div className='aboutCard mtops flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h5>Dr. Nawwaf Foundation</h5>
          <h1>
            <span>"Dr. Nawwaf</span> Foundation"
          </h1>
          <p>Dr. Nawwaf Foundation aims to work to accomplish the Sustainable Development goals (SDG) through its various initiatives and vision.

            The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, provides a shared blueprint for peace and 
            prosperity for people and the planet, 
            now and into the future. At its heart are the 17 Sustainable Development Goals (SDGs), 
            which are an urgent call for action by all countries - developed and developing - in a global partnership. 
            They recognize that ending poverty and other deprivations must go hand-in-hand with strategies that 
            improve health and education, reduce inequality, 
            and spur economic growth – all while tackling climate change and working to preserve our oceans and forests.
            </p>
            <h4>The 17 sustainable development goals (SDGs) to transform our world:</h4>
            <ul>
                <li>GOAL 1: No Poverty</li>
                <li>GOAL 2: Zero Hunger</li>
                <li>GOAL 3: Good Health and Well-being</li>
                <li>GOAL 4: Quality Education</li>
                <li>GOAL 5: Gender Equality</li>
                <li>GOAL 6: Clean Water and Sanitation</li>
                <li>GOAL 7: Affordable and Clean Energy</li>
                <li>GOAL 8: Decent Work and Economic Growth</li>
                <li>GOAL 9: Industry, Innovation and Infrastructure</li>
                <li>GOAL 10: Reduced Inequality</li>
                <li>GOAL 11: Sustainable Cities and Communitie</li>
                <li>GOAL 12: Responsible Consumption and Production</li>
                <li>GOAL 13: Climate Action</li>
                <li>GOAL 14: Life Below Water</li>
                <li>GOAL 15: Life on Land</li>
                <li>GOAL 16: Peace and Justice, Strong Institutions</li>
                <li>GOAL 7: Affordable and Clean Energy</li>
                <li>GOAL 17: Partnerships to achieve the Goal</li>
            </ul>
            
          <button className='secondary-btn'>
            <Link to="/testimonial" className='primary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Historybordcard
