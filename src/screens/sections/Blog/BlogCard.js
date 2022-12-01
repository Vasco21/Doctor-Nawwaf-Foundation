import React from "react"

const BlogCard = ({ item: { id, cover, title, para, catgeory, date } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={cover} alt='Gallery Images' />
        </div>

        <div className='category'>
          <h4>{catgeory}</h4>
        </div>

        <div className='details'>
          <h3>{title}</h3>
          <p>{para}</p>
        </div>
      </div>
    </>
  )
}

export default BlogCard
