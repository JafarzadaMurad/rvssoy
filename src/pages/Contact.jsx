import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../layouts/Main'

function Contact() {
    return (
        <Main>
            <section className="page-title" style={{ backgroundImage: 'url(images/background/13.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer text-center">
                        <h1 className="title">Contact Us</h1>
                        <ul className="page-breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="contact-details pt-70 pb-70">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-info">
                                <h2 className="section-title">Contact Information</h2>
                                <ul className="list-style-two">
                                    <li><strong>Address:</strong> Saarinkotie 8B 8, Kotka, 48310, Finland</li>
                                    <li><strong>Business ID:</strong> 3437850-3</li>
                                    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/rv-spark-solutions-oy" target="_blank" rel="noopener noreferrer">RV Spark Solutions Oy</a></li>
                                    <li><strong>Email:</strong> <a href="mailto:info@rvssoy.com">info@rvssoy.com</a></li>
                                    <li><strong>Mobile:</strong> +358 449700328</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-company">
                                <h2 className="section-title">About RV Spark Solutions Oy</h2>
                                <p>
                                    Founded in 2024, RV Spark Solutions Oy is a dynamic provider of comprehensive electrical solutions. We aim to become the most trusted partner in our field, empowering clients with safe, reliable, value-driven, and sustainable electrical systems that drive their success.
                                </p>
                                <p>
                                    Our services include electrical design and installation, maintenance and repairs, specialized training programs, automation spare parts, and construction compliance services. With extensive experience in the Oil & Gas and Critical Facility sectors, our founder ensures safety, reliability, and meticulous attention to detail in every project.
                                </p>
                                <p><strong>Mission:</strong> To deliver high-quality electrical services guided by best practices and client-focused excellence.</p>
                                <p><strong>Vision:</strong> To be the most trusted partner for electrical solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <iframe
                    className="map w-100"
                    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Saarinkotie%208B%208,%20Kotka%20Finland+(RV%20Spark%20Solutions%20Oy)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    title="Location Map"
                />
            </section>

        </Main>
    )
}

export default Contact