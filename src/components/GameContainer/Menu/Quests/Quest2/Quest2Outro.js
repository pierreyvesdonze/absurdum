import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import AnimatedTextComponent from '../../../../AnimatedTextComponent';
import QuestSession from "../../../../QuestSession";

const Quest2Outro = () => {
    const navigate                          = useNavigate();
    const { completeQuest, setQuestResult } = QuestSession();

    const texts = [
        "Le temps, comme le vent, souffle à travers les royaumes et les âges.",
        "Il est le témoin silencieux de nos victoires et de nos défaites, de nos joies et de nos peines.",
        "C'est nous qui conférons au temps son sens",
    ]
    
    // Set le status du joueur en session
    setQuestResult(1, 'Tempus');

    // Marque la quête comme terminée
    completeQuest(1);

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const nextText = () => {
            if (currentTextIndex < texts.length - 1) {
                setTimeout(() => {
                    setCurrentTextIndex(currentTextIndex + 1);
                }, 4500);
            } else {
                setTimeout(() => {
                    navigate('/absurdum');
                }, 4000);
            }
        };

        nextText();

        return () => clearTimeout();
    }, [currentTextIndex, texts.length]);

    return (
        <div className={`quest-container`} style={{ backgroundColor: 'black' }}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className={`animated-text-container`}
                        style={{ backgroundColor: 'transparent' }}>
                        <AnimatedTextComponent key={currentTextIndex} text={texts[currentTextIndex]} />
                        <div style={{
                            height: '222px',
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '50%'
                        }}>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Quest2Outro;
