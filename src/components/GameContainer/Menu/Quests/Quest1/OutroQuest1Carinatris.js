import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from 'react-router-dom';
import AnimatedTextComponent from '../../../../AnimatedTextComponent';
import QuestSession from "../../../../QuestSession";

const OutroQuest1Carinatris = () => {
    const navigate                          = useNavigate();
    const location                          = useLocation();
    const userChoice                        = location.state.userChoice
    const { completeQuest, setQuestResult } = QuestSession();

    const textsSavior = [
        "",
        "Carinatris est sauvée grâce à toi",
        "Elle continuera de dévorer des âmes à la pelle...",
        "Et probablement la tienne",
        "Mais grâce à toi l'équilibre dominera l'ambiance universelle",
        "Peut-être as-tu sauvé de nombreuses âmes ?",
    ]
    const textsMurderer = [
        "",
        "Carinatris n'est plus !",
        "De nombreuses âmes ont été épargnées",
        "Mais pas la tienne",
        "Ni celles de nombreuses espèces",
        "Car désormais, le chaos règne en maître."
    ]

    const texts = userChoice === 'savior' ? textsSavior : textsMurderer;
    
    // Set la décision de l'utilisateur en session
    userChoice === 'savior' ? setQuestResult(0, 'Salvator') : setQuestResult(0, 'Assassinus');

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
        <div className={`quest-container${location.state.userChoice === 'savior' ? '-savior' : '-murderer'}`}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
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

export default OutroQuest1Carinatris;
