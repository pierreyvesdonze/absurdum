import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import baseUrl from "../../../../../baseUrl";

const Quest4Memory = () => {
    const [cards, setCards]               = useState([]);  // État pour les cartes
    const [flippedCards, setFlippedCards] = useState([]);  // État pour les cartes retournées
    const [pairsFound, setPairsFound]     = useState(0);   // État pour le nombre de paires trouvées

    const images = [
        baseUrl + '/images/quest4-memory-1-small.jpg',
        baseUrl + '/images/quest4-memory-2-small.jpg',
        baseUrl + '/images/quest4-memory-3-small.jpg',
        baseUrl + '/images/quest4-memory-4-small.jpg',
        baseUrl + '/images/quest4-memory-5-small.jpg',
        baseUrl + '/images/quest4-memory-6-small.jpg',
        baseUrl + '/images/quest4-memory-7-small.jpg',
        baseUrl + '/images/quest4-memory-8-small.jpg',
        baseUrl + '/images/quest4-memory-9-small.jpg',
        baseUrl + '/images/quest4-memory-10-small.jpg',
        baseUrl + '/images/quest4-memory-11-small.jpg',
        baseUrl + '/images/quest4-memory-12-small.jpg',
    ];

    // Fonction pour générer les cartes avec leurs valeurs
    function generateCards() {
        const imagesIndexes = Array.from({ length: images.length }, (_, index) => index);
        const cardsArray = imagesIndexes.flatMap((index) => [index, index]); // Doubler chaque index pour former des paires
        return shuffle(cardsArray).map((imageIndex, index) => ({ id: index, value: imageIndex, flipped: false }));
    }

    // Fonction pour mélanger un tableau
    function shuffle(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    // Fonction pour retourner une carte
    function flipCard(index) {
        if (flippedCards.length === 2 || cards[index].flipped || pairsFound === 12) return; // Ne rien faire si déjà deux cartes retournées, ou si la carte est déjà retournée, ou si toutes les paires ont été trouvées
        const newCards = [...cards];
        newCards[index].flipped = true;
        setCards(newCards);
        setFlippedCards((prevFlippedCards) => [...prevFlippedCards, index]); // Ajouter la carte retournée à la liste
    }

    // Effet pour vérifier si les cartes retournées correspondent
    useEffect(() => {
        if (flippedCards.length === 2) {
            const [index1, index2] = flippedCards;
            const card1 = cards[index1];
            const card2 = cards[index2];
            if (card1.value === card2.value) {
                // Si les cartes correspondent, les laisser retournées et incrémenter le nombre de paires trouvées
                setPairsFound((prevPairsFound) => prevPairsFound + 1);
                setFlippedCards([]);
            } else {
                // Si les cartes ne correspondent pas, les retourner après un court délai
                setTimeout(() => {
                    const newCards = [...cards];
                    newCards[index1].flipped = false;
                    newCards[index2].flipped = false;
                    setCards(newCards);
                    setFlippedCards([]);
                }, 1000);
            }
        }
    }, [flippedCards, cards, pairsFound]);

    // Générer les cartes au chargement de la composante
    useEffect(() => {
        setCards(generateCards());
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                transition={{ duration: 1 }}
                className="quest4-memory"
                style={{ height: '100vh', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                {pairsFound < images.length && (
                    <div className="cards-container" style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.ceil(images.length / 2)}, 200px)`, gridGap: '10px' }}>
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                className="memory-card"
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    backgroundColor: card.flipped ? 'white' : 'black',
                                    cursor: 'pointer',
                                    userSelect: 'none',
                                }}
                                onClick={() => flipCard(index)}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                            >
                                {card.flipped && <img src={images[card.value]} alt={`Image ${card.value}`} style={{ width: '100%', height: '100%' }} />}
                            </motion.div>
                        ))}
                    </div>
                )}
                {pairsFound === images.length && (
                    <Link to={'/monstrum/discoveries'} className="custom-link-blue" style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%'
                    }}>Continuer</Link>
                )}
            </motion.div>
        </AnimatePresence>
    );
}

export default Quest4Memory;
