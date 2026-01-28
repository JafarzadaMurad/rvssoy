import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Footer() {
    const [settings, setSettings] = useState({});
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        // Settings API-dən məlumatları çəkirik
        fetch('https://api.rvssoy.com/settings/read.php')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setSettings(data);
                }
            })
            .catch(error => {
                console.error('Error fetching settings:', error);
            });
    }, []);

    return (
        <footer className="main-footer">
            {/*Widgets Section*/}
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                        {/*Footer Column - About Us*/}
                        <div className="footer-column col-lg-4 col-sm-6">
                            <div className="footer-widget about-widget">
                                <h5 className="about-title">About us</h5>
                                <div className="text">
                                    {/* Admin paneldən gələn About Text */}
                                    {settings.footer_about_text || 'We provide the best electrical solutions for your needs.'}
                                </div>
                                <ul className="social-icon-two">
                                    {/* Statik Sosial Linklər (Gələcəkdə bunları da adminə qoya bilərik) */}
                                    <li><a href="#"><i className="fa fa-x" /></a></li>
                                    <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                    <li><a href="#"><i className="fab fa-facebook" /></a></li>
                                    
                                    {/* LinkedIn - Yalnız varsa göstər */}
                                    {settings.linkedin && (
                                        <li>
                                            <a href={settings.linkedin} target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        
                        {/*Footer Column - Links*/}
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
                        
                        {/*Footer Column - Contact*/}
                        <div className="footer-column col-lg-4 col-sm-6">
                            <div className="footer-widget contact-widget">
                                <h5 className="widget-title">Contact</h5>
                                <div className="widget-content">
                                    <div className="text">
                                        {settings.address || 'Helsinki, Finland'}
                                    </div>
                                    <ul className="contact-info">
                                        <li>
                                            <i className="fa fa-envelope" /> 
                                            <a href={`mailto:${settings.email}`}>
                                                {settings.email || 'info@rvssoy.com'}
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fa fa-phone-square" /> 
                                            <a href={`tel:${settings.phone}`}>
                                                {settings.phone || '+358 40 123 4567'}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/*Footer Bottom*/}
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="copyright-text">
                            {/* Site Title Admin Paneldən gəlir (General Settings) */}
                            © {currentYear} <Link to="/">{settings.site_title || 'RV Spark Solutions'}</Link> | All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;