import React, { useState } from "react";
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Quest1Rich = () => {
    const navigate = useNavigate();

    const [displayValue, setDisplayValue] = useState("");
    const [input, setInput] = useState([]);
    const [keypadContainer, setKeypadContainer] = useState(true);

    // 
    const sequenceToDecrypt = "8015";

    // Méthode d'encryption
    const getEncryptedValue = (value) => {
        const encryptionMap = {
            '0': '9',
            '1': '8',
            '2': '7',
            '3': '6',
            '4': '5',
            '5': '4',
            '6': '3',
            '7': '2',
            '8': '1',
            '9': '0',
        };
        return encryptionMap[value] !== undefined ? encryptionMap[value] : value;
    };

    const encryptSequence = (sequence) => {
        return sequence.split('').map(digit => getEncryptedValue(digit)).join('');
    };

    // Gère le clic sur une touche
    const handleKeyPress = (currentValue) => {
        const displayDigit = getEncryptedValue(currentValue);
        if (input.length < 4) {
            setInput([...input, currentValue]);
            setDisplayValue(displayValue + displayDigit);
        } else {
            console.log("La combinaison est déjà de 4 chiffres.");
        }
    };

    // Si valide, on finit le niveua
    const handleValidate = () => {
        if (input.length === 4) {
            const encryptedInput    = encryptSequence(input.join(''));
            const encryptedSequence = encryptSequence(sequenceToDecrypt);

            if (encryptedInput === encryptedSequence) {
                levelComplete();
            }
            setInput([]);
            setDisplayValue("");
        } else {
            console.log("La combinaison doit comporter 4 chiffres.");
        }
    };

    // Déclenche la fin du niveau et la redirection
    const levelComplete = () => {
        setKeypadContainer(false);
        setTimeout(() => {
            navigate('/raincoin');
        }, 2000);
    }

    // Génère les boutons pour chaque rangée
    const rows = [
        [7, 8, 9],
        [4, 5, 6],
        [1, 2, 3],
        [0]
    ];

    // Génération de rangées de bouton pour le keypad
    const keypadButtons = rows.map((row, index) => (
        <div key={index} style={{ display: 'flex', marginBottom: '10px' }}>
            {row.map((number) => (
                <Button
                    key={number}
                    className="keypad-btn"
                    onClick={() => handleKeyPress(number)}
                    sx={{ color: 'white', fontSize: "2.4em", marginRight: '10px' }}
                >
                    {number}
                </Button>
            ))}
        </div>
    ));

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="quest1-rich"
            >
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: keypadContainer ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="quest1-keypad-container"
                >
                    <div className="quest1-keypad-container">
                        <h1 className="quest-white-title">Le code pour devenir riche est 1984</h1>
                        <div className="quest1-rich-keypad">
                            <div className="quest1-rich-keypadScreen">{displayValue}</div>
                            {keypadButtons}
                        </div>
                        <Button id="rich-keypad-btn" onClick={handleValidate} sx={{ color: "white", fontSize: '1.8em' }}>Valider</Button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence >
    )
}

export default Quest1Rich;
