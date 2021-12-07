import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { UseWalletProvider } from 'use-wallet';

import store from './store';
import App from './App';
// import reset from './constants/css/reset';
import { getNetworkChainId } from "./constants/constant";

import './css/index.css';

// const GlobalStyle = createGlobalStyle`${reset}`;

ReactDOM.render(
    <UseWalletProvider chainId={getNetworkChainId()}>
        <BrowserRouter>
            <Fragment>
                <Provider store={store}>
                    <App />
                </Provider>
                {/* <GlobalStyle /> */}
            </Fragment>
        </BrowserRouter>
    </UseWalletProvider>,
    document.getElementById('root')
);
