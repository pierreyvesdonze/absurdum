import React, { useState, useEffect } from 'react';
import { Button, FormControl, FormLabel, Input, Grid, Slide } from '@mui/material';
import { useForm } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Level3 = () => {
    const [errorMessage, setErrorMessage]                   = useState('');
    const [backgroundClass, setBackgroundClass]             = useState('');
    const [isVisible, setIsVisible]                         = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data.password === '42') {
            // Si la valeur est correcte, setIsVisible à false pour que le premier Grid disparaisse vers le haut
            setIsVisible(false);
            // Ajoute la classe pour afficher le bouton
            setBackgroundClass('level3-bg-visible');
        } else {
            setErrorMessage("Non ce n'est pas ça");
        }
    }

    const handleExited = () => {
        // Après que les slides ont terminé leur effet, démontez les composants
        setIsVisible(false);
    };

    return (
        <>
            <main className={`level3 ${backgroundClass}`}>
                <Slide in={isVisible} direction="down" onExited={handleExited}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12}>
                            <Item sx={{ height: '50vh' }}>
                                <div className="flex-vertical-center">
                                    <h1>Niveau 3</h1>
                                    <h2>Trouve le prochain nombre dans la séquence : </h2>
                                    <h4>2, 6, 12, 20, 30, ...</h4>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                </Slide>
                <Slide in={isVisible} direction="up" onExited={handleExited}>
                    <Grid container justifyContent="center" alignItems="center" style={{ height: '50vh' }}>
                        <Grid item xs={12}>
                            <Item sx={{ height: '50vh' }}>
                                <div className="flex-vertical-center">
                                    {errorMessage && <p className="error">{errorMessage}</p>}
                                    <form onSubmit={handleSubmit(onSubmit)} className='formControl'>
                                        <FormControl>
                                            <Input
                                                name="password"
                                                type="text"
                                                placeholder="Entre le nombre"
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
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                </Slide>
                {!isVisible && ( // Assurez-vous que le lien est rendu uniquement si isVisible est vrai
                    <Link 
                        to="/intothedark"
                        className='custom-link-red'
                        style={{ position: 'absolute', top: '50%', left: '50%' }}
                        >
                        Niveau 4
                    </Link>
                )}
            </main>
        </>
    )
}

export default Level3;
