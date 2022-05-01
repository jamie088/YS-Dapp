import React from "react";
import EmptyPhoto from "../images/image/empty-photo.png";
import JesseRademacher from "../images/image/JesseRademacher_Headshot.png";
import Chloe from "../images/image/Chloe_Headshot.png";
import Jacki from "../images/image/Jacki_Roach.png";
import Lamar from "../images/image/Lamar.png";
import SeanRademacher from "../images/image/SeanRademacher_Headshot.png";
import Sumiko from "../images/image/Sumiko.png";
import Tyler from "../images/image/Tyler_Penning.png";
import EthPFP from "../images/image/Eth_PFP.png";
import Borderless from "../images/image/Borderless.png";

const RoadMap = () => {
    return (
        <section
            id="RoadMap"
            className="section---light roadmap-trust-lists wf-section"
        >
            <div className="roadmap-list">
                <h2 className="roadmap-list--header">No Roadmap.<br/>Just Vibez.</h2>
                <div className="roadmap-list--items grid-container">
                    <div className="roadmap-list--item">
                        <img src={JesseRademacher} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>JESSE RADEMACHER</h2>
                        <p className="roadmap-list--item-text">Chief Executive Officer/Co-founder of Madeium</p>
                        <p className="roadmap-list--item-text">Spent a decades developing custom brands and product for the world’s top athletes and influencers, including leading Design and Innovation teams for Adidas.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={SeanRademacher} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>SEAN RADEMACHER</h2>
                        <p className="roadmap-list--item-text">Chief Design Officer /Co-founder of Madeium</p>
                        <p className="roadmap-list--item-text">Over 20 years as founder of Pigment Creative and a Creative Director specializing in Graphics, 3D, Brand, UIUX, Advertising, and Design Direction.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Lamar} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>LAMAR EITOW</h2>
                        <p className="roadmap-list--item-text">Chief Technology Officer</p>
                        <p className="roadmap-list--item-text">NFT Technology & Blockchain Infrastructure</p>
                        <p className="roadmap-list--item-text">Blockchain Architect and Consultant with decades developing innovative projects in emerging technologies emphasizing Web3, Metaverse, NFT, and education.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Sumiko} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>SUMIKO JIVIDEN</h2>
                        <p className="roadmap-list--item-text">Chief Operating Officer</p>
                        <p className="roadmap-list--item-text">Operations & Business Development unicorn, championing structuring and scaling up operations for start-ups, bringing new products to market - particularly in e-commerce and blockchain expansion.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Borderless} width="216" height="216" alt="" style={{borderRadius: "50%"}}/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>BORDERLESS BLOCKCHAIN ALLIANCE</h2>
                        <p className="roadmap-list--item-text">Software Development, Smart Contracts, Security Implementation</p>
                        <p className="roadmap-list--item-text">A global community consisting of human talent and other resources that's enabling people to transform their lives by using blockchain technology to build decentralized projects for numerous applications and problem solving.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={EthPFP} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>JASON WATKINS</h2>
                        <p className="roadmap-list--item-text">NFT Strategist</p>
                        <p className="roadmap-list--item-text">Jason pilots an 86’ Elder Millennial equipped with bleeding edge Web3 social, market analytics, surveillance, and integration of emerging NFT utility and social trends.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Tyler} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>TYLER PENNING</h2>
                        <p className="roadmap-list--item-text">Business Development Lead</p>
                        <p className="roadmap-list--item-text">Strategic alignment, design, and execution of economic campaigns to drive change via all things Web3.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Jacki} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>JACKI ROACH</h2>
                        <p className="roadmap-list--item-text">Media Strategy and Promotions</p>
                        <p className="roadmap-list--item-text">Expert in Blockchain adoption with a focus on NFTs for metaverse media logistics and distribution channels, as well as strategic partnerships and communications.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Chloe} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>CHLOE MACINTOSH</h2>
                        <p className="roadmap-list--item-text">Social Media Director</p>
                        <p className="roadmap-list--item-text">A recent college graduate who is passionate about the evolving world of advertising, graphic design, social media, and pop culture.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadMap;
