import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import QuestSession from "../../../../QuestSession";

const Quest3Affectus = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showImage, setShowImage]             = useState(false);
    const [empathyCount, setEmpathyCount]       = useState(0);
    const [detachmentCount, setDetachmentCount] = useState(0);
    const [customText, setCustomText]           = useState("");
    const { completeQuest, setQuestResult }     = QuestSession();
    const navigate                              = useNavigate();

    const huntingImage  = process.env.PUBLIC_URL + '/images/quest3-hunting.jpg';
    const moneyImage    = process.env.PUBLIC_URL + '/images/quest3-money.jpg';
    const toyImage      = process.env.PUBLIC_URL + '/images/quest3-toy.jpg';
    const hungryImage   = process.env.PUBLIC_URL + '/images/quest3-hungry.jpg';
    const womanGunImage = process.env.PUBLIC_URL + '/images/quest3-woman-gun.jpg';

    const questions = [
        {
            image: huntingImage,
            text: "Un chat chasse un oiseau",
            answers: ["Sauver l'oiseau", "Ne rien faire"],
            answersText:["Le chat n'est plus", "Le chat n'est plus !"]
        },
        {
            image: moneyImage,
            text: "Un mendiant te demande de l'argent",
            answers: ["Lui donner", "Ne rien faire"],
            answersText: ["Le mendiant te remercie", "Le mendiant t'insulte"]
        },
        {
            image: toyImage,
            text: "Un enfant pleure toutes les larmes de son corps",
            answers: ["Le consoler", "Ne rien faire"],
            answersText: ["L'enfant pleure encore plus fort", "L'enfant te supplie de lui acheter son jouet"]
        },
        {
            image: hungryImage,
            text: "Un monsieur affamé te demande à manger",
            answers: ["Lui donner à manger", "Ne rien faire"],
            answersText: ["Le monsieur a encore faim", "Le monsieur continue de réclamer"]
        },
        {
            image: womanGunImage,
            text: "Une jeune femme te demande de l'aide pour monter ses courses",
            answers: ["L'aider", "Ne rien faire"],
            answersText: ["Tu as pris une balle", "Tu as échappé à la mort"]
        },
    ];

    const handleAnswerClick = (answerIndex) => {
        let text = questions[currentQuestion].answersText[answerIndex];
        if (answerIndex === 0) {
            setEmpathyCount(empathyCount + 1);
        } else if (answerIndex === 1) {
            setDetachmentCount(detachmentCount + 1);
        }
        setCustomText(text);
        setShowImage(true);
    };

    const handleNextButtonClick = () => {
        // Vérifiez s'il y a d'autres questions à afficher
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setShowImage(false); // Masquer l'image après avoir cliqué sur "Suivant"
        } else {
            if (empathyCount > detachmentCount) {
                setQuestResult(2, 'Compassio');
            } else {
                setQuestResult(2, 'Detachmentum');
            }
        
            // Vérifier que completeQuest est appelé
            completeQuest(2);
            navigate('/absurdum');
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                style={{ height: '100vh', backgroundColor: 'black', position: 'sticky' }}
            >
                <div style={{ width: "100%", height: '100vh', backgroundColor: 'black', display: 'flex' }}>
                    <div style={{ width: '71%', display: 'flex' }}>
                        <div className="affectus-image-container">
                            {showImage && (
                                <motion.img
                                    src={questions[currentQuestion].image}
                                    alt={`Question ${currentQuestion + 1}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            )}
                        </div>
                    </div>
                    <div className="affectus-text-container" style={{
                        backgroundColor: 'transparent',
                        fontSize: '3em',
                        justifyContent: 'space-evenly',
                        width: '50%',
                        color: 'white',
                        textAlign: 'center',
                    }}>
                        {!showImage && (
                            <>
                                {questions[currentQuestion].text}
                                <div>
                                    {questions[currentQuestion].answers.map((answer, index) => (
                                        <Button
                                            key={index}
                                            variant="soft"
                                            color="neutral"
                                            className="custom-white-btn"
                                            style={{ fontSize: "25px", margin: '10px' }}
                                            sx={{
                                                border: 'solid 1px transparent',
                                                '&:hover': {
                                                    border: 'solid 1px white'
                                                }
                                            }}
                                            onClick={() => handleAnswerClick(index)}
                                        >
                                            {answer}
                                        </Button>
                                    ))}
                                </div>
                            </>
                        )}
                        {showImage && (
                          
                            <div>{customText}</div>
                        )}
                        {showImage && (
                            <Button
                                variant="soft"
                                color="neutral"
                                className="custom-white-btn"
                                style={{ fontSize: "25px", margin: '10px' }}
                                sx={{
                                    border: 'solid 1px transparent',
                                    '&:hover': {
                                        border: 'solid 1px white'
                                    }
                                }}
                                onClick={handleNextButtonClick}
                            >
                                Suivant
                            </Button>
                        )}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Quest3Affectus;
