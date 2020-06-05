import React from 'react';

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                {/*<!--body section-->*/}

                {/*<!--white container-->*/}
                <div className="inlango-container inlango-container-light" id="portfolio-content">
                    <h1>Click to Preview</h1>
                    <div className="inlango-portfolio-container">
                    <div>
                            <div className="portfolio-cards portfolio-cards-neon" >
                                <a href="https://c-res.com.au/" rel="noopener noreferrer" target="_blank">
                                    <img src="./images/portfolio/preview-c-res.png" alt="c-res LBP webpage preview" />
                                </a>
                            </div>
                            <div>
                                <p>BHP's Local Buying Program delivered in partnership with C-Res</p>
                                <p>Adding value to our local Customers</p>
                                <h2>Client Name</h2>
                                <p>C-res</p>
                                <h2>Technology Used</h2>
                                <p>CSS / HTML / JavaScript</p>
                                <a href="https://c-res.com.au/" rel="noopener noreferrer" target="_blank" className="portfolio-cards-button">Visit</a>
                            </div>
                        </div>
                        <div className="inlango-portfolio-responsive">
                            <div className="inlango-portfolio-desktop">
                                <p>Grey Matta Solutions is a business that understands we live in a world that requires instant decisions yet our ability to do this is often clouded by emotions and not logic.</p>
                                <p>We developed this website for them</p>
                                <h2>Client Name</h2>
                                <p>Grey matta Solutions</p>
                                <h2>Technology Used</h2>
                                <p>CSS / HTML / JavaScript</p>
                                <a href="https://www.greymattasolutions.com/" rel="noopener noreferrer" target="_blank" className="portfolio-cards-button">Visit</a>
                            </div>
                            <div className="portfolio-cards portfolio-cards-dark inlango-portfolio-right" >
                                <a href="https://www.greymattasolutions.com/" rel="noopener noreferrer" target="_blank">
                                    <img src="./images/portfolio/preview-grey-matta-solutions.png" alt="Greymattasolutions webpage preview" />
                                </a>
                            </div>
                            <div className="inlango-portfolio-mobile">
                                <p>Sinomet are a group of professionals having vast experience in the field of metallurgy for ferrous and non-ferrous industries supported by Chinese & Indian enterprises in collaboration with technical universities and scientific research centres.</p>
                                <p>We developed this website for them</p>
                                <h2>Client Name</h2>
                                <p>Sinomet</p>
                                <h2>Technology Used</h2>
                                <p>CSS / HTML / JavaScript</p>
                                <a href="http://sinomet.in" rel="noopener noreferrer" target="_blank" className="portfolio-cards-button">Visit</a>
                            </div>
                        </div>
                        <div>
                            <div className="portfolio-cards portfolio-cards-gray" >
                                <a href="https://wkdrycleaners.com.au" rel="noopener noreferrer" target="_blank">
                                    <img src="./images/portfolio/preview-wkdrycleaners.png" alt="white knight dry cleaners webpage preview" />
                                </a>
                            </div>
                            <div>
                                <p>White Knight Dry Cleaners has been at the forefront of the dry cleaning industry for over 20 years.</p>
                                <p>We developed this website for them</p>
                                <h2>Client Name</h2>
                                <p>White Knight Dry Cleaners</p>
                                <h2>Technology Used</h2>
                                <p>CSS / HTML / JavaScript</p>
                                <a href="https://wkdrycleaners.com.au" rel="noopener noreferrer" target="_blank" className="portfolio-cards-button">Visit</a>
                            </div>
                        </div>
                        <div className="inlango-portfolio-responsive">
                            <div className="inlango-portfolio-desktop">
                                <p>Sinomet are a group of professionals having vast experience in the field of metallurgy for ferrous and non-ferrous industries supported by Chinese & Indian enterprises in collaboration with technical universities and scientific research centres.</p>
                                <p>We developed this website for them</p>
                                <h2>Client Name</h2>
                                <p>Sinomet</p>
                                <h2>Technology Used</h2>
                                <p>CSS / HTML / JavaScript</p>
                                <a href="http://sinomet.in" rel="noopener noreferrer" target="_blank" className="portfolio-cards-button">Visit</a>
                            </div>
                            <div className="portfolio-cards portfolio-cards-blue inlango-portfolio-right" >
                                <a href="http://sinomet.in" rel="noopener noreferrer" target="_blank">
                                    <img src="./images/portfolio/preview-sinomet.png" alt="white knight dry cleaners webpage preview" />
                                </a>
                            </div>
                            <div className="inlango-portfolio-mobile">
                                <p>Sinomet are a group of professionals having vast experience in the field of metallurgy for ferrous and non-ferrous industries supported by Chinese & Indian enterprises in collaboration with technical universities and scientific research centres.</p>
                                <p>We developed this website for them</p>
                                <h2>Client Name</h2>
                                <p>Sinomet</p>
                                <h2>Technology Used</h2>
                                <p>CSS / HTML / JavaScript</p>
                                <a href="http://sinomet.in" rel="noopener noreferrer" target="_blank" className="portfolio-cards-button">Visit</a>
                            </div>
                        </div>
                        <div>
                            <div className="portfolio-cards portfolio-cards-red " >
                                <a href="http://www.sgssl.com" rel="noopener noreferrer" target="_blank">
                                    <img src="./images/portfolio/preview-sinoglobal.png" alt="white knight dry cleaners webpage preview" />
                                </a>
                            </div>
                            <div>
                                <p>We developed this website for them</p>
                                <h2>Client Name</h2>
                                <p>Sinoglobal</p>
                                <h2>Technology Used</h2>
                                <p>CSS / HTML / JavaScript</p>
                                <a href="http://www.sgssl.com" rel="noopener noreferrer" target="_blank" className="portfolio-cards-button">Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}