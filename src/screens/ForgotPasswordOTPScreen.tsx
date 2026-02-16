import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

export const ForgotPasswordOTPScreen: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
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

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split('').forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);

    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleVerify = () => {
    const otpCode = otp.join('');
    if (otpCode.length === 6) {
      // Navigate to create new password
      navigate('/forgot-password/create-new-password');
    }
  };

  const handleResend = () => {
    setOtp(Array(6).fill(''));
    inputRefs.current[0]?.focus();
    // Add resend logic here
  };

  const isComplete = otp.every(digit => digit !== '');

  return (
    <Container overlayIntensity="medium">
      <div className="flex flex-col min-h-screen px-6 pt-16 pb-12">
        {/* Back Arrow */}
        <button
          onClick={() => navigate('/forgot-password')}
          className="absolute top-6 left-6 p-2 rounded-xl hover:bg-white/50 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src='/src/assets/logo/koyapay-logo.png' className='w-20 h-20 object-contain -mb-8' alt="KoyaPay" />
          <div className="text-2xl font-semibold mt-6">
            <span className="text-gray-400">Koya</span><span className="text-black">Pay</span>
          </div>
        </div>

        {/* Header */}
        <div className="mt-8 mb-6">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">
            Verify OTP
          </h1>
          <p className="text-sm text-gray-600">
            We sent a code to your email
          </p>
        </div>

        {/* OTP Input */}
        <div className="mb-auto">
          <div className="flex gap-3 justify-center mb-8">
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
                onPaste={handlePaste}
                className="w-12 h-14 text-center text-xl font-bold rounded-xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] transition-colors"
              />
            ))}
          </div>

          {/* Resend */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600">
              Didn't receive the code?{" "}
              <button
                onClick={handleResend}
                className="text-[#221144] font-semibold hover:underline"
              >
                Resend
              </button>
            </p>
          </div>

          {/* Verify Button */}
          <Button
            variant="primary"
            fullWidth
            onClick={handleVerify}
            disabled={!isComplete}
          >
            Verify
          </Button>
        </div>
      </div>
    </Container>
  );
};
