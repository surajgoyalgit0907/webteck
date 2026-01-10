import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import shapeIcon from '../assets/icons/shapeIcon.svg';
import ProgressBar from "@ramonak/react-progress-bar";
import serviceImg from '../assets/images/serviceImg.svg';
import { FaPlay } from "react-icons/fa";
import { Slide, Zoom } from 'react-swift-reveal';


const Services = () => {
    return (
        <>
            <section className='serviceSec py-5'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} md={12} xs={12} className='mb-lg-0 mb-md-5 mb-4'>
                            <Slide left>
                                <div className='serviceLeft'>
                                    <div className='secHead'>
                                        <h6 className='mb-3'> <span><img src={shapeIcon} alt="" className='shapeIcon me-3' /> </span>Great IT Skills</h6>
                                        <h2 className='mb-3'>More Than 24+ Years Experience We Provide <span>It Services</span></h2>
                                        <p>Collaboratively envisioneer user friendly supply chains and cross unit imperative Authoritive fabricate competitive resource and holistic. Holisticly restore real time resources whereas standardized networks.</p>
                                    </div>
                                    <div className='progress_skills mt-4'>

                                        <div className='mb-4'>
                                            <h6>Business Strategy</h6>
                                            <ProgressBar
                                                completed={85}
                                                animateOnRender
                                                bgColor="#775AFC"
                                                height={15}
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <h6>Software Development</h6>
                                            <ProgressBar
                                                completed={95}
                                                animateOnRender
                                                bgColor="#775AFC"
                                                height={15}
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <h6>Website Security</h6>
                                            <ProgressBar
                                                completed={90}
                                                animateOnRender
                                                bgColor="#775AFC"
                                                height={15}
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <h6>Artificial Intelligence</h6>
                                            <ProgressBar
                                                completed={80}
                                                animateOnRender
                                                bgColor="#775AFC"
                                                height={15}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </Slide>
                        </Col>
                        <Col lg={6} md={12} xs={12} className='mb-lg-0 mb-md-5 mb-4'>
                            <Zoom >
                                <div className='serviceRight'>
                                    <figure>
                                        <img src={serviceImg} alt="" className='serviceImg' />
                                    </figure>
                                    <div className='videoPlaybtn'>
                                        <FaPlay />
                                    </div>
                                </div>
                            </Zoom>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Services;
