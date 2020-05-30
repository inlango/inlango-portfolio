import React from 'react';

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
            contents: [

                <ul>
                    <li>Agile leadership</li>
                    <li>DevOps</li>
                    <li>Technology review and audit</li>
                    <li>Strategy formation</li>
                    <li>Business Consulting</li>
                    <li>Market Research</li>
                </ul>,
                <ul>
                    <li>Website Design</li>
                    <li>Web Development</li>
                    <li>Mobile App Development</li>
                    <li>E-commerce Development</li>
                    <li>Graphic Design</li>
                    <li>User Experience Design</li>
                    <li>User Interface Design</li>
                    <li>Prototyping</li>
                </ul>,
                <ul>
                    <li>cloud</li>
                    <li>AWS</li>
                    <li>Azure</li>
                    <li>API and Microservices</li>
                    <li>Hosting – Application, platform</li>
                    <li>Testing</li>
                    <li>Digital Marketing</li>
                    <li>Pay Per Click Marketing</li>
                    <li>E-mail Marketing</li>
                    <li>Internet Marketing</li>
                </ul>,
                <ul>
                    <li>Research Writing</li>
                    <li>Business Plans</li>
                    <li>Proposals</li>
                    <li>Progress Reports</li>
                    <li>User Guides</li>
                    <li>Organizational Policies and Procedures</li>
                </ul>
            ],
            icons: [
                "fa fa-people-arrows fa-10x",
                "fa fa-random fa-10x",
                "fa fa-laptop fa-10x",
                "fa fa-pen-alt fa-10x"
            ]
        };

        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleMouseOver(tabNumber) {
        this.setState({
            currentTab: tabNumber
        });
    }

    render() {
        return (
            <div className="inlango-tabs">
                <div>
                    <a onMouseOver={ ()=> {this.handleMouseOver(0)} } className = {this.state.currentTab === 0 ? "active" : "" }><span>Consulting</span></a>
                    <a onMouseOver={ ()=> {this.handleMouseOver(1)} } className = {this.state.currentTab === 1 ? "active" : "" }><span>Digital Transformation</span></a>
                    <a onMouseOver={ ()=> {this.handleMouseOver(2)} } className = {this.state.currentTab === 2 ? "active" : "" }><span>IT services</span></a>
                    <a onMouseOver={ ()=> {this.handleMouseOver(3)} } className = {this.state.currentTab === 3 ? "active" : "" }><span>Content Writing</span></a>
                </div>
                <div>
                    <div>
                        {this.state.contents[this.state.currentTab]}
                    </div>
                    <div>
                        <i className={this.state.icons[this.state.currentTab]}></i>
                    </div>
                </div>

            </div>
        );
    }
}