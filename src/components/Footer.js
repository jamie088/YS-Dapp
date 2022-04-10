import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="section---light demo-4---footer section-4 wf-section">
            <div className="follow-footer">
                <p className='footer-header'>Follow Our Twitter To Get The News As Soon As It Breaks And Join Our Discord To Get All The Project News.</p>
                <div className='space-between'>
                    <button className='follow-btn'>Follow Twitter</button>
                    <button className='follow-btn'>Join Discord</button>
                    <button className='follow-btn'>Follow Instagram</button>
                </div>
                <button className='follow-btn join-allow-list-btn'>Join the Yxung-Sneaks Allow List</button>
                <p className='footer-text'>YxungTM & Yxung-Sneaks are registered trademarks of Madeium Inc.<br/>Website by <span className='text-underline'>Madeium</span> + <span className='text-underline'>Boarderless Blockchain Alliance</span></p>
            </div>
            <div className='join-footer'>
                <p className='footer-header'>Joint Yxung-Sneaks</p>
                <a href="##" className='join-footer-community'>Discord</a>
                <a href="##" className='join-footer-community'>Twitter</a>
                <a href="##" className='join-footer-community'>Instagram</a>
                <a href="##" className='join-footer-community'>Madeium</a>
                <a href="##" className='join-footer-community'>Madeium Twitter</a>
                <span className='span-underline'/>
                <NavLink to="../provableFairness" exact className="join-footer-community" activeClassName='is-active'>
                    Provable Fairness
                </NavLink>
                <NavLink to="../privacy" exact className="join-footer-community" activeClassName='is-active'>
                    Terms & Conditions
                </NavLink>
            </div>
        </div>
    );
};

export default Footer;