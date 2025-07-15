import { Button, Slide, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Information = ({ onNextLevel }) => {
    const informations = {
        1: "Tu as parcouru le monde",
        2: "Décrypté des secrets",
        3: "Affronté tes peurs",
        4: "Défié le temps...",
        5: "Mais tu n'as toujours pas trouvé le sens de ta quête",
        6: "Tu cherches la réponse à tout",
        6: "C'est normal",
        7: "Tu as encore du chemin à parcourir",
        8: "Pour percer les secrets d'Absurdum"
    };

    const [displayedInformation, setDisplayedInformation] = useState(Object.values(informations)[0]);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        let currentIndex = 1;

        const interval = setInterval(() => {
            if (currentIndex <= Object.keys(informations).length) {
                setDisplayedInformation(informations[currentIndex]);
                currentIndex++;
            } else {
                setDisplayedInformation(false);
                clearInterval(interval);
                setShowButton(true);
            }
        }, 2000);

        return () => {
            clearInterval(interval);
            setShowButton(false);
        };
    }, []);

    return (
        <div className="level8-information-container">
            {displayedInformation && (
                <Typography
                    variant='h4'
                    className='level-8-information-title'
                    style={{ opacity: displayedInformation ? 1 : 0, transition: 'opacity ease .5s' }}
                >
                    {displayedInformation}
                </Typography>
            )}
            {showButton && (
                <Button onClick={onNextLevel} className='hidden-btn-center-reusable'>
                    Niveau 9
                </Button>
            )}
        </div>
    );
};

export default Information;
