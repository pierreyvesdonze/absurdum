import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedTextComponent from "../../../../AnimatedTextComponent";
import TextsComponent from "./Quest1ImmortalText";
import { Button } from "@mui/material";
import QuestSession from "../../../../QuestSession";

const Quest1Immortal = () => {
    const texts = TextsComponent();
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const { completeQuest, setQuestResult } = QuestSession();

    // On set la quête terminée + le status du joueur
    completeQuest(0);
    setQuestResult(0, 'Immortalis');

    useEffect(() => {
        animateText();
    }, [currentTextIndex]);

    const animateText = () => {
        setShowButton(true)
    };

    // Passe au texte suivant et vérifie si le prochain index existe
    // Si non on redirige
    const handleButtonClick = (nextIndex, label) => {
        console.log(label)
        setCurrentTextIndex(nextIndex);
        setShowButton(false);
    };

    // On set à -1 pour éviter le démontage du composant avant la redirection
    useEffect(() => {
        if (currentTextIndex === texts.length - 1) {
            window.location.href = "/absurdum#/absurdum";
        }
    }, [currentTextIndex, texts.length]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                transition={{ duration: 1 }}
                style={{ height: '100vh', backgroundColor: 'black', position: 'sticky' }}
            >
                <div style={{ width: "100%", height: '100vh', backgroundColor: 'black', display: 'flex' }}>
                    <div style={{ width: '40%' }}>
                        <div className="immortal-creature-container"></div>
                    </div>
                    <div className="animated-text-container" style={{
                        backgroundColor: 'transparent',
                        fontSize: '6em',
                        justifyContent: 'space-evenly',
                        width: '60%'
                    }}>
                        <AnimatedTextComponent key={currentTextIndex} text={texts[currentTextIndex].text} />
                        <div>
                            {showButton && texts[currentTextIndex].buttons.map((button, index) => (
                                <Button
                                    variant="soft"
                                    color="neutral"
                                    className="custom-white-btn"
                                    key={index}
                                    style={{ fontSize: "25px", margin: '10px' }}
                                    sx={{
                                        '&:hover': {
                                            border: 'solid 1px white'
                                        }
                                    }}
                                    onClick={() => handleButtonClick(button.nextIndex, button.label)}
                                >
                                    {button.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Quest1Immortal;