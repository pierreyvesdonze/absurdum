import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, Input } from "@mui/material";
import { useForm } from 'react-hook-form';

const Quest6Palindrome = () => {
    const navigate                          = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const [counter, setCounter]             = useState(0);
    const [palindromes, setPalindromes]     = useState([]);

    const onSubmit = data => {
        const word = data.password.toLowerCase().replace(/\s/g, '');
        if (isPalindrome(word) && !palindromes.includes(word)) {
            setPalindromes([...palindromes, word]); // Ajouter le palindrome au tableau
            setCounter(counter + 1);
            reset();
            
            if (counter + 1 === 8) {
                setTimeout(() => {
                    return navigate('/absurdum/phobia');
                }, 800);
            }
        } else {
            console.log('Ce n\'est pas un nouveau palindrome');
        }
    }

    // Fonction pour vérifier si un mot est un palindrome
    const isPalindrome = (word) => {
        return word === word.split('').reverse().join('');
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                transition={{ duration: 1 }}
                className="quest6-palindrome flex-vertical-center"
                style={{ height: '100vh', backgroundColor: '#382751', display: 'flex', justifyContent: 'center', alignItems: 'center', color: "white" }}
            >
                <h1 style={{ fontSize: '4em' }}>Palindrome</h1>
                <h1 style={{ fontSize: '4em' }}>{counter}/8</h1>

                <form onSubmit={handleSubmit(onSubmit)} className='formControl'>
                    <FormControl>
                        <Input
                            name="password"
                            type="text"
                            autoComplete='off'
                            sx={{ textAlign: 'center', color: 'white' }}
                            {...register('password', { required: true })}
                        />
                    </FormControl>
                    <br />
                    <Button
                        variant="soft"
                        color="neutral"
                        sx={{ mt: 1, color: 'white' }}
                        type="submit"
                    >
                        Valider
                    </Button>
                </form>
            </motion.div>
        </AnimatePresence>
    )
}

export default Quest6Palindrome;
