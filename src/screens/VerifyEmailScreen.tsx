import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import LoadingBar from './LoadingBar';
import Logo from '../components/Logo';

export const VerifyEmailScreen: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value && !/^\d$/.test(value)) return;

    const nextOtp = [...otp];
    nextOtp[index] = value;
    setOtp(nextOtp);

    if (value && index < nextOtp.length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;

    const nextOtp = [...otp];
    for (let i = 0; i < pasted.length; i += 1) {
      nextOtp[i] = pasted[i];
    }
    setOtp(nextOtp);

    const focusIndex = Math.min(pasted.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length !== 6) return;
    navigate("/signup/starter-success");
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <Container overlayIntensity="medium">
      <div className="flex min-h-screen flex-col px-6 pb-12 pt-16">
        <div className="mb-8 flex flex-col items-center">
          <img src="/src/assets/logo/koyapay-logo.png" className="h-20 w-20 object-contain -mb-8" alt="KoyaPay" />
          <div className="mt-6 text-2xl font-semibold">
            <span className="text-gray-400">Koya</span>
            <span className="text-black">Pay</span>
          </div>
        </div>
    setIsVerifying(true);
  };

  if (isVerifying) {
    return <LoadingBar duration={3000} onComplete={() => navigate('/onboarding')} />;
  }

  return (
    <Container>
      <div className="flex flex-col min-h-screen px-6 pt-12 pb-12">
        {/* Back Arrow */}
        <button
          onClick={() => navigate('/signup/register')}
          className="absolute top-6 left-6 p-2 rounded-xl hover:bg-white/50 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>

               <Logo />


        <div className="mb-6">
          <h1 className="mb-1 text-2xl font-bold text-[#1a1a1a]">Verify Email</h1>
          <p className="text-sm text-gray-600">Enter the 6-digit code sent to your email</p>
        </div>

        <div className="mb-auto">
          <div className="mb-8 flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(element) => {
                  inputRefs.current[index] = element;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(event) => handleChange(index, event.target.value)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                onPaste={handlePaste}
                className="h-14 w-12 rounded-xl border-2 border-[#C9B8FF]/60 bg-[#E5DEFF]/40 text-center text-xl font-bold text-[#1a1a1a] transition-colors focus:border-[#221144] focus:outline-none"
              />
            ))}
          </div>

          <div className="mb-8 text-center">
            <p className="text-sm text-gray-600">
              Didn&apos;t receive the code?{" "}
              <button type="button" onClick={() => setOtp(Array(6).fill(""))} className="font-semibold text-[#221144] hover:underline">
                Resend
              </button>
            </p>
          </div>

        {/* Action Buttons */}
        <div className="space-y-4 mt-4">
          <Button
            variant="primary"
            fullWidth
            disabled={otp.some((digit) => !digit)}
            onClick={handleVerify}
          >
            Verify
          </Button>
        </div>
      </div>
    </Container>
  );
};
