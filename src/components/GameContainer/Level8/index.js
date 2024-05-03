import React, { useState, useEffect } from "react";
import RainDrop from "./RainDrop";
import RainSound from "./RainSound";
import Intro from "./Intro";
import Outro from "./Outro";
import { Fade } from "@mui/material";

const Level8 = () => {
    const [informationVisible, setInformationVisible] = useState(false)
    const [introVisible, setIntroVisible] = useState(true);

    const handleIntroClick = () => {
        setIntroVisible(false); 
    };

    useEffect(() => {
        setTimeout(() => {
            setInformationVisible(true)
            setIntroVisible(false)
        }, 6000);
    })

    return (
        <Fade in={true} timeout={800}>
            <div className="black-bg">
                {introVisible && <Intro onClick={handleIntroClick} />}
                <RainSound />
                <RainDrop />
                <div className="rain-container">
                    {informationVisible && (
                        <Outro />
                    )}
                </div>
            </div>
        </Fade>
    );
}

export default Level8;