import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Quest2Cancel = () => {

    // État local pour stocker le score
    const [score, setScore] = useState(150);
    const navigate          = useNavigate();

    // Fonction pour modifier le score et terminer le niveau
    const updateScore = (value) => {
        setScore(score + value);
        if (score + value === 0) {
            navigate('/tempus/clock');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
                width: "100%",
                height: "100vh",
                color: "black",
                display: "flex",
                flexDirection: 'column',
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: "white"
            }}
        >
            <h1 className="big-time">{score}</h1>
            <h4>(Obtenir 0)</h4>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '60%'
            }}>
                <Button sx={{ fontSize: '2em', color: 'black' }} onClick={() => updateScore(90)}>+90</Button>
                <Button sx={{ fontSize: '2em', color: 'black' }} onClick={() => updateScore(-20)}>-20</Button>
                <Button sx={{ fontSize: '2em', color: 'black' }} onClick={() => updateScore(40)}>+40</Button>
                <Button sx={{ fontSize: '2em', color: 'black' }} onClick={() => updateScore(17)}>+17</Button>
                <Button sx={{ fontSize: '2em', color: 'black' }} onClick={() => updateScore(-70)}>-70</Button>
                <Button sx={{ fontSize: '2em', color: 'black' }} onClick={() => updateScore(28)}>+28</Button>
                <Button sx={{ fontSize: '2em', color: 'black' }} onClick={() => updateScore(21)}>21</Button>
                <Button sx={{ fontSize: '2em', color: 'black' }} onClick={() => updateScore(-25)}>-25</Button>
                <Button sx={{ fontSize: '2em', color: 'black' }} onClick={() => updateScore(-13)}>-13</Button>
                <Button sx={{ fontSize: '2em', color: 'black' }} onClick={() => updateScore(-45)}>-45</Button>
                <Button sx={{ fontSize: '2em', color: 'black' }} onClick={() => updateScore(-60)}>-60</Button>
                <Button sx={{ fontSize: '2em', color: 'black' }} onClick={() => updateScore(-48)}>-48</Button>
            </div>
        </motion.div>
    );
};

export default Quest2Cancel;