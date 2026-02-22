import { Smile } from "lucide-react";

interface OwnerVerificationIntroSuccessPageProps {
  onContinue: () => void;
}

export const OwnerVerificationIntroSuccessPage: React.FC<OwnerVerificationIntroSuccessPageProps> = ({
  onContinue: _onContinue,
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

      <div className="flex flex-col items-center flex-1 justify-center -mt-8">
        <Smile className="w-32 h-32 text-black mb-6" strokeWidth={2.2} />
        <h1 className="text-6xl font-bold text-[#F6F2FF]">
          Successful
        </h1>
      </div>
    </div>
  );
};
