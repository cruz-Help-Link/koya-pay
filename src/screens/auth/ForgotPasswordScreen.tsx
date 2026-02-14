import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/ui/Container";
import { Button, Input } from "../../components/ui";
import { Mail } from "lucide-react";
import Logo from "../../components/Logo";

export const ForgotPasswordScreen: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format");
      return;
    }
    navigate("/verify-reset-password");
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/ui/Container';
import { Button, Input } from '../../components/ui';
import { Mail } from 'lucide-react';

export const ForgotPasswordScreen: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleContinue = () => {
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email format');
      return;
    }
    navigate('/verify-reset-password');
  };

  return (
    <Container>
      <div className="flex flex-col min-h-screen px-6 pt-20 pb-12">
        {/* Back Arrow */}
        {/* <button
          onClick={() => navigate('/login')}
          className="absolute top-6 left-6 p-2 rounded-xl hover:bg-white/50 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button> */}

        <Logo />

        {/* Header */}
        <div className="text-center mt-12 mb-6">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">
            Forgot your Password
          </h2>
        {/* Logo */}
     

        {/* Header */}
        <div className="text-center mt-12 mb-6">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Forgot your Password</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Please enter your email address to receive the
            <br />
            OTP verification to reset your password.
          </p>
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            leftIcon={<Mail className="w-5 h-5" />}
              if (error) setError('');
            }}
            leftIcon={
              <Mail  className="w-5 h-5" />

            }
          />
          {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}
        </div>

        {/* Notice */}
        <p className="text-xs text-gray-500 leading-relaxed mb-auto">
          Remember that an OTP password will be sent to you to complete
          verification.
          Remember that an OTP password will be sent to you to complete verification.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3 mt-16">
          <Button variant="primary" fullWidth onClick={handleContinue}>
          <Button
            variant="primary"
            fullWidth
            onClick={handleContinue}
          >
            Continue
          </Button>
          <Button
            variant="secondary"
            fullWidth
            onClick={() => navigate("/login")}
            onClick={() => navigate('/login')}
          >
            Back
          </Button>
        </div>
      </div>
    </Container>
  );
};
};
