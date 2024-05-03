import React from "react";

const Quest2TimerItem = ({ seconds }) => {
    const remainingSeconds = seconds % 60;
    const textColor = remainingSeconds <= 3 ? "red" : "white"; // Condition pour la couleur rouge
    return (
        <div style={{
            color: textColor, // Utilisation de la couleur déterminée par la condition
            fontSize: "6em",
            fontFamily: 'Big Shoulders Stencil Text',
            width: '362px',
            textAlign: 'center'
        }}>
            {remainingSeconds}
        </div>
    );
};

export default Quest2TimerItem;
