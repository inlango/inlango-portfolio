import React from 'react';
import ReactDOM from 'react-dom';
import BillboardSlider from './billboardSlider';
import ReactDOMServer from 'react-dom/server';
import Home from './home';
import FrontPage from './frontpage';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import Services from './services';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            currentPageNumber: 0,
            body: [
                <Home />,
                <About />,
                <Portfolio />,
                <Services />,
                <Contact />
            ],
            activeClasses: [
                ["inlango-active", "", "", "", ""],
                ["", "inlango-active", "", "", ""],
                ["", "", "inlango-active", "", ""],
                ["", "", "", "inlango-active", ""],
                ["", "", "", "", "inlango-active"]
            ],
        };

        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    }

    toggleMenu() {

        let x = document.getElementById("inlango-responsive-menu");
        let button = document.getElementById("inlango-menu-button").firstElementChild;
        if (x.className === "inlango-responsive") {
            x.className = " ";
        } else {
            x.className = "inlango-responsive";
        }

        if (button.className.includes("fa-times")) {
            button.className = " ";
            button.className = "fa fa-bars fa-3x";
        }
        else {
            button.className = " ";
            button.className = "fa fa-times fa-3x";
        }
    }

    handleNavClick(number) {
        this.setState({
            currentPageNumber: number
        });
    }

    handleMenuItemClick(pageNumber) {
        this.setState({ currentPageNumber: pageNumber });


        document.getElementById("inlango-navigation-menu").style.animation = "none";
        document.getElementById("inlango-navigation-menu").style.animation = "1.5s infinite 0s 2 shootingStar;";

        let x = document.getElementById("inlango-responsive-menu");
        let button = document.getElementById("inlango-menu-button").firstElementChild;
        if (x.className === "inlango-responsive") {
            this.toggleMenu();
        }
        if (button.className.includes("fa-times")) {
            this.toggleMenu();
        }
    }

    render() {
        return <div>
            {/*<!--intro section-->*/}
            <header className="inlango-container-intro">
                <nav className="inlango-navigation-menu" id="inlango-navigation-menu">
                    <div className="inlango-logo"><a onClick={() => { this.handleMenuItemClick(0); }}><img src="images/logo-inlango.png" alt="inlango logo" /></a></div>
                    <div className="inlango-menu-button"><a href="javascript:void(0);" id="inlango-menu-button"
                        onClick={this.toggleMenu}><i className="fa fa-bars fa-3x"></i></a></div>
                    <ul id="inlango-responsive-menu">
                        <li><a onClick={() => { this.handleMenuItemClick(0); }} className={this.state.activeClasses[this.state.currentPageNumber][0]}>Home</a></li>
                        <li><a onClick={() => { this.handleMenuItemClick(1); }} className={this.state.activeClasses[this.state.currentPageNumber][1]}>About Us</a></li>
                        <li><a onClick={() => { this.handleMenuItemClick(2); }} className={this.state.activeClasses[this.state.currentPageNumber][2]}>Portfolio</a></li>
                        <li><a onClick={() => { this.handleMenuItemClick(3); }} className={this.state.activeClasses[this.state.currentPageNumber][3]}>Services</a></li>
                        <li><a onClick={() => { this.handleMenuItemClick(4); }} className={this.state.activeClasses[this.state.currentPageNumber][4]}>Contact Us</a></li>
                    </ul>
                </nav>
                {/*<!--image slider-->*/}
                {this.state.currentPageNumber === 0 ? <BillboardSlider /> : <FrontPage pageNumber={this.state.currentPageNumber} />}
            </header>
            {/*<!--body section-->*/}
            {this.state.body[this.state.currentPageNumber]}

            <footer>
                {/*<!--footer section-->*/}
                <div class="inlango-footer">
                    <div>
                        <p>
                            Inlango Consulting | Digital | IT Services 
                        </p>
                        <p>&copy;2020 inlango.com</p>
                    </div>
                    <div>
                        <h2>Quick links</h2><p><a onClick={() => { this.handleMenuItemClick(4); }}>Contact Us</a></p>
                        <p><a onClick={() => { this.handleMenuItemClick(2); }}>Our work</a></p>
                        <p><a onClick={() => { this.handleMenuItemClick(3); }}>Our Services</a></p>
                    </div>
                    <div>
                        <h2>Contact Us</h2><a href="mailto:admin@inlango.com">admin@inlango.com</a>
                    </div>
                    <div>
                        <h2>Social media</h2>
                        <a href="#facebook"><i class="fa fa-facebook fa-lg"></i></a>
                        <a href="#twitter"><i class="fa fa-twitter fa-lg"></i></a>
                        <a href="#linkedIn"><i class="fa fa-linkedin fa-lg"></i></a>
                    </div>
                </div>
            </footer>
        </div>

    }

}
ReactDOMServer.renderToString(
    <App />)
ReactDOM.render(<App />, document.getElementById("app"));
