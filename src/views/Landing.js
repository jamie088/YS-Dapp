import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import Antara from "./Antara";
import Presale from "./Presale";
import EmailPage from "./EmailPage";
import { StartNft, Paused } from "../actions";
import { nftContract } from "../contracts/contract";
import MovieVideo from "./MovieVideo";
import Footer from "../components/Footer";
import Contact from "./Contact";

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
        <>
            <Home isPresale={isPresale}/>
            <MovieVideo />
            <Antara />
            {isPresale && <Presale />}
            <Contact />
            <EmailPage />
            <Footer />
            <ToastContainer />
        </>
    );
};

export default Landing;
