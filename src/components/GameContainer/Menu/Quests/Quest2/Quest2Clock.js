import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button, FormControl, Input, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import Quest2TimerItem from "./Quest2TimerItem";

const Quest2Clock = () => {
    const navigate                                                 = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const inputRef                                                 = useRef();
    const [seconds, setSeconds]                                    = useState(14);
    const [currentQuestionIndex, setCurrentQuestionIndex]          = useState(0);
    const [showFirstDiv, setShowFirstDiv]                          = useState(true);
    const [showSecondDiv, setShowSecondDiv]                        = useState(false);
    const [answerCounter, setAnswerCounter]                        = useState(0);

    const [questions] = useState([
        "Chaque chose en son ...",
        "Hier est histoire, ... est mystère",
        "Faire la course contre la ...",
        "Ne regarde pas en arrière, c'est du ...",
        "L'... nous le dira",
        "Les mensonges d'... sont les vérités d'aujourd'hui",
        "Chaque ... compte",
        "Vivre dans le ..."
    ]);

    const [answers] = useState([
        "temps",
        "demain",
        "montre",
        "passé",
        "avenir",
        "hier",
        "minute",
        "présent",
    ]);

    // Mettre le focus dans l'input à chaque nouvelle question
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [currentQuestionIndex]);

    // Valide les réponses et compte les points
    const onSubmit = data => {
        if (data.password.toLowerCase() === answers[currentQuestionIndex]) {
            setAnswerCounter(answerCounter + 1);
            if (currentQuestionIndex === questions.length -1) {
                setShowFirstDiv(false);
                setShowSecondDiv(true);
                setTimeout(() => {
                    return navigate('/tempus/outro');
                }, 4500);
            }
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        reset();
    }

    // Met à jour le Timer et déclenche la fin du niveau
    useEffect(() => {
        let interval = null;
        let timeoutId = null;
    
        if (seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000); // Mettre à jour chaque seconde
        } else if (seconds === 0) {
            setShowFirstDiv(false);
            setShowSecondDiv(true);
            timeoutId = setTimeout(() => {
                return navigate('/tempus/outro');
            }, 4500);
        }
    
        return () => {
            clearInterval(interval);
            clearTimeout(timeoutId);
        };
    }, [seconds]);

    return (
        <AnimatePresence>
            {showFirstDiv && (
                <motion.div
                    key='firstDiv'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9 }}
                    exit={{ opacity: 0 }}
                    className="tempus-cloud-circle"
                    style={{
                        width: "100%",
                        height: "100vh",
                        color: "white",
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        backgroundColor: "white"
                    }}
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        height: '40vh',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography variant="h3" id="cloud-circle-title">
                            {questions[currentQuestionIndex]}
                        </Typography>
                        <Quest2TimerItem seconds={seconds} />
                    </div>

                    <main className='flex-vertical-center' style={{ height: '60vh' }}>
                        <form onSubmit={handleSubmit(onSubmit)} className='formControl'>
                            <FormControl>
                                <Input
                                    ref={inputRef}
                                    name="password"
                                    type="text"
                                    autoComplete='off'
                                    {...register('password', { required: true })}
                                    sx={{ color: 'white' }}
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
                </motion.div>
            )}

            {showSecondDiv && (
                <motion.div
                    key='secondDiv'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9 }}
                    exit={{ opacity: 0 }}
                /*     onExitComplete={() => setShowSecondDiv(true)} */
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        backgroundColor: 'white'
                    }}>
                    <Typography variant="h1" style={{ color: 'black' }}>
                        {answerCounter}/{questions.length}
                    </Typography>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Quest2Clock;
