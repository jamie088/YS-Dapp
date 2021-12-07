import { MINT_NFT, BURN, START, PAUSE } from "./types";
import { getWeb3, getGasPrice } from '../services/web3';

export const MintNFT =
    (contract, amount, eth) => async (dispatch) => {
        try {
            const web3 = await getWeb3();
            const Contract = new web3.eth.Contract(contract.abi, contract.address);
            const value = web3.utils.toWei((eth).toString(), 'ether');
            const account = await web3.eth.getAccounts();

            await Contract.methods.mint(
                amount
            )
                .send({
                    from: account[0],
                    value
                });

            dispatch({
                type: MINT_NFT,
                payload: true,
            });
        } catch (error) {
            console.log('error', error);
            window.alert('There was an error!');
        }
    };

export const Approve =
    (contract, address, tokenId) => async () => {
        try {
            const web3 = await getWeb3();
            const Contract = new web3.eth.Contract(contract.abi, contract.address);
            const account = await web3.eth.getAccounts();
            const prices = await getGasPrice();

            await Contract.methods
                .approve(
                    address,
                    tokenId
                )
                .send({
                    from: account[0],
                    gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei")
                })
                .then((data) => {
                    return data;
                })
                .catch((error) => {
                    return error;
                });
        } catch (error) {
            console.log('error', error);
            window.alert('There was an error!');
        }
    };

export const Burn =
    (contract, tokenId) => async (dispatch) => {
        try {
            const web3 = await getWeb3();
            const Contract = new web3.eth.Contract(contract.abi, contract.address);
            const account = await web3.eth.getAccounts();
            await Contract.methods.burn(
                tokenId
            )
                .send({
                    from: account[0]
                });

            dispatch({
                type: BURN,
                payload: true,
            });
        } catch (error) {
            console.log('error', error);
            window.alert('There was an error!');
        }
    };

export const StartNft =
    (contract) => async (dispatch) => {
        try {
            const web3 = await getWeb3();
            const Contract = new web3.eth.Contract(contract.abi, contract.address);
            await Contract.methods.startDate()
                .call()
                .then((data) => {
                    console.log('data', data);
                    dispatch({
                        type: START,
                        payload: data,
                    });
                })
                .catch((error) => {
                    console.log('error', error);
                    return error;
                });
        } catch (error) {
            console.log('error', error);
            window.alert('There was an error!');
        }
    };

export const Paused =
    (contract) => async (dispatch) => {
        try {
            const web3 = await getWeb3();
            const Contract = new web3.eth.Contract(contract.abi, contract.address);
            await Contract.methods.paused()
                .call()
                .then((data) => {
                    console.log('data-pause', data);
                    dispatch({
                        type: PAUSE,
                        payload: data,
                    });
                })
                .catch((error) => {
                    console.log('error-pause', error);
                    return error;
                });
        } catch (error) {
            console.log('error', error);
            window.alert('There was an error!');
        }
    };
