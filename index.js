import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    const savedVolume = localStorage.getItem("audioVolume");
    if (savedVolume) {
      setVolume(parseInt(savedVolume, 10));
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
    localStorage.setItem("audioVolume", volume);
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg">
      <audio ref={audioRef} src="/sample.mp3" preload="metadata" />
      <Button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</Button>
      <div className="flex items-center gap-2">
        <label htmlFor="volume">Volume:</label>
        <Input
          id="volume"
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
        <span>{volume}%</span>
      </div>
    </div>
  );
}
