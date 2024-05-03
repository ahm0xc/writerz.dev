import React from "react";
import { PauseIcon, PlayIcon } from "lucide-react";

interface VideoPlayerControlsProps {
  progress: number;
  size?: number | undefined;
  width?: number | undefined;
  isPaused: boolean;
  onPlayPause: () => void;
}

export default function VideoPlayerControls({
  progress = 0,
  size = 40,
  width = 3,
  isPaused,
  onPlayPause,
}: VideoPlayerControlsProps) {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          // stroke="#aaaaaa"
          className="stroke-secondary"
          strokeWidth={width}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          // stroke="#ffffff"
          className="stroke-primary"
          strokeWidth={width}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute">
        <button
          className="group flex cursor-pointer items-center justify-center"
          onClick={onPlayPause}
        >
          <div className="transition-colors duration-200 ease-in-out">
            {isPaused ? (
              <PlayIcon size={18} />
            ) : (
              <PauseIcon size={18} />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
