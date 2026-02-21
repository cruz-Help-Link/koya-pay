import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe, CloudOff, User } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SocialButton } from '../components/ui/SocialButton';
import Logo from '../components/Logo';

type BusinessMode = 'online' | 'offline' | 'both' | null;

export const BusinessModeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState<BusinessMode>(null);
  const accountType = sessionStorage.getItem('accountType') || 'registered';

  const handleContinue = () => {
    if (!selectedMode) return;

    // Route based on account type
    if (accountType === 'starter') {
      navigate('/signup/starter-business');
    } else {
      navigate('/signup/register');
    }
  };

  return (
    <Container overlayIntensity="medium">
      <div className="flex flex-col min-h-screen px-6 pt-24 pb-12">
        {/* Back Arrow */}
        <button
          onClick={() => navigate('/signup/account-type')}
          className="absolute top-6 left-6 p-2 rounded-xl hover:bg-white/50 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Logo - using the alternative logo design */}
        <Logo />
        

        {/* Header */}
        <div className="mt-12 mb-6">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">Create Account</h1>
          <p className="text-sm text-gray-600">Let's create your account</p>
        </div>

        {/* Business Mode Selection */}
        <div className="space-y-4 mb-6">
          <button
            onClick={() => setSelectedMode('online')}
            className={`w-full px-6 py-5 rounded-2xl border-2 transition-all font-semibold text-[#1a1a1a] flex items-center gap-3 ${
              selectedMode === 'online'
                ? 'border-[#221144] bg-[#221144]/5'
                : 'border-[#C9B8FF] bg-[#E5DEFF]/40 hover:border-[#221144]/50'
            }`}
          >
            <Globe className="w-7 h-7" />
            Online
          </button>

          <button
            onClick={() => setSelectedMode('offline')}
            className={`w-full px-6 py-5 rounded-2xl border-2 transition-all font-semibold text-[#1a1a1a] flex items-center gap-3 ${
              selectedMode === 'offline'
                ? 'border-[#221144] bg-[#221144]/5'
                : 'border-[#C9B8FF] bg-[#E5DEFF]/40 hover:border-[#221144]/50'
            }`}
          >
            <CloudOff className="w-7 h-7" />
            Offline
          </button>

          <button
            onClick={() => setSelectedMode('both')}
            className={`w-full px-6 py-5 rounded-2xl border-2 transition-all font-semibold text-[#1a1a1a] flex items-center gap-3 ${
              selectedMode === 'both'
                ? 'border-[#221144] bg-[#221144]/5'
                : 'border-[#C9B8FF] bg-[#E5DEFF]/40 hover:border-[#221144]/50'
            }`}
          >
            <User className="w-7 h-7" />
            Both
          </button>
        </div>

        {/* Continue Button */}
        <div className="mb-auto">
          <button
            onClick={handleContinue}
            disabled={!selectedMode}
            className="w-full py-4 px-6 bg-gradient-to-r from-[#221144] to-[#1a0d33] text-white font-semibold rounded-full hover:from-[#1a0d33] hover:to-[#110822] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            Continue
          </button>
        </div>

        {/* Social Auth */}
        <div className="mt-16">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">Register with</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <div className="flex items-center justify-center gap-6 mb-6">
            <SocialButton provider="facebook" />
            <SocialButton provider="google" />
            <SocialButton provider="apple" />
          </div>
          <p className="text-center text-sm text-[#1a1a1a]">
            Already have an account?{' '}
            <button 
              onClick={() => navigate('/welcome')}
              className="text-[#221144] font-semibold hover:underline"
            >
              Login Account
            </button>
          </p>
        </div>
      </div>
    </Container>
  );
};
