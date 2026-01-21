import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../layouts/Main'

function Services() {
    return (
        <Main>
            <section className="page-title" style={{ backgroundImage: 'url(images/background/29.jpg)' }}>
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
                    {/* Service 1 */}
                    <div className="row align-items-center mb-50">
                        <div className="col-lg-6">
                            <figure className="image">
                                <img className="w-100" src="/images/resource/electrical-design.png" alt="Electrical Design and Installation" />
                            </figure>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-box">
                                <h2 className="service-title">Electrical Design and Installation</h2>
                                <p>
                                    From initial design to final installation, we provide expert electrical
                                    services that prioritize safety, efficiency, and compliance.
                                    Our tailored designs are developed in strict accordance with
                                    local regulations and are customized to meet the unique
                                    requirements of each residential or small commercial project.
                                    Specializing in low voltage systems, we meticulously perform
                                    cable calculations and design electrical panels to ensure
                                    optimal performance and system integrity. Our highly skilled
                                    installation team then installs all components, including lighting, receptacles, switches, and panels, with meticulous attention to detail, guaranteeing a professional and fully functional electrical system.

                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="row align-items-center mb-50">
                        <div className="col-lg-6 order-lg-2">
                            <figure className="image">
                                <img className="w-100" src="/images/resource/electrical-Installation-and-repair.png" alt="Maintenance and Repairs" />
                            </figure>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="content-box">
                                <h2 className="service-title">Maintenance and Repairs</h2>
                                <p>
                                    Maintaining the safety and reliability of your electrical system is our priority. We develop detailed switching and isolation plans for critical equipment, ensuring safe and efficient maintenance operations. When issues arise, our team provides reliable repair services, swiftly diagnosing and resolving problems to minimize disruption. Furthermore, our preventative maintenance programs are designed to proactively identify and address potential issues, maximizing system uptime and ensuring long-term safety and performance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="row align-items-center mb-50">
                        <div className="col-lg-6">
                            <figure className="image">
                                <img className="w-100" src="/images/resource/trainings.png" alt="Trainings" />
                            </figure>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-box">
                                <h2 className="service-title">Trainings</h2>
                                <p>
                                    We are committed to advancing the electrical field through training programs, strategic partnerships, and specialized knowledge transfer. Our workshops provide practical electrical skills, and we collaborate with universities to support the development of future electrical engineers.We also offer specialized, hands-on training in Variable Frequency Drive (VFD) technology, focusing on ABB and Schneider Electric solutions,enabling participants to effectively install, configure, operate, and maintain VFD systems across diverse applications.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="row align-items-center mb-50">
                        <div className="col-lg-6 order-lg-2">
                            <figure className="image">
                                <img className="w-100" src="/images/resource/parts.png" alt="Electrical and Automation Spare Parts" />
                            </figure>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="content-box">
                                <h2 className="service-title">Electrical and Automation Parts</h2>
                                <p>
                                    We offer a comprehensive range of industrial automation and control components, including Programmable Logic Controllers (PLCs), Insulated-Gate Bipolar Transistors (IGBTs), Human-Machine Interfaces (HMIs), Servo Motors, Servo Drives, AC and DC Drives, AC and DC Motors, Power Supplies, Central Processing Units (CPUs), and various specialized modules. Our inventory features products from industry-leading manufacturers such as Siemens, Allen Bradley, Bosch Rexroth, ABB, B&R Industrial Automation, Omron, Fanuc, GE Fanuc, Mitsubishi Electric, Yaskawa, Honeywell, Lenze, and other reputable brands.
                                    In addition, we provide on-demand training kits for VFDs and PLCs to support practical skill development.

                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service 5 */}
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <figure className="image">
                                <img className="w-100" src="/images/resource/consruction-compliance.png" alt="Construction Compliance" />
                            </figure>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-box">
                                <h2 className="service-title">Construction Compliance</h2>
                                <p>
                                    We ensure your construction projects are fully compliant with Finnish law. We monitor and interpret all relevant Finnish construction laws, regulations, and standards. We develop, implement, and maintain internal compliance policies and procedures tailored to your specific needs. We conduct regular audits and risk assessments to proactively identify and address potential compliance issues. We provide comprehensive training and guidance to your employees on all compliance matters. We liaise with regulatory bodies and authorities on your behalf, ensuring smooth communication and adherence to requirements. We also oversee all documentation and record-keeping related to compliance, and we investigate and resolve any compliance-related concerns or incidents. We remain continuously up-to-date on changes in relevant legislation and best practices, guaranteeing your ongoing compliance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Main>

    )
}

export default Services