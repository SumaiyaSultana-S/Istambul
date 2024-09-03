import React from 'react'
import './Banner.css'
import ame from '../../assets/imge1.jpg'
import { TypeAnimation } from 'react-type-animation';
import { Col, Container, Row } from 'react-bootstrap';
const Banner = () => {
  return (
    <>
          <div className='images'>

              <img src={ame} alt="" />

          </div>
          <Container>
            <Row>
                <Col lg={{span:0,offset:6}}>
                      <div className="text">

                          <h2>Hi THERE!</h2>

                          <h1 className="heading-large">
                              <span className="bold-text">I'M  </span>
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
                          <h4>
                              I’m a Freelance UI/UX Designer and Developer based in London,
                              England. I strives to build immersive and
                              beautiful web applications through carefully crafted code and user-centric design.
                          </h4>

                          <div className="tumi">

                              <a href="#">About Me</a>


                           <span>
                            <a href="#">

                                Portfolio
                             </a>
                           </span>
                          </div>

                      </div>
                </Col>
            </Row>
          </Container>
    </>
    
  )
}

export default Banner
