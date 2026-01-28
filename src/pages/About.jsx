import React, { useState, useEffect } from 'react';
import ServicesComponent from '../components/Services';
import Main from '../layouts/Main';
import { Link } from 'react-router-dom';

function About() {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Yeni API-dən "About Us" səhifəsini çəkirik
        fetch('https://api.rvssoy.com/pages/read.php')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    // Slug-ı 'about' olan səhifəni tapırıq
                    const aboutPage = data.find(p => p.slug === 'about');
                    setPageData(aboutPage);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching page data:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center py-5">Loading...</div>;

    return (
        <Main>
            <section className="page-title" style={{ backgroundImage: 'url(/images/background/5.jpg)' }}>
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
                        {/* Content Column - BURA TAMAMİLƏ DİNAMİKDİR */}
                        <div className="content-column col-xl-12 col-lg-12 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">WHO WE ARE</span>

                                    {/* Admin Paneldən gələn Başlıq */}
                                    <h2>{pageData?.title || 'RV Spark Solutions Oy'}</h2>

                                    {/* Admin Paneldən gələn Mətn (HTML) */}
                                    <div className="text"
                                        dangerouslySetInnerHTML={{ __html: pageData?.content || 'Məlumat yüklənir...' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Components/Services çağırışı */}
            <ServicesComponent />
        </Main>
    );
}

export default About;