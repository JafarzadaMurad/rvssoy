import React from 'react'
import Services from '../components/Services'
import Main from '../layouts/Main'
import { Link } from 'react-router-dom'

function About() {
    return (
        <Main>
            <section className="page-title" style={{ backgroundImage: 'url(images/background/5.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer text-center">
                        <h1 className="title">About Us</h1>
                        <ul className="page-breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* About Section */}
            <section className="about-section-eight style-two pt-120">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">WHO WE ARE</span>
                                    <h2>RV Spark Solutions Oy</h2>
                                    <div className="text">
                                        Founded in 2024 in Kotka, Finland, RV Spark Solutions Oy is a dynamic provider of comprehensive electrical solutions.
                                        We envision becoming the most trusted partner in our field, empowering our clients with safe, reliable, value-driven, and sustainable electrical systems that drive their success.
                                    </div>
                                </div>
                                <div className="experience-details">
                                    <h3>Our Expertise</h3>
                                    <p>
                                        Our founder brings extensive experience in the Oil & Gas and Critical Facility sectors, providing a strong foundation of expertise in demanding and complex environments.
                                        This experience informs our commitment to safety, reliability, and meticulous attention to detail in every project.
                                    </p>
                                </div>
                                <ul className="list-style-two">
                                    <h3>Our Services</h3>
                                    <li><i className="fa fa-check-circle" /> Electrical design and installation</li>
                                    <li><i className="fa fa-check-circle" /> Maintenance and repairs</li>
                                    <li><i className="fa fa-check-circle" /> Specialized training programs</li>
                                    <li><i className="fa fa-check-circle" /> Automation spare parts</li>
                                    <li><i className="fa fa-check-circle" /> Construction compliance services</li>
                                </ul>
                                <div className="mission-vision">
                                    <h3>Our Mission</h3>
                                    <p>“To deliver high-quality electrical design, installation, maintenance, and training services, guided by industry best practices, a commitment to continuous improvement, and a focus on exceeding client expectations.”</p>
                                    <h3>Our Vision</h3>
                                    <p>“To be the most trusted partner for electrical design, installation, maintenance, and training, empowering our clients with safe, reliable, and sustainable electrical systems that drive their success.”</p>
                                </div>
                                <div className="core-values">
                                    <h3>Our Core Values</h3>
                                    <p>
                                        This company&#39;s core values center on delivering high-quality, safe, reliable, compliant, and value-driven electrical solutions through expertise, continuous improvement,
                                        and a strong commitment to client satisfaction and industry advancement.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about-us.png" style={{ transform: 'scaleX(-1)' }} alt="About Us" /></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/about3-2.jpg" alt="Our Work" /></figure>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Services />
        </Main>



    )
}

export default About