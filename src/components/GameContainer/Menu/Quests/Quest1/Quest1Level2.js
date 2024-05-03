import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { VpnKey, Key } from "@mui/icons-material";

const Quest1Level2 = ({ onComplete }) => {
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        generateIcons();
    }, []);

    const generateIcons = () => {
        const iconsList = [];
        const totalIcons = 400; // Nombre total d'icônes Key

        // Génération des icônes Key
        for (let i = 0; i < totalIcons; i++) {
            iconsList.push({ type: "Key", index: i });
        }

        // Positionnement aléatoire de l'icône "VpnKey"
        const randomIndex = Math.floor(Math.random() * totalIcons);
        iconsList[randomIndex] = { type: "VpnKey", index: randomIndex };

        setIcons(iconsList);
    };

    const handleClick = (index) => {
        if (icons[index].type === "VpnKey") {
            onComplete();
        }
    };

    return (
        <div className="keys-container">
            {icons.map((icon, index) => (
                <div key={index} className="icon-wrapper">
                    {icon.type === "VpnKey" ? (
                        <IconButton onClick={() => handleClick(index)}>
                            <VpnKey />
                        </IconButton>
                    ) : (
                        <IconButton onClick={() => handleClick(index)}>
                            <Key />
                        </IconButton>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Quest1Level2;
