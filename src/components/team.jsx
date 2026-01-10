import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import shapeIcon from '../assets/icons/shapeIcon.svg';
import TeamSlider from './teamSlider';

const Team = () => {
    return (
        <>
            <section className='teamSec py-5'>
                <Container>
                    <Row>
                        <Col lg={12} md={12} xs={12}>
                            <div className='secHead text-center mb-5'>
                                <h6 className='mb-3'> <span><img src={shapeIcon} alt="" className='shapeIcon me-3' /> </span>Great Team</h6>
                                <h2 className='mb-3'>See Our Skilled Expert <span>Team</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <TeamSlider />
                </Container>
            </section>
        </>
    )
}

export default Team
