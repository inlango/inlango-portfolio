import React from 'react';
import Tabs from './tabs';

export default class Services extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section>
                {/*<!--body section-->*/}

                {/*<!--white container-->*/}
                <div className="inlango-container inlango-container-light" id="services-content">
                    <h1>click to see details</h1>
                    <Tabs />
                </div>
            </section>
        );
    }
}