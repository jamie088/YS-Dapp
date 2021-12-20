import React from "react";
import roadMapImg from "../images/road_map.png";

const RoadMap = () => {
    return (
        <section
            id="RoadMap"
            className="section---light movie nftform wf-section"
        >
            <h1 className="style-2---h1 road-map">Road Map</h1>
            <div className="container yt">
                <img src={roadMapImg} alt=""/>
            </div>
        </section>
    );
};

export default RoadMap;
