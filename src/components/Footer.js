import React from 'react';
import { NavLink } from "react-router-dom";
import Discord2 from '../images/discord-2.svg';
import Twitter from '../images/twitter1-p-500.png';
import Instagram from '../images/2000px-Instagram_simple_icon.svg-p-1600.png';

const Footer = () => {
    return (
        <div className="section---light demo-4---footer section-4 wf-section">
            <div className="container footer container-footer">
                <div className="demo-4---footer-links-contain">
                    <div className="demo-4---footer-link-wrap">
                        <a href="../#Home" className="demo-4---footer-link">Home</a>
                        <a href="../#Antara" className="demo-4---footer-link">Antara</a>
                        <a href="../#Sizzle" className="demo-4---footer-link">Sizzle</a>
                        <NavLink to="/privacy" className="demo-4---footer-link" activeClassName='is-active'>
                            Privacy Policy
                        </NavLink>
                    </div>
                    <div className="footer-social-wrap demo-4">
                        <a href="https://discord.gg/bcY9thmKy4" target="_blank" className="social-media-link demo-4 w-inline-block" rel="noreferrer"><img src={Discord2} width="20" alt="" className="image-3"/></a>
                        <a href="https://twitter.com/ArabianCamels" target="_blank" className="social-media-link demo-4 w-inline-block" rel="noreferrer"><img src={Twitter} width="20" alt=""/></a>
                        <a href="https://instagram.com/arabiancamelsnft" target="_blank" className="social-media-link demo-4 w-inline-block" rel="noreferrer"><img src={Instagram} width="16" alt=""/></a>
                    </div>
                </div>
                <div className="demo-4---copyrights-wrap">
                    <div className="copyrights-text demo-4">
                        <a href="#" className="copyrights-link---dark-text">© Copyright 2021 | Arabian Camels</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;