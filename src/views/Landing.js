import React from "react";
import { ToastContainer } from "react-toastify";
import Home from "./Home";
import Slider from "./Slider";
import Welcome from "./Welcome";
import Collection from "./Collection";
import RoadMap from "./RoadMap";
import Footer from "../components/Footer";
import Navigation from '../components/Navigation';
import "react-toastify/dist/ReactToastify.css";

const Landing = () => {
    return (
        <section id="Landing">
            <div data-collapse="medium" data-animation="over-right" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar---demo-4 w-nav">
                <Navigation />
            </div>
            <div className="scroll-snap-wrapper">
                <div className="html-embed-2 w-embed">
                </div>
                <Home/>
                <Welcome />
                <Slider />
                <Collection />
                <Slider />
                <RoadMap />
                <Footer />
                <ToastContainer />
            </div>
        </section>
    );
};

export default Landing;
