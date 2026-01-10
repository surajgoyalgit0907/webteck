import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import projectIcon from '../assets/icons/projectIcon.svg';
import happyIcon from '../assets/icons/happyIcon.svg';
import expertIcon from '../assets/icons/expertIcon.svg';
import awardIcon from '../assets/icons/awardIcon.svg';
import { Bounce, Slide, Zoom } from 'react-swift-reveal';

const Counter = () => {
    return (
        <>
            <section className='counterSec py-5'>
                <Container>
                    <Row>
                        <Col lg={3} md={6} sm={6} xs={12} className='mb-lg-0 mb-md-4 mb-sm-3 mb-3'>
                            <Slide left>
                                <div className='counterBox'>
                                    <div className='countimgBox'>
                                        <figure>
                                            <img src={projectIcon} alt="" className='countIcon' />
                                        </figure>
                                    </div>
                                    <div className='counttextBox'>
                                        <CountUp duration="10" end={986} /> <span>+</span>
                                        <h6>Finished Project</h6>
                                    </div>
                                </div>
                            </Slide>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={12} className='mb-lg-0 mb-md-4 mb-sm-3 mb-3'>
                            <Zoom>
                                <div className='counterBox'>
                                    <div className='countimgBox'>
                                        <figure>
                                            <img src={happyIcon} alt="" className='countIcon' />
                                        </figure>
                                    </div>
                                    <div className='counttextBox'>
                                        <CountUp duration="10" end={896} /> <span>+</span>
                                        <h6>Happy Clients</h6>
                                    </div>
                                </div>
                            </Zoom>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={12} className='mb-lg-0 mb-md-0 mb-sm-0 mb-3'>
                            <Zoom>
                                <div className='counterBox'>
                                    <div className='countimgBox'>
                                        <figure>
                                            <img src={expertIcon} alt="" className='countIcon' />
                                        </figure>
                                    </div>
                                    <div className='counttextBox'>
                                        <CountUp duration="10" end={396} /> <span>+</span>
                                        <h6>Skilled Experts</h6>
                                    </div>
                                </div>
                            </Zoom>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={12} className='mb-lg-0 mb-md-0 mb-sm-0 mb-3'>
                            <Slide right>
                                <div className='counterBox'>
                                    <div className='countimgBox'>
                                        <figure>
                                            <img src={awardIcon} alt="" className='countIcon' />
                                        </figure>
                                    </div>
                                    <div className='counttextBox'>
                                        <CountUp duration="10" end={496} /> <span>+</span>
                                        <h6>Honorable Awards</h6>
                                    </div>
                                </div>
                            </Slide>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Counter;
