import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/images/mainLogo.svg';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import '../sass/footer.scss';
import { Slide } from 'react-swift-reveal';

const Footer = () => {
    return (
        <>
            <Slide bottom>
                <footer className=' pt-md-5 pb-md-5 pt-4 pb-0'>
                    <Container fluid className='px-md-5 px-4'>
                        <Row>
                            <Col lg={4} md={6} xs={12} className='mb-lg-0 mb-sm-4 mb-3'>
                                <div className='f_logo_box'>
                                    <Link to={"/"}>
                                        <figure>
                                            <img src={mainLogo} alt="" className='f_logo' />
                                        </figure>
                                    </Link>
                                    <p>Professionally redefine transparent ROI through low-risk high-yield imperatives. Progresssive create empowered cost effective users via team driven.</p>
                                    <div className='f_social_box mt-4'>
                                        <ul>
                                            <li>
                                                <Link to={""}><FaFacebookF /></Link>
                                            </li>
                                            <li>
                                                <Link to={""}><FaTwitter /></Link>
                                            </li>
                                            <li>
                                                <Link to={""}><RiInstagramFill /></Link>
                                            </li>
                                            <li>
                                                <Link to={""}><FaLinkedinIn /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} md={6} xs={12} className='mb-lg-0 mb-sm-4 mb-3'>
                                <div className='f_links'>
                                    <h3 className='mb-4 pb-3'>QUICK LINKS</h3>
                                    <ul>
                                        <li>
                                            <Link to={""}><span><IoChevronBackOutline /></span>About Us</Link>
                                        </li>
                                        <li>
                                            <Link to={""}><span><IoChevronBackOutline /></span>Services</Link>
                                        </li>
                                        <li>
                                            <Link to={""}><span><IoChevronBackOutline /></span>Why Choose Us</Link>
                                        </li>
                                        <li>
                                            <Link to={""}><span><IoChevronBackOutline /></span>Team</Link>
                                        </li>
                                        <li>
                                            <Link to={""}><span><IoChevronBackOutline /></span>Contact Us</Link>
                                        </li>

                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={6} xs={12} className='mb-lg-0 mb-sm-4 mb-3'>
                                <div className='f_links'>
                                    <h3 className='mb-4 pb-3'>CONTACT US</h3>
                                    <div className='f_contactDiv'>
                                        <div className='f_contact_iconbox'>
                                            <FaPhoneAlt />
                                        </div>
                                        <div className='f_contact_detail'>
                                            <h5>Phone Number</h5>
                                            <h6>+190-8800-0393</h6>
                                        </div>
                                    </div>
                                    <div className='f_contactDiv'>
                                        <div className='f_contact_iconbox'>
                                            <MdEmail />
                                        </div>
                                        <div className='f_contact_detail'>
                                            <h5>Email Address</h5>
                                            <h6>info@webteck.com</h6>
                                        </div>
                                    </div>
                                    <div className='f_contactDiv'>
                                        <div className='f_contact_iconbox'>
                                            <FaLocationDot />
                                        </div>
                                        <div className='f_contact_detail'>
                                            <h5>Office Location</h5>
                                            <h6>54 Flemington, USA</h6>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} xs={12} className='mb-lg-0 mb-sm-4 mb-3'>
                                <div className='f_getintouch'>
                                    <h3 className='mb-4 pb-3'>GET IN TOUCH</h3>
                                    <p>Subscribe to our upcoming latest article and news resources. Sign up today for hints tips and the latest product news.</p>
                                    <div className='sendBox mt-sm-5 mt-4'>
                                        <input type="text" placeholder='Enter Email Address' />
                                        <button><IoIosSend /></button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid>
                        <Row className='copyright align-items-center py-4'>
                            <Col lg={6} md={6} xs={12}>
                                <p className='mb-md-0 mb-3'>Copyright 2025 Webteck. All Rights Reserved.</p>
                            </Col>
                            <Col lg={6} md={6} xs={12}>
                                <ul>
                                    <li><Link to={""}>Terms & Conditions</Link></li>
                                    <li><Link to={""}>Careers</Link></li>
                                    <li><Link to={""}>Privacy Policy</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </Slide>
        </>
    )
}

export default Footer;
