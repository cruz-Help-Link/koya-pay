// screens/VerifyEmailScreen.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';

export const VerifyEmailScreen: React.FC = () => {
  const navigate = useNavigate();
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
    setTimer(59);
    setOtp(['', '', '', '', '', '']);
  };

  return (
    <Container overlayIntensity="medium">
      <div className="flex flex-col min-h-screen px-6 pt-20 pb-12">
        {/* Logo */}
        <div className="mb-6 lg:mb-8">
              <div className=" flex items-center justify-center">
                <img src='/src/assets/logo/logo.png' className='w-40 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28' />
              </div>
            </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Verify Your Email</h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            To verify your account, enter 6 digit OTP code
            <br />
            that was sent to your Email
          </p>
          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-xs text-gray-600">
            <p className="font-medium text-yellow-800 mb-1">⚠️ Demo Mode</p>
            <p>No actual OTP is sent. This is a UI demo without backend integration. Enter any 6 digits to continue.</p>
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
              className="w-14 h-14 text-center text-2xl font-semibold bg-white/90 border-2 border-[#C9B8FF]/60 rounded-2xl focus:outline-none focus:border-[#2D1B69] transition-colors"
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
            className="text-sm text-[#1a1a1a] font-semibold hover:text-[#2D1B69] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Resend Code
          </button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mt-16">
          <Button
            variant="primary"
            fullWidth
            disabled={otp.some((digit) => !digit)}
            onClick={() => navigate('/signup/account-type')}
          >
            Verify
          </Button>
          <button 
            onClick={() => navigate('/signup/details')}
            className="w-full text-center py-2 text-[#1a1a1a] font-semibold hover:text-[#2D1B69] transition-colors"
          >
            Back
          </button>
        </div>
      </div>
    </Container>
  );
};
