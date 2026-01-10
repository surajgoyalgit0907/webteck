import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

const TeamCards = (props) => {
    return (
        <>
            <Card className='teamCard'>
                <Card.Img variant="top" src={props.imgsrc} />
                <div className='socialbtnDiv'>
                    <button className='socialbtn'><span><FaPlus /></span> </button>
                    <ul>
                        <li>
                            <Link to={""}><FaFacebookF /></Link>
                        </li>
                        <li>
                            <Link to={""}><FaTwitter /></Link>
                        </li>
                        <li>
                            <Link to={""}><IoClose /></Link>
                        </li>
                        <li>
                            <Link to={""}><RiInstagramFill /></Link>
                        </li>
                        <li>
                            <Link to={""}><FaLinkedinIn /></Link>
                        </li>
                    </ul>
                </div>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.degignation}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>

        </>
    )
}

export default TeamCards;
