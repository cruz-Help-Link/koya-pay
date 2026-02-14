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
      {/* Skip Button */}
      <button
        onClick={onSkip}
        className="text-sm text-gray-600 font-medium hover:text-gray-800 transition-colors"
      >
        SKIP
      </button>

      {/* Step Indicators */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === currentStep ? "w-8 bg-[#221144]" : "w-2 bg-gray-300"
            }`}
            style={i === activeStep ? { backgroundColor: activeColor } : undefined}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="font-medium"
        className="text-sm text-[#221144] font-medium hover:text-[#1a0d33] transition-colors"
      >
        NEXT
      </button>
    </div>
  );
};
