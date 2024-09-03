import React from 'react'
import './Pprotfolioa.css'
import bann from "../../assets/banner.jpg"
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
const Protfolioa = () => {
  return (
    <div className="baner">
      <img src={bann} alt="" />
      <Container>
        <Row>
          <Col>
            <div className="nner">
              <ul>
                <h1>CREATIVE PROTFOLIO</h1>
                <Link to="/">Home</Link>
                <span>/ &#160; Creative Protfolio</span>
              </ul>
            </div>
              </Col>
            </Row>
           </Container>
      </div>
      
   
  )
}

export default Protfolioa
