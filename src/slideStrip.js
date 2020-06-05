import React from 'react';

export default class SlideStrip extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            clients: [],
            firstLogo: 0,
            imageChangeTimer: "",
            animationTimer: ""
        };

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.changePosition = this.changePosition.bind(this);
    }

    componentDidMount() {
        let clients = this.props.clients.map((client) => {
            return <a href={client[0]} rel="noopener noreferrer" target="_blank"><img src={client[1]} alt={client[2]} /></a>;

        })

        this.setState({
            clients: clients
        });

        /* let stripStyle = document.createElement("style");
         stripStyle.innerHTML = ".inlango-client-logo { width: 10%}";
         document.body.appendChild(stripStyle);*/
        /*let clientLogoElements = document.getElementsByClassName("inlango-client-logo");
        alert(clientLogoElements.length);
        for(let i =0; i < clientLogoElements.length; i++){
            alert("happening");
            clientLogoElements[i].style.width= "20% !important";
        };*/

        this.changePosition(); 
    }

    componentWillUnmount() {
        clearInterval(this.state.imageChangeTimer);
        clearTimeout(this.state.animationTimer);
    }

    handleMouseOver(){
        clearInterval(this.state.imageChangeTimer);
        clearTimeout(this.state.animationTimer);
    }

    handleMouseLeave(){
        this.changePosition();
    }

    changePosition() {
        
        this.setState({
            imageChangeTimer: setInterval(() => {
                document.getElementById("inlango-scroll-strip").style.opacity = 1;
                if (this.state.firstLogo >= this.state.clients.length - 1) {
                    this.setState({
                        firstLogo: 0
                    });
                }
                else {
                    this.setState({
                        firstLogo: this.state.firstLogo + 1
                    });
                }  
                this.setState({
                    animationTimer: setTimeout( ()=> { 
                        document.getElementById("inlango-scroll-strip").style.opacity = 0;                 
                    } ,1500)
                });
            }, 2000)
        });
    }

    render() {
        return (
            <div>
                {/*
                    <span>****index: </span><span>{ this.state.firstLogo + 1 }</span>
                    <span>****sum clients: </span><span>{ this.state.clients.length - 1 }</span>
                    <span>****display Index: </span><span>{ this.state.firstLogo + 1 > this.state.clients.length - 1 ? this.state.firstLogo + 1 - (this.state.clients.length) : this.state.firstLogo + 1 }</span>
                    <span>"displayed url: "</span><span>{ this.props.clients[this.state.firstLogo + 1 >= this.state.clients.length - 1 ? this.state.firstLogo + 1 - this.state.clients.length - 1 : this.state.firstLogo + 1 ][0] }</span>
                    <span>{this.state.mouseOver }</span>
                */}
                <div id="inlango-scroll-strip" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                    <div className="inlango-client-logo">
                        {this.state.clients[this.state.firstLogo]}
                    </div>
                    <div className="inlango-client-logo">
                        {this.state.clients[this.state.firstLogo + 1 > this.state.clients.length - 1 ? this.state.firstLogo + 1 - (this.state.clients.length) : this.state.firstLogo + 1]}
                    </div>
                    <div className="inlango-client-logo">
                        {this.state.clients[this.state.firstLogo + 2 > this.state.clients.length - 1 ? this.state.firstLogo + 2 - (this.state.clients.length) : this.state.firstLogo + 2]}
                    </div>
                </div>
            </div>
        );
    }

}