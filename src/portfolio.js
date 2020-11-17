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
                    <h1>Our Partner and Sister Company</h1>
                    <div className="inlango-portfolio-container">
                        <div>
                            <div className="portfolio-cards portfolio-cards-gray" >
                                <a href="https://www.greymattasolutions.com/" rel="noopener noreferrer" target="_blank">
                                    <img src="./images/portfolio/preview-grey-matta-solutions.png" alt="white knight dry cleaners webpage preview" />
                                </a>
                            </div>
                            <div>
                                
                                <h2></h2>
                                <p>Grey Matta Solution</p>
                                <a href="https://www.greymattasolutions.com/" rel="noopener noreferrer" target="_blank" className="portfolio-cards-button">Visit</a>
                            </div>
                        </div>
                    </div>
                    <h1>Our Client</h1>
                    <div className="inlango-portfolio-container">
                        <div>
                            <div className="portfolio-cards portfolio-cards-gray" >
                                <a href="https://wkdrycleaners.com.au" rel="noopener noreferrer" target="_blank">
                                    <img src="./images/portfolio/preview-wkdrycleaners.png" alt="white knight dry cleaners webpage preview" />
                                </a>
                            </div>
                            <div>
                                
                                <h2>Client Name</h2>
                                <p>White Knight Dry Cleaners</p>
                                <a href="https://wkdrycleaners.com.au" rel="noopener noreferrer" target="_blank" className="portfolio-cards-button">Visit</a>
                            </div>
                        </div>
                        <div className="inlango-portfolio-responsive">
                            <div className="inlango-portfolio-desktop">
                                
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