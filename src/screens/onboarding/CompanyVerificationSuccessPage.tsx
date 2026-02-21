import { Smile } from "lucide-react";
import { Button } from "../../components/ui/Button";


interface CompanyVerificationSuccessPageProps {
  onContinue: () => void;
}

export const CompanyVerificationSuccessPage: React.FC<CompanyVerificationSuccessPageProps> = ({ onContinue }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3D1B6B] via-[#6B46C1] to-[#9575CD] flex flex-col items-center justify-between px-6 py-20">
      {/* Logo - consistent with other screens */}
      <div className="flex flex-col items-center">
        <img 
          src='/src/assets/logo/primary-dark.png' 
          className='w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain' 
          alt="KoyaPay" 
        />
      </div>

      {/* Success Content */}
      <div className="flex flex-col items-center flex-1 justify-end pb-8">
        {/* Smiley Icon - black smiley face with thin lines, no background */}
        <Smile className="w-32 h-32 text-black mb-8" strokeWidth={1.5} />

        {/* Success Text */}
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-4xl font-bold text-white">
            Company Verified
          </h1>

          {/* Verification Message */}
          <p className="text-lg text-white text-center px-4">
            Business & Company<br/>Verification Complete
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full max-w-md">
        <Button
          variant="primary"
          fullWidth
          onClick={onContinue}
        >
          Dashboard
        </Button>
      </div>
    </div>
  );
};
