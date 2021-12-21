import React from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UseWalletProvider } from 'use-wallet';
import Routes from "./routes/Routes";
import { getNetworkChainId } from "./constants/constant";

const App = () => {
    return (
        <div className="sub-body">
            <UseWalletProvider chainId={getNetworkChainId()}>
                <Router>
                    <Routes />
                    <ToastContainer />
                </Router>
            </UseWalletProvider>
        </div>
    );
};

export default App;
