"use client";

import { useAppStore } from "../store/useAppStore";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";

export default function VolumeControl() {
  const { volume, setVolume, isMuted, toggleMute } = useAppStore();

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleMute}
        className="p-1 hover:bg-gray-200 rounded transition-colors"
        aria-label={isMuted ? "음소거 해제" : "음소거"}
      >
        {isMuted || volume === 0 ? (
          <HiVolumeOff className="w-5 h-5" />
        ) : (
          <HiVolumeUp className="w-5 h-5" />
        )}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-20 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-black"
        aria-label="볼륨 조절"
      />
    </div>
  );
}
