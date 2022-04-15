import React from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MetaMaskProvider } from "metamask-react";
import Routes from "./routes/Routes";
import { getNetworkChainId } from "./constants/constant";

const App = () => {
    return (
        <div className="sub-body">
            <MetaMaskProvider chainId={getNetworkChainId()}>
                <Router>
                    <Routes />
                    <ToastContainer />
                </Router>
            </MetaMaskProvider>
        </div>
    );
};

export default App;
