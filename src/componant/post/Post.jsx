import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'
import image from "../../assets/bg.jpg"


const Post = () => {
  return (
    <div>
       <div className="img_main">
        <img src={image} alt="" />
        <div className="bin">
               <ul>
                 <h1>GET IN TOUCH</h1>
                 <h2>
                   <Link to="/">Home</Link>
                   <span> / Get in touch </span>
                 </h2>
               </ul>
               
             </div>

       </div>
    </div>
  )
}

export default Post
