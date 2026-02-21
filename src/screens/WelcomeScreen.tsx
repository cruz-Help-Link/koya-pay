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
        <div className="flex flex-col items-center mb-16">
          <img 
            src='/src/assets/logo/logo.png' 
            className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain -mb-8' 
            alt="KoyaPay" 
          />
          <div className="text-2xl md:text-3xl font-semibold mt-6">
            <span className="text-gray-400">Koya</span>
            <span className="text-black">Pay</span>
          </div>
          <p className="text-gray-600 mt-4 text-center">Manage your money with KoyaPay</p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => navigate('/login')}
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