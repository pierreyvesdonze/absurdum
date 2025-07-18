import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import Quest6AlienItem from './Quest6AlienItem';
import { Howl } from "howler";
import { useNavigate } from "react-router-dom";

const initialItems = [
    "Gremlin",
    "Alien",
    "Paul",
    "E.T",
    "The thing",
    "Alf",
    "Predator",
];

const Quest6Aliens = () => {
    const [items, setItems] = useState(initialItems);
    const navigate = useNavigate();

    useEffect(() => {
        const chronologicalOrder = [
            "Alien",
            "The thing",
            "E.T",
            "Gremlin",
            "Alf",
            "Predator",
            "Paul",
        ];

        const unlockSound = new Howl({
            src: [`${process.env.PUBLIC_URL}/sons/plouf.mp3`],
            loop: false,
            volume: 0.8
        });

        const isCorrectOrder = items.every((item, index) => item === chronologicalOrder[index]);
        if (isCorrectOrder) {
            unlockSound.play();
            setTimeout(() => {
                navigate('/absurdum/micro');
            }, 1200);
        }
    }, [items, navigate]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                transition={{ duration: 1 }}
                className="quest6-aliens"
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

export default Quest6Aliens;