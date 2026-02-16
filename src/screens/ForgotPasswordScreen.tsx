import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

export const ForgotPasswordScreen: React.FC = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Navigate to OTP screen
      navigate('/forgot-password/otp');
    }
  };

  return (
    <Container overlayIntensity="medium">
      <div className="flex flex-col min-h-screen px-6 pt-16 pb-12">
        {/* Back Arrow */}
        <button
          onClick={() => navigate('/login')}
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
            Forgot Password
          </h1>
          <p className="text-sm text-gray-600">Enter your email to reset your password</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-auto">
          {/* Email */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <Mail className="w-6 h-6" />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: '' });
                }}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="pt-4">
            <Button type="submit" variant="primary" fullWidth>
              Send OTP
            </Button>
          </div>
        </form>

        {/* Back to Login */}
        <div className="mt-8">
          <p className="text-center text-sm text-[#1a1a1a]">
            Remember your password?{" "}
            <button
              onClick={() => navigate('/login')}
              className="text-[#221144] font-semibold hover:underline"
            >
              Back to Login
            </button>
          </p>
        </div>
      </div>
    </Container>
  );
};
