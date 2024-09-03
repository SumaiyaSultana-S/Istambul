import React, { useState } from 'react'
import './Menu.css'
import { Nav } from 'react-bootstrap'
import { FaHome } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import { MdBusinessCenter } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';

const Menu = () => {
  let [count, setCount] = useState(false)
  let handleShow = () => {
    setCount( !count);
  };
  return (
    <div className='btan'>
       <button onClick={handleShow}>
         {count == true ? <span><RxCross1 /></span> : <span><IoMdMenu /></span>}
       </button>
      { count  &&(

       <>
        <div className="ami">
            <i><FaHome /></i>
            <i><HiUser /></i>
            <i><MdBusinessCenter /> </i>
            <i><IoMdMailOpen /></i>
   
           <i><FaSearch /></i>
        </div>
          <Nav className="slider">
           <Link to="/">Home</Link>
           <Link to="/About">About</Link>
           <Link to="/Protfolio">Protfolio</Link>
    
           <Link to="/Contract">Contract</Link>
          </Nav> 
       
       </>

      )}
                 

    </div>
  )
}

export default Menu



























