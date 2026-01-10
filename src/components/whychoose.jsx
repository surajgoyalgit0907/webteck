import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import whychooseImg from '../assets/images/whychooseImg.svg';
import approachIcon from '../assets/icons/approachIcon.svg';
import provenIcon from '../assets/icons/provenIcon.svg';
import trustIcon from '../assets/icons/trustIcon.svg';
import shapeIcon from '../assets/icons/shapeIcon.svg';
import { Slide, Zoom } from 'react-swift-reveal';

const Whychoose = () => {
    return (
        <>
            <section className='whychooseSec pt-5 pb-lg-5 pb-0'>
                <Container>
                    <Row>
                        <Col lg={6} md={12} xs={12} className='pe-lg-5 mb-lg-0 mb-md-4 mb-3'>
                            <Zoom>
                                <div className='whychooseLeft'>
                                    <figure>
                                        <img src={whychooseImg} alt="" className='whychooseImg' />
                                    </figure>
                                </div>
                            </Zoom>
                        </Col>
                        <Col lg={6} md={12} xs={12} className='ps-lg-5 mb-lg-0 mb-md-4 mb-3'>
                            <Slide right>
                                <div className='whychooseRight'>
                                    <div className='secHead'>
                                        <h6 className='mb-3'> <span><img src={shapeIcon} alt="" className='shapeIcon me-3' /> </span>Why Choose Us</h6>
                                        <h2 className='mb-3'>Your Trusted Partner For <span>It Success</span></h2>
                                        <p>We take the time to delve into your unique goals, challenges, and target audience before crafting any solutions.</p>
                                    </div>

                                    <div className='approachBox mt-4'>
                                        <div className='approachInner mb-lg-0 mb-md-4 mb-3'>
                                            <div className='approachImgBox'>
                                                <figure>
                                                    <img src={approachIcon} alt="" className='approachIcons' />
                                                </figure>
                                            </div>
                                            <div className='approachDetail'>
                                                <h5>Client-Centric Approach</h5>
                                                <p>We showcase a curated selection of our best projects across various industries, demonstrating our ability.</p>
                                            </div>
                                        </div>
                                        <div className='approachInner mb-lg-0 mb-md-4 mb-3'>
                                            <div className='approachImgBox'>
                                                <figure>
                                                    <img src={provenIcon} alt="" className='approachIcons' />
                                                </figure>
                                            </div>
                                            <div className='approachDetail'>
                                                <h5>Proven Track Record of Success</h5>
                                                <p>We showcase a curated selection of our best projects across various industries demonstrating our ability.</p>
                                            </div>
                                        </div>
                                        <div className='approachInner mb-lg-0 mb-md-4 mb-3'>
                                            <div className='approachImgBox'>
                                                <figure>
                                                    <img src={trustIcon} alt="" className='approachIcons' />
                                                </figure>
                                            </div>
                                            <div className='approachDetail'>
                                                <h5>A Team of Experts you Can Trust</h5>
                                                <p>Our Team comprises passionate and dedicated IT specialists with a deep understanding of the latest technologies.</p>
                                            </div>
                                        </div>
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

export default Whychoose;
