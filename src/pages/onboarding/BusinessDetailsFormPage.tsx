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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex flex-col px-6 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30"></div>
            <div className="relative w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4\" />
              </svg>
            </div>
          </div>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-gray-900">
            Business Details
          </h1>
          <p className="text-sm text-gray-600">
            Tell us about your business
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 space-y-4 max-w-md mx-auto w-full">
        <Input
          placeholder="Business Name"
          value={formData.businessName}
          onChange={handleChange('businessName')}
          leftIcon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Short Description
          </label>
          <textarea
            placeholder="Tell us about your business..."
            value={formData.description}
            onChange={handleChange('description')}
            rows={4}
            className="w-full px-4 py-3.5 rounded-2xl
                     bg-purple-50/50 backdrop-blur-sm
                     border-2 border-purple-200
                     text-gray-900 placeholder:text-gray-400
                     focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500
                     transition-all duration-200 resize-none"
          />
          <div className="absolute bottom-3 right-4 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded-lg">
            {wordCount}/{maxWords} words
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-6 pt-6 max-w-md mx-auto w-full">
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
            className="text-gray-500 font-medium hover:text-gray-700 transition-colors"
          >
            SKIP
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === currentStep - 1
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 w-8'
                    : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};
