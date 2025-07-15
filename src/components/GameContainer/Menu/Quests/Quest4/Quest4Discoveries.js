import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import Quest4ReorderItem from './Quest4ReorderItem';
import { Howl } from "howler";
import { useNavigate } from "react-router-dom";

const initialItems = [
    "Théorie de l'évolution (Darwin)",
    "Circulation sanguine (Harvey)",
    "Théorie de la relativité (Einstein)",
    "Théorie des germes (Pasteur)",
    "Électromagnétisme (Maxwell)",
    "Loi de la gravitation universelle (Newton)",
    "Structure de l'ADN (Crick)",
    "Conservation de l'énergie (Mayer)",
];

const Quest4Discoveries = () => {
    const [items, setItems] = useState(initialItems);
    const navigate = useNavigate();

    useEffect(() => {
        const chronologicalOrder = [
            "Circulation sanguine (Harvey)",
            "Loi de la gravitation universelle (Newton)",
            "Conservation de l'énergie (Mayer)",
            "Théorie de l'évolution (Darwin)",
            "Électromagnétisme (Maxwell)",
            "Théorie des germes (Pasteur)",
            "Théorie de la relativité (Einstein)",
            "Structure de l'ADN (Crick)",
        ];

        const unlockSound = new Howl({
            src: [`${process.env.PUBLIC_URL}/sons/unlock-door.mp3`],
            loop: false,
            volume: 1
        });

        const isCorrectOrder = items.every((item, index) => item === chronologicalOrder[index]);
        if (isCorrectOrder) {
            unlockSound.play();
            setTimeout(() => {
                navigate('/monstrum/duck');
            }, 1000);
        }
    }, [items, navigate]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                transition={{ duration: 1 }}
                className="quest4-discoveries"
                style={{
                    height: '100vh',
                    backgroundColor: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Reorder.Group axis='y' onReorder={setItems} values={items} className="quest4-reorder-ul">
                    {items.map((item) => (
                        <Quest4ReorderItem key={item} item={item} />
                    ))}
                </Reorder.Group>
            </motion.div>
        </AnimatePresence>
    );
}

export default Quest4Discoveries;
