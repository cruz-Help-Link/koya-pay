import { ArrowLeft, ShieldCheck, Star } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui";
import Logo from "../../components/Logo";

interface ReviewSuccessPageProps {
  onContinue: () => void;
  onBack?: () => void;
}

export const ReviewSuccessPage: React.FC<ReviewSuccessPageProps> = ({
  onContinue,
  onBack,
}) => {
  return (
    <Container>
      <div className="relative flex flex-col min-h-screen px-6 pt-20 pb-12">
        
        {/* Back Arrow */}
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-6 left-6 p-2 rounded-xl hover:bg-white/50 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}

        {/* Logo */}
        <div className="flex flex-col items-center">
          <Logo />
        </div>

        {/* Header */}
        <div className="text-center mt-12 mb-6">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">
            Owner's Verification
          </h1>
        </div>

        {/* Success Card */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            
            {/* Icon Section */}
            <div className="relative mb-6 flex items-center justify-center">
              <div className="w-24 h-24 bg-[#221144]/10 rounded-full flex items-center justify-center z-10">
                <ShieldCheck className="w-16 h-16 text-[#221144]" />
              </div>

              {/* Decorative Stars */}
              <div className="absolute top-0 left-1/4 text-[#AE92FF] opacity-60">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div className="absolute top-6 right-1/4 text-gray-400 opacity-40">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="absolute bottom-2 left-1/3 text-[#AE92FF] opacity-50">
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>

            {/* Success Text */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-[#221144] mb-2">
                Verification Successful
              </h2>
              <p className="text-gray-600">
                Owner's verification complete!
              </p>
            </div>

            {/* Continue Button */}
            <Button variant="primary" fullWidth onClick={onContinue}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};