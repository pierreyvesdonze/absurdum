const noSmallScreen = () => {
    return (
        <div className="flex-vertical-center" style={{ height: '100vh', padding: 25, lineHeight: 1.6, textAlign: 'center' }}>
            <h1>
                Désolé, ce jeu n'est pas jouable en dessous de 1200px de largeur.
            </h1>
        </div>
    );
};

export default noSmallScreen;