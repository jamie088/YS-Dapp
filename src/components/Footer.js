import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="section---light demo-4---footer section-4 wf-section">
            <div className="follow-footer">
                <p className='footer-header'>Follow Our Twitter To Get The News As Soon As It Breaks And Join Our Discord To Get All The Project News.</p>
                <div className='space-between'>
                    <button type="button" className='follow-btn'>
                        <a href="https://twitter.com/YxungSneaks" target="_blank" rel="noreferrer" className='follow-a'>Follow Twitter</a>
                    </button>
                    <button type="button" className='follow-btn'>
                        <a href="https://discord.gg/eHgFqmm2" target="_blank" rel="noreferrer" className='follow-a'>Join Discord</a>
                    </button>
                    <button type="button" className='follow-btn'>
                        <a href="https://www.instagram.com/yxungsneaks/" target="_blank" rel="noreferrer" className='follow-a'>Follow Instagram</a>
                    </button>
                </div>
                <button type="button" className='follow-btn join-allow-list-btn'>Join the Yxung-Sneaks Allow List</button>
                <p className='footer-text'>YxungTM & Yxung-Sneaks are registered trademarks of Madeium Inc.<br/>Website by <span className='text-underline'>Madeium</span> + <span className='text-underline'>Boarderless Blockchain Alliance</span></p>
            </div>
            <div className='join-footer'>
                <p className='footer-header'>Join Yxung-Sneaks</p>
                <a href="https://discord.gg/eHgFqmm2" target="_blank" rel="noreferrer" className='join-footer-community'>Discord</a>
                <a href="https://twitter.com/YxungSneaks" target="_blank" rel="noreferrer" className='join-footer-community'>Twitter</a>
                <a href="https://www.instagram.com/yxungsneaks/" target="_blank" rel="noreferrer" className='join-footer-community'>Instagram</a>
                <a href="##" target="_blank" rel="noreferrer" className='join-footer-community'>Madeium</a>
                <a href="##" target="_blank" rel="noreferrer" className='join-footer-community'>Madeium Twitter</a>
                <span className='height-line'/>
                {/* <NavLink to="../provableFairness" exact className="join-footer-community" activeClassName='is-active'>
                    Provable Fairness
                </NavLink>
                <NavLink to="../privacy" exact className="join-footer-community" activeClassName='is-active'>
                    Terms & Conditions
                </NavLink> */}
            </div>
        </div>
    );
};

export default Footer;