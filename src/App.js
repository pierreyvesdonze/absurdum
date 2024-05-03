import React from 'react';
import GameContainer from './components/GameContainer';
import NoSmallScreen from './NoSmallScreen';

function App() {
    // Déterminer si l'écran est petit (par exemple, un smartphone)
    const isSmallScreen = window.innerWidth < 1200;

    return (
        <div className="App">
            {isSmallScreen ? <NoSmallScreen /> : <GameContainer />}
        </div>
    );
}

export default App;
