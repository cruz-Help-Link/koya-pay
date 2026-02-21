import React from 'react';
import bgDecoration from "../../assets/hand.jpg"; // 👈 your image path

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[#c6b3ec]">
        {/* Subtle geometric decoration overlay */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-[#d6c7ff]/45 blur-3xl" />
          <div className="absolute bottom-20 left-10 h-80 w-80 rounded-full bg-[#b39de8]/30 blur-3xl" />
        </div>

      </div>

      {/* Brand Overlay Layer */}
      <div
        className={`absolute inset-0 ${overlayStyles[overlayIntensity]}`}
        aria-hidden="true"
      />

      {/* Content Layer */}
      <div className={`relative z-10 flex min-h-screen items-center justify-center p-4 ${className}`}>
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};
