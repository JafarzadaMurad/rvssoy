import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function About() {
    const [companyInfo, setCompanyInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    // API-dən məlumatı çəkmək
    useEffect(() => {
        fetch('https://api.rvssoy.com/company/read.php')
            .then(response => response.json())
            .then(data => {
                setCompanyInfo(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching company info:', error);
                setLoading(false);
            });
    }, []);

    // Şəkil URL-ni düzəltmək üçün (əgər API tam yol vermirsə)
    const getImageUrl = (imgName) => {
        if (!imgName) return '/images/resource/about-us.png'; // Default şəkil
        if (imgName.startsWith('http')) return imgName;
        return `/${imgName.startsWith('/') ? imgName.slice(1) : imgName}`;
    };

    // Mətni qısaltmaq üçün funksiya (Məsələn: 350 simvol)
    const truncateText = (text, maxLength) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    if (loading) return null; // Və ya kiçik bir loader göstərə bilərsən

    return (
        <section className="about-section">
            <div className="auto-container">
                <div className="row">
                    {/* Image Column */}
                    <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInLeft">
                            <div className="image-box">
                                <figure className="image overlay-anim wow fadeInUp">
                                    <img 
                                        src={getImageUrl(companyInfo?.image_1)} 
                                        alt="About RV Spark Solutions" 
                                    />
                                </figure>
                                {/* İkinci şəkil varsa göstər, yoxdursa gizlət */}
                                {companyInfo?.image_2 && (
                                    <figure className="image-2 overlay-anim wow fadeInRight">
                                        <img 
                                            src={getImageUrl(companyInfo?.image_2)} 
                                            alt="About Experience" 
                                        />
                                    </figure>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">ABOUT COMPANY</span>
                                <h2>{companyInfo?.about_title || 'RV Spark Solutions Oy'}</h2>
                                <div className="text">
                                    {/* Mətni qısaldılmış formada göstəririk */}
                                    {truncateText(companyInfo?.about_description, 350)}
                                </div>
                            </div>

                            {/* Əlavə statik məlumatlar və ya siyahı qala bilər */}
                            <div className="text-block">
                                <h5>Providing reliable electrical solutions since 2024.</h5>
                            </div>

                            <div className="btn-box">
                                <Link to="/about-us" className="theme-btn btn-style-one">
                                    <span className="btn-title">Read More <i className="fa fa-arrow-right" /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;