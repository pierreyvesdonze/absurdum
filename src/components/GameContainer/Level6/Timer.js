import React, { useState, useEffect } from "react";

const Timer = ({ onTimeUp, currentQuestionIndex }) => {
    const [count, setCount] = useState(7); // Initialiser le compte à 8
    const bpm = 120000 / 120; // La durée du Timer se cale en rythme sur le sample à 120bpm

    useEffect(() => {
        const timer = setInterval(() => {
            if (count > 0) {
                setCount(count - 1); // Décrémenter le compte
            } else {
                onTimeUp(); // Appeler la fonction lorsque le temps est écoulé
                setCount(7); // Réinitialiser le compte à 8
            }
        }, bpm); // 1000ms = 1 seconde

        // Nettoyer l'intervalle lorsque le composant est démonté
        return () => clearInterval(timer);
    }, [count, onTimeUp]);

    useEffect(() => {
        // Réinitialiser le compte lorsque currentQuestionIndex change
        setCount(7);
    }, [currentQuestionIndex]);

    return <h1 className="big-time">{count}</h1>; // Afficher le compte
};

export default Timer;
