import React, { useEffect, useRef, useState } from "react";

interface LoadingBarProps {
  duration?: number;
  color?: string;
  onComplete?: () => void;
  height?: number;
}

const LoadingBar: React.FC<LoadingBarProps> = ({
  duration = 3000,
  color = "#221144",
  onComplete,
  height = 6,
}) => {
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);

      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        onCompleteRef.current?.();
      }
    }, 16); // smooth 60fps

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div
        className="overflow-hidden bg-gray-200 rounded-full"
        style={{ width: 300, height }}
      >
        <div
          className="h-full transition-all ease-linear"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};

export default LoadingBar;
