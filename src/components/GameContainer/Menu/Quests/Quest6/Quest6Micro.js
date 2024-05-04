import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import Quest6AlienItem from './Quest6AlienItem';
import { Howl } from "howler";
import { useNavigate } from "react-router-dom";

const initialItems = [
    "Organisme",
    "Atome",
    "Quark",
    "Cellule",
    "Lepton",
    "Molécule",
    "Neutron",
];

const Quest6Micro = () => {
    const [items, setItems] = useState(initialItems);
    const navigate = useNavigate();

    // Effet pour vérifier l'ordre des découvertes
    useEffect(() => {
        const chronologicalOrder = [
            "Quark",
            "Lepton",
            "Neutron",
            "Atome",
            "Molécule",
            "Cellule",
            "Organisme",
        ];

        const unlockSound = new Howl({
            src: [process.env.PUBLIC_URL + '/sons/glitch.mp3'],
            loop: false,
            volume: 0.5
        });

        const isCorrectOrder = items.every((item, index) => item === chronologicalOrder[index]);
        if (isCorrectOrder) {
            unlockSound.play();
            setTimeout(() => {
                navigate('/absurdum/timer');
            }, 1000);
        }
    }, [items]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                transition={{ duration: 1 }}
                className="quest6-micro"
                style={{ height: '100vh', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <div style={{ width: '60%' }}></div>
                <div style={{
                    width: '40%',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Reorder.Group axis='y' onReorder={setItems} values={items} className="quest6-reorder-ul">
                        {items.map((item) => (
                            <Quest6AlienItem key={item} item={item} />
                        ))}
                    </Reorder.Group>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Quest6Micro;
