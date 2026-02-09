import { Button } from "../../components/ui";

interface OnboardingIntroPageProps {
  onStart: () => void;
  onSkip: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const OnboardingIntroPage: React.FC<OnboardingIntroPageProps> = ({
  onStart,
  onSkip,
  currentStep = 1,
  totalSteps = 7,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex flex-col px-6 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30"></div>
            <div className="relative w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-xl">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Owner's Verification
          </h1>
          <p className="text-gray-600">Let's verify your business ownership</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Verify owner and business
            </h2>
            <p className="text-gray-600">
              Complete a quick verification process to unlock all features and higher transaction limits
            </p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="space-y-6">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={onStart}
        >
          Start Verification
        </Button>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={onSkip}
            className="text-gray-500 font-medium hover:text-gray-700 transition-colors"
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
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 w-8'
                    : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>

          <button
            onClick={onStart}
            className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};
