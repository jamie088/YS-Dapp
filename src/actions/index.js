import { MINT_NFT, MINT_COST, PAUSED, LIMIT_STATUS } from "./types";
import { getWeb3 } from '../services/web3';

export const MintNFT =
    (contract, mintCost) => async (dispatch) => {
        try {
            const web3 = await getWeb3();
            const account = await web3.eth.getAccounts();
            const Contract = new web3.eth.Contract(contract.abi, contract.address);
            await Contract.methods.mint()
                .send({
                    from: account[0],
                    value: mintCost
                });

            dispatch({
                type: MINT_NFT,
                payload: {result: true},
            });
        } catch (error) {
            let errorMsg;
            if (
                error.code === 4001 &&
                error.message.toLowerCase().indexOf("user denied transaction signature") !== -1
            ) {
                errorMsg = "You have cancelled transaction";
            } else {
                errorMsg = "There was an error!";
            }

            dispatch({
                type: MINT_NFT,
                payload: { result: false, error: errorMsg },
            });
        }
    };

export const MintCost =
    (contract) => async (dispatch) => {
        try {
            const web3 = await getWeb3();
            const Contract = new web3.eth.Contract(contract.abi, contract.address);
            await Contract.methods.mintCost()
                .call()
                .then((data) => {
                    dispatch({
                        type: MINT_COST,
                        payload: data,
                    });
                })
                .catch((error) => {
                    console.log('error-1', error);
                    return error;
                });
        } catch (error) {
            console.log('error-2', error);
            return error;
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
                    dispatch({
                        type: PAUSED,
                        payload: data,
                    });
                })
                .catch((error) => {
                    console.log('error-pause', error);
                    return error;
                });
        } catch (error) {
            console.log('error', error);
            return error;
        }
    };

export const LimitStatus =
    (contract) => async (dispatch) => {
        try {
            const web3 = await getWeb3();
            const account = await web3.eth.getAccounts();
            const Contract = new web3.eth.Contract(contract.abi, contract.address);
            await Contract.methods.limitStatus(account[0])
                .call()
                .then((data) => {
                    dispatch({
                        type: LIMIT_STATUS,
                        payload: data,
                    });
                })
                .catch((error) => {
                    console.log('error', error);
                    return error;
                });
        } catch (error) {
            console.log('error', error);
            return error;
        }
    };
