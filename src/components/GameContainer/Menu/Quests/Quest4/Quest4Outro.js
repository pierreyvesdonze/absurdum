import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedTextComponent from "../../../../AnimatedTextComponent";
import { Link } from "react-router-dom";
import QuestSession from "../../../../QuestSession";

const Quest4Outro = () => {
    const { completeQuest, setQuestResult } = QuestSession();
    const texts = [
        "Coinnnn coin coin coin coin coin coin quoi quoi quoi quoi quoiiii ?",
        "Qu'est-ce que tu me veux ? Pourquoi tu viens me déranger ? Je prenais mon bain.",
        "...",
        "Bon j'imagine que si tu es arrivé(e) jusqu'ici, c'est que ta détermination est sans faille.",
        "Cependant je ne peux... Coin coin coinnnnnn",
        "Pardon, ça me fait ça tout le temps.",
        "Je disais donc, je ne peux pas te donner le mot de passe pour la prochaine quête.",
        "Le mot de passe c'est 42.",
        "Ahhhhh je te l'ai donné Coinnnn coin coin coin",
        "Bon laisse-moi tranquille maintenant, sinon mon bain va se réchauffer.",
        "Ne me remercie pas."
    ]

    const [showButton, setShowButton] = useState(false);

    // État local pour suivre l'index du texte actuellement affiché
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
                    setShowButton(true);
                }, 4000);
            }
        };

        // Appeler la fonction pour passer au texte suivant après la fin de l'animation
        nextText();

        return () => clearTimeout();
    }, [currentTextIndex, texts.length, showButton]);

    completeQuest(3);
    setQuestResult(3, 'Monstrum');

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
                        className="quest4-outro"
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
                    <div style={{ width: "50%", height: 'calc(100vh - 100%)', backgroundColor: '#00000075' }} >
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
                                        Merci
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

export default Quest4Outro;