import { Music2, Pause, Play, VolumeOff, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const audio = new Audio("/assets/sounds/bg_music.mp3");
    audio.loop = true;
    audio.volume = 0.1;
    audio.muted = true;

    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.muted) {
      audio.muted = false;
      audio.play();
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 m-5 z-50">
      <button
        className="size-10 flex items-center justify-center text-neutral-100 opacity-10"
        onClick={toggleMute}
      >
        {isMuted ? (
          <VolumeX className="size-full" />
        ) : (
          <Music2 className="size-full" />
        )}
      </button>
    </div>
  );
}
