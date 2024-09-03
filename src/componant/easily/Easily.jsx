import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Easily.css'
import { SiWebmoney } from "react-icons/si";
import { MdMonitor } from "react-icons/md";
import { TbBlendMode } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandWebflow } from "react-icons/tb";
import { IoLeaf } from "react-icons/io5";


const Easily = () => {
  return (
    <div id='easily'>
      <Container>
        <Row>
                  <Col lg={6}>
                      <div class="easi_li_main">
                          <h1>ABOUT</h1>
                          <h2>SERVICE</h2>
                          <p>App integration, in a general sense, is the process of bringing resources or
                              capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
                          <button>Get Started</button>
                      </div>
                  </Col>
                  <Col>
                      <div className="mane">
                          <div className="pic">
                              <span>
                                  <i> <SiWebmoney /></i>
                                  <h1>Website Development</h1>
                              </span>

                          </div>
                          <div className="pic">
                              <span>
                                  <i> <MdMonitor /></i>
                                  <h1>Digital Experience</h1>
                              </span>
                          </div>
                         
                          <div className="pic">
                              <span>
                                  <i><FaFacebookF /></i>
                                  <h1>
                                      Social Media Design</h1>
                              </span>
                          </div>
                       
                          <div className="pic">
                              <span>
                                  <i> <IoLeaf /></i>
                                  <h1>
                                      Brand Identity</h1>
                              </span>
                          </div>
                      </div>
                  </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Easily
