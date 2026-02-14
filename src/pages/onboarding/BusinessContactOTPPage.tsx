import { useState, useRef, useEffect } from 'react';
import { Button } from '../../components/ui';
import { Container } from '../../components/ui/Container';

interface BusinessContactOTPPageProps {
  contactEmail: string;
  onSubmit: (otp: string) => void;
  onResend: () => void;
  onSkip: () => void;
  onNext: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const BusinessContactOTPPage: React.FC<BusinessContactOTPPageProps> = ({
  contactEmail,
  onSubmit,
  onResend,
  onSkip,
  onNext,
  currentStep = 4,
  totalSteps = 7,
}) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow digits
    if (value && !/^\d$/.test(value)) return;
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(59);
      setOtp(['', '', '', '', '', '']);
      onResend();
    }
  };

  const handleSubmit = () => {
    const otpString = otp.join('');
    if (otpString.length === 6) {
      onSubmit(otpString);
    }
  };

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
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Business Contact</h1>
        </div>

        {/* Contact Email Input */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Support Email/ Phone No."
              className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
              value={contactEmail}
              readOnly
            />
          </div>
        </div>

        {/* OTP Input */}
        <div className="flex justify-center gap-3 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-14 h-14 text-center text-2xl font-semibold bg-white/90 border-2 border-[#C9B8FF]/60 rounded-2xl focus:outline-none focus:border-[#221144] transition-colors"
            />
          ))}
        </div>

        {/* Timer */}
        <div className="text-center mb-2">
          <p className="text-2xl font-bold text-[#1a1a1a]">
            00:{timer.toString().padStart(2, '0')}
          </p>
        </div>

        {/* Resend */}
        <div className="text-center mb-auto">
          <p className="text-sm text-gray-600 mb-2">Didn't get any code?</p>
          <button
            onClick={handleResend}
            disabled={timer > 0}
            className="text-sm text-[#1a1a1a] font-semibold hover:text-[#221144] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Resend Code
          </button>
        </div>

        {/* Action Button */}
        <div className="space-y-4 mt-16">
          <Button
            variant="primary"
            fullWidth
            disabled={otp.some((digit) => !digit)}
            onClick={handleSubmit}
          >
            Submit for Review
          </Button>

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
      </div>
    </Container>
  );
};
