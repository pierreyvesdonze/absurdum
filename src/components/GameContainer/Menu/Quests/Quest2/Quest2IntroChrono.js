import React, { useState, useEffect } from "react";

const Quest2IntroChrono = () => {
    // État local pour le temps actuel en dixièmes de seconde
    const [currentTime, setCurrentTime] = useState(0);

    // Fonction pour formater le temps
    const formatTime = (time) => {
        const minutes = Math.floor(time / 600);
        const seconds = Math.floor((time % 600) / 10);
        const tenths = time % 10;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${tenths}`;
    };

    // Mettre à jour le temps toutes les 100 millisecondes
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(prevTime => prevTime + 1);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="chronometer" style={{
            fontSize: '4em',
            position: 'absolute',
            top: '20px',
            fontFamily: 'Big Shoulders Stencil Text',
            width: '362px'
        }}>
            <h1>{formatTime(currentTime)}</h1>
        </div>
    );
};

export default Quest2IntroChrono;
