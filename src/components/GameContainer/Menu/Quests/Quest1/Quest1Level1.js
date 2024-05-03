import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, FormControl, Input } from "@mui/material";

const Quest1Level1 = ({ onComplete }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data.password === 'clé') {
            onComplete();
        } else {
            setErrorMessage('Non');
        }
    }
    return (
        <div className="quest1-lv1">
            <div className='flex-vertical-center'>
                <h1 className="quest-title">Dans l'ordre des mots, je suis souvent trouvé. Une forme de pouvoir, ouverture pour le bon. Mais sans moi, tout est fermé.</h1>
            </div>
            <main className='flex-vertical-center'>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <form onSubmit={handleSubmit(onSubmit)} className='formControl'>
                    <FormControl>
                        <Input
                            name="password"
                            type="text"
                            placeholder="En un mot"
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
        </div>
    )
}

export default Quest1Level1;