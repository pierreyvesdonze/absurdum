import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Quest2TimerItem from "./Quest2TimerItem";
import { useNavigate } from "react-router-dom";

const Quest2Timer = () => {
    const [seconds, setSeconds]   = useState(10);
    const [isActive, setIsActive] = useState(true);
    const [symbols, setSymbols]   = useState(["🗙", "🗙", "🗙", "🗙", "🗙", "🗙", "🗙", "🗙"]);
    const combination             = ["△", "☐", "◯", "🗙", "◯", "△", "△", "◯"];
    const navigate                = useNavigate();

    useEffect(() => {
        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000); // Mettre à jour chaque seconde
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    // Séquence de changement de symboles au clique
    const handleClick = (index) => {
        const newSymbols = [...symbols];
        if (newSymbols[index] === "🗙") {
            newSymbols[index] = "☐";
        } else if (newSymbols[index] === "☐") {
            newSymbols[index] = "◯";
        } else if (newSymbols[index] === "◯") {
            newSymbols[index] = "△";
        } else {
            newSymbols[index] = "🗙";
        }
        setSymbols(newSymbols);
    };

    const checkWin = () => {
        for (let i = 0; i < symbols.length; i++) {
            if (symbols[i] !== combination[i]) {
                return false;
            }
        }
        return true;
    };

    useEffect(() => {   
        if (seconds <= 0) {
            setIsActive(false);
            if (!checkWin()) {
                // Perdu
                return navigate('/tempus/intro');
            }
        } else if (checkWin()) {
            setIsActive(false);
            // Gagné
            return navigate('/tempus/cancel');
        }
    
    })

    const renderSymbolsCombination = () => {
        return combination.map((symbol, index) => (
            <div
                key={index}
                style={{
                    display: "inline-block",
                    marginRight: "10px",
                    fontSize: "2em",
                    userSelect: 'none'
                }}
            >
                {symbol}
            </div>
        ));
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
                width: "100%",
                height: "100vh",
                color: "white",
                display: "flex",
                flexDirection: 'column',
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: "black"
            }}
        >
            <Quest2TimerItem seconds={seconds} />
            <div style={{ color: "white", marginBottom: "20px" }}>
                {renderSymbolsCombination()}
            </div>
            <div style={{ marginBottom: "20px" }}>
                {symbols.map((symbol, index) => (
                    <div
                        key={index}
                        style={{
                            display: "inline-block",
                            width: "40px",
                            height: "40px",
                            fontSize: "2em",
                            textAlign: "center",
                            lineHeight: "40px",
                            marginRight: "10px",
                            cursor: "pointer",
                            userSelect: 'none'
                        }}
                        onClick={() => handleClick(index)}
                    >
                        {symbol}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Quest2Timer;
