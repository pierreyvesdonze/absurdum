import { Slide } from "@mui/material";
import React from "react";

const UserQuestResult = ({ questSession }) => {
    const { getQuestResult } = questSession();

    // Nombre total de quêtes
    const totalQuests = 6;
    const questResults = [];

    // Boucle pour récupérer les résultats de chaque quête
    for (let i = 0; i <= totalQuests; i++) {
        const questResult = getQuestResult(i);
        questResults.push(questResult);
    }

    return (
        <>
            {questResults.map((result, index) => (
                result !== null && (
                    <Slide direction="left" in={true} timeout={1200} key={index}>
                        <h4 key={index}>
                            {result}
                        </h4>
                    </Slide>
                )
            ))}
        </>
    );
};

export default UserQuestResult;
