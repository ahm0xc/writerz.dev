"use client";

import * as React from "react";

import VideoPlayerControls from "~/components/video-player-controls";

export type VideoPlayerProps = {
  src: string;
  loop?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
};

export default function VideoPlayer({
  src,
  loop = false,
  autoPlay = false,
  muted = true,
}: VideoPlayerProps) {
  const [videoProgress, setVideoProgress] = React.useState<number>(0);
  const [videoDuration, setVideoDuration] = React.useState<number>();
  const [isPaused, setIsPaused] = React.useState(!autoPlay);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);
    }
  }, []);

  React.useEffect(() => {
    if (isPaused) return;
    const currentTime = videoRef.current?.currentTime;
    if (videoDuration != null && currentTime != null) {
      const loadingTimeout = setTimeout(() => {
        if (videoProgress == currentTime / videoDuration) {
          setVideoProgress((prev) => prev + 0.000001);
        } else {
          setVideoProgress(currentTime / videoDuration);
        }
      }, 10);

      return () => {
        clearTimeout(loadingTimeout);
      };
    }
  }, [videoProgress, videoDuration, isPaused]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      setIsPaused(!video.paused);
      void (video.paused ? video.play() : video.pause());
    }
  };

  return (
    <div className="relative mx-auto my-8 overflow-hidden rounded-lg border">
      <div className="absolute right-4 top-4 z-10">
        <VideoPlayerControls
          progress={videoProgress}
          isPaused={isPaused}
          onPlayPause={togglePlayPause}
        />
      </div>
      <video
        className="w-full"
        ref={videoRef}
        loop={loop}
        muted={muted}
        autoPlay={autoPlay}
      >
        <source src={src} />
      </video>
    </div>
  );
}
