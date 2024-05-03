import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedTextComponent from '../../../../AnimatedTextComponent';
import Quest2IntroCursor from './Quest2IntroCursor';
import { useNavigate } from "react-router-dom";

const Quest2Intro = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [cursorOk, setCursorOk]   = useState(false);
    const [chrono, setChrono]       = useState(false);
    const navigate                  = useNavigate();

    const texts = [
        "Dans l'abîme du temps",
        "Chaque seconde est un écho lointain du passé et un murmure de l'avenir",
    ]

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
                    setIsVisible(false);
                    setChrono(true)
                }, 4000);
            }
        };

        nextText();

        return () => clearTimeout();
    }, [currentTextIndex, texts.length, isVisible]);

    const handleCursorCompletion = () => {
        setCursorOk(true);
        return navigate('/tempus/timer');
    };

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1 }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "black",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div className="animated-text-container" style={{ backgroundColor: 'transparent' }}>
                    <AnimatedTextComponent key={currentTextIndex} text={texts[currentTextIndex]} />
                </div>
            </motion.div>
            {chrono && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 0 : 1 }}
                    transition={{ duration: 1 }}
                    className="tempus-intro-container"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        color: "black",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white"
                    }}
                >
                    <Quest2IntroCursor handleCursorCompletion={handleCursorCompletion} />
                </motion.div>
            )}
        </div>
    );
};

export default Quest2Intro;
