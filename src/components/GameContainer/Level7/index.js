import React, { useState } from 'react';
import { Button, Fade, FormControl, FormLabel, Input } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Level7 = () => {
    const navigate = useNavigate();
    const [correctLetters, setCorrectLetters] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const CesarPassword = 'unjourdepluie';

    const checkForCorrectLetters = password => {
        const correctLettersSet = new Set(correctLetters);
        for (let letter of password) {
            if (CesarPassword.includes(letter) && !correctLettersSet.has(letter)) {
                correctLettersSet.add(letter);
            }
        }
        return Array.from(correctLettersSet);
    }

    const onSubmit = data => {
        const { password } = data;
        const formattedPassword = password.replace(/\s/g, ''); // Supprimer les espaces du mot de passe

        if (formattedPassword === CesarPassword) {
            navigate('/outro');
        } else {
            const newCorrectLetters = checkForCorrectLetters(formattedPassword);
            setCorrectLetters(newCorrectLetters);
        }

        document.querySelector('input[name="password"]').value = ''; // Vider l'input
        document.querySelector('input[name="password"]').focus();
    }

    return (
        <>
            <Fade in={true} timeout={800}>
                <main className='flex-vertical-center-between' style={{ height: '100vh' }}>
                    <h1>Niveau 7</h1>
                    <h4 className='big-time big-time-no-margin'>VO KPVS EF QMVJF</h4>
                    <h5 className='green-text'>{correctLetters.join(', ') || ''}</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className='formControl'>
                        <FormControl>
                            <FormLabel>Déchiffre ce texte</FormLabel>
                            <Input
                                name="password"
                                type="text"
                                {...register('password', { required: true })}
                                autoComplete={'off'}
                            />
                        </FormControl>
                        <br />
                        <br />
                        <Button
                            variant="soft"
                            color="neutral"
                            sx={{ mt: 1 }} // margin top
                            type="submit"
                        >
                            Valider
                        </Button>
                    </form>
                </main>
            </Fade>
        </>
    )
}

export default Level7;
