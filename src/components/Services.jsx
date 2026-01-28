import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Service() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    // API-dən məlumat çəkmək
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

    // Şəkil URL-ni düzəltmək üçün funksiya
    const getImageUrl = (imgName) => {
        if (!imgName) return '/images/resource/electrical-design.png'; // Default şəkil
        if (imgName.startsWith('http')) return imgName;
        return `/${imgName.startsWith('/') ? imgName.slice(1) : imgName}`;
    };

    // Mətni qısaltmaq üçün funksiya (Məsələn: 100 simvol)
    const truncateText = (text, maxLength) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    // İkonlar hələ bazada yoxdur deyə, statik bir siyahıdan növbə ilə götürürük
    // Gələcəkdə bazaya 'icon' sütunu əlavə edə bilərik.
    const getIcon = (index) => {
        const icons = [
            'flaticon-049-wiring',
            'flaticon-024-socket',
            'flaticon-001-light-bulb',
            'flaticon-049-wiring',
            'flaticon-024-socket'
        ];
        return icons[index % icons.length];
    };

    if (loading) {
        return <div className="text-center py-5">Loading services...</div>;
    }

    return (
        <section className="services-section-two">
            <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/7.jpg)' }} />
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">WHAT WE DO</span>
                    <h2 className="service-title">We Offer Cost Efficient <br />Electrical Services</h2>
                </div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={service.id || index}>
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link to="/our-services">
                                                <img 
                                                    src={getImageUrl(service.image)} 
                                                    alt={service.title} 
                                                    style={{ height: '250px', objectFit: 'cover' }} // Şəkillərin eyni boyda qalması üçün
                                                />
                                            </Link>
                                        </figure>
                                    </div>
                                    <div className="content-box">
                                        <div className="inner">
                                            {/* İkon məntiqi: bazada yoxdursa array-dən götürür */}
                                            <i className={`icon ${getIcon(index)}`} />
                                            <h4 className="title">
                                                <Link to="/our-services">{service.title}</Link>
                                            </h4>
                                            {/* Mətni qısaldırıq */}
                                            <div className="text">
                                                {truncateText(service.description, 100)}
                                            </div>
                                        </div>
                                        <Link to="/our-services" className="theme-btn btn-style-one dark-bg">
                                            <span className="btn-title">READ MORE <i className="fa fa-arrow-right" /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Service;