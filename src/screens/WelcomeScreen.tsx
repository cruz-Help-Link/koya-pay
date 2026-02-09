import React from 'react';
import { useNavigate } from 'react-router-dom';

export const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e5deff] via-white to-[#f5f0ff] flex flex-col items-center justify-center px-6 py-12">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9b8ff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#AE92FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-[#AE92FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#221144] to-[#AE92FF] rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-white p-6 rounded-3xl shadow-2xl">
                <img 
                  src='/src/assets/logo/primary-dark.png' 
                  alt="KoyaPay Logo"
                  className='w-32 h-16 object-contain'
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              KoyaPay
            </h1>
            <p className="text-lg text-gray-600">
              Manage your money with KoyaPay
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => alert('Login functionality coming soon!')}
            className="w-full bg-white border-2 border-[#221144] text-[#221144] py-4 px-8 rounded-2xl font-semibold text-lg hover:bg-[#e5deff] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Login Account
          </button>
          
          <button
            onClick={() => navigate('/signup')}
            className="w-full bg-gradient-to-r from-[#221144] to-[#AE92FF] text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:from-[#1a0d33] hover:to-[#9e7ff0] transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign UP
          </button>
        </div>
      </div>
    </div>
  );
};