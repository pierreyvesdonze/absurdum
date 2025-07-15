import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../../../../baseUrl";

const img1 = baseUrl + '/images/tempus-circle.jpg';
const img2 = baseUrl + '/images/quest6-alien.jpg';
const img3 = baseUrl + '/images/quest5-doc.jpg';
const img4 = baseUrl + '/images/quest5-hospital.jpg';
const img5 = baseUrl + '/images/quest5-columba.jpg';

const Quest6Flashback = () => {
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const timeout1 = setTimeout(() => {
            setCurrentImage(img1);
        }, 2000);

        const timeout2 = setTimeout(() => {
            setCurrentImage(null);
        }, 2200);

        const timeout3 = setTimeout(() => {
            setCurrentImage(img2);
        }, 4400);

        const timeout4 = setTimeout(() => {
            setCurrentImage(null);
        }, 4600);

        const timeout5 = setTimeout(() => {
            setCurrentImage(img3);
        }, 6000);

        const timeout6 = setTimeout(() => {
            setCurrentImage(null);
        }, 6300);

        const timeout7 = setTimeout(() => {
            setCurrentImage(img4);
        }, 6700);

        const timeout8 = setTimeout(() => {
            setCurrentImage(null);
        }, 7000);

        const timeout9 = setTimeout(() => {
            setCurrentImage(img5);
        }, 8000);

        const timeout10 = setTimeout(() => {
            setCurrentImage(null);
            navigate('/absurdum/palindrome');
        }, 9000);

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);
            clearTimeout(timeout7);
            clearTimeout(timeout8);
            clearTimeout(timeout9);
            clearTimeout(timeout10);
        };
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                transition={{ duration: 1 }}
                className="quest6-flashback"
                style={{ height: '100vh', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                {currentImage && <img src={currentImage} alt="Image" style={{ width: "100%", height: "100%", objectFit: "contain" }} />}
            </motion.div>
        </AnimatePresence>
    )
}

export default Quest6Flashback;
