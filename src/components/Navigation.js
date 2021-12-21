/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useWallet } from "use-wallet";
import { getWalletAddressEllipsis } from "../constants/constant";

const Navigation = () => {
    const { account, connect } = useWallet();

    const connectWallet = () => {
        if (!account) {
            connect();
        }
    };

    return (
        <nav role="navigation" className="nav-menu w-nav-menu">
            <div className="demo-4---nav-links-wrapper">
                <a href="../#Home" className="nav-dropdown---demo-4 w--current">
          Home
                </a>
                <a href="../#Presale" className="nav-dropdown---demo-4">
          Presale
                </a>
                <a href="../#Home " className="nav-dropdown---demo-4">
          Whitelist
                </a>
                <a href="../#Antara" className="nav-dropdown---demo-4">
          Antara
                </a>
                <a href="../#RoadMap" className="nav-dropdown---demo-4">
          Road Map
                </a>
                <a
                    href="https://discord.gg/bcY9thmKy4"
                    target="_blank"
                    className="button-3 w-button"
                    rel="noopener noreferrer"
                ></a>
                <a
                    href="https://opensea.io/collection/arabian-camels"
                    target="_blank"
                    className="button-4 w-button"
                    rel="noopener noreferrer"
                ></a>
                <a
                    href="https://instagram.com/arabiancamelsnft"
                    target="_blank"
                    className="button-5 w-button"
                    rel="noopener noreferrer"
                ></a>
                <a
                    href="https://twitter.com/ArabianCamels"
                    target="_blank"
                    className="button-6 w-button"
                    rel="noopener noreferrer"
                ></a>
            </div>
            <button
                onClick={(e) => connectWallet(e)}
                type="button"
                className="button w-button"
                style={{padding: "8px 14px", fontSize: "18px"}}
            >
                {account ? getWalletAddressEllipsis(account) : 'Connect wallet'}
            </button>
        </nav>
    );
};

export default Navigation;
