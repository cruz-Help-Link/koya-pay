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
        {/* Logo - consistent with other screens */}
        <div className="flex flex-col items-center">
          <img 
            src='/src/assets/logo/primary-dark.png' 
            className='w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain' 
            alt="KoyaPay" 
          />
        </div>

        {/* Success Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            {/* Smiley Icon - black smiley face with thin lines, no background */}
            <div className="flex justify-center mb-8">
              <Smile className="w-32 h-32 text-black" strokeWidth={1.5} />
            </div>

            {/* Success Message */}
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-[#1a1a1a]">
                Successful
              </h2>
              <p className="text-gray-600 text-lg">
                You're fully verified 🎉<br/>
                Limits lifted
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
