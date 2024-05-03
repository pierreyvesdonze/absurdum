import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const QuestsSummary = ({ questId, isVisible, checkQuestCompleted }) => {

    const texts = {
        0: {
            text: "Dans cette quête, chaque choix est une clé, une clé qui ouvre les portes de l'avenir et scelle le sort des braves explorateurs. Seul celui qui ose écouter le murmure de son âme pourra déchiffrer les énigmes du choix et réclamer les récompenses qui lui sont destinées.",
            link: "/cogitoergosum"
        },
        1: {
            text: "La quête du temps... où chaque minute écoulée est une minute gagnée ou perdue. Chaque instant est chargé de mystère, chaque décision façonne le cours des événements dans un fragile équilibre entre le passé, le présent et le futur.",
            link: "/tempus/intro"
        },
        2: {
            text: "Dans le maelström des émotions, la perception est souvent laissée à la merci des courants capricieux de l'imagination. C'est un peu comme essayer de lire dans les feuilles de thé pour prédire l'avenir : parfois ça marche, parfois c'est juste une excuse pour boire une tasse de thé.",
            link: "/affectus/intro"
        },
        3: {
            text: "La mémoire, le sens de l'observation et les connaissances seront indispensables pour rencontrer le monstre, l'abominable, le gardien du mot de passe.",
            link: "/monstrum/memory"
        },
        4: {
            text: "Dans chaque homme sensé, il y a un fou qui sommeille.",
            link: "/morbus/pendu"
        },
        5: {
            text: "Retour au menu principal",
            link: "/"
        }
    };

    // Récupère le texte et le lien correspondant à l'ID de la quête
    const { text, link } = texts[questId];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="quest-summary-container"
                >

                    <div className="quest-summary-text">{text}</div>
                    {(questId === 0 || (questId > 0 && checkQuestCompleted(questId - 1))) && (
                        <Link to={link} className="custom-link-blue">Jouer</Link>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default QuestsSummary;