import React from 'react';
import { withRouter } from 'react-router-dom';

class FrontPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            frontPageContent: {
                about:      <div className="inlango-container inlango-container-dark" id="content"><h1>About Us</h1>
                                <h2>What do we do?</h2>
                                <p>
                                    Inlango is an Australian based company that provides digital transformation, IT services and technology
                                    consulting services. Inlango’s headquarter is in Brisbane.
                                        </p>
                            </div>,
                contact:    <div className="inlango-container inlango-container-dark" id="content">
                                <h1>Contact Us</h1>
                                <h2>want to know more?</h2>
                                <p>
                                    Want to know more our business or any other information about Inlango? 
                                </p>
                                <p>
                                    send us an email at: <a href="mailto:admin@inlango.com">admin@inlango.com</a>
                                </p>
                                <p>
                                    or
                                </p>
                                <a href="#contact-form">
                                    Please get in touch with us via the form below</a>
                            </div>,
                portfolio:  <div className="inlango-container inlango-container-dark" id="content">
                                <h1>Our work</h1>
                                <h2>Can I see some samples?</h2>
                                <p>We have a few projects on our resume, and we are proud of our work.</p>
                                <a href="portfolio-content">Check our bragboard. You'll wanna be there too!</a>
                            </div>,
                services:   <div className="inlango-container inlango-container-dark" id="content">
                                <h1>Our services</h1>
                                <h2>What services do we offer?</h2>
                                <p>
                                Inlango is a reliable partner when it comes to digital, IT services and technology consulting offerings. Our expertise is being ahead of the technical curve by utilising new digital trends to unlock untapped potential for our clients. We work closely with our client teams for strategy formation, roadmap and implementation of solutions of all aspects of digital and technology services. We pride ourselves on high quality design and have the capability to create stunning applications with scalable and robust performance. We offer a variety of technologies with numerous applications to suit client preferences. Our team members are seasoned in consulting services to troubleshoot any bottlenecks to deliver client commitments on tight deadlines. 
                        
                        
                                </p>
                                <a href="#services-content">
                                    Below are list of services that we offer to our clients.
                                </a>
                            </div>
            },
            pagesKey: [
                "about",
                "portfolio",
                "services",
                "contact"
            ]
        };
    }

    render() {
        if(this.props.location.pathname === "/about-us"){
            return (
                /*this.state.frontPageContent[this.state.pagesKey[this.props.pageNumber-1]]*/
                this.state.frontPageContent[this.state.pagesKey[0]]
            );
        }
        else if (this.props.location.pathname === "/portfolio") {
            return (
                /*this.state.frontPageContent[this.state.pagesKey[this.props.pageNumber-1]]*/
                this.state.frontPageContent[this.state.pagesKey[1]]
            );
        }
        else if (this.props.location.pathname === "/services") {
            return (
                /*this.state.frontPageContent[this.state.pagesKey[this.props.pageNumber-1]]*/
                this.state.frontPageContent[this.state.pagesKey[2]]
            );
        }
        else {
            return (
                /*this.state.frontPageContent[this.state.pagesKey[this.props.pageNumber-1]]*/
                this.state.frontPageContent[this.state.pagesKey[3]]
            );
        }
    }
}

export default withRouter(FrontPage);