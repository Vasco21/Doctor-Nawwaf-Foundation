import React from "react";
import "./board.css";
import HeadTitle from "../../common/HeadTitle/HeadTitle"
import Historybordcard from "./Historybordcard";
import { Link } from "react-router-dom";
const src =""

function Historybord() {
  return (
    <>
    <HeadTitle />
        <section className='about top'>
          <div className='container'>
            <Historybordcard />
          </div>
        </section>
  
        <section className='features top'>
          <div className='container aboutCard flex_space'>
            <div className='row row1'>
              <h1>
                Our <span>Features</span>
              </h1>
              <p>development department ensures that only the most advanced baking processes and milling techniques are adhered to – using the latest technology and equipment..</p>
              <p>dr nawwaf</p>
              <button className='secondary-btn'>
              <Link to="/features" className='primary-btn'>
                Explore More <i className='fas fa-long-arrow-alt-right'></i>
              </Link>
              </button>
            </div>
            <div className='row'>
              <video width="400" controls>
              <source src={src} type="video/mp4" />
              </video>
                <div className='control-btn'>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Historybord