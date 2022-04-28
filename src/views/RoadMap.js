import React from "react";
import EmptyPhoto from "../images/image/empty-photo.png";
import Person1 from "../images/image/person-1.png";
import Person2 from "../images/image/person-2.png";
import Person3 from "../images/image/person-3.png";
import Person4 from "../images/image/person-4.png";
import Person5 from "../images/image/person-5.png";
import Person6 from "../images/image/person-6.png";
import Person7 from "../images/image/person-7.png";
import Person8 from "../images/image/person-8.png";
import Person9 from "../images/image/person-9.png";

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
                        <img src={Person1} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>CHLOE MACINTOSH</h2>
                        <p className="roadmap-list--item-text">Social Media Director</p>
                        <p className="roadmap-list--item-text">A recent college graduate who is passionate about the evolving world of advertising, graphic design, social media, and pop culture.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person2} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>JACKI ROACH</h2>
                        <p className="roadmap-list--item-text">Media Strategy and Promotions</p>
                        <p className="roadmap-list--item-text">Expert in Blockchain adoption with a focus on NFTs for metaverse media logistics and distribution channels, as well as strategic partnerships and communications.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person3} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>SUMIKO JIVIDEN</h2>
                        <p className="roadmap-list--item-text">Chief Operating Officer</p>
                        <p className="roadmap-list--item-text">Operations & Business Development unicorn, championing structuring and scaling up operations for start-ups, bringing new products to market - particularly in e-commerce and blockchain expansion.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person4} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>LAMAR EITOW</h2>
                        <p className="roadmap-list--item-text">Chief Technology Officer</p>
                        <p className="roadmap-list--item-text">NFT Technology & Blockchain Infrastructure</p>
                        <p className="roadmap-list--item-text">Blockchain Architect and Consultant with decades developing innovative projects in emerging technologies emphasizing Web3, Metaverse, NFT, and education.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person5} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>BORDERLESS BLOCKCHAIN ALLIANCE</h2>
                        <p className="roadmap-list--item-text">Software Development, Smart Contracts, Security Implementation</p>
                        <p className="roadmap-list--item-text">A global community consisting of human talent and other resources that's enabling people to transform their lives by using blockchain technology to build decentralized projects for numerous applications and problem solving.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person6} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>JASON WATKINS</h2>
                        <p className="roadmap-list--item-text">NFT Strategist</p>
                        <p className="roadmap-list--item-text">Jason pilots an 86’ Elder Millennial equipped with bleeding edge Web3 social, market analytics, surveillance, and integration of emerging NFT utility and social trends.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person7} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>TYLER PENNING</h2>
                        <p className="roadmap-list--item-text">Business Development Lead</p>
                        <p className="roadmap-list--item-text">Strategic alignment, design, and execution of economic campaigns to drive change via all things Web3.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person8} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>JESSE RADEMACHER</h2>
                        <p className="roadmap-list--item-text">Chief Executive Officer/Co-founder of Madeium</p>
                        <p className="roadmap-list--item-text">Spent a decades developing custom brands and product for the world’s top athletes and influencers, including leading Design and Innovation teams for Adidas.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person9} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>SEAN RADEMACHER</h2>
                        <p className="roadmap-list--item-text">Chief Design Officer /Co-founder of Madeium</p>
                        <p className="roadmap-list--item-text">Over 20 years as founder of Pigment Creative and a Creative Director specializing in Graphics, 3D, Brand, UIUX, Advertising, and Design Direction.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadMap;
