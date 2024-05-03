import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, Input } from "@mui/material";
import { useForm } from 'react-hook-form';

const Quest5Pendu = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const password = 'annihilation';

    // Lettres déjà rentrées par le joueur sinon - 
    const [guesses, setGuesses] = useState('-'.repeat(password.length));
    const [wrongGuessCount, setWrongGuessCount] = useState(0);

    const onSubmit = data => {
        const guess = data.password.toLowerCase();
        if (password.includes(guess)) {
            const newPassword = password.split('').map((char, index) => {
                return char === guess ? guess : guesses[index];
            }).join('');
            setGuesses(newPassword);
            if (!newPassword.includes('-')) {
                return navigate('/morbus/hospital');
            }
        } else {
            setWrongGuessCount(prevCount => prevCount + 1);
        }
        reset();
    }

    // Création du bonhomme pendu
    const renderFigureParts = () => {
        const figureParts = [
            <line key="part1" x1="60" y1="20" x2="140" y2="20" className="figure-part" />,
            <line key="part2" x1="140" y1="20" x2="140" y2="50" className="figure-part" />,
            <line key="part3" x1="60" y1="20" x2="60" y2="230" className="figure-part" />,
            <line key="part4" x1="60" y1="230" x2="140" y2="230" className="figure-part" />,
            <line key="part5" x1="80" y1="20" x2="60" y2="60" className="figure-part" />,
            <circle key="part6" cx="140" cy="70" r="20" className="figure-part" />,
            <line key="part7" x1="140" y1="90" x2="140" y2="150" className="figure-part" />,
            <line key="part8" x1="140" y1="100" x2="120" y2="150" className="figure-part" />,
            <line key="part9" x1="140" y1="100" x2="160" y2="150" className="figure-part" />,
            <line key="part10" x1="140" y1="150" x2="120" y2="200" className="figure-part" />,
            <line key="part11" x1="140" y1="150" x2="160" y2="200" className="figure-part" />
        ];

        return figureParts.slice(0, wrongGuessCount);
    };

    // Si tout le bonhomme pendu est dessiné
    if (wrongGuessCount === 11) {
        navigate('/absurdum');
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                style={{ height: '100vh', backgroundColor: 'white', position: 'sticky' }}
            >
                <main className='flex-vertical-center' style={{ height: '100vh', justifyContent: 'space-evenly' }}>

                    <h1>P E N D U</h1>

                    <svg height="250" width="200" className="figure-container">
                        {renderFigureParts()}
                    </svg>

                    <h2>{guesses}</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className='formControl'>
                        <FormControl>
                            <Input
                                name="password"
                                type="text"
                                maxLength={1}
                                autoComplete='off'
                                sx={{ textAlign: 'center' }}
                                {...register('password', { required: true })}
                            />
                        </FormControl>
                        <br />
                        <Button
                            variant="soft"
                            color="neutral"
                            sx={{ mt: 1, color: 'black' }}
                            type="submit"
                        >
                            Valider
                        </Button>
                    </form>
                </main>
            </motion.div>
        </AnimatePresence>
    )
}

export default Quest5Pendu;
