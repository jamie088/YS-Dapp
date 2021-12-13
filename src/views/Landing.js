import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    BrowserRouter as Router
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import Sizzle from "./Sizzle";
import Presale from "./Presale";
import EmailPage from "./EmailPage";
import { StartNft, Paused } from "../actions";
import { nftContract } from "../contracts/contract";
import Antara from "./Antara";
import Footer from "../components/Footer";
import Contact from "./Contact";
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Landing = () => {
    const isStarted = useSelector(state => state.mintNFT.start);
    const isPaused = useSelector(state => state.mintNFT.pause);
    const [isPresale, setIsPresale] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(StartNft(nftContract));
        dispatch(Paused(nftContract));
    }, [dispatch]);

    useEffect(() => {
        const currentTime = new Date().getTime()/1000;
        if (isStarted && !isPaused && currentTime < Number(isStarted) + Number(259200)) {
            setIsPresale(true);
        } else {
            setIsPresale(false);
        }
    }, [isStarted, isPaused]);

    return (
        <div className="sub-body">
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
                <Home isPresale={isPresale}/>
                <Antara />
                <Sizzle />
                {isPresale && <Presale />}
                <Contact />
                <EmailPage />
                <Footer />
                <ToastContainer />
            </div>
        </div>
    );
};

export default Landing;
