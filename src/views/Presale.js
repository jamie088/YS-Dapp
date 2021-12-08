import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { MintNFT, Burn, Approve } from "../actions";
import { nftContract, tokenContract } from '../contracts/contract';

const Presale = () => {
    const dispatch = useDispatch();
    const isMintNFT = useSelector((state) => state.mintNFT.mintNFT);
    const isBurn = useSelector((state) => state.mintNFT.burn);

    const [amount, setAmount] = useState();
    const [eth, setEth] = useState();
    const [tokenId, setTokenId] = useState();
    const [loadingMint, setloadingMint] = useState(false);
    const [loadingBurn, setloadingBurn] = useState(false);
    const [loadingApprove, setloadingApprove] = useState(false);

    useEffect(() => {
        if (isMintNFT) {
            toast.success("Success");
        } else if (isMintNFT === false) {
            toast.error("Failed...");
        }
    }, [isMintNFT]);

    useEffect(() => {
        if (isBurn) {
            toast.success("Success");
        } else if (isBurn === false) {
            toast.error("Failed...");
        }
    }, [isBurn]);

    const handleChangeAmount = (e) => {
        setAmount(e.target.value);
    };

    const handleChangeEth = (e) => {
        setEth(e.target.value);
    };

    const handleChangeTokenId = (e) => {
        setTokenId(e.target.value);
    };
    
    const mintNFT = async () => {
        if (!loadingMint) {
            if (!amount || !eth || amount <= 0 || eth <= 0) {
                window.alert('Please input the correct ETH and Amount!');
                return;
            }
            setloadingMint(true);
            dispatch(MintNFT(
                nftContract,
                amount,
                eth
            )).then(() => {
                setloadingMint(false);
            });
        }
    };

    const approve = async () => {
        if (!loadingApprove) {
            if (!tokenId || tokenId < 0) {
                window.alert('Please input the correct Token ID!');
                return;
            }
            setloadingApprove(true);
            dispatch(Approve(
                tokenContract,
                nftContract.address,
                tokenId
            )).then(() => {
                setloadingApprove(false);
            });
        }
    };

    const burn = async () => {
        if (!loadingBurn) {
            if (!tokenId || tokenId < 0) {
                window.alert('Please input the correct Token ID!');
                return;
            }
            setloadingBurn(true);
            dispatch(Burn(
                nftContract,
                tokenId
            )).then(() => {
                setloadingBurn(false);
            });
        }
    };

    return (
        <section id="Presale" className="" style={{marginBottom: "50px"}}>
            <div className="mint-container">
                <div className="mint-sub-container">
                    <input className="input-default" min="0" step="0.01" type="number" value={eth} onChange={handleChangeEth} placeholder='Eth amount'/>
                    <input className="input-default" min="0" step="1" type="number" value={amount} onChange={handleChangeAmount} placeholder='Mint amount'/>
                    <button onClick={(e) => mintNFT(e)} type="button" className="button w-button" style={{margin: "10px"}}>
                        {!loadingMint ? `Mint NFT` : `Minting...`}
                    </button>
                </div>
                <div className="mint-sub-container">
                    <input className="input-default" min="0" step="1" type="number" value={tokenId} onChange={handleChangeTokenId} placeholder='Token ID'/>
                    <button onClick={(e) => approve(e)} type="button" className="button w-button" style={{margin: "10px"}}>
                        {!loadingApprove ? `Approve` : `Approving...`}
                    </button>
                    <button onClick={(e) => burn(e)} type="button" className="button w-button" style={{margin: "10px"}}>
                        {!loadingBurn ? `Burn` : `Burning...`}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Presale;
