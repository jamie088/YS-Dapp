import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useMetaMask } from "metamask-react";
import { MintNFTWithETH, MintNFTWithAPE, MintCost, Paused, LimitStatus } from "../actions";
import { nftContract } from '../contracts/contract';
import yxungSneaks from '../images/image/yxung-sneaks.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const dispatch = useDispatch();
    const { status, account } = useMetaMask();
    const { mintCost, mintNFT, paused, limitStatus } = useSelector((state) => state.mintNFT);
    const [loadingMint, setLoadingMint] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const handleClickModal = async () => {
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

            setShow(true);
            // setLoadingMint(true);
            // dispatch(MintNFT(
            //     nftContract,
            //     mintCost
            // )).then(() => {
            //     dispatch(LimitStatus(nftContract));
            //     setLoadingMint(false);
            // });
        }
    };

    const handleClickMint = async (isETH) => {
        setShow(false);
        setLoadingMint(true);
        if (isETH) {
            dispatch(MintNFTWithETH(
                nftContract,
                mintCost
            )).then(() => {
                dispatch(LimitStatus(nftContract));
                setLoadingMint(false);
            });
        } else {
            dispatch(MintNFTWithAPE(
                nftContract
            )).then(() => {
                dispatch(LimitStatus(nftContract));
                setLoadingMint(false);
            });
        }
    };

    return (
        <>
            <section id="Home" className="section---light section--home wf-section">
                <div className='section--home-light'>
                    <img src={yxungSneaks} loading="lazy" alt="" className="yxungSneaks-img" />
                    <button
                        onClick={(e) => handleClickModal(e)}
                        type="button"
                        className="button mint-btn"
                    >
                        <p className='mint-btn-text'>{loadingMint ? "MINTING..." : "MINTING MAY 7"}</p>
                    </button>
                </div>
            </section>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>MINTING MAY 7</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handleClickMint(true)}>
            Mint with ETH
                    </Button>
                    <Button variant="primary" onClick={() => handleClickMint(false)}>
            Mint with APE
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Home;