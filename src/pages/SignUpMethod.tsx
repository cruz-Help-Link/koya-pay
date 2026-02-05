import React, { useState } from 'react';
import { Container } from '../components/ui/Container';

type SignupMethod = 'email' | 'phone' | 'social';

export const SignupMethodScreen: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<SignupMethod | null>(null);

  const methods = [
    { id: 'email' as SignupMethod, label: 'Continue with Email', icon: '📧' },
    { id: 'phone' as SignupMethod, label: 'Continue with Phone', icon: '📱' },
    { id: 'social' as SignupMethod, label: 'Continue with Google', icon: '🔐' },
  ];

  return (
    <Container overlayIntensity="medium">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="mb-6 lg:mb-8">
              <div className=" flex items-center justify-center">
                <img src='/src/assets/logo/logo.png' className='w-40 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28' />
              </div>
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
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl border-2 transition-all ${
                selectedMethod === method.id
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-purple-200 bg-white hover:border-purple-400'
              }`}
            >
              <span className="text-2xl">{method.icon}</span>
              <span className="flex-1 text-left font-medium text-gray-800">
                {method.label}
              </span>
              <div
                className={`w-5 h-5 rounded-full border-2 ${
                  selectedMethod === method.id
                    ? 'border-purple-600 bg-purple-600'
                    : 'border-gray-300'
                }`}
              >
                {selectedMethod === method.id && (
                  <svg className="w-full h-full text-white" viewBox="0 0 20 20" fill="currentColor">
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
          className="w-full bg-purple-900 hover:bg-purple-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-2xl transition-colors"
        >
          Continue
        </button>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm pt-4">
          <button className="text-gray-500 hover:text-gray-700">SKIP</button>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4, 5].map((dot) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full ${
                  dot === 0 ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button className="text-gray-700 hover:text-gray-900 font-medium">NEXT</button>
        </div>
      </div>
    </Container>
  );
};