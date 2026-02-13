import React from "react";

interface StepNavigationProps {
  totalSteps?: number;
  activeStep: number;
  onSkip: () => void;
  onNext: () => void;
  skipLabel?: string;
  nextLabel?: string;
  activeColor?: string;
}

const StepNavigation: React.FC<StepNavigationProps> = ({
  totalSteps = 5,
  activeStep,
  onSkip,
  onNext,
  skipLabel = "SKIP",
  nextLabel = "NEXT",
  activeColor = "#221144",
}) => {
  return (
    <div className="flex items-center justify-between text-sm pt-4">
      <button
        onClick={onSkip}
        className="text-gray-500 hover:text-gray-700 font-medium"
      >
        {skipLabel}
      </button>
      <div className="flex gap-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === activeStep ? "w-8" : "bg-gray-300 w-2"
            }`}
            style={i === activeStep ? { backgroundColor: activeColor } : undefined}
          />
        ))}
      </div>
      <button
        onClick={onNext}
        className="font-medium"
        style={{ color: activeColor }}
      >
        {nextLabel}
      </button>
    </div>
  );
};

export default StepNavigation;