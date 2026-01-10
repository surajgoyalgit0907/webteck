import React from 'react'
import '../sass/header.scss';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';
import mainLogo from '../assets/images/mainLogo.svg';
import { FaLongArrowAltRight } from "react-icons/fa";


const Header = () => {
    return (
        <>
            <header>
                {['lg'].map((expand) => (
                    <Navbar key={expand} expand={expand} className="">
                        <Container fluid className='px-sm-5 px-3'>
                            <Navbar.Brand>
                                <Link to={'/'}>
                                    <img src={mainLogo} alt="" className='mainLogo' />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        <Link to={'/'}>
                                            <img src={mainLogo} alt="" className='mainLogo' />
                                        </Link>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                                        {/* <Nav.Link href="#action1">Home</Nav.Link>
                                        <Nav.Link href="#action2">About Us</Nav.Link>
                                        <Nav.Link href="#action2">Why Choose Us</Nav.Link>
                                        <Nav.Link href="#action2">Team</Nav.Link>
                                        <Nav.Link href="#action2">Contact Us</Nav.Link> */}

                                        {/* <NavLink to={'/'} className={"nav-link active"}>Home</NavLink>
                                        <NavLink to={'/about'} className={"nav-link"}>About Us</NavLink>
                                        <NavLink to={'/about'} className={"nav-link"}>Why Choose Us</NavLink>
                                        <NavLink to={'/about'} className={"nav-link"}>Team</NavLink>
                                        <NavLink to={'/about'} className={"nav-link"}>Contact Us</NavLink> */}

                                        {/* <NavLink to={'/'} className={({ isActive }) => `nav-link active ${isActive ? "active" : ""}`}>Home</NavLink> */}
                                        <NavLink to={'/'} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Home</NavLink>
                                        <NavLink to={'/aboutPage'} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>About Us</NavLink>
                                        <NavLink to={'/whychoosePage'} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Why Choose Us</NavLink>
                                        <NavLink to={'/teamPage'} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Team</NavLink>
                                        <NavLink to={'/contactPage'} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Contact Us</NavLink>

                                    </Nav>
                                    <div className="d-flex justify-content-sm-center justify-content-center mt-lg-0 mt-md-4 mt-sm-4 mt-4 ">
                                        <Button className='mainbtn1 d-flex align-items-center'>Get Started <FaLongArrowAltRight className='ms-2' style={{ fontSize: "18px" }} /></Button>
                                    </div>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </header>



        </>
    )
}

export default Header
