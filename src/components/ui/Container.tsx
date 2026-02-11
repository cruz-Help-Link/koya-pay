import React from 'react';

type OverlayIntensity = 'light' | 'medium' | 'heavy';

interface ContainerProps {
  children: React.ReactNode;
  overlayIntensity?: OverlayIntensity;
  className?: string;
}

const overlayStyles: Record<OverlayIntensity, string> = {
  light: 'bg-[#EDE7FF]/70',
  medium: 'bg-[#E5DEFF]/85',
  heavy: 'bg-[#DDD4FF]/92',
};

export const Container: React.FC<ContainerProps> = ({
  children,
  overlayIntensity = 'medium',
  className = '',
}) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Layer - White */}
      <div className="absolute inset-0 bg-white">
        {/* Subtle geometric decoration overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#c9b8ff]/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#AE92FF]/30 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Brand Overlay Layer */}
      <div
        className={`absolute inset-0 mix-blend-multiply `}
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