import React from 'react'
import './Latest.css'
import woman from "../../assets/woman-1.png"
import { Col, Container, Row } from 'react-bootstrap'

const Latest = () => {
  return (
    <div id='men'>
        <Container>
            <Row>
              <Col lg={6}>
                 <div className="women">
                   <img src={woman} alt="" />
                 </div>
                 <div class="a_b_banner"> 
                  <h1>Building stellar websites for early startups</h1>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                     aliqua ut enim.
                   </h2>
                </div>
              </Col>
          <Col lg={6}>
            <div class="build_ona">
              <h1>Send inquiry</h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore.
              </h2>
            </div>
            <div class="build_one">
              <form>
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Paste your Figma design URL' />
              </form>
              <button>
                <a href="#">Send an Inquiry</a>
              </button>
            </div>
          </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Latest
