import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <section className="about-section">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-6 col-md-12 col-sm-12 order-lg-2">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">WHO WE ARE</span>
                                    <h2>Your Trusted Partner <br />for  Comprehensive Electrical Solutions</h2>
                                </div>
                                <div className="text two">
                                    <Link to="/about-us">Delivering safe, reliable, and sustainable electrical solutions tailored to your needs, proudly serving clients in Kotka, Finland</Link>
                                </div>
                                <div className="text">
                                Founded in 2024 in Kotka, Finland, RV Spark Solutions Oy is committed to empowering clients with high-quality electrical systems. Our expertise spans design, maintenance, and consultancy, driven by a dedication to excellence and safety.
                                </div>
                                
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image overlay-anim reveal"><img  src="/images/resource/about-us-2.png" alt="Image" /></figure>
                                    <figure className="image-2 overlay-anim wow zoomIn" data-wow-delay="300ms"><img  src="/images/resource/about1-2.jpg" alt="Image" /></figure>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
