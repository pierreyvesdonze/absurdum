// QuestionForm.js

import React, { useRef, useState } from "react";
import { Button, FormControl, FormLabel, Input } from "@mui/material";
import { useForm } from 'react-hook-form';

const QuestionForm = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm();
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit(handleFormSubmit)();
        }
    };

    const handleFormSubmit = () => {
        const inputValue = inputRef.current.value; // Obtenir la valeur actuelle du champ de saisie
        onSubmit({ password: inputValue }); // Soumettre la valeur extraite du champ de saisie
        setInputValue(""); // Réinitialiser la valeur du champ de saisie
    };

    const handleButtonClick = () => {
        handleSubmit(handleFormSubmit)();
    };

    return (
        <form onSubmit={handleFormSubmit} className='formControl'>
            <FormControl>
                <FormLabel>(Uniquement des chiffres)</FormLabel>
                <Input
                    name="password"
                    type="text"
                    placeholder="Votre réponse"
                    autoComplete="off"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    inputRef={inputRef}
                    onKeyDown={handleKeyDown}
                />
            </FormControl>
            <Button
                variant="soft"
                color="neutral"
                sx={{ mt: 6 }}
                type="button"
                onClick={handleButtonClick}
            >
                Valider
            </Button>
        </form>
    );
};

export default QuestionForm;
