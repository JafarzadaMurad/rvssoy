import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

function Contact() {
    const [pageData, setPageData] = useState(null);
    const [settings, setSettings] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 1. Contact səhifəsinin məzmununu (text editor content) çəkirik
        const fetchPage = fetch('https://api.rvssoy.com/pages/get_page.php?slug=contact-us').then(res => res.json());
        
        // 2. Qlobal əlaqə məlumatlarını (phone, email, map) çəkirik
        const fetchSettings = fetch('https://api.rvssoy.com/settings/read.php').then(res => res.json());

        Promise.all([fetchPage, fetchSettings])
            .then(([pageRes, settingsRes]) => {
                setPageData(pageRes);
                setSettings(settingsRes);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center py-5">Loading...</div>;

    return (
        <Main>
            <section className="page-title" style={{ backgroundImage: 'url(/images/background/13.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer text-center">
                        <h1 className="title">{pageData?.title || 'Contact Us'}</h1>
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
                                    <li><strong>Address:</strong> {settings.address}</li>
                                    <li><strong>Business ID:</strong> {settings.business_id}</li>
                                    <li><strong>LinkedIn:</strong> <a href={settings.linkedin} target="_blank" rel="noopener noreferrer">RV Spark Solutions Oy</a></li>
                                    <li><strong>Email:</strong> <a href={`mailto:${settings.email}`}>{settings.email}</a></li>
                                    <li><strong>Mobile:</strong> <a href={`tel:${settings.phone}`}>{settings.phone}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-company">
                                {/* Editor-dan gələn HTML kontenti bura yükləyirik */}
                                <div 
                                    className="content-editor-output"
                                    dangerouslySetInnerHTML={{ __html: pageData?.content }} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <iframe
                    className="map w-100"
                    src={settings.map_iframe || "https://maps.google.com/maps?q=Kotka&output=embed"}
                    title="Location Map"
                />
            </section>
        </Main>
    );
}

export default Contact;