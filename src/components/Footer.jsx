import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="main-footer">
            {/* <div class="bg-image"  style="background-image: url(./images/pattern/shape-1.png)"></div> */}
            {/*Widgets Section*/}
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                        {/*Footer Column*/}
                        <div className="footer-column col-lg-4 col-sm-6">
                            <div className="footer-widget about-widget">
                                <h5 className="about-title">About us</h5>
                                <div className="text">We are a trusted provider of electrical and automation solutions, committed to delivering safe, efficient, and innovative services.</div>
                                <ul className="social-icon-two">
                                    <li><a href="#"><i className="fa fa-x" /></a></li>
                                    <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                    <li><a href="#"><i className="fab fa-facebook" /></a></li>
                                    <li><Link to="https://www.linkedin.com/company/rv-spark-solutions-oy" target="_blank"><i className="fab fa-linkedin-in" /></Link></li>
                                </ul>
                            </div>
                        </div>
                        {/*Footer Column*/}
                        <div className="footer-column col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <h5 className="widget-title">Explore</h5>
                                <ul className="user-links">
                                    <li><Link to="/about-us">About Company</Link></li>
                                    <li><Link to="/our-services">Our Services</Link></li>
                                    <li><Link to="/contact-us">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/*Footer Column*/}
                        <div className="footer-column col-lg-4 col-sm-6">
                            <div className="footer-widget contact-widget">
                                <h5 className="widget-title">Contact</h5>
                                <div className="widget-content">
                                    <div className="text">Saarinkotie 8B8, <br/>Kotka, Finland</div>
                                    <ul className="contact-info">
                                        <li><i className="fa fa-envelope" /> <a href="mailto:info@rvssoy.com"><span className="__cf_email__">info@rvssoy.com</span></a><br /></li>
                                        <li><i className="fa fa-phone-square" /> <a href="tel:+358449700328">+358 44 9700328</a><br /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*Footer Column*/}
                      
                    </div>
                </div>
            </div>
            {/*Footer Bottom*/}
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="copyright-text">© 2025 <Link to="/">RV Spark Solutions</Link> | All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer