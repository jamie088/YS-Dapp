import Web3 from "web3";
import axios from "axios";

/**
 * Load Web3.js
 */
export const getWeb3 = () =>
    new Promise(async (resolve, reject) => {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            try {
                // Request account access if needed
                await window.ethereum.enable();
                // await window.ethereum.send('eth_requestAccounts')
                // Acccounts now exposed
                resolve(web3);
            } catch (error) {
                reject(error);
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            // Use Mist/MetaMask's provider.
            const {web3} = window;
            resolve(web3);
        }
        // Fallback to localhost; use dev console port by default...
        else {
            const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
            const web3 = new Web3(provider);

            resolve(web3);
        }
    });

export const getGasPrice = async () => {
    const response = await axios.get(
        "https://ethgasstation.info/json/ethgasAPI.json"
    );
    const prices = {
        low: response.data.safeLow / 10,
        medium: response.data.average / 10,
        high: response.data.fast / 10,
        fastest: Math.round(response.data.fastest / 10),
    };
    return prices;
};

// Gas price multiplier
export const GAS_PRICE_MULTIPLIER = 1.1;
export const CARD_STRENGTH_MULTIPLIER = 100;

export const getGasFee = (gasPrice) => {
    return Math.round(gasPrice * GAS_PRICE_MULTIPLIER);
}