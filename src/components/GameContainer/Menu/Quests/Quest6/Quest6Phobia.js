import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, Input } from "@mui/material";
import { useForm } from 'react-hook-form';

const trypophobieImg = process.env.PUBLIC_URL + '/images/quest6-phobia-trypophobie.jpg';
const carpophobieImg = process.env.PUBLIC_URL + '/images/quest6-phobia-carpophobie.jpg';
const anatidaephobieImg = process.env.PUBLIC_URL + '/images/quest6-phobia-anatidaephobie.jpg';
const alektorophobieImg = process.env.PUBLIC_URL + '/images/quest6-phobia-alektorophobie.jpg';
const phobophobieImg = process.env.PUBLIC_URL + '/images/quest6-phobia-phobophobie.jpg';
const chromophobieImg = process.env.PUBLIC_URL + '/images/quest6-phobia-chromophobie.jpg';

const textsImgData = [
    {
        question: 'La peur des trous',
        answer: 'trypophobie',
        img: trypophobieImg
    },
    {
        question: 'La peur des fruits',
        answer: 'carpophobie',
        img: carpophobieImg
    },
    {
        question: "La peur qu'un canard te regarde",
        answer: 'anatidaephobie',
        img: anatidaephobieImg
    },
    {
        question: "La phobie des poulets",
        answer: 'alektorophobie',
        img: alektorophobieImg
    },
    {
        question: "La peur d'avoir peur",
        answer: 'phobophobie',
        img: phobophobieImg
    },
    {
        question: "La peur des couleurs",
        answer: 'chromophobie',
        img: chromophobieImg
    },
]

const Quest6Phobia = () => {
    const navigate                          = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const [currentIdx, setCurrentIdx]       = useState(0);

    const onSubmit = data => {
        if (data.password === textsImgData[currentIdx].answer) {
            if (currentIdx === textsImgData.length - 1) {
                return navigate('/absurdum/final');
            } else {
                setCurrentIdx(currentIdx + 1);
                reset();
            }
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
                transition={{ duration: 1 }}
                className="quest6-phobia flex-vertical-center"
                style={{ height: '100vh', backgroundColor: '#ba6080', display: 'flex', justifyContent: 'space-around', alignItems: 'center', color: "white" }}
            >
                <motion.img
                    key={textsImgData[currentIdx].img}
                    src={textsImgData[currentIdx].img}
                    alt="phobie"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    transition={{ duration: 3 }}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'absolute' }}
                />

                <h1 style={{ fontSize: '4em', fontFamily: 'var(--quest-text-button)', position: 'absolute', top: '10px' }}>
                    {textsImgData[currentIdx].question}
                </h1>

                <br /><br />

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

export default Quest6Phobia;
