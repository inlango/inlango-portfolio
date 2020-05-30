import React from 'react';
import Tabs from './tabs';

export default class Services extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {/*<!--body section-->*/}

                {/*<!--white container-->*/}
                <div className="inlango-container inlango-container-light" id="services-content">
                    <h1>Mouse over to servies to see details</h1>
                    <Tabs />
                </div>
            </div>
        );
    }
}