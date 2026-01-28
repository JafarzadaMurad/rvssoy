import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    // API-dən məlumatı çəkmək
    useEffect(() => {
        fetch('https://api.rvssoy.com/services/read.php')
            .then(response => response.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                setLoading(false);
            });
    }, []);

    // Şəkillərin tam URL-i üçün (əgər API sadəcə fayl adını qaytarırsa)
    // Əgər API tam link verirsə, bu hissəyə ehtiyac yoxdur.
    const getImageUrl = (imgName) => {
        // Məsələn, əgər şəkillər React layihəsinin public qovluğundadırsa:
        if (imgName.startsWith('http')) return imgName;
        return `/${imgName.startsWith('/') ? imgName.slice(1) : imgName}`;
    };

    return (
        <Main>
            <section className="page-title" style={{ backgroundImage: 'url(/images/background/29.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer text-center">
                        <h1 className="title">Services</h1>
                        <ul className="page-breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li>Services</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="services-section-home2 pb-70 pt-120">
                <div className="auto-container">
                    {loading ? (
                        <div className="text-center">Loading services...</div>
                    ) : (
                        services.map((service, index) => (
                            <div className="row align-items-center mb-50" key={service.id}>
                                {/* Dinamik Zigzag Layout Məntiqi:
                                    Cüt indekslər (0, 2, 4...) -> Şəkil Solda
                                    Tək indekslər (1, 3, 5...) -> Şəkil Sağda (order-lg-2)
                                */}
                                <div className={`col-lg-6 ${index % 2 !== 0 ? 'order-lg-2' : ''}`}>
                                    <figure className="image">
                                        <img 
                                            className="w-100" 
                                            src={getImageUrl(service.image)} 
                                            alt={service.title} 
                                        />
                                    </figure>
                                </div>
                                <div className={`col-lg-6 ${index % 2 !== 0 ? 'order-lg-1' : ''}`}>
                                    <div className="content-box">
                                        <h2 className="service-title">{service.title}</h2>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </Main>
    );
}

export default Services;