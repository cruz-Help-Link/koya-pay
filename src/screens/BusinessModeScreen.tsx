import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
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
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
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
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
            </svg>
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
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
            </svg>
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
