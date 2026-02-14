import React, { useEffect, useState } from "react";

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
  height = 4,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        onComplete?.();
      }
    }, 16);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div
        className="rounded-full overflow-hidden bg-gray-200"
        style={{ width: 300, height }}
      >
        <div
          className="h-full rounded-full transition-all duration-75 ease-linear"
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
