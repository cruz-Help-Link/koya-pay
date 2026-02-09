import { Button } from "../../components/ui";

interface BusinessLocationIntroPageProps {
  onStart: () => void;
  onSkip: () => void;
  onNext: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const BusinessLocationIntroPage: React.FC<BusinessLocationIntroPageProps> = ({
  onStart,
  onSkip,
  onNext,
  currentStep = 5,
  totalSteps = 7,
}) => {
  return (
    <div className="flex flex-col min-h-screen px-6 py-8">
      {/* Back Arrow */}
      <button
        onClick={onSkip}
        className="absolute top-6 left-6 p-2 rounded-xl hover:bg-[#e5deff] transition-colors"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-koya-primary rounded-2xl flex items-center justify-center shadow-koya">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        <div className="text-left space-y-1">
          <h1 className="text-2xl font-bold text-koya-text-primary">
            Owner's Verification
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-koya-text-primary text-center px-4 leading-tight">
          Confirm business location to unlock higher limits
        </h2>
      </div>

      {/* Action Button */}
      <div className="space-y-6">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={onStart}
        >
          Start
        </Button>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={onSkip}
            className="text-koya-text-primary font-medium hover:text-koya-primary transition-colors"
          >
            SKIP
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentStep - 1
                    ? 'bg-koya-primary w-3'
                    : 'bg-koya-text-tertiary/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            className="text-koya-text-primary font-medium hover:text-koya-primary transition-colors"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};
