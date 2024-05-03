import React, { useState, useEffect } from "react";

const QuestSession = () => {
    const [userId, setUserId] = useState("");

    const initializeSession = () => {
        localStorage.clear();
        setUserId("");
    };

    useEffect(() => {
        // Check if user is in session or create a new one
        const userInSession = localStorage.getItem("userId");
        if (userInSession) {
            setUserId(userInSession);
        } else {
            const newUserId = "user";
            setUserId(newUserId);
            localStorage.setItem("userId", newUserId);
        }
    }, []);

    const checkQuestCompleted = (questId) => {
        // Check if the quest is completed by the user
        const questStatus = JSON.parse(localStorage.getItem("questStatus")) || {};
        return questStatus[questId] || false;
    };

    const completeQuest = (questId) => {
        // Mark the quest as completed and update local storage
        const questStatus = JSON.parse(localStorage.getItem("questStatus")) || {};
        questStatus[questId] = true;
        localStorage.setItem("questStatus", JSON.stringify(questStatus));
    };

    const getQuestResult = (questId) => {
        return localStorage.getItem(`quest${questId}Result`);
    };

    const setQuestResult = (questId, result) => {
        localStorage.setItem(`quest${questId}Result`, result);
    };

    return {
        initializeSession,
        checkQuestCompleted,
        completeQuest,
        getQuestResult,
        setQuestResult,
    };
};

export default QuestSession;
