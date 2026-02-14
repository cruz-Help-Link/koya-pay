import { Button } from "../../components/ui";
import { Container } from "../../components/ui/Container";

interface CompanyVerificationSuccessPageProps {
  onContinue: () => void;
  onSkip: () => void;
  onNext: () => void;
  currentStep?: number;
  totalSteps?: number;
  monthlyLimit?: string;
}

export const CompanyVerificationSuccessPage: React.FC<CompanyVerificationSuccessPageProps> = ({
  onContinue,
  onSkip,
  onNext,
  currentStep = 5,
  totalSteps = 7,
  monthlyLimit = '5 Million per month',
}) => {
  return (
    <Container overlayIntensity="medium">
      <div className="flex flex-col min-h-screen px-6 pt-20 pb-12">
        {/* Back Arrow */}
        <button
          onClick={onSkip}
          className="absolute top-6 left-6 p-2 rounded-xl hover:bg-white/50 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
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
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Company's Verification</h1>
        </div>

        {/* Success Card */}
        <div className="flex-1 flex items-center justify-center mb-auto">
          <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            {/* Success Icon with decorations */}
            <div className="relative mb-6">
              <div className="flex items-center justify-center">
                {/* Shield Icon */}
                <div className="w-24 h-24 bg-[#221144]/10 rounded-full flex items-center justify-center relative z-10">
                  <svg className="w-16 h-16 text-[#221144]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-1/4 text-[#AE92FF] opacity-60">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="absolute top-6 right-1/4 text-gray-400 opacity-40">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="absolute bottom-2 left-1/3 text-[#AE92FF] opacity-50">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={onSkip}
            className="text-sm text-gray-600 font-medium hover:text-gray-800 transition-colors"
          >
            SKIP
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === currentStep - 1
                    ? 'bg-[#221144] w-8'
                    : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            className="text-sm text-[#221144] font-medium hover:text-[#1a0d33] transition-colors"
          >
            NEXT
          </button>
        </div>
      </div>
    </Container>
  );
};
