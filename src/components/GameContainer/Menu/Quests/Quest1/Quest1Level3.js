import { Slide } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Quest1Level3 = () => {

    return (
        <div className="quest1-lvl3-container">
            <div className="doors-link-container">
                <Slide in={true} direction="left" mountOnEnter unmountOnExit timeout={800}>
                    <Link to='/savior' className="custom-quest1-btn">Aider</Link>
                </Slide>
                <Slide in={true} direction="left" mountOnEnter unmountOnExit timeout={1200}>
                    <Link to='/rich' className="custom-quest1-btn-gold">S'aider</Link>
                </Slide>
                <Slide in={true} direction="left" mountOnEnter unmountOnExit timeout={1700}>
                    <Link to='/helpme' className="custom-quest1-btn">Être aidé</Link>
                </Slide>
            </div>
        </div>
    )
}

export default Quest1Level3;