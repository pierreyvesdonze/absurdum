import React, { useEffect, useState } from 'react';
import AnimatedTextComponent from '../../AnimatedTextComponent';
import { Link } from 'react-router-dom';

const Outro = () => {
    const texts = [
        "Tu as décrypté des secrets",
        "Affronté tes peurs",
        "Défié le temps",
        "Mais tu n'as toujours pas trouvé le sens de ta quête",
        "C'est normal",
        "Tu as encore du chemin à parcourir",
        "Pour percer les secrets d'Absurdum..."
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
        <>
            <div className="animated-text-container" style={{ backgroundColor: 'transparent', fontSize: '6em' }}>
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
                        <Link to="/" className='custom-link-red'>
                            Mauvais choix
                        </Link>
                        <Link to="/introgame" className='custom-link-blue'>
                            Bon choix
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Outro;
