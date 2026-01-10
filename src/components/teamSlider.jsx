import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Col, Row } from 'react-bootstrap';
import TeamCards from './teamCards';
import TeamCardData from './teamCardData';

const TeamSlider = () => {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        pagination={{
                            clickable: true,
                        }}
                        // pagination={true}
                        navigation={true}
                        breakpoints={{
                            375: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            }
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {/* <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide> */}

                        {
                            TeamCardData.map((item, i) => {
                                return (
                                    <>
                                        <SwiperSlide>
                                            <TeamCards
                                                imgsrc={item.imgsrc}
                                                title={item.title}
                                                degignation={item.degignation}
                                            />
                                        </SwiperSlide>
                                    </>
                                )
                            })
                        }

                    </Swiper>
                </Col>
            </Row >

        </>
    )
}

export default TeamSlider;
