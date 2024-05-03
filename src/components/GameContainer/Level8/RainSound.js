import { useEffect } from "react";
import { Howl } from "howler";

const RainSound = () => {
  useEffect(() => {
    const sound = new Howl({
      src: ["../../../sons/rain.mp3"],
      loop: true,
      volume: 0, // Volume initial à 0 pour commencer le fondu
    });

    const fadeInSound = () => {
      const fadeInInterval = setInterval(() => {
        sound.volume(sound.volume() + 0.05);
        if (sound.volume() >= 1) {
          clearInterval(fadeInInterval);
        }
      }, 100); // Intervalle de temps entre chaque incrément en millisecondes
    };

    fadeInSound();
    sound.play();

    return () => {
      sound.stop();
      sound.unload();
    };
  }, []);

  return null;
}

export default RainSound;
