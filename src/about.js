import React from 'react';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                {/*<!--white container-->*/}
                <div className="inlango-container inlango-container-light">
                    <h1>What we do</h1>
                    <p>
                    Inlango is a human centred one stop business for our -clients to provide digital, technology consulting and IT services. We provide a personalized service with global competitive advantages. We thrive on our diverse team to optimise the business forte of our clients with a set target to propel business needs and enable them as their trusted partner. Our priority is to build a worthy long-term business relationship by being honest and transparent in our collaboration. We believe in exploring opportunities and being upfront about any risks and issues for delivering client commitments. The dedication and commitment of our team with a progressive attitude has helped us to deliver client satisfaction.
                    </p>
                    <p>
                    To transform the digital world of tomorrow we strive to foster innovative, value-based high quality and timely outcomes. We provide full stack implementation capabilities, maintenance and independent validation services to sole traders, small businesses, universities and companies in a wide range of industries. We develop value-based digital solutions for our clients by utilizing experience of our team members with deep technical expertise.  We focus on developing end-to-end solutions for our clients with long term strategic focus and have demonstrated considerable success in implementing scalable and robust outcomes. .
                    </p>
                </div>
            </section>
        );
    }
}