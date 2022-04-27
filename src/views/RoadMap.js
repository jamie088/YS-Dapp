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
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>@JRad_Maker</h2>
                        <p className="roadmap-list--item-text">Aritatquia dolupta eratem volorenisti intia estin etur, quibus ad ut hitem atem.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person2} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>@seanpaultv</h2>
                        <p className="roadmap-list--item-text">Aritatquia dolupta eratem volorenisti intia estin etur, quibus ad ut hitem atem.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person3} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>@gitknocked</h2>
                        <p className="roadmap-list--item-text">Aritatquia dolupta eratem volorenisti intia estin etur, quibus ad ut hitem atem.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person4} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>@eitow</h2>
                        <p className="roadmap-list--item-text">Aritatquia dolupta eratem volorenisti intia estin etur, quibus ad ut hitem atem.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person5} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>@tylerpenning</h2>
                        <p className="roadmap-list--item-text">Aritatquia dolupta eratem volorenisti intia estin etur, quibus ad ut hitem atem.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person6} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>@tylerpenning</h2>
                        <p className="roadmap-list--item-text">Aritatquia dolupta eratem volorenisti intia estin etur, quibus ad ut hitem atem.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person7} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>@eitow</h2>
                        <p className="roadmap-list--item-text">Aritatquia dolupta eratem volorenisti intia estin etur, quibus ad ut hitem atem.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person8} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>@tylerpenning</h2>
                        <p className="roadmap-list--item-text">Aritatquia dolupta eratem volorenisti intia estin etur, quibus ad ut hitem atem.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={Person9} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>@jacquie_rad</h2>
                        <p className="roadmap-list--item-text">Aritatquia dolupta eratem volorenisti intia estin etur, quibus ad ut hitem atem.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadMap;
