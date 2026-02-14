import { Button } from "../../components/ui";
import { Container } from '../../components/ui/Container';

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
    <Container>
      <div className="flex flex-col min-h-screen px-6 pt-20 pb-12">
        {/* Back Arrow */}
        <button
          onClick={onSkip}
          className="absolute top-6 left-6 p-2 rounded-xl hover:bg-white/50 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src='/src/assets/logo/koyapay-logo.png' className='w-20 h-20 object-contain -mb-8' alt="KoyaPay" />
          <div className="text-2xl font-semibold mt-6">
            <span className="text-gray-400">Koya</span><span className="text-black">Pay</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mt-12 mb-6">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Owner's Verification</h1>
          <p className="text-sm text-gray-600">Verify owner and business</p>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center mb-auto">
          <div className="text-center max-w-md">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
              Complete verification to unlock all features
            </h2>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-4 mt-16">
          <Button
            variant="primary"
            fullWidth
            onClick={onStart}
          >
            Start Verification
          </Button>

          {/* Progress Indicator */}
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
              onClick={onStart}
              className="text-sm text-[#221144] font-medium hover:text-[#1a0d33] transition-colors"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
