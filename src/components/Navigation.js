import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useWallet } from "use-wallet";
import { getWalletAddressEllipsis } from "../constants/constant";
import { WalletAddress } from "../actions";
import logo from '../images/image/logo.png';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const Navigation = () => {
    const dispatch = useDispatch();
    const { account, connect } = useWallet();
    const [mobileMenu, setMobileMenu] = useState(false);
    const { wallet } = useSelector((state) => state.mintNFT);

    useEffect(() => {
        dispatch(WalletAddress());
    }, []);

    const connectWallet = () => {
        if (!account && !wallet) {
            connect();
            dispatch(WalletAddress());
        }
    };

    const { height, width } = useWindowDimensions();

    useEffect(() => {
        if (mobileMenu && width <= 991) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }, [mobileMenu, width]);

    return (
        <div style={{width: "100%"}}>
            <div className="nav-container">
                <a href='../#Home'>
                    <img src={logo} loading="lazy" alt="" className="logo-img" />
                </a>
                <div className="temp-div"></div>
                <nav role="navigation" className="nav-menu w-nav-menu">
                    <div className="demo-4---nav-links-wrapper">
                        <a href="../#Landing" className="nav-dropdown---demo-4 w--current">
                            origin story
                        </a>
                        <a href="../#" className="nav-dropdown---demo-4">
                            twitter
                        </a>
                        <a href="../# " className="nav-dropdown---demo-4">
                            discord
                        </a>
                        <a href="../#" className="nav-dropdown---demo-4">
                            instagram
                        </a>
                        <a href="../#RoadMap" className="nav-dropdown---demo-4">
                            roadmap
                        </a>
                    </div>
                </nav>
                <button
                    onClick={(e) => connectWallet(e)}
                    type="button"
                    className="button w-button connect-btn"
                >
                    {wallet ? getWalletAddressEllipsis(wallet) : 'Connect Wallet'}
                </button>
                {!mobileMenu ?
                    <button className="demo-4---hamburger" onClick={() => setMobileMenu(true)} type="button">
                        <div className="demo-4---hamburger-line _1"></div>
                        <div className="demo-4---hamburger-line _2"></div>
                        <div className="demo-4---hamburger-line _3"></div>
                    </button>
                    : 
                    <button onClick={() => setMobileMenu(false)} type="button" id="mdiv">
                        <div className="mdiv">
                            <div className="md"></div>
                        </div>
                    </button>
                }
            </div>
            {mobileMenu && (
                <div className="demo-4---nav-links-wrapper-mobile">
                    <a href="../#Landing" onClick={() => setMobileMenu(false)} className="nav-dropdown---demo-4 w--current">
                        origin story
                    </a>
                    <a href="../#" onClick={() => setMobileMenu(false)} className="nav-dropdown---demo-4">
                        twitter
                    </a>
                    <a href="../# " onClick={() => setMobileMenu(false)} className="nav-dropdown---demo-4">
                        discord
                    </a>
                    <a href="../#" onClick={() => setMobileMenu(false)} className="nav-dropdown---demo-4">
                        instagram
                    </a>
                    <a href="../#RoadMap" onClick={() => setMobileMenu(false)} className="nav-dropdown---demo-4">
                        roadmap
                    </a>
                </div>
            )}
        </div>
    );
};

export default Navigation;
