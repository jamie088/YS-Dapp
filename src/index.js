import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { UseWalletProvider } from 'use-wallet';

import store from './store';
import App from './App';
import { getNetworkChainId } from "./constants/constant";

import './css/index.css';

ReactDOM.render(
    <UseWalletProvider chainId={getNetworkChainId()}>
        <BrowserRouter>
            <Fragment>
                <Provider store={store}>
                    <App />
                </Provider>
            </Fragment>
        </BrowserRouter>
    </UseWalletProvider>,
    document.getElementById('root')
);
