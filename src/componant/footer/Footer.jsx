import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import log from '../../assets/logo.png'
import images from '../../assets/bg.jpg'
import { MdPlayArrow } from "react-icons/md";
const Footer = () => {
  return (
    <div id='move'>
        <div className="move">
          <img src={images} alt="" />
        </div>
       <Container>
         <Row>
           <Col lg={3}>
               <div className="logo">
                 <img src={log} alt="" />
                  <p>
                   We are creative Web Studio
                   based in New York, USA
                  </p>
               </div>
           </Col>
           <Col lg={3}>
             <div className="quite">
                <h1>QUICK LINKS</h1>
                <div className="link"></div>
             </div>
             
             <div className="lin">
              <li><i><MdPlayArrow /></i>Licenses</li>
               <li><i><MdPlayArrow /></i>Forums</li>
               <li><i><MdPlayArrow /></i>Meetups</li>
               <li><i><MdPlayArrow /></i>Sitemap</li>
             </div>
           </Col>
           <Col lg={3}>
             <div className="quite">
                <h1>SOCIAL MEDIA</h1>
             </div>
             <div className="line"></div>
             <div className="lin">
              <li><i><MdPlayArrow /></i>Facebook</li>
               <li><i><MdPlayArrow /></i>Twitter</li>
               <li><i><MdPlayArrow /></i>Linkedin</li>
               <li><i><MdPlayArrow /></i>Instagram</li>
             </div>
           </Col>
           <Col lg={3}>
             <div className="quite">
                <h1>CATEGORIES</h1>
             </div>
             <div className="linki"></div>
             <div className="cate">
              <div className="go">
                <h6>Marketing</h6>
                <a href="#">Digital</a>
              </div>
              <div className="ri">
                <h6>Portfolio</h6>
               <a href="#">Creative</a>

              </div>
              <div className="es">
              <h6>WordPress</h6>
              <a href="#">Theme</a>
              <p>Blog</p>
              </div>
             </div>
             
           </Col>
         </Row>
         <div className="lina"></div>
         <div className="data">
          <p>© 2024 Istanbul. Developed by Marketify with love.</p>
         </div>
       </Container>
    </div>
  )
}

export default Footer
