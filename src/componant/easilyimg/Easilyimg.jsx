import React from 'react'
import { Container, Row ,Col } from 'react-bootstrap'
import'./Easilyimg.css'
import ab from "../../assets/1.png"
import cd from "../../assets/2.png"
import ef from "../../assets/3.png"
import gh from "../../assets/4.png"
import ij from "../../assets/5.png"
import kl from "../../assets/6.png"
import mn from "../../assets/7.png"
import op from "../../assets/8.png"

const Easilyimg = () => {
  return (
      <div id='e_i'>
         
          <Container>
              <Row>
                <div className="cli">
                <h1>CLIENTS :</h1>
                </div>
                  <Col lg={12}>
                      <div className="easy_main">
                          <div class="easily_img">
                              <img src={ab} alt="" />
                          </div>
                          <div class="easily_img">
                              <img src={cd} alt="" />

                          </div>
                          <div class="easily_img">
                              <img src={ef} alt="" />

                          </div>
                          <div class="easily_img">
                              <img src={gh} alt="" />

                          </div>
                          <div class="easily_img">
                              <img src={ij} alt="" />

                          </div>
                          <div class="easily_img">
                              <img src={kl} alt="" />

                          </div>
                          <div class="easily_img">
                              <img src={mn} alt="" />

                          </div>
                          <div class="easily_img">
                              <img src={op} alt="" />

                          </div>

                      </div>
                  </Col>
              </Row>
          </Container>
      </div>
  )
}

export default Easilyimg
