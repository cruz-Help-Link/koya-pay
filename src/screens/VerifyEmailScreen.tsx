import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    setTimer(59);
    setOtp(['', '', '', '', '', '']);
  };

  const handleVerify = () => {
    setIsVerifying(true);
  };

  if (isVerifying) {
    return <LoadingBar duration={3000} onComplete={() => navigate('/onboarding')} />;
  }

  return (
    <Container>
      <div className="flex flex-col min-h-screen px-6 pt-12 pb-12">
      <div className="flex flex-col min-h-screen px-6 pt-20 pb-12">
        {/* Back Arrow */}
        <button
          onClick={() => navigate('/signup/register')}
          className="absolute top-6 left-6 p-2 rounded-xl hover:bg-white/50 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

               <Logo />

        {/* Header */}
        <div className="text-center mt-12 mb-6">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Verify Your Email</h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            To verify your account, enter 6 digit OTP code
            <br />
            that was sent to your Email
          </p>
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