import React from 'react'
import './Details.css'
import { TypeAnimation } from 'react-type-animation';
import { Col, Container, Row } from 'react-bootstrap'
import amiase from "../../assets/female.jpg"
import { IoIosArrowUp } from "react-icons/io";
const Details = () => {


  return (
  
    <div id='main'>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="image">
              <img src={amiase} alt="" />
              <h1>

              </h1>

            </div>
          </Col>
          <Col lg={6}>
            <div className=" on">
              <h1 className="heading-large">
                <span className="amer">I'M  </span>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'DARIA TAYLOR ',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'A DEVELOPER',
                    1000,
                    'WEB DESIGNER',
                    1000,
                    'A BLOGGER',
                    1000

                  ]}
                  wrapper="span"
                  speed={40}
                  deletionSpeed={40}
                  cursor={true}
                  style={{ fontSize: '48px', display: 'inline-block', fontWeight: '800', zindex: '5', color: '#ffb400' }}
                  repeat={Infinity}
                />
              </h1>
              <div className="off">
                <Col lg={{ span: 6, offset: 0 }}>
                  <div className="list">
                    <ul>
                      <li>
                        <div className="info_item">
                          <div className="info_item_left">Name :</div>
                          <div className="info_item_right">	&#160;	&#160;&#160;&#160;	&#160;	&#160;Daria Taylor</div>

                        </div>
                      </li>
                      <li>
                        <div className="info_item">
                          <div className="info_item_left">Birthdate :</div>
                          <div className="info_item_right">	&#160;&#160;&#160;21 june 1990</div>

                        </div>
                      </li><li>
                        <div className="info_item">
                          <div className="info_item_left">Nationality :</div>
                          <div className="info_item_right">English</div>

                        </div>
                      </li>
                      <li>
                        <div className="info_item">
                          <div className="info_item_left">Experience :</div>
                          <div className="info_item_right">&#160;7 years</div>

                        </div>
                      </li>
                      <li>
                        <div className="info_item">
                          <div className="info_item_left">Address :</div>
                          <div className="info_item_right">&#160;&#160;&#160;&#160;&#160;&#160;&#160;Istanbul</div>

                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={{ span: 6, offset: 0 }}>
                  <div className="list">
                    <ul>
                      <li>
                        <div className="info_item">
                          <div className="info_item_left">Languages :</div>
                          <div className="info_item_right">English</div>

                        </div>
                      </li>
                      <li>
                        <div className="info_item">
                          <div className="info_item_left">Phone :</div>
                          <div className="info_item_right">	&#160;	&#160;	&#160;	&#160;	&#160;+34 21 18 40 10</div>

                        </div>
                      </li><li>
                        <div className="info_item">
                          <div className="info_item_left">Email :</div>
                          <div className="info_item_right">	&#160;	&#160;	&#160;	&#160;&#160;&#160;&#160;&#160;&#160;example@domain.com</div>

                        </div>
                      </li>
                      <li>
                        <div className="info_item">
                          <div className="info_item_left">Skype :</div>
                          <div className="info_item_right">&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;daria.taylor</div>

                        </div>
                      </li>
                      <li>
                        <div className="info_item">
                          <div className="info_item_left">Freelance</div>
                          <div className="info_item_right">&#160;&#160;&#160;&#160;&#160;Available</div>

                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </div>
              <button>Download my CV</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Details
