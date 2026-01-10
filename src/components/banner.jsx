import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { FaPlay } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import btnvideo from '../assets/videos/btn_video.mp4';
import bnrImg from '../assets/images/bnrImg.svg';
import { Link } from 'react-router-dom';
import { Bounce, Fade, Slide, Zoom } from 'react-swift-reveal';
const Banner = () => {
    return (
        <>
            <section className='bannerSec py-lg-5'>
                <Container>
                    <Row>
                        <Col lg={6} md={12} xs={12} className='order-lg-1 order-2 mb-lg-0 mb-md-5 mb-4'>
                            <Slide left>
                                <div className="bnrText pt-xl-5 pt-lg-4 pt-md-4 mt-xl-5 mt-lg-4 mt-md-4">
                                    {/* <Fade duration={1000} delay={500} distance='30px'> */}
                                    <h6 className='mb-4'>Secure & It Services</h6>
                                    {/* </Fade> */}
                                    {/* <Bounce> */}
                                    <h1 className='mb-4'>Webteck Best <br />It Solution 2025</h1>
                                    {/* </Bounce> */}
                                    <p>Energistically harness ubiquitous imperatives without state of the art collaboration and idea-sharing. Monotonectally parallet task cross-unit experiences and front-end.</p>
                                    <div className='d-flex align-items-sm-center align-items-start flex-sm-row flex-column'>
                                        <Button className='mainbtn1 d-flex align-items-center'>About Us <FaLongArrowAltRight className='ms-2' style={{ fontSize: "18px" }} /></Button>
                                        <div className='watch_story ms-md-5 ms-sm-4 ms-0 mt-lg-0 mt-md-0 mt-4'>
                                            <div className='videoPlaybtn'>
                                                {/* <video width={320} height={240} muted controls autoPlay>
                                                <source src={btnvideo} type="video/ogg" />
                                            </video> */}
                                                {/* <video width={320} height={240} muted controls autoPlay loop>
                                                <source src={btnvideo} type="video/mp4" />
                                            </video> */}

                                                <FaPlay />
                                            </div>
                                            <div className='ms-3'>
                                                <h6>Watch Our Story</h6>
                                                <span>Subscribe Now</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </Col>

                        <Col lg={6} md={12} xs={12} className=' order-lg-2 order-1 mb-lg-0 mb-md-5 mb-4'>
                            <Zoom>
                                <div className='bnrImgBox'>
                                    <figure>
                                        <img src={bnrImg} alt="" className='bnrImg' />
                                    </figure>
                                </div>
                            </Zoom>
                        </Col>

                    </Row>
                    <Row>
                        <Col lg={12} md={12} xs={12}>
                            <div className='socialBox d-xl-block d-none'>
                                <ul>
                                    <li>
                                        <Link to={""}>Facebook</Link>
                                    </li>
                                    <li>
                                        <Link to={""}>Twitter</Link>
                                    </li>
                                    <li>
                                        <Link to={""}>Instagram</Link>
                                    </li>
                                    <li>
                                        <Link to={""}>Linkedin</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner
