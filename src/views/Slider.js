import React, { useEffect, useState } from "react";
import _ from "lodash";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const Slider = () => {
    const [ repeat, setRepeat ] = useState(1);
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        setRepeat(width / 300);
    }, [width]);

    return (
        <section
            className="item repeat section---light join-allow-list wf-section"
        >
            {_.times(repeat, (i) => (
                <span className="p4-up" key={i}>Join the allow list. &nbsp;</span>
            ))}
        </section>
    );
};

export default Slider;
