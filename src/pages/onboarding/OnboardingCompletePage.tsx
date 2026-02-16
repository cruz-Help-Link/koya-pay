import { Smile } from "lucide-react";
import { Button } from "../../components/ui";
import { Container } from '../../components/ui/Container';

interface OnboardingCompletePageProps {
  onGoToDashboard: () => void;
}

export const OnboardingCompletePage: React.FC<OnboardingCompletePageProps> = ({
  onGoToDashboard,
}) => {
  return (
    <Container>
      <div className="flex flex-col min-h-screen px-6 pt-20 pb-12">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src='/src/assets/logo/koyapay-logo.png' className='w-20 h-20 object-contain -mb-8' alt="KoyaPay" />
          <div className="text-2xl font-semibold mt-6">
            <span className="text-gray-400">Koya</span><span className="text-black">Pay</span>
          </div>
        </div>

        {/* Success Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-[#221144]/10 rounded-full flex items-center justify-center">
                <Smile className="w-16 h-16 text-[#221144]" />
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-2xl font-bold text-[#1a1a1a]">
                Successful
              </h2>
              <p className="text-gray-600">
                You're fully verified 🎉 Limits lifted
              </p>
            </div>

            {/* Action Button */}
            <Button
              variant="primary"
              fullWidth
              onClick={onGoToDashboard}
            >
              Dashboard
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
