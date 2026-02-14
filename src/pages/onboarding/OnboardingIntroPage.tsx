import { ArrowLeft } from "lucide-react";
import { Button, StepNavigation } from "../../components/ui";
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
          <ArrowLeft className="w-6 h-6 text-gray-600" />
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
          <StepNavigation
            totalSteps={totalSteps}
            currentStep={currentStep}
            onNext={onStart}
            onSkip={onSkip}
          />
        </div>
      </div>
    </Container>
  );
};
