// AudioPlayer.js

import React, { useEffect } from "react";
import { Howl } from 'howler';

const AudioPlayer = ({ soundUrl }) => {
    useEffect(() => {
        const sound = new Howl({
            src: [soundUrl],
            loop: true,
            volume: 0.4
        });

        sound.play();

        // Arrêter tous les sons précédents lorsqu'un nouveau son est joué
        return () => {
            sound.stop();
        };
    }, [soundUrl]);

    return null;
};

export default AudioPlayer;
