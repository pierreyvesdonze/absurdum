import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, Input } from "@mui/material";
import { useForm } from 'react-hook-form';
import QuestSession from "../../../../QuestSession";
import baseUrl from "../../../../../baseUrl";

const Quest5Columba = () => {
    const imgColumba = baseUrl + '/images/quest5-columba.jpg';
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const { completeQuest, setQuestResult } = QuestSession();

    const onSubmit = data => {
        if (data.password === '42') {
            completeQuest(4);
            setQuestResult(4, '42');

            return navigate('/absurdum');
        } else {
            reset();
        }
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                style={{ height: '100vh', backgroundColor: 'black', position: 'sticky' }}
            >
                <motion.img
                    src={imgColumba}
                    alt="homme-pigeon"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.3 }}
                    transition={{ duration: 14 }}
                    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'contain' }}
                />

                <main className='flex-vertical-center' style={{ height: '100vh' }}>
                    <form onSubmit={handleSubmit(onSubmit)} className='formControl'>
                        <FormControl>
                            <Input
                                name="password"
                                type="text"
                                autoComplete='off'
                                sx={{ color: 'white', backgroundColor: '#0000009e', textAlign: 'center' }}
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
                </main>
            </motion.div>
        </AnimatePresence>
    )
}

export default Quest5Columba;
