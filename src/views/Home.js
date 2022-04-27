import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useMetaMask } from "metamask-react";
import { MintNFT, MintCost, Paused, LimitStatus } from "../actions";
import { nftContract } from '../contracts/contract';
import yxungSneaks from '../images/image/yxung-sneaks.png';

const Home = () => {
    const dispatch = useDispatch();
    const { status, account } = useMetaMask();
    const { mintCost, mintNFT, paused, limitStatus } = useSelector((state) => state.mintNFT);
    const [loadingMint, setLoadingMint] = useState(false);

    useEffect(() => {
        if (status === "connected") {
            dispatch(MintCost(nftContract));
            dispatch(LimitStatus(nftContract));
            dispatch(Paused(nftContract));
        }
    }, [dispatch, account, status]);

    useEffect(() => {
        if (mintNFT.result) {
            toast.success("Success minted!");
        } else if (mintNFT.result === false) {
            toast.error(mintNFT.error);
        }
    }, [mintNFT]);

    const handleMintNFT = async () => {
        if (!loadingMint) {
            if (status !== "connected") {
                toast.error('Please connect wallet.');
                return;
            }
            if (paused === true) {
                toast.error('Mint is paused.');
                return;
            }
            if (limitStatus === false) {
                toast.error('This wallet has exceeded the mint limit.');
                return;
            }

            setLoadingMint(true);
            dispatch(MintNFT(
                nftContract,
                mintCost
            )).then(() => {
                dispatch(LimitStatus(nftContract));
                setLoadingMint(false);
            });
        }
    };

    return (
        <section id="Home" className="section---light section--home wf-section">
            {/* <img src={yxungSneaks} loading="lazy" alt="" className="yxungSneaks-img" />
            <div className='section---light section--home home-section'>
                <div className="container header-text">
                    <button
                        onClick={(e) => handleMintNFT(e)}
                        type="button"
                        className="button mint-btn"
                    >
                        <p className='mint-btn-text'>{loadingMint ? "Minting" : "MINT"}</p>
                    </button>
                </div>
            </div> */}
            <div className='section--home-light'>
                <img src={yxungSneaks} loading="lazy" alt="" className="yxungSneaks-img" />
                <button
                    onClick={(e) => handleMintNFT(e)}
                    type="button"
                    className="button mint-btn"
                >
                    <p className='mint-btn-text'>{loadingMint ? "MINTING..." : "MINTING MAY 7"}</p>
                </button>
            </div>
        </section>
    );
};

export default Home;