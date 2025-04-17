import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from "@react-spring/web";

interface VideoItem {
  id: string | number;
  height: number;
  video: string;
}

interface GridItem extends VideoItem {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface VideoMasonryProps {
  data: VideoItem[];
}

function VideoMasonry({ data }: VideoMasonryProps) {
  const [columns, setColumns] = useState<number>(3);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setColumns(3);
      } else if (window.matchMedia("(min-width: 600px)").matches) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [heights, gridItems] = useMemo<[number[], GridItem[]]>(() => {
    const heights = new Array(columns).fill(0);
    const gridItems = data.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height / 2) - child.height / 2;
      return {
        ...child,
        x,
        y,
        width: width / columns,
        height: child.height / 2,
      };
    });
    return [heights, gridItems];
  }, [columns, data, width]);

  const transitions = useTransition<
    GridItem,
    { x: number; y: number; width: number; height: number; opacity: number }
  >(gridItems, {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <div
      ref={ref}
      className="relative w-full h-full"
      style={{ height: Math.max(...heights) }}
    >
      {transitions((style, item) => (
        <VideoWithControls key={item.id} style={style} videoSrc={item.video} />
      ))}
    </div>
  );
}

export default VideoMasonry;

// 🔻 Updated VideoWithControls — Always show Play/Pause button
const VideoWithControls = ({
  videoSrc,
  style,
}: {
  videoSrc: string;
  style: any;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false); // reset button to play icon
  };

  return (
    <a.div style={style} className="absolute p-[5px]">
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full rounded-[4px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)]"
          loop={false}
          muted
          playsInline
          onEnded={handleVideoEnd}
        />

        <button
          onClick={togglePlayPause}
          className="absolute bottom-2 right-2 bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center text-lg hover:bg-black/70 transition"
        >
          {isPlaying ? "⏸" : "▶️"}
        </button>
      </div>
    </a.div>
  );
};
