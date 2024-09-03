import React from 'react'
import './Nai.css'
import { Col, Container, Row } from 'react-bootstrap'
import when from "../../assets/25.jpg"
import have from "../../assets/27.jpg"
import has from "../../assets/26.jpg"

const Ase = () => {
  return (
      <div>
          <Container>
              <Row>
                  <Col>
                      <div className="item_main">
                          <div className="item">
                              <div className="item_one">
                                  <p>
                                      Super easy to customise and set up according to your own
                                      brand. Additionally, any enquires you may have, you are
                                      delightfully and speedily greeted by their powerful support
                                      customer care. Best of luck!
                                  </p>
                              </div>
                              <div className="item_two">
                                  <img src={when} alt="" />
                                  <span>
                                      <h1>Steve Collins</h1>
                                      <h2>Artel Corp.</h2>
                                  </span>
                              </div>
                          </div>
                          <div className="item">
                              <div className="item_one">
                                  <p>
                                      When I have some problem I contact with the Marketify support
                                      and the explanations, videos and documentation of the personal
                                      it's perfect to understand the error and solve the problem. Thanks a lot!
                                  </p>
                              </div>
                              <div className="item_two">
                                  <img src={have} alt="" />
                                  <span>
                                      <h1>Nelly Furtado</h1>
                                      <h2>App Developer</h2>
                                  </span>
                              </div>
                          </div>
                          <div className="item">
                              <div className="item_one">
                                  <p>
                                      I rarely like to write reviews, but the Marketify team truly deserve
                                      a standing ovation
                                      for their customer support, customisation and most importantly,
                                      friendliness and professionalism. Keep it up!
                                  </p>
                              </div>
                              <div className="item_two">
                                  <img src={has} alt="" />
                                  <span>
                                      <h1>Brian Ederson</h1>
                                      <h2>Web Designer</h2>
                                  </span>
                              </div>
                          </div>
                      </div>
                  </Col>
              </Row>
          </Container>
      </div>
  )
}

export default Ase
