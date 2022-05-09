import React from 'react';
import Navigation from '../components/Navigation';
import Footer from "../components/Footer";

const Layout = ({ children }) => {
    return (
        <section>
            <div data-collapse="medium" data-animation="over-right" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar---demo-4 w-nav">
                <Navigation />
            </div>
            <div className="scroll-snap-wrapper">
                <div className="html-embed-2 w-embed">
                </div>
                { children }
                <Footer />
            </div>
        </section>
    );
};

export default Layout;
