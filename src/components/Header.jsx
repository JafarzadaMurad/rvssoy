import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    // Body klası idarə etmək üçün useEffect
    useEffect(() => {
        if (isMobileMenuVisible) {
            document.body.classList.add('mobile-menu-visible');
        } else {
            document.body.classList.remove('mobile-menu-visible');
        }
    }, [isMobileMenuVisible]);

    const toggleMobileMenu = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuVisible(false);
    };

    return (
        <header className="main-header header-style-three">
            {/* Header Top */}
            

            {/* Header Lower */}
            <div className="header-lower">
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo">
                            <Link to="/">
                                <img src="/images/rvLogo.svg" width={190} alt="Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="nav-outer">
                        <nav className="nav main-menu">
                            <ul className="navigation">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/our-services">Our Services</Link></li>
                                <li><Link to="/about-us">About Us</Link></li>
                                <li><Link to="/contact-us">Contact Us</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="outer-box">
                        <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                            <span className="icon lnr-icon-bars" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuVisible ? 'visible' : ''}`}>
                <div className="menu-backdrop" onClick={closeMobileMenu} />
                <nav className="menu-box">
                    <div className="upper-box">
                        <div className="nav-logo">
                            <Link to="/"><img src="/images/rvLogo.svg" width={170} alt="Logo" /></Link>
                        </div>
                        <div className="close-btn" onClick={closeMobileMenu}>
                            <i className="icon fa fa-times" />
                        </div>
                    </div>
                    <ul className="navigation clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/our-services">Our Services</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
