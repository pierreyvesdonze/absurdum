import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Level1 = () => {
    const navigate                                          = useNavigate();
    const [errorMessage, setErrorMessage]                   = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data.password === '42') {
           return navigate('/mort');
        } else {
            setErrorMessage('Mot de passe incorrect');
        }
    }

    return (
        <>
            <div className='flex-vertical-center' style={{ height: '10vh' }}>
                <h1>Niveau 1</h1>
            </div>
            <main className='flex-vertical-center' style={{ height: '90vh' }}>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <form onSubmit={handleSubmit(onSubmit)} className='formControl'>
                    <FormControl>
                        <FormLabel>Entre le mot de passe</FormLabel>
                        <Input
                            name="password"
                            type="password"
                            placeholder="42"
                            autoComplete='off'
                            {...register('password', { required: true })}
                        />
                    </FormControl>
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
        </>
    )
}

export default Level1;
