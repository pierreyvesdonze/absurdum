import { useEffect } from "react";
import Quest1CoinRain from "../Menu/Quests/Quest1/Quest1RainCoin";

const RainDrop = () => {
	useEffect(() => {
		const rainContainer = document.querySelector('.rain-container');

		function createRaindrop() {
			const raindrop = document.createElement('div');
			raindrop.classList.add('rain');
			raindrop.style.left = `${Math.random() * 100}%`;
			raindrop.style.top = `${Math.random() * 100}vh`; // Position verticale aléatoire
			raindrop.style.width = `${Math.random() * 3 + 1}px`; // Largeur aléatoire entre 1 et 4 pixels
			raindrop.style.height = `${Math.random() * 10 + 5}px`; // Hauteur aléatoire entre 5 et 15 pixels
			raindrop.style.animationDuration = `${Math.random() * 2 + 0.15}s`; // Durée de l'animation aléatoire entre 1 et 3 secondes
			rainContainer.appendChild(raindrop);

			// Supprime la goutte de pluie du DOM après son animation
			raindrop.addEventListener('animationend', () => {
				rainContainer.removeChild(raindrop);
			});

			// Vérifie si la goutte a atteint le bas de l'écran et la supprime si c'est le cas
			const raindropIntervalId = setInterval(() => {
				const rect = raindrop.getBoundingClientRect();
				if (rect.bottom >= window.innerHeight) {
					rainContainer.removeChild(raindrop);
					clearInterval(raindropIntervalId);
				}
			}, 10); // Vérifie toutes les 100 ms

			rainContainer.classList.add('rain-container-fade-in')
		}

		const intervalId = setInterval(createRaindrop, Math.random() * 7 + 2);

		return () => {
			clearInterval(intervalId); // Nettoie l'intervalle lors du démontage du composant
		};
	}, []);

	return null;
}

export default RainDrop;
