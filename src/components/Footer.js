import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="section---light demo-4---footer section-4 wf-section">
            <div className="follow-footer">
                <p className='footer-header'>Follow Our Twitter To Get The News As Soon As It Breaks And Join Our Discord To Get All The Project News.</p>
                <div className='grid-3fr'>
                    <a href="https://twitter.com/YxungSneaks" target="_blank" rel="noreferrer" className='follow-a'>
                        <button type="button" className='follow-btn'>
                            Follow Twitter
                        </button>
                    </a>
                    <a href="https://discord.gg/eHgFqmm2" target="_blank" rel="noreferrer" className='follow-a'>
                        <button type="button" className='follow-btn'>
                            Join Discord
                        </button>
                    </a>
                    <a href="https://www.instagram.com/yxungsneaks/" target="_blank" rel="noreferrer" className='follow-a'>
                        <button type="button" className='follow-btn'>
                            Follow Instagram
                        </button>
                    </a>
                </div>
                <a href="https://twitter.com/YxungSneaks" target="_blank" rel="noreferrer" className='follow-a'>
                    <button type="button" className='follow-btn join-allow-list-btn'>
                        Join the Yxung-Sneaks Allow List
                    </button>
                </a>
                <p className='footer-text'>YxungTM & Yxung-Sneaks are registered trademarks of Madeium Inc.<br/>Website by <a href="https://madeium.com/" target="_blank" rel="noreferrer" className='text-underline'>Madeium</a> + <a href="https://blockei.io/" target="_blank" rel="noreferrer" className='text-underline'>Borderless Blockchain Alliance</a></p>
            </div>
            <div className='join-footer'>
                <p className='footer-header'>Join Yxung-Sneaks</p>
                <a href="https://discord.gg/eHgFqmm2" target="_blank" rel="noreferrer" className='join-footer-community'>Discord</a>
                <a href="https://twitter.com/YxungSneaks" target="_blank" rel="noreferrer" className='join-footer-community'>Twitter</a>
                <a href="https://www.instagram.com/yxungsneaks/" target="_blank" rel="noreferrer" className='join-footer-community'>Instagram</a>
                <a href="https://www.madeium.com/" target="_blank" rel="noreferrer" className='join-footer-community'>Madeium</a>
                <a href="https://twitter.com/madeiummade" target="_blank" rel="noreferrer" className='join-footer-community'>Madeium Twitter</a>
                <span className='height-line'/>
                {/* <NavLink to="../provableFairness" exact className="join-footer-community" activeClassName='is-active'>
                    Provable Fairness
                </NavLink>
                <NavLink to="../privacy" exact className="join-footer-community" activeClassName='is-active'>
                    Terms & Conditions
                </NavLink> */}
                <a href="https://www.iubenda.com/privacy-policy/75098772" target="_blank" rel="noreferrer" className='join-footer-community'>Privacy Policy</a>
                <NavLink to="../terms" exact className="join-footer-community" activeClassName='is-active'>
                    Terms of Use
                </NavLink>
            </div>
        </div>
    );
};

export default Footer;