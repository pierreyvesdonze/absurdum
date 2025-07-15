import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedTextComponent from '../../../../AnimatedTextComponent';
import { Link } from "react-router-dom";

const Quest1Savior = () => {

    const texts = [
        "",
        "Voici Carinatris",
        "Carinatris est une créature incomprise et ambivalente",
        "Sous son air adorable, Carinatris dévore les âmes, pures et impures, en grande quantité",
        "Elle ne connait pas la pitié et n'a besoin de personne",
        "Sans Carinatris, bien des âmes seraient épargnées",
        "Mais sans Carinatris, le monde sombrerait dans un chaos certain",
        "Carinatris est mourante, faut-il la sauver ?",
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
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="quest1-savior"
            >
                <div className="animated-text-container" style={{ backgroundColor: 'transparent' }}>
                    <AnimatedTextComponent key={currentTextIndex} text={texts[currentTextIndex]} />
                    {showButton && (
                        <div style={{
                            height: '222px',
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '50%'
                        }}>
                            <>
                                <Link
                                    to={"/outroquest1"} state={{ userChoice: 'savior' }}
                                    className='custom-quest1-btn-gold'
                                >
                                    Sauver Carinatris
                                </Link>
                                <Link
                                    to={"/outroquest1"} state={{ userChoice: 'murderer' }} className='custom-quest1-btn-gold'>
                                    Laisser Carinatris
                                </Link>
                            </>
                        </div>
                    )}
                </div>
            </motion.div>
        </AnimatePresence >
    )
}

export default Quest1Savior;