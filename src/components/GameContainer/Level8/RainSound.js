import { useEffect } from "react";
import { Howl } from "howler";

const RainSound = () => {
  useEffect(() => {
    const sound = new Howl({
      src: [`${process.env.PUBLIC_URL}/sons/rain.mp3`],
      loop: true,
      volume: 0, // Volume initial à 0 pour commencer le fondu
    });

    const fadeInSound = () => {
      const fadeInInterval = setInterval(() => {
        const currentVolume = sound.volume();
        const newVolume = Math.min(currentVolume + 0.05, 1);
        sound.volume(newVolume);
        if (newVolume >= 1) {
          clearInterval(fadeInInterval);
        }
      }, 100);
    };

    sound.play();
    fadeInSound();

    return () => {
      sound.stop();
      sound.unload();
    };
  }, []);

  return null;
};

export default RainSound;
