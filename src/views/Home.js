import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useWallet } from "use-wallet";
import { MintNFT, MintCost, Paused, LimitStatus } from "../actions";
import { nftContract } from '../contracts/contract';

const Home = () => {
    const { account } = useWallet();
    const dispatch = useDispatch();

    const { mintCost, mintNFT, paused, limitStatus } = useSelector((state) => state.mintNFT);
    const [loadingMint, setLoadingMint] = useState(false);

    useEffect(() => {
        dispatch(MintCost(nftContract));
        dispatch(LimitStatus(nftContract));
        dispatch(Paused(nftContract));
    }, [dispatch, account]);

    useEffect(() => {
        if (mintNFT.result) {
            toast.success("Success minted!");
        } else if (mintNFT.result === false) {
            toast.error(mintNFT.error);
        }
    }, [mintNFT]);

    const handleMintNFT = async () => {
        if (!loadingMint) {
            if (limitStatus === false) {
                toast.error('This wallet has exceeded the mint limit.');
                return;
            }
            if (paused === true) {
                toast.error('Mint is paused.');
                return;
            }

            setLoadingMint(true);
            dispatch(MintNFT(
                nftContract,
                mintCost
            )).then(() => {
                setLoadingMint(false);
            });
        }
    };

    return (
        <section id="Home" className="section---light demo-4---home-hero wf-section">
            <div className='section---light demo-4---home-hero home-section'>
                <div className="container header-text">
                    <button
                        onClick={(e) => handleMintNFT(e)}
                        type="button"
                        className="button mint-btn"
                    >
                        <p className='mint-btn-text'>{loadingMint ? "Minting" : "MINT"}</p>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;