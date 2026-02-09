import { useState } from 'react';
import type { VerificationMethod } from '../../types';

interface VerificationMethodOption {
  method: VerificationMethod;
  title: string;
  description: string;
}

const VERIFICATION_METHODS: VerificationMethodOption[] = [
  {
    method: 'utility_bill',
    title: 'Utility bill (last 3 months)',
    description: 'Upload a recent utility bill',
  },
  {
    method: 'live_photo',
    title: 'Live photo at premises (with geotag)',
    description: 'Take a photo at your business location',
  },
  {
    method: 'letterhead',
    title: 'Letterhead + phone callback',
    description: 'Company letterhead with verification call',
  },
];

interface VerificationMethodSelectionPageProps {
  onSelectMethod: (method: VerificationMethod) => void;
  onSkip: () => void;
  onNext: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const VerificationMethodSelectionPage: React.FC<VerificationMethodSelectionPageProps> = ({
  onSelectMethod,
  onSkip,
  onNext,
  currentStep = 6,
  totalSteps = 7,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<VerificationMethod | null>(null);

  const handleMethodSelect = (method: VerificationMethod) => {
    setSelectedMethod(method);
    // Auto-navigate after selection
    setTimeout(() => {
      onSelectMethod(method);
    }, 300);
  };

  return (
    <div className="flex flex-col min-h-screen px-6 py-8">
      {/* Back Arrow */}
      <button
        onClick={onSkip}
        className="absolute top-6 left-6 p-2 rounded-xl hover:bg-[#e5deff] transition-colors"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-koya-primary rounded-xl flex items-center justify-center">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        <div className="text-left">
          <h1 className="text-xl font-bold text-koya-text-primary">
            Choose Method
          </h1>
        </div>
      </div>

      {/* Method Options */}
      <div className="flex-1 space-y-4">
        {VERIFICATION_METHODS.map((option) => (
          <button
            key={option.method}
            onClick={() => handleMethodSelect(option.method)}
            className="w-full"
          >
            <div className={`
              px-6 py-4 rounded-2xl transition-all duration-200
              flex items-center justify-between
              ${selectedMethod === option.method
                ? 'bg-koya-primary text-white shadow-koya-lg'
                : 'bg-koya-primary/90 text-white hover:bg-koya-primary'
              }
            `}>
              <span className="font-medium text-left">
                {option.title}
              </span>
              
              <div className={`
                w-6 h-6 rounded-full border-2 flex items-center justify-center
                transition-all duration-200
                ${selectedMethod === option.method
                  ? 'border-white bg-white'
                  : 'border-white/60'
                }
              `}>
                {selectedMethod === option.method && (
                  <div className="w-3 h-3 rounded-full bg-koya-primary" />
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-6 pt-6">
        <button
          onClick={onSkip}
          className="text-koya-text-primary font-medium hover:text-koya-primary transition-colors"
        >
          SKIP
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentStep - 1
                  ? 'bg-koya-primary w-3'
                  : 'bg-koya-text-tertiary/30'
              }`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          className="text-koya-text-primary font-medium hover:text-koya-primary transition-colors"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};
