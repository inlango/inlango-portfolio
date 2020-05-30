import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*<!--footer section-->*/}
                <div class="inlango-footer">
                    <div>
                        <p>
                            Inlango Consulting | Digital Transformation | IT Services - Australia
                        </p>
                        <p>&copy;2020 inlango.com</p>
                    </div>
                    <div>
                        <h2>Quick links</h2><br />link 1<br />link 2
                    </div>
                    <div>
                        <h2>Contact Us</h2>admin@inlango.com
                     </div>
                    <div>
                        <h2>Social media</h2>
                        <a href="#facebook"><i class="fa fa-facebook fa-lg"></i></a>
                        <a href="#twitter"><i class="fa fa-twitter fa-lg"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}