import React, { useState, useEffect } from "react";
import { Button, Slide, Typography } from "@mui/material";
import Timer from "./Timer";
import QuestionForm from "./QuestionForm";
import AudioPlayer from "./AudioPlayer";
import EarphonesIcon from '@mui/icons-material/Headset';
import { Link } from "react-router-dom";

const Level6 = () => {
    const questions = [
        { question: "2 puissance 3", answer: "8", soundUrl: '../../../sons/level-6-sample-1.mp3' },
        { question: "4 x 7", answer: "28", soundUrl: '../../../sons/level-6-sample-2.mp3' },
        { question: "√49", answer: "7", soundUrl: '../../../sons/level-6-sample-3.mp3' },
        { question: "Distance d'un train à 350 km/h pendant 3 heures", answer: "1050", soundUrl: '../../../sons/level-6-sample-4.mp3' },
        { question: "Résoudre 3x - 5 = 16", answer: "7", soundUrl: '../../../sons/level-6-sample-5.mp3' },
        { question: "Combien de côtés dans un hexagone", answer: "6", soundUrl: '../../../sons/level-6-sample-6.mp3' },
        { question: "Périmètre d'un carré de 23 cm", answer: "92", soundUrl: '../../../sons/level-6-sample-7.mp3' },
        { question: "Aire d'un rectangle de 6 cm sur 7 cm", answer: "42", soundUrl: '../../../sons/level-6-sample-8.mp3' },
        { question: "La réponse à tout", answer: "42", soundUrl: '../../../sons/level-6-sample-9.mp3' },
    ];


    const [showIntro, setShowIntro]                       = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [inputValue, setInputValue]                     = useState("");
    const [inputFocused, setInputFocused]                 = useState(true);
    const [showButton, setShowButton]                     = useState(false);
    const [timerFinished, setTimerFinished]               = useState(false);

    const handleAnswerSubmission = (data) => {
        const currentQuestion = questions[currentQuestionIndex];
        if (data.password === currentQuestion.answer) {
            const nextQuestionIndex = (currentQuestionIndex + 1) % questions.length;
            setCurrentQuestionIndex(nextQuestionIndex);
            setInputValue(""); // Réinitialiser la valeur du champ de saisie après la soumission réussie
            setInputFocused(true); // Garder le focus sur le champ de saisie après la soumission réussie
            if (nextQuestionIndex === 0) {
                setTimerFinished(true); // Indiquer que le timer a fini lorsqu'on revient à la première question
            }
        }
    };

    const handleTimeUp = () => {
        setCurrentQuestionIndex(0);
    };

    useEffect(() => {
        if (currentQuestionIndex === questions.length - 1) {
            setShowButton(true); // Afficher le bouton lorsque nous sommes à la dernière question
        }
    }, [currentQuestionIndex, questions.length]);

    const startLevel = () => {
        setShowIntro(false); // Définir showIntro sur false lorsque le bouton de démarrage est cliqué
    };

    return (
        <main className="level-6">
            <Slide direction="down" in={showIntro} mountOnEnter unmountOnExit>
                <div className="intro-level6">
                    <Button
                        variant="soft"
                        color="neutral"
                        sx={{ mt: 1, color: '#fff' }}
                        onClick={startLevel} // Appeler startLevel lors du clic sur le bouton
                    >
                        <EarphonesIcon style={{ color: 'white', fontSize: '8rem' }} />
                    </Button>
                    <Typography variant="h5" sx={{ color: '#fff' }}>Ce niveau utilise du son...</Typography>
                </div>
            </Slide>
            {!showIntro && ( // Afficher le reste du contenu une fois que showIntro est faux
                <>
                    <Slide direction="left" in={!timerFinished} mountOnEnter unmountOnExit>
                        <div className="level6-form">
                            {!timerFinished && (
                                <Timer onTimeUp={handleTimeUp} currentQuestionIndex={currentQuestionIndex} />
                            )}
                            <h1 className="level6-question">{questions[currentQuestionIndex].question}</h1>
                            <QuestionForm
                                onSubmit={handleAnswerSubmission}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                autoFocus={inputFocused}
                            />
                            <AudioPlayer soundUrl={questions[currentQuestionIndex].soundUrl} />
                        </div>
                    </Slide>
                    <Slide direction="right" in={!showIntro} mountOnEnter unmountOnExit>
                        <div className="end-level6">
                            {showButton && (
                                <Link to={'/cesar'} className="custom-link-red">
                                    Niveau 7
                                </Link>
                            )}
                        </div>
                    </Slide>
                </>
            )}
        </main>
    );
};

export default Level6;
