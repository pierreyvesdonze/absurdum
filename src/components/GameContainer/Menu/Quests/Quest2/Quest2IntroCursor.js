import React from 'react';
import { motion, useDragControls } from "framer-motion";
import Quest2IntroChrono from './Quest2IntroChrono';

export default function Quest2IntroCursor({ handleCursorCompletion }) {
	const constraintsRef = React.useRef(null);
	const dragControls = useDragControls();

	//Davinci, Galilée, Newton, Mozart, Ghandi, Einstein, Picasso, Eiffel
	const names = [
		{ name: "Newton", birthdate: 1643 },
		{ name: "Gandhi", birthdate: 1869 },
		{ name: "Mozart", birthdate: 1756 },
		{ name: "Galilée", birthdate: 1564 },
		{ name: "Picasso", birthdate: 1881 },
		{ name: "Da Vinci", birthdate: 1452 },
		{ name: "Einstein", birthdate: 1879 },
		{ name: "Eiffel", birthdate: 1832 }
	];

	// Fonction pour vérifier si les dates sont dans l'ordre chronologique
	const checkChronologicalOrder = (names) => {
		for (let i = 1; i < names.length; i++) {
			if (names[i].birthdate < names[i - 1].birthdate) {
				return false;
			}
		}
		return true;
	};

	const handleDragEnd = (event, info) => {
		const { point } = info;
		const { x } = point;

		// Copier le tableau des noms
		const updatedNames = [...names];

		// Mettre à jour la position horizontale de la boîte déplacée
		const movedBoxIndex = updatedNames.findIndex((person) => person.name === event.target.innerText);
		if (movedBoxIndex !== -1) {
			updatedNames[movedBoxIndex].x = x;
		}

		// Réorganiser les données en fonction des nouvelles positions horizontales
		updatedNames.sort((a, b) => a.x - b.x);

		// Vérifier l'ordre chronologique et en fonction, le joueur peut gagner
		if (checkChronologicalOrder(updatedNames)) {
			handleCursorCompletion();
		}
	};

	return (
		<div
			className="quest2-cursor-area"
			ref={constraintsRef}
			style={{ display: 'flex', alignItems: 'center', userSelect: 'none' }}
		>
			<Quest2IntroChrono />
			<div className='quest2-cursor-timeline'>
				<span>1452</span>
				<span>1932</span>
			</div>

			{names.map((person, index) => (
				<motion.div
					key={index}
					className="quest2-cursor-box"
					drag
					dragConstraints={constraintsRef}
					dragControls={dragControls}
					style={{ fontSize: '1.2em', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
					onDragEnd={(event, info) => handleDragEnd(event, info)}
				>
					{person.name}
				</motion.div>
			))}
		</div>
	);
}
