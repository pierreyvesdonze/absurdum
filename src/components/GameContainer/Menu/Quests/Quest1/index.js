import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Quest1Level1 from "./Quest1Level1";
import Quest1Level2 from "./Quest1Level2";
import Quest1Level3 from "./Quest1Level3";

const Quest1 = () => {
    const [currentLevel, setCurrentLevel] = useState(1);

    const handleLevelCompletion = () => {
        setCurrentLevel(currentLevel + 1);
    };

    const levels = {
        1: Quest1Level1,
        2: Quest1Level2,
        3: Quest1Level3,
    };

    const LevelComponent = levels[currentLevel];

    return (
        <div className="quest-container">
            <AnimatePresence>
                {LevelComponent && (
                    <motion.div
                        key={`quest1-level${currentLevel}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="quest-1-container"
                    >
                        <LevelComponent onComplete={handleLevelCompletion} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Quest1;
