// components/ui/SkipNext.tsx
import React from 'react';

interface SkipNextProps {
  onSkip?: () => void;
  onNext?: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const SkipNext: React.FC<SkipNextProps> = ({
  onSkip,
  onNext,
  currentStep = 0,
  totalSteps = 6,
}) => {
  return (
    <div className="flex items-center justify-between text-sm pt-6">
      <button
        onClick={onSkip}
        className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
      >
        SKIP
      </button>
      <div className="flex gap-1.5">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentStep ? 'bg-[#2D1B69]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      <button
        onClick={onNext}
        className="text-gray-800 hover:text-[#2D1B69] font-semibold transition-colors"
      >
        NEXT
      </button>
    </div>
  );
};