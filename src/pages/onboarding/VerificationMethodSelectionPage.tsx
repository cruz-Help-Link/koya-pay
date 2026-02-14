import { useState } from 'react';
import { Container } from '../../components/ui/Container';
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
    <Container overlayIntensity="medium">
      <div className="flex flex-col min-h-screen px-6 pt-20 pb-12">
        {/* Back Arrow */}
        <button
          onClick={onSkip}
          className="absolute top-6 left-6 p-2 rounded-xl hover:bg-white/50 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src='/src/assets/logo/koyapay-logo.png' className='w-20 h-20 object-contain -mb-8' alt="KoyaPay" />
          <div className="text-2xl font-semibold mt-6">
            <span className="text-gray-400">Koya</span><span className="text-black">Pay</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mt-12 mb-6">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Choose Method</h1>
        </div>

        {/* Method Options */}
        <div className="flex-1 space-y-4 mb-auto">
          {VERIFICATION_METHODS.map((option) => (
            <button
              key={option.method}
              onClick={() => handleMethodSelect(option.method)}
              className="w-full"
            >
              <div className={`
                px-6 py-5 rounded-2xl transition-all duration-200
                flex items-center justify-between
                ${selectedMethod === option.method
                  ? 'bg-[#221144] text-white shadow-lg'
                  : 'bg-[#221144]/90 text-white hover:bg-[#221144]'
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
                    <div className="w-3 h-3 rounded-full bg-[#221144]" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={onSkip}
            className="text-sm text-gray-600 font-medium hover:text-gray-800 transition-colors"
          >
            SKIP
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === currentStep - 1
                    ? 'bg-[#221144] w-8'
                    : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            className="text-sm text-[#221144] font-medium hover:text-[#1a0d33] transition-colors"
          >
            NEXT
          </button>
        </div>
      </div>
    </Container>
  );
};
