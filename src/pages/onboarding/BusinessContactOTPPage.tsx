import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Mail, ArrowRight } from 'lucide-react';
import { Button, StepNavigation } from '../../components/ui';
import { Container } from '../../components/ui/Container';
import { SuccessShieldArt } from '../../components/ui/SuccessShieldArt';

interface BusinessContactOTPPageProps {
  contactEmail: string;
  onSubmit: (otp: string) => void;
  onGoToDashboard: () => void;
  onResend: () => void;
  onSkip: () => void;
  onNext: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const BusinessContactOTPPage: React.FC<BusinessContactOTPPageProps> = ({
  contactEmail,
  onSubmit,
  onGoToDashboard,
  onResend,
  onSkip,
  onNext,
  currentStep = 4,
  totalSteps = 7,
}) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const [showSuccess, setShowSuccess] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value && !/^\d$/.test(value)) return;
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

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
      setShowSuccess(true);
    }
  };

  return (
    <Container overlayIntensity="medium">
      <div className="relative flex min-h-screen flex-col px-6 pb-12 pt-20">
        <button
          onClick={onSkip}
          className="absolute left-6 top-6 rounded-xl p-2 transition-colors hover:bg-white/50"
        >
          <ArrowLeft className="h-6 w-6 text-gray-600" />
        </button>

        <div className="flex flex-col items-center">
          <img src='/src/assets/logo/koyapay-logo.png' className='h-20 w-20 object-contain -mb-8' alt="KoyaPay" />
          <div className="mt-6 text-2xl font-semibold">
            <span className="text-gray-400">Koya</span><span className="text-black">Pay</span>
          </div>
        </div>

        <div className="mb-6 mt-12 text-center">
          <h1 className="mb-2 text-2xl font-bold text-[#1a1a1a]">
            {showSuccess ? "Company's Verification" : 'Business Contact'}
          </h1>
        </div>

        {!showSuccess ? (
          <>
            <div className="mb-8">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                  <Mail className="h-6 w-6" />
                </div>
                <input
                  type="text"
                  placeholder="Support Email/ Phone No."
                  className="w-full rounded-2xl border-2 border-[#C9B8FF]/60 bg-[#E5DEFF]/40 py-4 pl-14 pr-4 font-medium text-[#1a1a1a] placeholder-gray-500 transition-colors focus:border-[#221144] focus:outline-none"
                  value={contactEmail}
                  readOnly
                />
              </div>
            </div>

            <div className="mb-8 flex justify-center gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="h-14 w-14 rounded-2xl border-2 border-[#C9B8FF]/60 bg-white/90 text-center text-2xl font-semibold transition-colors focus:border-[#221144] focus:outline-none"
                />
              ))}
            </div>

            <div className="mb-2 text-center">
              <p className="text-2xl font-bold text-[#1a1a1a]">
                00:{timer.toString().padStart(2, '0')}
              </p>
            </div>

            <div className="mb-auto text-center">
              <p className="mb-2 text-sm text-gray-600">Didn't get any code?</p>
              <button
                onClick={handleResend}
                disabled={timer > 0}
                className="text-sm font-semibold text-[#1a1a1a] transition-colors hover:text-[#221144] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Resend Code
              </button>
            </div>

            <div className="mt-16 space-y-4">
              <Button
                variant="primary"
                fullWidth
                disabled={otp.some((digit) => !digit)}
                onClick={handleSubmit}
              >
                Submit for Review
              </Button>

              <StepNavigation
                totalSteps={totalSteps}
                currentStep={currentStep}
                onNext={onNext}
                onSkip={onSkip}
              />
            </div>
          </>
        ) : (
          <>
            <div className="mb-auto" />

            <div className="absolute inset-x-0 bottom-0 rounded-t-[2.75rem] bg-white px-8 pb-7 pt-9 shadow-[0_-10px_30px_rgba(20,15,40,0.18)]">
              <SuccessShieldArt className="mb-2" />

              <div className="mb-5 text-center">
                <h2 className="text-[2rem] font-bold leading-none text-[#221144]">Successful</h2>
                <p className="mt-1.5 text-base text-gray-500">5 Million per month</p>
              </div>

              <button
                onClick={onGoToDashboard}
                className="flex w-full items-center justify-between rounded-full bg-[#221144] px-6 py-2 text-left shadow-[0_8px_16px_rgba(34,17,68,0.28)] transition-colors hover:bg-[#1a0d33]"
              >
                <span className="text-lg font-semibold leading-none text-white">Go to Dashboard</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C5B1F8]">
                  <ArrowRight className="h-5 w-5 text-[#221144]" />
                </span>
              </button>

              <div className="mt-6 flex items-center justify-center gap-6">
                <button
                  onClick={onSkip}
                  className="text-base font-medium tracking-wide text-[#221144] transition-colors hover:text-[#13062a]"
                >
                  SKIP
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalSteps }).map((_, index) => (
                    <span
                      key={index}
                      className={`h-2.5 w-2.5 rounded-full ${
                        index === currentStep - 1 ? 'bg-[#221144]' : 'bg-[#d6d2df]'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={onNext}
                  className="text-base font-medium tracking-wide text-[#221144] transition-colors hover:text-[#13062a]"
                >
                  NEXT
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};
