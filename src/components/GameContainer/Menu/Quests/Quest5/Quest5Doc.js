// Quest5Doc.js
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedTextComponent from "../../../../AnimatedTextComponent";
import DocImagesTextsData from './DocImagesTextsData';
import { useNavigate } from "react-router-dom";

const Quest5Doc = () => {

    const { texts }                               = DocImagesTextsData();  // Accéder aux données textuelles et d'image
    const [currentIndex, setCurrentIndex]         = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [autoPlay, setAutoPlay]                 = useState(true);
    const navigate                                = useNavigate();

    useEffect(() => {
        const nextText = () => {
            if (autoPlay) {
                setTimeout(() => {
                    if (currentTextIndex < texts[currentIndex].texts.length - 1) {
                        setCurrentTextIndex(currentTextIndex + 1);
                    } else {
                        if (currentIndex < texts.length - 1) {
                            setCurrentIndex(currentIndex + 1);
                            setCurrentTextIndex(0);
                        } else {
                            setAutoPlay(false);
                            return navigate('/morbus/columba')
                        }
                    }
                }, 4500);
            }
        };

        nextText();

        return () => clearTimeout();
    }, [currentIndex, currentTextIndex, texts, autoPlay]);

    const stopAutoPlay = () => {
        setAutoPlay(false);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                style={{ height: '100vh', backgroundColor: 'black', position: 'sticky' }}
            >
                <div style={{ width: "100%", height: '100vh', backgroundColor: 'black', display: 'flex' }}>
                    <div style={{ width: '70%', display: 'flex' }}>
                        <motion.img
                            src={texts[currentIndex].image}
                            alt="docteur fou"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 4 }}
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </div>
                    <div
                        className="animated-text-container"
                        style={{ width: '50%', display: 'flex', justifyContent: 'space-around' }}
                        onClick={stopAutoPlay} 
                    >
                        <AnimatedTextComponent
                            key={`${currentIndex}-${currentTextIndex}`}
                            text={texts[currentIndex].texts[currentTextIndex]}
                        />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Quest5Doc;
