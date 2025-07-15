const Quest1ImmortalText = () => {
    const texts = [
        { 
            id: 1,
            text: "Ah bonjour. Si tu es là, c'est que tu as besoin d'aide.", 
            buttons: [{ label: "Oui", nextIndex: 1 }] 
        },
        { 
            id: 2,
            text: "Que puis-je pour toi ?", 
            buttons: [{ label: "Rien", nextIndex: 0 }, { label: "Je veux une pizza", nextIndex: 2 }] 
        },
        {
            id: 3,
            text: "🍕",
            buttons: [{ label: "Merci", nextIndex: 3 }]             
        },
        { 
            id: 4,
            text: "x78$££** je vois que tu es perdu(e)... Je peux te rendre immortel. Veux-tu devenir immortel ?", 
            buttons: [{ label: "Oui", nextIndex: 4 }, { label: "Non", nextIndex: 2 }] 
        },
        { 
            id: 5,
            text: "Très bien. Attends... Voilà. 9**++@'* ! Est-ce que cela te convient ? 🐄", 
            buttons: [{ label: "Parfait", nextIndex: 0 }, { label: "Non...", nextIndex: 5 }] 
        },
        { 
            id: 6,
            text: "Je trompé... erreur [...]", 
            buttons: [{ label: "Euh...", nextIndex: 6 }] 
        },
        { 
            id: 7,
            text: "Le mot de passe pour devenir immortel c'est MOTDEPASSE. Essaie", 
            buttons: [{ label: "MOTDEPASSE", nextIndex: 5 }, { label: "MOTDEPASSE", nextIndex: 7 }] 
        },
        { 
            id: 8,
            text: "J'ai tout compris je crois. Tu veux devenir immortel c'est ça ?", 
            buttons: [{ label: "🍕", nextIndex: 8 }, { label: "🐄", nextIndex: 6 }] 
        },
        { 
            id: 9,
            text: "Je peux te rendre immortel. C'est simple. Pour ça il faut que tu choisisse le bon mot de passe", 
            buttons: [{ label: "MOTDEPASSE", nextIndex: 10 }, { label: "MOTDEPASSE", nextIndex: 7 }] 
        },
        { 
            id: 10,
            text: "!!*_-8/// 🖨️*/ *ùùù *^* p^^/ / 🐂 ++*$*$* * * * *", 
            buttons: [{ label: "*%!!!)°", nextIndex: 11 }, { label: "🍕", nextIndex: 11 }] 
        },
        { 
            id: 11,
            text: "Te voilà désormais immortel ! Comme moi.", 
            buttons: [{ label: "Merci...", nextIndex: 12 }] 
        },
        { 
            id: 12,
            text: ".", 
            buttons: [{ label: ".", nextIndex: 13 }] 
        },
        { 
            id: 243,
            text: "", 
            buttons: [] 
        },
    ];

    return texts;
}

export default Quest1ImmortalText;
