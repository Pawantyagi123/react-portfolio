import React from 'react'
import image from "../Image/notfound.jpg"
import "../Components/css/notfound.css"
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
    <div className='not-found'>
      <div className="notfound-img">
<img src={image} alt="" />
      </div>
      <div className="notfound-text">
        <p>page not found please go back to Home-page</p>
        <Link to={"/"} className='back-link'>Home</Link>
      </div>
    </div>
    </div>
  )
}
