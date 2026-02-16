import { ArrowLeft, ShieldCheck, ArrowRight, Star } from "lucide-react";
import { Button, StepNavigation } from "../../components/ui";
import { Container } from '../../components/ui/Container';

interface ReviewSuccessPageProps {
  onContinue: () => void;
  onSkip: () => void;
  onNext: () => void;
  currentStep?: number;
  totalSteps?: number;
  monthlyLimit?: string;
}

export const ReviewSuccessPage: React.FC<ReviewSuccessPageProps> = ({
  onContinue,
  onSkip,
  onNext,
  currentStep = 4,
  totalSteps = 7,
  monthlyLimit = '2 Million per month',
}) => {
  return (
    <Container overlayIntensity="medium">
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
        </div>

        {/* Success Card */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            {/* Success Icon with decorations */}
            <div className="relative mb-6">
              <div className="flex items-center justify-center">
                {/* Shield Icon */}
                <div className="w-24 h-24 bg-[#221144]/10 rounded-full flex items-center justify-center relative z-10">
                  <ShieldCheck className="w-16 h-16 text-[#221144]" />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-1/4 text-[#AE92FF] opacity-60">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div className="absolute top-6 right-1/4 text-gray-400 opacity-40">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="absolute bottom-2 left-1/3 text-[#AE92FF] opacity-50">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                {/* Small dots */}
                <div className="absolute top-12 left-8 w-2 h-2 rounded-full bg-[#221144] opacity-30" />
                <div className="absolute top-4 right-12 w-2 h-2 rounded-full bg-gray-400 opacity-20" />
                <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-[#AE92FF] opacity-40" />
                {/* Small triangle */}
                <div className="absolute top-16 right-16 w-0 h-0 border-l-3 border-r-3 border-b-6 border-l-transparent border-r-transparent border-b-[#221144] opacity-20" />
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-2xl font-bold text-[#1a1a1a]">
                Successful
              </h2>
              <p className="text-sm text-gray-600">
                {monthlyLimit}
              </p>
            </div>

            {/* Action Button */}
            <Button
              variant="primary"
              fullWidth
              onClick={onContinue}
            >
              <span className="flex items-center justify-center gap-2">
                Go to Dashboard
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </div>
        </div>

        {/* Progress Indicator */}
        <StepNavigation
          totalSteps={totalSteps}
          currentStep={currentStep}
          onNext={onNext}
          onSkip={onSkip}
        />
      </div>
    </Container>
  );
};
