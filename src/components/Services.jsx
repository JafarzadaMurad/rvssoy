import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Import Swiper styles
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Service() {
    const services = [
        {
            image: '/images/resource/electrical-design.png',
            icon: 'flaticon-049-wiring',
            title: 'Electrical Design and Installation',
            description: 'From initial design to final installation, we provide expert electrical services prioritizing safety, efficiency, and compliance.',
            link: '/our-services',
        },
        {
            image: '/images/resource/electrical-Installation-and-repair.png',
            icon: 'flaticon-024-socket',
            title: 'Maintenance and Repairs',
            description: 'Proactive maintenance and reliable repair services to ensure long-term system safety and performance.',
            link: '/our-services',
        },
        {
            image: '/images/resource/trainings.png',
            icon: 'flaticon-001-light-bulb',
            title: 'Trainings',
            description: 'Hands-on training in VFD and PLC technologies to empower future electrical engineers.',
            link: '/our-services',
        },
        {
            image: '/images/resource/parts.png',
            icon: 'flaticon-049-wiring',
            title: 'Electrical and Automation Parts',
            description: 'Comprehensive range of industrial automation components from leading manufacturers.',
            link: '/our-services',
        },
        {
            image: '/images/resource/consruction-compliance.png',
            icon: 'flaticon-024-socket',
            title: 'Construction Compliance',
            description: 'Ensuring full compliance with Finnish laws and regulations for seamless project execution.',
            link: '/our-services',
        },
    ];

    return (
        <section className="services-section-two">
            <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/7.jpg)' }} />
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
                        delay:3000,
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
                        <SwiperSlide key={index}>
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link to={service.link}><img  src={service.image} alt="Service" /></Link>
                                        </figure>
                                    </div>
                                    <div className="content-box">
                                        <div className="inner">
                                            <i className={`icon ${service.icon}`} />
                                            <h4 className="title">
                                                <Link to={service.link}>{service.title}</Link>
                                            </h4>
                                            <div className="text">{service.description}</div>
                                        </div>
                                        <Link to={service.link} className="theme-btn btn-style-one dark-bg">
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
