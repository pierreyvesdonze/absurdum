import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from 'react-router-dom';
import AnimatedTextComponent from '../../../../AnimatedTextComponent';
import QuestSession from "../../../../QuestSession";

const OutroQuest1Rich = () => {
    const navigate                          = useNavigate();
    const location                          = useLocation();
    const { completeQuest, setQuestResult } = QuestSession();
    const basket                            = location.state.basket;

    const texts = [
        "",
        "Avec ta détermination, ton sens de l'analyse et ta soif de pouvoir",
        "Avec tes " + basket + " pièces... tu as bâti un empire",
        "Une richesse dont toute une communauté profite et s'enrichit",
        "Grâce à toi, le bonheur se reflète dans les éclats de l'or",
        "Mais ce bonheur va t-il durer ?",
    ]

    // Set la décision de l'utilisateur en session
    setQuestResult(0, 'Rich');

    // Marque la quête comme terminée
    completeQuest(0);

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
        <div className={`quest-container outro-rich`}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 4 }}
                    className="quest-1-container"
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

export default OutroQuest1Rich;
