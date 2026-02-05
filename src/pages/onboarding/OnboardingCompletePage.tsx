import { Button } from "../../components/ui";

interface OnboardingCompletePageProps {
  onGoToDashboard: () => void;
}

export const OnboardingCompletePage: React.FC<OnboardingCompletePageProps> = ({
  onGoToDashboard,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-b from-koya-primary to-koya-secondary">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-koya-lg">
            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-white">
            KoyaPay
          </h1>
        </div>

        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white">
            Successful
          </h2>
          <p className="text-white/90 text-lg">
            You're fully verified 🎉 Limits lifted
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-8">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={onGoToDashboard}
            className="!bg-white !text-koya-primary hover:!bg-white/90"
          >
            Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};
