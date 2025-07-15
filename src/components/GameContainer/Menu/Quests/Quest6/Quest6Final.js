import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedTextComponent from "../../../../AnimatedTextComponent";
import { Link } from "react-router-dom";
import QuestSession from "../../../../QuestSession";

const Quest6Final = () => {
    const texts = [
        "",
        "Bonjour",
        "Qui... qui-êtes... ah c'est toi !?",
        "Tu as fusionné toi aussi...",
        "Tu as remarqué comme les choses étaient différentes !?",
        "Une fois qu'on les avait comprises...",
        "Tu as compris n'est-ce pas !?",
        "J'espère que ton nouveau toi t'aidera à avancer à l'avenir",
        "Car ta quête est à présent terminée.",
        "D'ailleurs...",
        "Qu'as-tu retenu de toute cette aventure ?"
    ]

    
    const [showButton, setShowButton] = useState(false);
    const { completeQuest, setQuestResult } = QuestSession();
    
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        // Fonction pour passer au texte suivant après la fin de l'animation
        const nextText = () => {
            if (currentTextIndex < texts.length - 1) {
                setTimeout(() => {
                    setCurrentTextIndex(currentTextIndex + 1);
                }, 4500);
            } else {
                setTimeout(() => {
                    completeQuest(5);
                    setQuestResult(5, 'Absurdum');
                    setShowButton(true);
                }, 4000);
            }
        };

        // Appeler la fonction pour passer au texte suivant après la fin de l'animation
        nextText();

        return () => clearTimeout();
    }, [currentTextIndex, texts.length, showButton]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                transition={{ duration: 1 }}
                style={{ height: '100vh', backgroundColor: 'black', position: 'sticky' }}
            >
                <div>
                    <div
                        className="quest3-intro"
                        style={{
                            position: 'absolute',
                            top: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            zIndex: -1,
                        }}
                    >
                    </div>
                    <div style={{ width: "50%", height: 'calc(100vh - 100%)', }} className="intro3-text-container">
                        <div className="animated-text-container" style={{
                            backgroundColor: 'transparent',
                            fontSize: '6em',
                            display: 'flex',
                            justifyContent: 'space-around',
                            height: '100vh'
                        }}>
                            <AnimatedTextComponent
                                key={currentTextIndex}
                                text={texts[currentTextIndex]}
                            />
                            <div style={{
                                height: '50vh',
                                display: 'flex',
                                justifyContent: 'space-around',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                                {showButton && (
                                    <Link
                                        to="/absurdum"
                                        className='custom-quest1-btn-gold'
                                        style={{ fontSize: "25px" }}
                                    >
                                        Rien
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Quest6Final;