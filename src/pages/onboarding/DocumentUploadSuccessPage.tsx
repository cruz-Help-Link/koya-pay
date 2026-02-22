import { Smile } from "lucide-react";
import { Button } from "../../components/ui/Button";

interface DocumentUploadSuccessPageProps {
  onContinue: () => void;
}

export const DocumentUploadSuccessPage: React.FC<DocumentUploadSuccessPageProps> = ({
  onContinue,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2A1B55] to-[#9E85F3] flex flex-col items-center px-6 pt-24 pb-16">
      <div className="flex flex-col items-center">
        <img
          src='/src/assets/logo/primary-dark.png'
          className='w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain'
          alt="KoyaPay"
        />
      </div>

      <div className="flex flex-col items-center flex-1 justify-center -mt-6">
        <Smile className="w-32 h-32 text-black mb-6" strokeWidth={2.2} />

        <div className="text-center space-y-3 mb-10">
          <h1 className="text-6xl font-bold text-[#F6F2FF]">
            Successful
          </h1>
          <p className="text-4xl text-[#221144] text-center px-4 leading-tight">
            You're fully verified
            <br />
            Limits lifted
          </p>
        </div>

        <div className="w-full max-w-xs">
          <Button
            variant="primary"
            fullWidth
            onClick={onContinue}
          >
            Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};
