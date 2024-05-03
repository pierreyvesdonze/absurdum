import React, { useState, useEffect } from "react";
import videoSource from '../videos/creature-glitch.mp4';
import { AnimatePresence, motion } from "framer-motion";
import AnimatedTextComponent from "../../../../AnimatedTextComponent";
import { Link } from "react-router-dom";

const Quest1HelpMe = () => {
    const texts = [
        "",
        "Bajour",
        "...",
        "JE",
        "#6004à@x___-__-(",
        "Trouvé pas bien",
        "🍒",
        "trouvé mieux _-_",
        "souviens pas...",
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
                unmountOnExit
            >
                <div>
                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            position: 'absolute',
                            top: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            zIndex: -1,
                        }}
                    >
                        <source src={videoSource} type="video/mp4" />
                    </video>

                    <div style={{ zIndex: 1, display: 'flex' }}>
                        <div style={{
                            width: "60%",
                            height: '100vh',
                        }}>
                        </div>
                        <div style={{ width: "25%", height: 'calc(100vh - 100%)', }}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 1 } }}
                                transition={{ duration: 60 }}
                                style={{ backgroundColor: 'transparent' }}
                            >
                                <h1 className="quest-white-title" style={{ color: 'white', textAlign: 'center' }}>Besoin d'aide</h1>
                            </motion.div>

                            <div className="animated-text-container" style={{ backgroundColor: 'transparent', fontSize: '6em', justifyContent: 'center' }}>
                                <AnimatedTextComponent
                                    key={currentTextIndex}
                                    text={texts[currentTextIndex]} />
                                {showButton && (
                                    <div style={{
                                        height: '222px',
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: '50%'
                                    }}>
                                        <Link 
                                        to="/immortal"
                                        className='custom-quest1-btn-gold'
                                        style={{ fontSize: "25px" }}
                                        >
                                            HELP
                                        </Link>
                                        <Link 
                                        to="/immortal"
                                        className='custom-quest1-btn-gold'
                                        style={{ fontSize: "25px", writingMode: 'vertical-rl', transform: 'rotate(90deg)' }}
                                        >
                                            PLEH
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}


export default Quest1HelpMe;