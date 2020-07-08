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
                                <a href="https://wkdrycleaners.com.au" rel="noopener noreferrer" target="_blank" className="portfolio-cards-button">Visit</a>
                            </div>
                        </div>
                        <div className="inlango-portfolio-responsive">
                            <div className="inlango-portfolio-desktop">
                                <p>Sinomet are a group of professionals having vast experience in the field of metallurgy for ferrous and non-ferrous industries supported by Chinese & Indian enterprises in collaboration with technical universities and scientific research centres.</p>
                                <p>We developed this website for them</p>
                                <h2>Client Name</h2>
                                <p>Sinomet</p>
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
                                <a href="http://www.sgssl.com" rel="noopener noreferrer" target="_blank" className="portfolio-cards-button">Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}