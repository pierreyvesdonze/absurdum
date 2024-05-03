import React, { useEffect, useState } from "react";
import AnimatedTextComponent from "../../AnimatedTextComponent";
import { useNavigate } from "react-router-dom";

const IntroGame = () => {
    const navigate = useNavigate();
    const texts = [
        "",
        "Désormais le jeu se décompose en plusieurs quêtes",
        "Tu devras effectuer les quêtes dans l'ordre",
        "Le jeu sauvegardera ta progression une fois la quête terminée",
        "Mais se réinitialisera si tu vides le cache de ton navigateur",
        "Termine toutes les quêtes pour venir à bout du jeu",
        "Bonne chance...",
    ]

    // État local pour suivre l'index du texte actuellement affiché
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isAnimatedText, setIsAnimatedText] = useState(true);

    useEffect(() => {
        // Fonction pour passer au texte suivant après la fin de l'animation
        const nextText = () => {
            if (currentTextIndex < texts.length - 1) {
                setTimeout(() => {
                    setCurrentTextIndex(currentTextIndex + 1);
                }, 4500);
            } else {
                setIsAnimatedText(false);
                navigate('/absurdum');
            }
        };

        // Appeler la fonction pour passer au texte suivant après la fin de l'animation
        nextText();

        return () => clearTimeout();
    }, [currentTextIndex, texts.length]);


    return (
        <div className="menu-intro">
            <div className="animated-text-container" style={{ backgroundColor: '#000000CB', color: 'white', fontSize: '6em' }}>
                {isAnimatedText && (
                    <AnimatedTextComponent key={currentTextIndex} text={texts[currentTextIndex]}
                    />
                )}
            </div>
        </div>
    );
};

export default IntroGame;
