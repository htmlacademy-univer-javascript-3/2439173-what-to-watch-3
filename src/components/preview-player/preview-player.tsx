import { useEffect, useRef, useState } from 'react';

export type PropsPreviewPlayer= {
    poster: string;
    videoSrc: string;
    isHovered: boolean;
  };

function PreviewPlayer({poster, videoSrc, isHovered}: PropsPreviewPlayer): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (!isHovered) {
      return;
    }

    const interval = setInterval(() => {
      setIsPlaying(true);
    }, 1000);

    return () => {
      clearInterval(interval);
      setIsPlaying(false);
    };
  }, [isHovered]);
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current?.play();
      } else {
        videoRef.current?.load();
      }
    }
  },[isPlaying]);
  return (
    <video
      ref={videoRef}
      src={videoSrc}
      poster={poster}
      height={175}
      width={280}
      muted
    >
    </video>
  );
}

export default PreviewPlayer;
