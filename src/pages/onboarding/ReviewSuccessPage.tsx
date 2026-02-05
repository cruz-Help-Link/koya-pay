import { Button } from "../../components/ui";

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
    <div className="flex flex-col min-h-screen px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-koya-primary rounded-xl flex items-center justify-center">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        <div className="text-left space-y-1">
          <h1 className="text-xl font-bold text-koya-text-primary">
            Owner's Verification
          </h1>
          <p className="text-sm text-koya-text-secondary">
            Verify owner and business
          </p>
        </div>
      </div>

      {/* Success Card */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-sm bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-koya-lg">
          {/* Celebration Graphics */}
          <div className="relative mb-6">
            <div className="flex items-center justify-center">
              {/* Shield Icon */}
              <div className="w-24 h-24 bg-koya-primary/10 rounded-full flex items-center justify-center relative z-10">
                <svg className="w-16 h-16 text-koya-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Decorative Stars */}
              <div className="absolute top-0 left-1/4 text-koya-accent opacity-60">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <div className="absolute top-6 right-1/4 text-koya-secondary opacity-40">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <div className="absolute bottom-2 left-1/3 text-koya-accent opacity-50">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              {/* Small dots */}
              <div className="absolute top-12 left-8 w-2 h-2 rounded-full bg-koya-primary opacity-30" />
              <div className="absolute top-4 right-12 w-3 h-3 rounded-full bg-koya-secondary opacity-20" />
              <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-koya-accent opacity-40" />
              
              {/* Small triangles */}
              <div className="absolute top-16 right-16 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-koya-primary opacity-20" />
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-koya-text-primary">
              Successful
            </h2>
            <p className="text-koya-text-secondary">
              {monthlyLimit}
            </p>
          </div>

          {/* Action Button */}
          <div className="mt-8">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={onContinue}
            >
              <span className="flex items-center justify-center gap-2">
                Go to Dashboard
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-6 pt-6">
        <button
          onClick={onSkip}
          className="text-koya-text-primary font-medium hover:text-koya-primary transition-colors"
        >
          SKIP
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentStep - 1
                  ? 'bg-koya-primary w-3'
                  : 'bg-koya-text-tertiary/30'
              }`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          className="text-koya-text-primary font-medium hover:text-koya-primary transition-colors"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};
