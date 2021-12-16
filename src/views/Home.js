import React from 'react';
import slider1 from '../images/slider-img.png';

// eslint-disable-next-line react/prop-types
const Home = ({ isPresale = true }) => {
    return (
        <section id="Home" className="section---light demo-4---home-hero wf-section">
            <div className='section---light demo-4---home-hero home-section'>
                <div className="container header-text">
                    <h1 className="style-2---h1 h1-welcome">Welcome to<br></br>the caravan!</h1>
                    <p className="paragraph-4" style={{marginBottom: "0", fontSize: "22px"}}>Arabian Camels is the first NFT community to create a Hollywood movie together. Linking movies and gaming with NFTs and DeFi. The first movie in history funded by an NFT</p>
                    <p className="paragraph-4 text" style={{margin: "0", padding: "0", fontSize: "28px"}}>Owned by everyone.</p>
                    <p className="paragraph-4 text" style={{textAlign: "center", fontSize: "28px"}}>-COMING&nbsp;SOON!-<br></br>The Antara Movie NFT<br></br>#TogetherWeRide</p>
                    {!isPresale && <a href="https://mgu9490eyrw.typeform.com/to/ouxOMiDB" target="_blank" className="button movie w-button" rel="noopener noreferrer" style={{marginTop: "25px", marginBottom: "25px"}}>
                        WhiteList
                    </a>}
                </div>
                <img className="bg-image" src={slider1} alt=""/>
            </div>
        </section>
    );
};

export default Home;