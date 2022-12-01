import React from "react"
import "./HeadTitle.css"
import { useLocation, Link } from "react-router-dom";
import TopSection from "../../screens/sections/TopSection"

const HeadTitle = () => {
  const location = useLocation()

  return (
    <>
      <TopSection/>
      <section className='images-headings'>
        <div className='containers'>
          <h1 className="hometop">{location.pathname.split("/")[1]}</h1>

          <button className="hometops">
            <Link className="trying" to='/'>Home / </Link>
            <span className="onspan">{location.pathname.split("/")[1]}</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default HeadTitle