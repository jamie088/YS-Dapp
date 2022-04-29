import React from "react";
import StreetwearKid from "../images/image/StreetwearKid_c.png";
import YxSCharacterZ from "../images/image/YxS_Character_Z.png";
import EggNoHed from "../images/image/Egg_NoHed.png";
import YxSSneakerUtil from "../images/image/YxS_SneakerUtil.png";
// import StreetwearKid from "../images/image/StreetwearKid_c.png";
import MadeiumLockup from "../images/image/Madeium_Lockup_.png";
import Ethereum from "../images/image/ethereum.png";
import Ellipse from "../images/image/Ellipse.png";
import Wizard2 from "../images/image/Wizard-2_cc.png";
import Astronaut3 from "../images/image/Astronaut3_cc.png";
import Skeleton2 from "../images/image/Skeleton2_cc.png";
import Shoes from "../images/image/shoes.png";
import ShoesClaim1 from "../images/image/shoes-claim1.png";
import ShoesClaim2 from "../images/image/shoes-claim2.png";

const Collection = () => {
    return (
        <section
            id="Collection"
            className="section---light allow-lists wf-section"
        >
            <div className="allow-list grid-container">
                <div className="allow-list--item">
                    <img src={StreetwearKid} width="220" height="220" alt=""/>
                    <h2 className="allow-list--item-title" style={{marginTop: '30px'}}>3D Avatar NFTs</h2>
                    <p className="allow-list--item-text">Each 6,666 Origin NFTs starts with a fully rigged, head-to-toe 3D Avatar.</p>
                    <p className="allow-list--item-text">Once your YxungSneak is randomly minted via our collab with Chainlink, it will come fully clothed, but only wearing one shoe.</p>
                    <p className="allow-list--item-text">Upon redeeming your IRL kicks via Madeium.com, your Avatar will be updated with two shoes.</p>
                </div>
                <div className="allow-list--item">
                    <img src={YxSCharacterZ} width="220" height="220" alt=""/>
                    <h2 className="allow-list--item-title" style={{marginTop: '30px'}}>Original Creators</h2>
                    <p className="allow-list--item-text">The Original Designers for YxungSneaks are founders and DAO leaders Sean Rademacher and Jesse Rademacher (also Co-Founders of Madeium and Madeium MFG).</p>
                    <p className="allow-list--item-text no-margin">Szn 2 will feature collaborations with some of your favorite designers.<br/>Each avatar is a cehicle for others to foster new brands and generate valuable IP that works for their holders in new ways.</p>
                </div>
                <div className="allow-list--item">
                    <img src={EggNoHed} width="220" height="220" alt=""/>
                    <h2 className="allow-list--item-title" style={{marginTop: '30px'}}>Generative Traits</h2>
                    <p className="allow-list--item-text">A collab with Chainlink allows for an on-chain, transparent mint through a generative process to build trust within the community.</p>
                    <p className="allow-list--item-text">500+ unique 3D traits fully from ourcollective nostalgia.</p>
                    <p className="allow-list--item-text no-margin">Chainlink VRF (Verifiable Random Function) proves every NFT wallet has an equal opportunity at rare traits.</p>
                </div>
                <div className="allow-list--item">
                    <img src={YxSSneakerUtil} width="220" height="220" alt=""/>
                    <h2 className="allow-list--item-title" style={{marginTop: '30px'}}>Utility</h2>
                    <p className="allow-list--item-text">
                        1. Custom IRL Sneakers to wear<br/>
                        2. 3D Avatar, Metaverse compatible*<br/>
                        3. Origin Collection Perks<br/>
                        4. Community Access & Collab opportunities<br/>
                        5. IP Rights for Commercial use of Avatar*<br/>
                        6. Influence on YxS Decision Making<br/>
                        7. New and Updated NFTs & Avatars<br/>
                        8. Accesss to unique IRL events
                    </p>
                </div>
                <div className="allow-list--item">
                    <img src={Ethereum} width="220" height="220" alt=""/>
                    <h2 className="allow-list--item-title" style={{marginTop: '30px'}}>Ethereum</h2>
                    <p className="allow-list--item-text">YxungSneaks is first deploying on Ethereum and will host the NFT mint currencies of Ether, $USD, and APE Coin.</p>
                    <p className="allow-list--item-text">Chainlink’s Live Pricing Feeds provide all the real time updates, connecting smart contracts to IRL market prices of these assets.</p>
                </div>
                <div className="allow-list--item">
                    <img src={MadeiumLockup} width="220" height="220" alt=""/>
                    <h2 className="allow-list--item-title" style={{marginTop: '30px'}}>NFT Swap Process</h2>
                    <p className="allow-list--item-text">Updated NFTS: Holders will be able to interact with Madeium.com to order IRL shoes and update their YxungSneak 3D avatar artwork with a pair of sneakers on foot.</p>
                    <p className="allow-list--item-text">New NFTs: An additional NFT will be minted to your wallet that governs the IRL pair of shoes. Your kicks are now on-chain and verified authentic.</p>
                </div>
            </div>

            <div className="collection-list">
                <h2 className="collection-list--header">Collection Overview</h2>
                <div className="collection-list--items grid-container-collection">
                    <div className="collection-list--item">
                        <img src={Wizard2} width="350" height="380" alt="" className="collection-img"/>
                        <button
                            type="button"
                            className="button w-button proto-btn proto-001"
                        >
                            Proto 001
                        </button>
                        <img src={Shoes} width="304" height="245" alt=""/>
                        <h2 className="collection-list--item-title" style={{marginTop: '30px'}}>Claim Window<br/>May 2022</h2>
                        <p className="allow-list--item-text">Proto 001 Claim window runs through May 31, 2022</p>
                        <p className="allow-list--item-text">Click Here to Claim your real kicks by completing your order!</p>
                        <p className="allow-list--item-text">1,222 Avatars (of 6,666) will contain variations and colorways of the first shoe. These features themselves will be randomized on mint day.</p>
                        <p className="allow-list--item-text">You will get the physical shoes shipped to you that closely match your YxungSneak.</p>
                        <p className="allow-list--item-text">If you pull the Photo 001, congrats! You will be amongst the first shoes produced and delivered this summer!</p>
                    </div>
                    <div className="width-line"></div>
                    <div className="collection-list--item">
                        <img src={Astronaut3} width="350" height="380" alt="" className="collection-img"/>
                        <button
                            type="button"
                            className="button w-button proto-btn proto-002"
                        >
                            Proto 002
                        </button>
                        <img src={ShoesClaim1} width="249" height="158" alt="" style={{margin: "43px 0"}}/>
                        <h2 className="collection-list--item-title disable-text" style={{marginTop: '30px'}}>Claim Window<br/>June 2022</h2>
                        <p className="allow-list--item-text">Proto 002 Claim window runs June 1 to June 30, 2022</p>
                        <p className="allow-list--item-text">2,222 Avatars (of 6,666) will contain Proto 002, randomly distributed on mint day.</p>
                        <p className="allow-list--item-text">You will get the physical shoes shipped to you that closely match your YxungSneak.</p>
                        <p className="allow-list--item-text">If your YxungSneak is wearing the Photo 002 you are in the second batch being produced and delivered!</p>
                    </div>
                    <div className="width-line"></div>
                    <div className="collection-list--item">
                        <img src={Skeleton2} width="350" height="380" alt="" className="collection-img"/>
                        <button
                            type="button"
                            className="button w-button proto-btn proto-003"
                        >
                            Proto 003
                        </button>
                        <img src={ShoesClaim2} width="252" height="138" alt="" style={{margin: "53px 0"}}/>
                        <h2 className="collection-list--item-title disable-text" style={{marginTop: '30px'}}>Claim Window<br/>July 2022</h2>
                        <p className="allow-list--item-text">Proto 003 Claim window runs July 1 to July 31, 2022</p>
                        <p className="allow-list--item-text">3,222 Avatars (of 6,666) will contain Proto 003, randomly distributed on mint day.</p>
                        <p className="allow-list--item-text">BUT! This sneaker also contains amazing Collabs as super rare versions of Proto 003 are minting containing our friend’s art, logos, and IP!</p>
                        <p className="allow-list--item-text">If your YxungSneak is wearing the Photo 003 you may be last to order this summer, but look out for special perks!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collection;
