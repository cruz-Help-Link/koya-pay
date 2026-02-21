import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type SignupMethod = 'email' | 'phone' | 'social';

export const SignupMethodScreen: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<SignupMethod | null>(null);

  const methods = [
    { 
      id: 'email' as SignupMethod, 
      label: 'Continue with Email', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      id: 'phone' as SignupMethod, 
      label: 'Continue with Phone', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      id: 'social' as SignupMethod, 
      label: 'Continue with Google', 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      )
    },
  ];

  const handleContinue = () => {
    if (selectedMethod) {
      navigate('/signup/details');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e5deff] via-white to-[#f5f0ff] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 space-y-6 border border-[#c9b8ff]">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => navigate('/welcome')}
                className="p-2 rounded-xl hover:bg-[#e5deff] transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex-1 flex justify-center">
                <img src='/src/assets/logo/primary-dark.png' alt="KoyaPay" className='w-48 h-24 object-contain' />
              </div>
              <div className="w-10"></div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome to KoyaPay</h1>
            <p className="text-sm text-gray-600">Choose your preferred signup method</p>
          </div>

          {/* Method Selection */}
          <div className="space-y-3">
            {methods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl border-2 transition-all duration-200 ${
                  selectedMethod === method.id
                    ? 'border-[#221144] bg-[#e5deff] shadow-lg scale-[1.02]'
                    : 'border-gray-200 bg-white hover:border-[#c9b8ff] hover:shadow-md'
                }`}
              >
                <div className={`transition-colors ${selectedMethod === method.id ? 'text-[#221144]' : 'text-gray-400'}`}>
                  {method.icon}
                </div>
                <span className="flex-1 text-left font-medium text-gray-800">
                  {method.label}
                </span>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedMethod === method.id
                      ? 'border-[#221144] bg-[#221144]'
                      : 'border-gray-300'
                  }`}
                >
                  {selectedMethod === method.id && (
                    <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Action Button */}
          <button
            disabled={!selectedMethod}
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-[#221144] to-[#AE92FF] hover:from-[#1a0d33] hover:to-[#9e7ff0] disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Continue
          </button>

          {/* Footer */}
          <div className="flex items-center justify-between text-sm pt-4">
            <button onClick={() => navigate('/signup/details')} className="text-gray-500 hover:text-gray-700 font-medium">SKIP</button>
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4].map((dot) => (
                <div
                  key={dot}
                  className={`h-2 rounded-full transition-all ${
                    dot === 0 ? 'bg-[#221144] w-8' : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>
            <button onClick={handleContinue} className="text-[#221144] hover:text-[#1a0d33] font-medium">NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
};