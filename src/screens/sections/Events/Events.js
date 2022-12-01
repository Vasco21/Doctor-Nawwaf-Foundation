import React from 'react';
import Apply from "../../../images/apply.jpeg"
import "./Event.css"

function Events() {
  return (
    <section className='features top2'>
          <div className='container aboutCard flex_space'>
          <div className='row row1'>
              <h1>
              <span>Dr. Nawwaf Foundation</span> web development training registration 
              </h1>
              <p>Dr. Nawwaf foundation aims to work to accomplish 
                the sustainable development goals(SDG) through its various initiatives and vision. 
                As part of this initiative, Dr. Nawwaf foundation has organized this training that is, 
                Website Development training which is designed to provide you 
                with the industry skills, tips and resources to help you in your 
                Website Development Journey. 
                <ul>
                    <li>Fee: Free</li>
                    <li>Venue: Online</li>
                    <li>Duration: 5 weeks</li>
                </ul>
                Follow Dr. Nawwaf Foundation on all social media platforms for exciting opportunities.
                </p>
                <h5 className="blink">To Register Click on the Image</h5>
            </div>
            <div className='row image'>
              <a href="https://bit.ly/3UdXBRp"><img src={Apply} alt=''/></a>
              <div className='control-btn'>
                <button className='prev'>
                  <i className='fas fa-play'></i>
                </button>
              </div>
            </div>
            
          </div>
        </section>
  )
}

export default Events