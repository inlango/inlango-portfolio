import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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
                        <div>
                            <a href="http://sgssl.com/"  rel="noopener noreferrer" target="_blank"><img src="/images/clients/logo-sinoglobal.png"  alt="client logo - sinoglobal" /></a>
                        </div>
                        <div>
                            <a href="http://www.sinomet.in/"  rel="noopener noreferrer" target="_blank"><img src="/images/clients/logo-sinomet.png" alt="client logo - sinomet" /></a>
                        </div>
                        <div>
                            <a href="https://wkdrycleaners.com.au/"  rel="noopener noreferrer" target="_blank"><img src="/images/clients/logo-whiteknight-drycleaners.png"  alt="client logo - white knight drycleaners" /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}