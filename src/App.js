import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    BrowserRouter as Router
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './views/Home';
import Discord from './views/Discord';
import Antara from './views/Antara';
import Presale from './views/Presale';
import EmailPage from './views/EmailPage';
import WhiteList from './views/WhiteList';
import { StartNft, Paused } from "./actions";
import { nftContract } from './contracts/contract';
import MovieVideo from './views/MovieVideo';

const App = () => {
    const isStarted = useSelector((state) => state.mintNFT.start);
    const isPaused = useSelector((state) => state.mintNFT.pause);
    // const [ended, isEnded] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(StartNft(nftContract));
        dispatch(Paused(nftContract));
    }, [dispatch]);

    // useEffect(() => {
    //     if (isStarted) {
    //         isEnded();
    //     }
    // }, [isStarted]);

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
                    <Home />
                    {/* <Discord /> */}
                    <MovieVideo />
                    <Antara />
                    {(!isStarted || isPaused) && <WhiteList />}
                    {isStarted && !isPaused && <Presale />}
                    <EmailPage />
                    <Footer />
                    <ToastContainer />
                </div>
            </Router>
        </div>
    );
};

export default App;
