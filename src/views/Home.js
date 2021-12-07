import React from 'react';
import slider1 from '../images/slider-img.png';

const Home = () => {
    return (
        <section id="Home" className="section---light demo-4---home-hero wf-section">
            <div className="container header-text">
                <h1 className="style-2---h1">Welcome to<br></br>The Caravan</h1>
                <p className="paragraph-4">The first NFT community to create a $50M Hollywood movie together. Linking movies and gaming with NFTs and DeFi. Make history with us and join the caravan.<br></br>#TogetherWeRide</p>
                <p className="paragraph-4 text">COMING&nbsp;SOON!</p>.
            </div>
            <img className="bg-image" width="700" height="700" src={slider1} alt=""/>
        </section>
    );
};

export default Home;