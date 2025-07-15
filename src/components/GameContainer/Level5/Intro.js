import React, { useState, useEffect, useRef } from 'react';

const containerStyle = {
	position: 'absolute',
	width: '100%',
	height: '100vh',
	backgroundColor: 'black',
	color: 'white',
	textAlign: 'center',
	padding: '20px',
};

const Intro = () => {
	const [words, setWords]     = useState([]);
	const phrase                = "Quelque chose se cache dans le noir...";
	const h1Refs                = useRef([]);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const wordArray   = phrase.split(' ');
		const wordsToShow = wordArray.map(word => ({ word, opacity: 0 }));

		setTimeout(() => {
			wordsToShow.forEach((word, index) => {
				setTimeout(() => {
					setWords(prevWords => {
						const newWords = [...prevWords];
						newWords[index] = { ...word, opacity: 1 }; // Dynamically update opacity
						return newWords;
					});
				}, index * 200); // Delay for each word
			});
		}, 2000); // Initial delay before words appear

		setTimeout(() => {
			setVisible(false);
		}, (wordArray.length * 350) + 6000); 
	}, []);

	return (
		<div style={{ ...containerStyle, visibility: visible ? 'visible' : 'hidden' }} className={`intro-level5 ${visible ? 'visible' : 'hidden'}`}>
			{words.map(({ word, opacity }, index) => (
				<h1
					key={index}
					className="fade-in"
					ref={el => (h1Refs.current[index] = el)} // Store reference to each h1 element
					style={{ opacity: opacity }} // Dynamically update opacity
				>
					{word}
				</h1>
			))}
		</div>
	);
};

export default Intro;
