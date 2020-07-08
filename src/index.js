import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch, NavLink} from 'react-router-dom';
import BillboardSlider from './billboardSlider';
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
            ]
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
        return <BrowserRouter><div>
            {/*<!--intro section-->*/}
            <header className="inlango-container-intro">
                <nav className="inlango-navigation-menu" id="inlango-navigation-menu">
                    <div className="inlango-logo"><a onClick={() => { this.handleMenuItemClick(0); }}><img src="images/logo-inlango.png" alt="inlango logo" /></a></div>
                    <div className="inlango-menu-button"><a href="javascript:void(0);" id="inlango-menu-button"
                        onClick={this.toggleMenu}><i className="fa fa-bars fa-3x"></i></a></div>
                    <ul id="inlango-responsive-menu">
                        <li><NavLink to="/" onClick={() => { this.handleMenuItemClick(0); }} exact activeClassName="inlango-active">Home</NavLink></li>
                        <li><NavLink to="/about-us" onClick={() => { this.handleMenuItemClick(1); }} activeClassName="inlango-active">About Us</NavLink></li>
                        <li><NavLink to="/portfolio" onClick={() => { this.handleMenuItemClick(2); }} activeClassName="inlango-active">Portfolio</NavLink></li>
                        <li><NavLink to="/services" onClick={() => { this.handleMenuItemClick(3); }} activeClassName="inlango-active">Services</NavLink></li>
                        <li><NavLink to="/contact" onClick={() => { this.handleMenuItemClick(4); }} activeClassName="inlango-active">Contact Us</NavLink></li>
                    </ul>
                </nav>
                {/*<!--image slider-->*/}
                {/*this.state.currentPageNumber === 0 ? <BillboardSlider /> : <FrontPage pageNumber={this.state.currentPageNumber} />*/}
                <Switch>
                    <Route component={BillboardSlider} exact path="/"/>
                    <Route component={FrontPage} path={["/about-us", "/portfolio", "/services", "/contact" ]} />
                </Switch>
            </header>
            {/*<!--body section-->*/}
            {/*this.state.body[this.state.currentPageNumber]*/}

            <Switch>
                <Route component={Home} exact path="/"/>
                <Route component={About} path="/about-us"/>
                <Route component={Portfolio} path="/portfolio"/>
                <Route component={Services} path="/services"/>
                <Route component={Contact} path="/contact"/>
            </Switch>

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
        </div></BrowserRouter>

    }

}

class Maintainence extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header className="inlango-container-intro">

                    <nav className="inlango-navigation-menu" id="inlango-navigation-menu">
                        <div className="inlango-logo"><a onClick={() => { this.handleMenuItemClick(0); }}><img src="images/logo-inlango.png" alt="inlango logo" /></a></div>
                    </nav>
                    <div className="inlango-container inlango-container-dark" id="content">
                        <h1>
                            Website under maintainence
                                </h1>
                        <p>In the meantime, contact us at - </p>
                        <a href="mailto:admin@inlango.com">admin@inlango.com</a>
                    </div>
                </header>
            </div>
        );
    }
}

ReactDOM.render(
        <App />
    , document.getElementById("app"));
