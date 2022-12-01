import React from 'react';
import "./Covid.css";
import Cov from "../../images/covidimage2.png"

 const Covid = () => {
  return (
    <section className='features top2'>
          <div className='container aboutCard flex_space'>
            <div className='row image'>
              <a href="https://sacoronavirus.co.za/"><img src={Cov} alt=''/></a>
              <div className='control-btn'>
                <button className='prev'>
                  <i className='fas fa-play'></i>
                </button>
              </div>
            </div>
            <div className='row row1'>
              <h1>
                information about <span>Covid-19</span>
              </h1>
              <p>As the coronavirus (COVID-19) continues to spread throughout the world, 
                at Pioneer Foods we are taking proactive steps grounded in science to protect 
                the safety of our products, 
                our employees, their families and support our communities around the country..
                </p>
            </div>
          </div>
        </section>
  )
}
export default Covid