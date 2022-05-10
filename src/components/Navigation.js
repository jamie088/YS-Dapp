import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useMetaMask } from "metamask-react";
import MetaMaskOnboarding from '@metamask/onboarding';
import { getWalletAddressEllipsis, getNetworkChainId } from "../constants/constant";
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
    const { status, connect, account, chainId } = useMetaMask();
    const [mobileMenu, setMobileMenu] = useState(false);
    const [buttonText, setButtonText] = useState('Connect Wallet');
    const onboarding = React.useRef();

    useEffect(() => {
        if (account) {
            setButtonText(getWalletAddressEllipsis(account));
        } else if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
            setButtonText('Install MetaMask');
        } else {
            setButtonText('Connect Wallet');
        }
    }, [account, MetaMaskOnboarding.isMetaMaskInstalled()]);

    useEffect(() => {
        if (!onboarding.current) {
            onboarding.current = new MetaMaskOnboarding();
        }
    }, []);

    useEffect(() => {
        if (status === "connected" && chainId && parseInt(chainId, 16) !== getNetworkChainId()) {
            toast.error('You are connected to an unsupported network.');
        }
    }, [chainId, status]);

    const { height, width } = useWindowDimensions();

    useEffect(() => {
        if (mobileMenu && width <= 991) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }, [mobileMenu, width]);

    const connectWallet = () => {
        if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
            if (width > 768) {
                onboarding.current.startOnboarding();
            } else {
                toast.error('Please use MM browser.');
            }
        } else if (status !== "connected") {
            connect();
        }
    };

    return (
        <div style={{width: "100%"}}>
            <div className="nav-container">
                <a href='../#'>
                    <img src={logo} loading="lazy" alt="" className="logo-img" />
                </a>
                <div className="temp-div"></div>
                <nav role="navigation" className="nav-menu w-nav-menu">
                    <div className="demo-4---nav-links-wrapper">
                        {/* <a href="../#Landing" className="nav-dropdown---demo-4 w--current">
                            origin story
                        </a> */}
                        <a href="https://twitter.com/YxungSneaks" target="_blank" rel="noreferrer" className="nav-dropdown---demo-4">
                            twitter
                        </a>
                        <a href="https://discord.gg/eHgFqmm2" target="_blank" rel="noreferrer" className="nav-dropdown---demo-4">
                            discord
                        </a>
                        <a href="https://www.instagram.com/yxungsneaks/" target="_blank" rel="noreferrer" className="nav-dropdown---demo-4">
                            instagram
                        </a>
                        {/* <a href="../#RoadMap" className="nav-dropdown---demo-4">
                            roadmap
                        </a> */}
                    </div>
                </nav>
                <button
                    onClick={(e) => connectWallet(e)}
                    type="button"
                    className="button w-button connect-btn"
                >
                    {buttonText}
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
                    {/* <a href="../#Landing" onClick={() => setMobileMenu(false)} className="nav-dropdown---demo-4 w--current">
                        origin story
                    </a> */}
                    <a href="https://twitter.com/YxungSneaks" target="_blank" rel="noreferrer" className="nav-dropdown---demo-4">
                        twitter
                    </a>
                    <a href="https://discord.gg/eHgFqmm2" target="_blank" rel="noreferrer" className="nav-dropdown---demo-4">
                        discord
                    </a>
                    <a href="https://www.instagram.com/yxungsneaks/" target="_blank" rel="noreferrer" className="nav-dropdown---demo-4">
                        instagram
                    </a>
                    {/* <a href="../#RoadMap" onClick={() => setMobileMenu(false)} className="nav-dropdown---demo-4">
                        roadmap
                    </a> */}
                </div>
            )}
        </div>
    );
};

export default Navigation;
