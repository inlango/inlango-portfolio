import React from 'react';
import SlideStrip from './slideStrip'

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
                                <p>consulting across IT and business</p>
                            </div>
                            <div>
                                <i className="fas fa-people-arrows fa-5x"></i>
                                <ul>
                                    <li>Agile leadership</li>
                                    <li>DevOps</li>
                                    <li>Technology review and audit</li>
                                    <li>Strategy formation</li>
                                    <li>Business Consulting</li>
                                    <li>Market Research</li>
                                </ul>
                            </div>
                            <div>
                                <a href="#link">Learn More</a>
                            </div>
                        </div>
                        {/*<!--service card-->*/}
                        <div className="inlango-service-card">
                            <div>
                                <h2>Digital</h2>
                                <p>Migrate to the digital world</p>
                            </div>
                            <div>
                                <i className="fas fa-random fa-5x"></i>
                                <ul>
                                    <li>Website Design</li>
                                    <li>Web Development</li>
                                    <li>Mobile App Development</li>
                                    <li>E-commerce Development</li>
                                    <li>Graphic Design</li>
                                    <li>User Experience Design</li>
                                    <li>User Interface Design</li>
                                    <li>Prototyping</li>
                                </ul>
                            </div>
                            <div>
                                <a href="#link">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/*<!--service card--*/}
                        <div className="inlango-service-card">
                            <div>
                                <h2>IT services</h2>
                                <p>Various IT services</p>
                            </div>
                            <div>
                                <i className="fas fa-laptop fa-5x"></i>
                                <ul>
                                    <li>Cloud - AWS and Azure</li>
                                    <li>API and Microservices</li>
                                    <li>Hosting – Application, platform</li>
                                    <li>Testing</li>
                                    <li>Pay Per Click Marketing</li>
                                    <li>E-mail Marketing</li>
                                    <li>Internet Marketing</li>
                                </ul>
                            </div>
                            <div>
                                <a href="#link">Learn More</a>
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
                                <a href="#link">Learn More</a>
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
                            ["https://wkdrycleaners.com.au/", "/images/clients/logo-whiteknight-drycleaners.png", "white knight dry cleaners logo"],
                            ["https://www.greymattasolutions.com/", "/images/clients/logo-graymata-solutions.png", "gray matta solutions logo"],
                            ["https://c-res.com.au/", "/images/clients/logo-c-res.png", "c-res logo"]
                        ]}/>
                    </div>
                </div>
            </section>
        );
    }

}