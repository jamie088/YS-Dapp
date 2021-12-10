import React from 'react';
import MapIcon from '../images/Map-Icon-Blue.svg';
import Discord from '../images/discord.svg';

const Contact = () => {
    return (
        <div className="section---light demo-4---footer section-4 wf-section">
            <div className="container footer">
                <div className="w-layout-grid demo-4---contact-grid">
                    <div id="w-node-_438c5c09-0ece-e264-a37a-6973db1e8565-db1e855f" className="demo-4---grid-block contact">
                        <h2 className="style-2---h2 white-text">Contact</h2>
                        <div className="demo-4---contact-title">Enquiries</div>
                        <div className="demo-4---contact-wrap"><img src={MapIcon} loading="lazy" width="24" alt="" className="contact-icon"/>
                            <a className="demo-4---contact-link">For Media and Press Enquiries – press@arabiancamels.io</a>
                        </div>
                        <div className="demo-4---contact-wrap"><img src={MapIcon} loading="lazy" width="24" alt="" className="contact-icon"/>
                            <a className="demo-4---contact-link">For Collaborations and Partnerships – collabs@arabiancamels.io</a>
                        </div>
                        <div className="_40px-height-div"></div>
                        <div className="demo-4---contact-title">Contact Us</div>
                        <div className="demo-4---contact-wrap"><img src={MapIcon} loading="lazy" width="24" alt="" className="contact-icon"/>
                            <a className="demo-4---contact-link">Please write to us at info@arabiancamels.io</a>
                        </div>
                        <div className="demo-4---contact-wrap"><img src={Discord} loading="lazy" width="24" alt="" className="contact-icon"/>
                            <a className="demo-4---contact-link">or hit us up on the Discord</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;