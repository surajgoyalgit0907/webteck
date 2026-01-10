import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import white_shapeIcon from '../assets/icons/white_shapeIcon.svg'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Slide, Zoom } from 'react-swift-reveal';

const Contact = () => {
    return (
        <>
            <Zoom>
                <section className='contactSec py-5'>
                    <Container>
                        <Row>
                            <Col lg={12} md={12} xs={12}>
                                <div className='contactInner'>
                                    <div className='secHead text-center mb-lg-5 mb-md-4'>
                                        <h6 className='mb-3'> <span><img src={white_shapeIcon} alt="" className='shapeIcon me-3' /> </span>Contact Us</h6>
                                        <h2 className='mb-3'>Need Any Kind Of IT Solution For <br /><span>Your Business?</span></h2>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <Button className='mainbtn1 d-flex align-items-center'>Get In Touch <FaLongArrowAltRight className='ms-2' style={{ fontSize: "18px" }} /></Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Zoom>
        </>
    )
}

export default Contact
