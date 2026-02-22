import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, ArrowLeft, Check } from 'lucide-react';
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

export const CreateNewPasswordScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Password must include uppercase, lowercase, and number";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
    }
  };

  const handleContinueToLogin = () => {
    navigate('/login');
  };

  return (
    <Container overlayIntensity="medium">
      <div className="relative flex flex-col min-h-screen px-6 pt-16 pb-12">
        {!showSuccess && (
          <button
            onClick={() => navigate('/forgot-password/otp')}
            className="absolute top-6 left-6 p-2 rounded-xl hover:bg-white/50 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}

        <div className="flex flex-col items-center">
          <img src='/src/assets/logo/koyapay-logo.png' className='w-20 h-20 object-contain -mb-8' alt="KoyaPay" />
          <div className="text-2xl font-semibold mt-6">
            <span className="text-gray-400">Koya</span><span className="text-black">Pay</span>
          </div>
        </div>

        <div className="mt-8 mb-6">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">
            Create New Password
          </h1>
          <p className="text-sm text-gray-600">
            {showSuccess ? 'New password confirmed' : 'Enter your new password'}
          </p>
        </div>

        {!showSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-4 mb-auto">
            <div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                  <Lock className="w-6 h-6" />
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#221144] hover:text-[#1a0d33] transition-colors"
                >
                  {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  className="w-full pl-14 pr-12 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                    setErrors({ ...errors, password: '' });
                  }}
                />
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </div>

            <div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                  <Lock className="w-6 h-6" />
                </div>
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#221144] hover:text-[#1a0d33] transition-colors"
                >
                  {showConfirmPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full pl-14 pr-12 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                  value={formData.confirmPassword}
                  onChange={(e) => {
                    setFormData({ ...formData, confirmPassword: e.target.value });
                    setErrors({ ...errors, confirmPassword: '' });
                  }}
                />
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" fullWidth>
                Create Password
              </Button>
            </div>
          </form>
        ) : (
          <div className="flex-1" />
        )}

        {showSuccess && (
          <div className="absolute inset-x-0 bottom-0 rounded-t-[2.5rem] bg-white px-8 pb-10 pt-12 shadow-2xl">
            <div className="mb-8 flex justify-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-[#221144] bg-[#E5DEFF]">
                <Check className="h-14 w-14 text-[#221144]" strokeWidth={2.8} />
              </div>
            </div>

            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold leading-tight text-[#1a1a1a]">
                Your Password has been successfully changed
              </h2>
            </div>

            <Button
              variant="primary"
              fullWidth
              onClick={handleContinueToLogin}
            >
              Proceed with New Password
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};
