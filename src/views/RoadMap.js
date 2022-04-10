import React from "react";
import EmptyPhoto from "../images/image/empty-photo.png";

const RoadMap = () => {
    return (
        <section
            id="RoadMap"
            className="section---light roadmap-trust-lists wf-section"
        >
            <div className="roadmap-list">
                <h2 className="roadmap-list--header">Zero Roadmap<br/>Trust.</h2>
                <div className="roadmap-list--items grid-container">
                    <div className="roadmap-list--item">
                        <img src={EmptyPhoto} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>@JRad_Maker</h2>
                        <p className="roadmap-list--item-text">Aritatquia dolupta eratem volorenisti intia estin etur, quibus ad ut hitem atem.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={EmptyPhoto} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>@seanpaultv</h2>
                        <p className="roadmap-list--item-text">Aritatquia dolupta eratem volorenisti intia estin etur, quibus ad ut hitem atem.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={EmptyPhoto} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>@gitknocked</h2>
                        <p className="roadmap-list--item-text">Aritatquia dolupta eratem volorenisti intia estin etur, quibus ad ut hitem atem.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={EmptyPhoto} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>@eitow</h2>
                        <p className="roadmap-list--item-text">Aritatquia dolupta eratem volorenisti intia estin etur, quibus ad ut hitem atem.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={EmptyPhoto} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>@tylerpenning</h2>
                        <p className="roadmap-list--item-text">Aritatquia dolupta eratem volorenisti intia estin etur, quibus ad ut hitem atem.</p>
                    </div>
                    <div className="roadmap-list--item">
                        <img src={EmptyPhoto} width="216" height="216" alt=""/>
                        <h2 className="roadmap-list--item-title" style={{marginTop: '30px'}}>@jacquie_rad</h2>
                        <p className="roadmap-list--item-text">Aritatquia dolupta eratem volorenisti intia estin etur, quibus ad ut hitem atem.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadMap;
