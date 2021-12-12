import React from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Layout = ({ children, bg }) => {
    console.log('children', children);
    return (
        <div className="sub-body">
            <Router>
                <div>
                    <div data-collapse="medium" data-animation="over-right" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar---demo-4 w-nav">
                        <div className="nav-container">
                            <Header />
                            <Navigation />
                            <div data-w-id="55c753c8-02ba-389f-9960-bfaff08bd6b2" className="demo-4---hamburger">
                                <div className="demo-4---hamburger-line _1"></div>
                                <div className="demo-4---hamburger-line _2"></div>
                                <div className="demo-4---hamburger-line _3"></div>
                            </div>
                        </div>
                        <div className="demo-4---tablet-mobile-menu">
                            <div className="sub-links-header login">
                                <a href="#" className="button w-button">login</a>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-snap-wrapper">
                        <div className="html-embed-2 w-embed">
                        </div>
                        { children }
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Layout;
