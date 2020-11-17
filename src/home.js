import React from 'react';
import SlideStrip from './slideStrip';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <div className="inlango-container inlango-container-purple-patch" id="content">
                    <h1>Our Services</h1>
                    <div className="row">
                        {/*<!--service card--*/}
                        <div className="inlango-service-card">
                            <div>
                                <h2>Consulting</h2>
                                <p>Drive vision to agile leaders to define strategic vision for their business journey </p>
                            </div>
                            <div>
                                <i className="fas fa-people-arrows fa-5x"></i>
                                <ul>
                                    <li>Transform to enterprise agile</li>
                                    <li>Technology review and audit</li>
                                    <li>Strategy formation</li>
                                    <li>Roadmap planning </li>
                                    <li>Business Consulting</li>
                                    <li>IT coaching and mentoring </li>
                                    <li>DevOps roadmap </li>
                                </ul>
                            </div>
                            <div>
                                <Link to="/portfolio">Learn More</Link>
                            </div>
                        </div>
                        {/*<!--service card-->*/}
                        <div className="inlango-service-card">
                            <div>
                                <h2>Digital</h2>
                                <p>Our aim is to help our clients to unlock the power of digital to propel growth of business.</p>
                            </div>
                            <div>
                                <i className="fas fa-random fa-5x"></i>
                                <ul>
                                    <li>Cloud Computing:  Research and Migrations using AWS, Azure, Google, Hybrid</li>
                                    <li>API and Microservices Development </li>
                                    <li>Website Design</li>
                                    <li>Web Development</li>
                                    <li>Mobile App Development</li>
                                    <li>E-commerce Development</li>
                                    <li>Market Research</li>
                                    <li>Digital Marketing:  Pay Per Click Marketing, Email Marketing</li>
                                </ul>
                            </div>
                            <div>
                                <Link to="/portfolio">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/*<!--service card--*/}
                        <div className="inlango-service-card">
                            <div>
                                <h2>IT services</h2>
                                <p>We provide end to end aspects of IT services for our clients.</p>
                            </div>
                            <div>
                                <i className="fas fa-laptop fa-5x"></i>
                                <ul>
                                    <li>IT security</li>
                                    <li>End to end software development and delivery</li>
                                    <li>Graphic Design</li>
                                    <li>User Experience Design</li>
                                    <li>User Interface Design</li>
                                    <li>Prototyping</li>
                                    <li>Hosting – Application, platform</li>
                                    <li>Testing: Automation and Manual</li>
                                    <li>Research Writing</li>
                                    <li>Business Plans</li>
                                    <li>Proposals</li>
                                    <li>Progress Reports</li>
                                    <li>User Guide</li>
                                    <li>Organizational Policies and Procedures</li>
                                </ul>
                            </div>
                            <div>
                                <Link to="/portfolio">Learn More</Link>
                            </div>
                        </div>
                        {/*<!--service card--*/}
                        <div className="inlango-service-card">
                            <div>
                                <h2>Content Writing</h2>
                                <p>developing content</p>
                            </div>
                            <div>
                                <i className="fas fa-pen-alt fa-5x"></i>
                                <ul>
                                    <li>Research Writing</li>
                                    <li>Business Plans</li>
                                    <li>Proposals</li>
                                    <li>Progress Reports</li>
                                    <li>User Guides</li>
                                    <li>Organizational Policies and Procedures</li>
                                </ul>
                            </div>
                            <div>
                                <Link to="/portfolio">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inlango-home-clients">
                    <h1>Our Clients and Partners</h1>
                    <div>
                        <SlideStrip clients={[
                            ["http://sgssl.com/", "/images/clients/logo-sinoglobal.png", "sino global logo"],
                            ["http://www.sinomet.in/", "/images/clients/logo-sinomet.png", "sinomet logo"],
                            ["https://wkdrycleaners.com.au/", "/images/clients/logo-whiteknight-drycleaners.png", "white knight dry cleaners logo"]
                        ]}/>
                    </div>
                </div>
            </section>
        );
    }

}

{/*,
                            ["https://www.greymattasolutions.com/", "/images/clients/logo-graymata-solutions.png", "gray matta solutions logo"],
                        ["https://c-res.com.au/", "/images/clients/logo-c-res.png", "c-res logo"]*/}
