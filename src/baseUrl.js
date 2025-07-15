let baseUrl;

if (process.env.NODE_ENV === 'development') {
    // Environnement de développement : React sert les fichiers depuis la racine
    baseUrl = process.env.PUBLIC_URL || '';
} else {
    // Environnement de production sur GitHub Pages
    baseUrl = "https://pierreyvesdonze.github.io/absurdum";
}

export default baseUrl;
