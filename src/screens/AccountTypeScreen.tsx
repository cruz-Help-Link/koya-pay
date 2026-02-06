// screens/AccountTypeScreen.tsx
import React, { useState } from 'react';
import { SocialButton } from '../components/ui/SocialButton';
import { Container } from '../components/ui/Container';

type AccountType = 'starter' | 'registered' | null;

export const AccountTypeScreen: React.FC = () => {
  const [selectedType, setSelectedType] = useState<AccountType>(null);

  return (
    <Container>
      <div className="flex flex-col min-h-screen px-6 pt-24 pb-12">
        {/* Logo */}
        <div className="mb-6 lg:mb-8">
              <div className=" flex items-center justify-center">
                <img src='/src/assets/logo/logo.png' className='w-40 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28' />
              </div>
            </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">Create Account</h1>
          <p className="text-sm text-gray-600">Let's create your account</p>
        </div>

        {/* Account Type Selection */}
        <div className="space-y-4 mb-auto">
          <button
            onClick={() => setSelectedType('starter')}
            className={`w-full px-6 py-5 rounded-2xl border-2 transition-all font-semibold text-[#1a1a1a] ${
              selectedType === 'starter'
                ? 'border-[#2D1B69] bg-[#2D1B69]/5'
                : 'border-[#C9B8FF] bg-[#E5DEFF]/40 hover:border-[#2D1B69]/50'
            }`}
          >
            Starter Business
          </button>
          <button
            onClick={() => setSelectedType('registered')}
            className={`w-full px-6 py-5 rounded-2xl border-2 transition-all font-semibold text-[#1a1a1a] ${
              selectedType === 'registered'
                ? 'border-[#2D1B69] bg-[#2D1B69]/5'
                : 'border-[#C9B8FF] bg-[#E5DEFF]/40 hover:border-[#2D1B69]/50'
            }`}
          >
            Registered Business
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
            <button className="text-[#2D1B69] font-semibold hover:underline">
              Login Account
            </button>
          </p>
        </div>
      </div>
    </Container>
  );
};