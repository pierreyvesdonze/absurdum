import React, { useState, useEffect, useRef } from "react";
import Spotlight from "./SpotLight";
import Intro from './Intro';
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from "react-router-dom";

const Level5 = () => {
    const [showButton, setShowButton] = useState(false);
    const [greyscaleEffect, setGreyscaleEffect] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const canvasRef = useRef(null);
    const [canvasVisible, setCanvasVisible] = useState(false);

    useEffect(() => {
        // Initialisation de Spotlight après 6 secondes (durée de l'intro)
        setTimeout(() => {
            new Spotlight({
                toggleEl: "#clickable-canvas"
            });
        }, 6000);

        // Déclencher l'effet de chargement
        const timeoutId = setTimeout(() => {
            setLoaded(true);
        }, 500); // 500 ms de délai
        // Nettoyer le timeout lors du démontage du composant
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        if (loaded) {
            // Suppression de l'intro après 6 secondes
            const introLevel5 = document.querySelector(".intro-level5");
            const introTimeout = setTimeout(() => {
                if (introLevel5) {
                    introLevel5.style.display = 'none';
                }
            }, 6000);

            setTimeout(() => {
                setCanvasVisible(true);
                const icon = document.getElementById('clickable-canvas');
                icon.classList.remove('hidden-icon');
            }, 6000);

            // Nettoyer le timeout lors du démontage du composant
            return () => clearTimeout(introTimeout);
        }
    }, [loaded]);

    const handleClick = () => {
        setShowButton(true);
        setGreyscaleEffect(false);
    };

    return (
        <main
            className={`level5 ${loaded ? 'level5-loaded' : 'level5-loading'}`}
            style={{ filter: greyscaleEffect ? 'grayscale(100%)' : 'none' }}
            id="mainContainer"
        >
            <Intro />
            <div className="flex-vertical-center" style={{ height: '100vh' }}>
                <PetsIcon
                    onClick={handleClick}
                    id='clickable-canvas'
                    className={`hidden-icon ${canvasVisible ? '' : 'hidden-canvas'}`}
                />

                {showButton && (
                    <Link to="/boitearythme" className="custom-link-blue show-button">
                        Niveau 6
                    </Link>
                )}
            </div>
        </main>
    );
};

export default Level5;
