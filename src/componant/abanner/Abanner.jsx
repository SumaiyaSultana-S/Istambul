import React from 'react'
import './Abanner.css'
import bann from '../../assets/bg.jpg'
import { Link } from 'react-router-dom'
const Abanner = () => {
  return (
    <div>
        <div className="benn"></div>
        <div className="ban">
            <img src={bann} alt="" />
             <div className="ben">
               <ul>
                 <h1>ABOUT ME</h1>
                 <h2>
                   <Link to="/">Home</Link>
                   <span>/ About </span>
                 </h2>
               </ul>
               
             </div>
        </div>
      
    </div>
  )
}

export default Abanner
