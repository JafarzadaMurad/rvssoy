import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Import Swiper styles
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


function Banner() {
    return (
        <section className="banner-section-three">
            <Swiper
                spaceBetween={0} // Spacing between slides
                slidesPerView={1} // One slide visible at a time
                loop={true} // Enable looping
                effect={'fade'}
                autoplay={{
                    delay: 3500, // Delay between slides
                    disableOnInteraction: false, // Continue autoplay after user interaction
                }}
                modules={[EffectFade, Autoplay, Pagination]}
            >
                {/* Slide to Service Page */}
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="overlay-2" />
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/main.png)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-2">EXPLORE OUR SERVICES</span>
                                <h1 className="title animate-3">Comprehensive Electrical <br />Solutions for You</h1>
                                <div className="btn-box animate-4">
                                    <Link to="/our-services" className="theme-btn btn-style-one hvr-light">
                                        <span className="btn-title">VIEW SERVICES</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide to Contact Page */}
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="overlay-2" />
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/9.jpg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-2">GET IN TOUCH</span>
                                <h1 className="title animate-3">Connect with Our <br />Expert Team</h1>
                                <div className="btn-box animate-4">
                                    <Link to="/contact-us" className="theme-btn btn-style-one hvr-light">
                                        <span className="btn-title">CONTACT US NOW</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Banner;
