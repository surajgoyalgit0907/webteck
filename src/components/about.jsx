import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import aboutImg from '../assets/images/aboutImg.svg';
import about_bottom_img from '../assets/images/about_bottom_img.svg';
import { PiUsersThreeFill } from "react-icons/pi";
import { SiSpringsecurity } from "react-icons/si";
import { FaAward } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import shapeIcon from '../assets/icons/shapeIcon.svg';
import { Slide } from 'react-swift-reveal';
const About = () => {
    return (
        <>
            <section className='aboutSec py-5'>
                <Container>
                    <Row>
                        <Col lg={6} md={12} xs={12} className='pe-lg-5 mb-lg-0 mb-sm-5 mb-4'>
                            <Slide bottom>
                                <div className='aboutLeft'>
                                    <figure>
                                        <img src={aboutImg} alt="" className='aboutImg' />
                                    </figure>
                                    <div className='happy_client'>
                                        <h4>25k +</h4>
                                        <h6 className='mb-0'>Happy active client's</h6>
                                    </div>

                                    <div className='about_bottom_img_box'>
                                        <img src={about_bottom_img} alt="" className='about_bottom_img' />
                                    </div>
                                </div>
                            </Slide>
                        </Col>
                        <Col lg={6} md={12} xs={12} className='ps-lg-5 mb-md-5 mb-4'>
                            <Slide right>
                                <div className='aboutRight'>
                                    <div className='secHead'>
                                        <h6 className='mb-3'> <span><img src={shapeIcon} alt="" className='shapeIcon me-3' /> </span>About Our Company</h6>
                                        <h2 className='mb-3'>Introduce The Masterminds Behinds Webteck's <span>It  Solutions</span></h2>
                                        <p>Webteck is your trusted partner for all things IT. We're a passionate team of IT consultants fueled by a desire to help businesses thrive in today's ever-evolving technological landscape.</p>
                                    </div>
                                    <div className='award_win_box mt-md-5 mt-sm-4'>
                                        <div className='award_inner'>
                                            <div className='award_block mb-3'>
                                                <span className='me-3'><PiUsersThreeFill /></span>
                                                <h5>Our Expert Team</h5>
                                            </div>
                                            <div className='award_block'>
                                                <span className='me-3'><SiSpringsecurity /></span>
                                                <h5>Transparency</h5>
                                            </div>
                                        </div>
                                        <div className='award_inner'>
                                            <div className='award_block mb-3'>
                                                <span className='me-3'><FaAward /></span>
                                                <h5>Award Winning</h5>
                                            </div>
                                            <div className='award_block'>
                                                <span className='me-3'><MdSupportAgent /></span>
                                                <h5>24/7 Support</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='d-flex align-items-sm-center align-items-start flex-sm-row flex-column mt-4'>
                                        <Button className='mainbtn1 d-flex align-items-center'>Contact Us <FaLongArrowAltRight className='ms-2' style={{ fontSize: "18px" }} /></Button>
                                        <div className='watch_story ms-md-5 ms-sm-4 ms-0 mt-lg-0 mt-md-0 mt-4'>
                                            <div className='videoPlaybtn'>
                                                {/* <video width={320} height={240} muted controls autoPlay>
                                                                                    <source src={btnvideo} type="video/ogg" />
                                                                                </video> */}
                                                {/* <video width={320} height={240} muted controls autoPlay loop>
                                                                                    <source src={btnvideo} type="video/mp4" />
                                                                                </video> */}

                                                <IoIosCall />
                                            </div>
                                            <div className='ms-3'>
                                                <h6>Call Now !</h6>
                                                <span>(+256)3254 2598</span>
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

export default About;
