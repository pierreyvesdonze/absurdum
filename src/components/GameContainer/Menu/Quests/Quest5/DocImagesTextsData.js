const DocImagesTextsData = () => {
    const imgDoc      = process.env.PUBLIC_URL + '/images/quest5-doc.jpg';
    const imgSubject1 = process.env.PUBLIC_URL + '/images/quest5-doc-subject1.jpg';
    const imgSubject2 = process.env.PUBLIC_URL + '/images/quest5-doc-subject2.jpg';
    const imgSubject3 = process.env.PUBLIC_URL + '/images/quest5-doc-subject3.jpg';

    const texts = [
        {
            texts: [
                "",
                "Hum hum... Bonjour... Je suis le Dr Poisson ! Oui... drôle de nom n'est-ce pas ?",
                "Et le grand, derrière moi, c'est le Dr Morbus004.",
                "Il a l'air un peu bête comme ça, mais il a de grandes capacités.",
                "Il a joué un grand rôle dans notre découverte de la fusion psycholésionus.",
                "Mais j'imagine que vous ne savez pas ce qu'est la fusion psycholésionus !?",
                "Pourtant en chemin vous avez croisé plusieurs sujets fusionnés.",
                "Nous les appelons les élus.",
                "La fusion est un processus complexe d'annihilation de soi",
                "Et cela passe par la réécriture complète des gènes et de la conscience.",
                "Pour que la fusion puisse aboutir, il faut deux hôtes compatibles mais opposés.",
                "Et cela ne passe pas toujours par un semblable...",
            ],
            image: imgDoc
        },
        {
            texts: [
                "Il nous a fallu de nombreux tests. Vous le savez la recherche passe par des expériences.",
                "Les sujets étaient parfois humains, parfois non.",
                "Parfois vivants, parfois pas vivants.",
                "Parfois volontaires, parfois non...",
                ""
            ],
            image: imgSubject1
        },
        {
            texts: [
                "Heureusement notre équipe de braves médecins et chercheurs",
                "Se sont portés volontaires pour tester la fusion psycholésionus.",
                "À force de courage, de volonté et de détermination",
                "Ils ont su pénétrer l'âme de leurs sujets toujours plus en profondeur.",
                ""
            ],
            image: imgSubject2
        },
        {
            texts: [
                "Ainsi, à force de fusion et de fusion... et encore de fusion...",
                "Ils ont su fusionner avec leurs opposés.",
                "Malade/guérisseur, pauvre/riche, fou/sage, rat/gynécologue... oui bon.",
                ""
            ],
            image: imgSubject3
        },
        {
            texts: [
                "Et vous. Vous êtes prêt(e) pour la fusion psycholésionus !",
                "En effet, d'après votre parcours tout au long de votre quête",
                "Votre opposé a été identifié et il n'attend plus que vous.",
                "Je vais donc lancer la procédure... ne bougez pas, un instant.",
                "Voilà ! La procédure est lancée. Vous allez subir votre fusion.",
                "Il ne vous reste plus qu'à entrer le mot de passe...",
            ],
            image: imgDoc
        },
    ];

    return {
        texts
    };
};

export default DocImagesTextsData;
