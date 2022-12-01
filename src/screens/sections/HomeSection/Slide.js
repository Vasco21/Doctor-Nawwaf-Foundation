import React, { useState } from "react"
import Data from "./Data";
import Blog from "../Blog/Blog"
import "./Home.css"
const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <>
      <p className="blink">Check out on Our Events</p>
      <section className='slider'>
        <div className='control-btn'>
          <button className='prev' onClick={prevSlide}>
            <i className='fas fa-caret-left'></i>
          </button>
          <button className='next' onClick={nextSlide}>
            <i className='fas fa-caret-right'></i>
          </button>
        </div>

        {Data.map((slide, index) => {
          return (
            <div className={index === current ? "slide active" : "slide"} key={index}>
              {index === current && <img src={slide.image} alt='Home Images' />}
            </div>
          )
        })}
      </section>

      <section className='slide-form'>
        <div className='container'>
          <h2>Reaching Out About Our opportunity</h2>
          <span>Apply we will get in touch with you soon!!!</span>
          <form>
            <a href="https://docs.google.com/forms/d/1sHEmCLPH54h_HLAfcqwSnjqlNwUEFnuuWPB0W8Pwxdw/edit" type='Submit'><input  value='Volunteer Registration' className='submit' /></a>
          </form>
          <form>
           <a href="https://docs.google.com/forms/d/1AorPBICp24RuppSMoK0BC52AffzgiKeEsjx5flC_cFw/edit" type='Submit'><input  value='Support Solicitation' className='submit' /></a>
          </form>
        </div>
      </section>
      <Blog />
    </>
  )
}
export default Home