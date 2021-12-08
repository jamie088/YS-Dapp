import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import Discord from "./Discord";
import Antara from "./Antara";
import Presale from "./Presale";
import EmailPage from "./EmailPage";
import WhiteList from "./WhiteList";
import { StartNft, Paused } from "../actions";
import { nftContract } from "../contracts/contract";
import MovieVideo from "./MovieVideo";
import Footer from "../components/Footer";

const Landing = () => {
    const isStarted = useSelector(state => state.mintNFT.start);
    const isPaused = useSelector(state => state.mintNFT.pause);
    // const [ended, isEnded] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(StartNft(nftContract));
        dispatch(Paused(nftContract));
    }, [dispatch]);

    const currentTime = new Date().getTime();
    console.log("currentTime", currentTime);

    return (
        <>
            <Home />
            {/* <Discord /> */}
            <MovieVideo />
            <Antara />
            {(!isStarted || isPaused) && <WhiteList />}
            {isStarted && !isPaused && <Presale />}
            <EmailPage />
            <Footer />
            <ToastContainer />
        </>
    );
};

export default Landing;
