import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Quest5Hospital = () => {
    const [invertedMousePosition, setInvertedMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            // Inverser les coordonnées de la souris par rapport à la position actuelle
            const invertedX = window.innerWidth - event.clientX;
            const invertedY = window.innerHeight - event.clientY;
            setInvertedMousePosition({ x: invertedX, y: invertedY });

            // Déplacer le curseur de la souris à l'emplacement inversé
            const cursor = document.getElementById("custom-cursor");
            if (cursor) {
                cursor.style.left = `${invertedX}px`;
                cursor.style.top = `${invertedY}px`;
            }
        };

        // Ajouter un écouteur d'événements pour le mouvement de la souris
        document.addEventListener("mousemove", handleMouseMove);

        // Cacher le curseur par défaut
        document.body.style.cursor = 'none';

        // Nettoyer l'écouteur d'événements lors du démontage du composant
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.body.style.cursor = ''; // Rétablir le curseur par défaut
        };
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                style={{ height: '100vh', backgroundColor: 'black', position: 'sticky' }}
            >
                <div id="custom-cursor" style={{ position: 'fixed', zIndex: 9999 }}>
                    🥚
                </div>
                <main className='flex-vertical-center quest5-hospital' style={{ height: '100vh' }}>
                    <Link to='/morbus/doc' className="custom-quest1-btn-gold" >CONSULTER</Link>
                </main>
            </motion.div>
        </AnimatePresence>
    )
}

export default Quest5Hospital;
