import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Mail, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Button } from "../components/ui/Button";
import { SocialButton } from "../components/ui/SocialButton";
import { Container } from "../components/ui/Container";
import { setDashboardUserNameFromEmail } from "../utils/dashboardProfile";

export const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setDashboardUserNameFromEmail(formData.email);
      // Navigate to dashboard or onboarding
      navigate('/onboarding/intro');
    }
  };

  return (
    <Container>
      <div className="flex flex-col min-h-screen px-6 pt-16 pb-12">
        {/* Back Arrow */}
        <button
          onClick={() => navigate('/welcome')}
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
            Welcome Back
          </h1>
          <p className="text-sm text-gray-600">Login to your account</p>
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
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setErrors({ ...errors, email: '' });
                }}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#221144] hover:text-[#1a0d33] transition-colors"
              >
                {showPassword ? (
                  <Eye className="w-6 h-6" />
                ) : (
                  <EyeOff className="w-6 h-6" />
                )}
              </button>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  setErrors({ ...errors, password: '' });
                }}
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Forgot Password */}
        <div className="text-right">
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-sm text-[#221144] font-semibold hover:underline"
          >
            Forgot Password?
          </button>
        </div>


          <div className="pt-4">
            <Button type="submit" variant="primary" fullWidth>
              Login
            </Button>
          </div>
        </form>

        {/* Social Auth */}
        <div className="mt-4">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">Or login with</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <div className="flex items-center justify-center gap-6 mb-6">
            <SocialButton provider="facebook" />
            <SocialButton provider="google" />
            <SocialButton provider="apple" />
          </div>
          <p className="text-center text-sm text-[#1a1a1a]">
            Don't have an account?{" "}
            <button
              onClick={() => navigate('/signup')}
              className="text-[#221144] font-semibold hover:underline">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </Container>
  );
};
