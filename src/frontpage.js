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
                                <h1>
                                Our Work
                                </h1>
                                <h2>Can I see some samples?</h2>    
                                <p>We have a few projects on our resume, and we are proud of our work.</p>                                
                                <a href="#portfolio-content">Check out our brag board. You'll wanna be there too!</a>
                            </div>,
                careers:  <div className="inlango-container inlango-container-dark" id="content">
                             <h1>
                             Careers
                             </h1>
                             <h2>Want to work with us?</h2>    
                             <p>Inlango has a diverse team of fresh talents and professionals with 20 plus years of experience. We also work closely with universities to provide practical exposure to students via internship and industry projects.</p>      
                             <p>We believe the strength of an organisation lies with people. The backbone of a company is its Human Capital. We look into the well-being of our people for their happiness. Inlango welcomes people who take challenges and are result oriented.</p>    
                             <p>If you are interested to explore opportunities with us then email your resume at <a href="mailto:admin@inlango.com">admin@inlango.com</a></p> 
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
                "careers",
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
        else if (this.props.location.pathname === "/careers") {
            return (
                /*this.state.frontPageContent[this.state.pagesKey[this.props.pageNumber-1]]*/
                this.state.frontPageContent[this.state.pagesKey[3]]
            );
        }
        else {
            return (
                /*this.state.frontPageContent[this.state.pagesKey[this.props.pageNumber-1]]*/
                this.state.frontPageContent[this.state.pagesKey[4]]
            );
        }
    }
}

export default withRouter(FrontPage);