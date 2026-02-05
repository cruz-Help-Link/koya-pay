import { useState } from 'react';
import { Button, Input } from '../../components/ui';

interface OwnerDetails {
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  nin: string;
  phoneNumber: string;
  photo: File | null;
}

interface OwnerDetailsFormPageProps {
  onContinue: (data: OwnerDetails) => void;
  onSkip: () => void;
  onNext: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const OwnerDetailsFormPage: React.FC<OwnerDetailsFormPageProps> = ({
  onContinue,
  onSkip,
  onNext,
  currentStep = 2,
  totalSteps = 7,
}) => {
  const [formData, setFormData] = useState<OwnerDetails>({
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    nin: '',
    phoneNumber: '',
    photo: null,
  });

  const handleChange = (field: keyof OwnerDetails) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = () => {
    onContinue(formData);
  };

  return (
    <div className="flex flex-col min-h-screen px-6 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-koya-primary rounded-xl flex items-center justify-center">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        <div className="text-left space-y-1">
          <h1 className="text-xl font-bold text-koya-text-primary">
            Owner's Verification
          </h1>
          <p className="text-sm text-koya-text-secondary">
            Verify owner and business
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 space-y-3">
        <Input
          placeholder="Your Full Name"
          value={formData.fullName}
          onChange={handleChange('fullName')}
          leftIcon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          }
        />

        <Input
          type="date"
          placeholder="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange('dateOfBirth')}
          leftIcon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          }
        />

        <Input
          placeholder="Nationality"
          value={formData.nationality}
          onChange={handleChange('nationality')}
          leftIcon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
            </svg>
          }
        />

        <Input
          placeholder="NIN/ Passport"
          value={formData.nin}
          onChange={handleChange('nin')}
          leftIcon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
          }
        />

        <Input
          type="tel"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange('phoneNumber')}
          leftIcon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          }
        />

        <Input
          placeholder="Capture photograph"
          value={formData.photo ? formData.photo.name : ''}
          readOnly
          leftIcon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          }
        />
      </div>

      {/* Bottom Section */}
      <div className="space-y-6 pt-6">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={handleSubmit}
        >
          Continue
        </Button>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-6">
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
    </div>
  );
};
