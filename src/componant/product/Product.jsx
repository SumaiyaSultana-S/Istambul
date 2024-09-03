import React from 'react'
import './Product.css'
import { Col, Container, Row } from 'react-bootstrap'
import im from '../../assets/img1.jpg'
import ag from '../../assets/img2.jpg'
import ie from '../../assets/img3.jpg'
import we from '../../assets/img4.jpg'
import bw from '../../assets/img5.jpg'
import de from '../../assets/img6.jpg'
import ve from '../../assets/img7.jpg'
import lo from '../../assets/img8.jpg'
import pe from '../../assets/img9.jpg'



const Product = () => {
   
  return (
    <div id='product'>
        <Container>
            <Row>
                  <Col>
                      <div className="tee">
                          <div className="tulip">
                            <img src={im} alt="" />
                             <h1>TULIPS</h1>
                          </div>
                          <div className="tulip">
                            <img src={ie} alt="" />
                            <h1>PLANTS</h1>
                             </div>
                          <div className="tulip">
                            <img src={ag} alt="" /> 
                           <h1>INSTRUMENT</h1>
                          
                          </div>
                          <div className="tulip">
                            <img src={we} alt="" />
                           <h1>STRAWBERRY</h1>
                          </div>
                          <div className="tulip">
                            <img src={bw} alt="" />
                           <h1>PLANT</h1>
                          </div>
                          <div className="tulip">
                            <img src={de} alt="" />
                           <h1>COSMETICS</h1>
                          </div>
                          <div className="tulip">
                            <img src={ve} alt="" />
                           <h1>CACTUS</h1>
                          </div>
                          <div className="tulip">
                            <img src={lo} alt="" />
                           <h1>CLOCK</h1>
                          </div>
                          <div className="tulip">
                            <img src={pe} alt="" />
                           <h1>MOCKUP</h1>
                          
                          </div>
                      </div>
                      <div className="popup_imag">
                        <span> &times; </span>
                      <img src={im} alt="" />
                      </div>
                  </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Product
