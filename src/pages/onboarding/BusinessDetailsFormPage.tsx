import { useState } from 'react';
import { Button, Input } from '../../components/ui';

interface BusinessDetails {
  businessName: string;
  website: string;
  contactInfo: string;
  logo: File | null;
  description: string;
}

interface BusinessDetailsFormPageProps {
  onSubmit: (data: BusinessDetails) => void;
  onSkip: () => void;
  onNext: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const BusinessDetailsFormPage: React.FC<BusinessDetailsFormPageProps> = ({
  onSubmit,
  onSkip,
  onNext,
  currentStep = 3,
  totalSteps = 7,
}) => {
  const [formData, setFormData] = useState<BusinessDetails>({
    businessName: '',
    website: '',
    contactInfo: '',
    logo: null,
    description: '',
  });

  const maxWords = 120;
  const wordCount = formData.description.trim().split(/\s+/).filter(Boolean).length;

  const handleChange = (field: keyof BusinessDetails) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmitForm = () => {
    onSubmit(formData);
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
          placeholder="Business Name"
          value={formData.businessName}
          onChange={handleChange('businessName')}
          leftIcon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          }
        />

        <Input
          placeholder="Website/Social media"
          value={formData.website}
          onChange={handleChange('website')}
          leftIcon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
          }
        />

        <Input
          placeholder="Email/Phone No."
          value={formData.contactInfo}
          onChange={handleChange('contactInfo')}
          leftIcon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          }
        />

        <Input
          placeholder="Business Logo"
          value={formData.logo ? formData.logo.name : ''}
          readOnly
          leftIcon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          }
        />

        {/* Description Textarea */}
        <div className="relative">
          <label className="block text-xs text-koya-text-secondary mb-2 ml-1">
            Short Description
          </label>
          <textarea
            placeholder="Tell us about your business..."
            value={formData.description}
            onChange={handleChange('description')}
            rows={4}
            className="w-full px-4 py-3 rounded-koya
                     bg-koya-light/50 backdrop-blur-sm
                     border-2 border-transparent
                     text-koya-text-primary placeholder:text-koya-text-tertiary
                     focus:outline-none focus:ring-2 focus:ring-koya-primary/20 focus:border-koya-primary/30
                     transition-all duration-200 resize-none"
          />
          <div className="absolute bottom-3 right-4 text-xs text-koya-text-tertiary">
            {wordCount}/{maxWords} words
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-6 pt-6">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={handleSubmitForm}
        >
          Submit for Review
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
