import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedTextComponent from "../../../../AnimatedTextComponent";
import { Link } from "react-router-dom";

const Quest3Intro = () => {
    const texts = [
        "",
        "Bonjour",
        "C'est gentil de venir me voir",
        "Je m'appelle Mauricius.",
        "Ne te fie pas à mon apparence, je sais que je fais peur en pyjama",
        "Dans ce jeu non plus tu ne devras pas te fier aux apparences...",
        "Car la perception et les émotions sont propres à chacun.",
        "Là par exemple tu vois deux cornes sur ma tête",
        "Alors que ce sont des doigts de tête",
        "Mais bon. Tu veux peut-être jouer ? Je vais te laisser jouer.",
        "",
        "Ah oui le bouton",
        "Le voilà",
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
                                        to="/affectus/affectus"
                                        className='custom-quest1-btn-gold'
                                        style={{ fontSize: "25px" }}
                                    >
                                        Jouer
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

export default Quest3Intro;