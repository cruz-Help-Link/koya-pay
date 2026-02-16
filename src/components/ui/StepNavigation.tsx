import React from 'react';

interface StepNavigationProps {
  totalSteps: number;
  currentStep: number;
  onNext: () => void;
  onSkip: () => void;
}

export const StepNavigation: React.FC<StepNavigationProps> = ({
  totalSteps,
  currentStep,
  onNext,
  onSkip,
}) => {
  return (
    <div className="flex items-center justify-center gap-6 mt-6">
      <button
        onClick={onSkip}
        className="text-sm text-gray-600 font-medium hover:text-gray-800 transition-colors"
      >
        SKIP
      </button>

      {/* Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-200 ${
              index === currentStep - 1
                ? 'bg-[#221144] w-8'
                : 'bg-gray-300 w-2'
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="text-sm text-[#221144] font-medium hover:text-[#1a0d33] transition-colors"
      >
        NEXT
      </button>
    </div>
  );
};
