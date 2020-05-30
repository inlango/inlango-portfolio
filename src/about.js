import React from 'react';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*<!--white container-->*/}
                <div className="inlango-container inlango-container-light">
                    <h1>What we do</h1>
                    <p>
                        We provide software development, maintenance and independent validation services to sole traders, small
                        businesses, universities and companies in a wide range of industries. We develop value based solutions
                        for
                        our
                        clients by utilizing experience of our diverse team members. We work with our clients by engaging in
                        ideation,
                        strategy development, prototyping, implementation of relevant solution and maintenance. Our approach has
                        always
                        been client centric, aimed at providing unique and innovative solutions to excel expectations. As a
                        small
                        business we are flexible and ready to adapt to changing client requirements.
                    </p>
                    <p>
                        We focus on developing end-to-end solutions for our clients and have demonstrated considerable success
                        in
                        implementing scalable and robust outcomes. Inlango is spear headed by highly motivated and seasoned IT
                        professionals. Our services range from website, mobile app, audit, strategy, e-commerce solutions,
                        brochure
                        design, logo design, hosting and content writing.
                    </p>
                </div>
            </div>
        );
    }
}