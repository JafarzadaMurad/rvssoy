import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
    const [siteLogo, setSiteLogo] = useState(''); // Dinamik loqo üçün state

    // 1. API-dən Loqonu çəkirik
    useEffect(() => {
        fetch('https://api.rvssoy.com/settings/read.php')
            .then(res => res.json())
            .then(data => {
                // Əgər API-dən logo gəlibsə, onu təyin edirik
                if (data && data.site_logo) {
                    setSiteLogo(data.site_logo);
                }
            })
            .catch(err => console.error("Logo fetch error:", err));
    }, []);

    // Body klası idarə etmək üçün useEffect (Köhnə kod)
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

    // Hansı şəkli göstərəcəyini təyin edirik (API yoxsa Default)
    const currentLogo = siteLogo || "/images/rvLogo.svg";

    return (
        <header className="main-header header-style-three">
            {/* Header Lower */}
            <div className="header-lower">
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo">
                            <Link to="/">
                                {/* DİNAMİK LOGO */}
                                <img src={currentLogo} width={190} alt="Logo" style={{ maxHeight: '60px', objectFit: 'contain' }} />
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
                            <Link to="/">
                                {/* MOBİL MENYUDA DA DİNAMİK LOGO */}
                                <img src={currentLogo} width={170} alt="Logo" style={{ maxHeight: '50px', objectFit: 'contain' }} />
                            </Link>
                        </div>
                        <div className="close-btn" onClick={closeMobileMenu}>
                            <i className="icon fa fa-times" />
                        </div>
                    </div>
                    <ul className="navigation clearfix">
                        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                        <li><Link to="/our-services" onClick={closeMobileMenu}>Our Services</Link></li>
                        <li><Link to="/about-us" onClick={closeMobileMenu}>About Us</Link></li>
                        <li><Link to="/contact-us" onClick={closeMobileMenu}>Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;