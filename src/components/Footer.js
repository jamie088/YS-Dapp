import React from 'react';
import MapIcon from '../images/Map-Icon-Blue.svg';
import Discord from '../images/discord.svg';
import Discord2 from '../images/discord-2.svg';
import Twitter from '../images/twitter1-p-500.png';
import Instagram from '../images/2000px-Instagram_simple_icon.svg-p-1600.png';

const Footer = () => {
    return (
        <div className="section---light demo-4---footer section-4 wf-section">
            <div className="container footer">
                <div className="w-layout-grid demo-4---contact-grid">
                    <div id="w-node-_438c5c09-0ece-e264-a37a-6973db1e8565-db1e855f" className="demo-4---grid-block contact">
                        <h2 className="style-2---h2 white-text">Contact</h2>
                        <div className="demo-4---contact-title">Enquiries</div>
                        <div className="demo-4---contact-wrap"><img src={MapIcon} loading="lazy" width="24" alt="" className="contact-icon"/>
                            <a href="#" className="demo-4---contact-link">For Media and Press Enquiries – press@arabiancamels.io</a>
                        </div>
                        <div className="demo-4---contact-wrap"><img src={MapIcon} loading="lazy" width="24" alt="" className="contact-icon"/>
                            <a href="#" className="demo-4---contact-link">For Collaborations and Partnerships – collabs@arabiancamels.io</a>
                        </div>
                        <div className="_40px-height-div"></div>
                        <div className="demo-4---contact-title">Contact Us</div>
                        <div className="demo-4---contact-wrap"><img src={MapIcon} loading="lazy" width="24" alt="" className="contact-icon"/>
                            <a href="#" className="demo-4---contact-link">Please write to us at info@arabiancamels.io</a>
                        </div>
                        <div className="demo-4---contact-wrap"><img src={Discord} loading="lazy" width="24" alt="" className="contact-icon"/>
                            <a href="#" className="demo-4---contact-link">or hit us up on the Discord</a>
                        </div>
                    </div>
                </div>
                <div className="demo-4---footer-links-contain">
                    <div className="demo-4---footer-link-wrap">
                        <a href="#section-1" className="demo-4---footer-link">Home</a>
                        <a href="#Antara" className="demo-4---footer-link">Antara</a>
                        <a href="#Sizzle" className="demo-4---footer-link">Sizzle</a>
                        <a href="../privacy-policy.html" className="demo-4---footer-link">Privacy Policy</a>
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