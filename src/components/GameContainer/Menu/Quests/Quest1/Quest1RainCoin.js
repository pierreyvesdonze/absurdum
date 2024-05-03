import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Quest1RainCoin = () => {
    const coinContainerRef              = useRef(null);
    const [basketValue, setBasketValue] = useState(0);
    const navigate                      = useNavigate();

    useEffect(() => {
        const rainContainer = coinContainerRef.current;

        function createRainCoin() {
            const rainCoin = document.createElement('div');
            rainCoin.classList.add('rain-coin');
            rainCoin.style.left              = `${Math.random() * 100}%`;
            rainCoin.style.top               = `${Math.random() * 100}vh`;
            rainCoin.style.width             = `${Math.random() * 3 + 22}px`;
            rainCoin.style.height            = `${Math.random() * 10 + 20}px`;
            rainCoin.style.animationDuration = `${Math.random() * 2 + 0.15}s`;
            rainContainer.appendChild(rainCoin);

            rainCoin.addEventListener('animationend', () => {
                rainContainer.removeChild(rainCoin);
            });

            const rainCoinIntervalId = setInterval(() => {
                const rect = rainCoin.getBoundingClientRect();
                if (rect.bottom >= window.innerHeight) {
                    rainContainer.removeChild(rainCoin);
                    clearInterval(rainCoinIntervalId);
                }
            }, 10);

            rainContainer.classList.add('rain-container-fade-in');
        }

        const handleMouseMove = (event) => {
            const rainCoins = document.querySelectorAll('.rain-coin');
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            rainCoins.forEach(rainCoin => {
                const rect = rainCoin.getBoundingClientRect();
                if (
                    mouseX >= rect.left &&
                    mouseX <= rect.right &&
                    mouseY >= rect.top &&
                    mouseY <= rect.bottom
                ) {
                    setBasketValue(prevValue => prevValue + 1);
                    rainContainer.removeChild(rainCoin);
                }
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        const intervalId = setInterval(createRainCoin, Math.random() * 7 + 2);

        const redirectAfterDelay = () => {
            navigate("/richoutro", { state: { basket: basketValue } });
        };

        setTimeout(redirectAfterDelay, 14000);

        return () => {
            clearInterval(intervalId);
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [basketValue, navigate]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                transition={{ duration: 1 }}
                className="coin-container"
                ref={coinContainerRef}
                style={{ height: '100vh', backgroundColor: 'black' }}
            >
                <div style={{ position: 'absolute', top: '10px', right: '30px', color: 'white' }}>
                    <h1 className="quest-title">{basketValue}</h1>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Quest1RainCoin;
