import React from 'react';

export default class FrontPage extends React.Component {

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
                                <h1>
                                Our Work
                                </h1>
                                <h2>Can I see some samples?</h2>    
                                <p>We have a few projects on our resume, and we are proud of our work.</p>                                
                                <a href="#portfolio-content">Check out our brag board. You'll wanna be there too!</a>
                            </div>,
                services:   <div className="inlango-container inlango-container-dark" id="content">
                                <h1>Our services</h1>
                                <h2>What services do we offer?</h2>
                                <p>
                                    Inlango is a trusted partner when it comes to the digital transformation, IT services and technology
                                    consulting. We are using new digital technologies to unlock untapped potential for our clients. We work
                                    closely with our client teams for development and maintenance of website, mobile app, simple brochure site,
                                    e-commerce store. We pride ourselves on high quality design and have the capability to create stunning
                                    applications. We offer a variety of technologies with numerous applications to suit client preferences. Our
                                    senior consultants are seasoned in technology consulting services to advice on developing new IT plans,
                                    creating new digital strategy and review bottlenecks.
                        
                        
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
        return (
            this.state.frontPageContent[this.state.pagesKey[this.props.pageNumber-1]]
        );
    }
}