import React from 'react';
import slider1 from '../images/slider-img.png';

const Home = () => {
    return (
        <section id="Home" className="section---light demo-4---home-hero wf-section">
            <div className="container header-text">
                <h1 className="style-2---h1">Welcome to<br></br>The Caravan</h1>
                <p className="paragraph-4">Arabian Camels the first NFT community to create a Hollywood movie together. Linking movies and gaming with NFTs and DeFi. The first movie in history funded by an NFT - Owned by everyone.</p>
                <p className="paragraph-4 text">The Antara Movie NFT<br></br>-COMING&nbsp;SOON!-<br></br>#TogetherWeRide</p>.
            </div>
            <img className="bg-image" width="700" height="700" src={slider1} alt=""/>
        </section>
    );
};

export default Home;