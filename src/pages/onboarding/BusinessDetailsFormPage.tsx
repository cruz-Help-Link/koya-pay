import { useState } from 'react';
import { Button } from '../../components/ui';
import { Container } from '../../components/ui/Container';

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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const maxWords = 120;
  const wordCount = formData.description.trim().split(/\s+/).filter(Boolean).length;

  const handleChange = (field: keyof BusinessDetails) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required";
    }

    if (!formData.website.trim()) {
      newErrors.website = "Website/Social media is required";
    }

    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = "Email/Phone number is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Business description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitForm = () => {
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Container overlayIntensity="medium">
      <div className="flex flex-col min-h-screen px-6 pt-16 pb-12">
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
        <div className="mt-8 mb-6">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">
            Business Details
          </h1>
          <p className="text-sm text-gray-600">Tell us about your business</p>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-auto">
          {/* Business Name */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Business Name"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.businessName}
                onChange={handleChange('businessName')}
              />
            </div>
            {errors.businessName && (
              <p className="mt-1 text-sm text-red-500">{errors.businessName}</p>
            )}
          </div>

          {/* Website/Social media */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Website/Social media"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.website}
                onChange={handleChange('website')}
              />
            </div>
            {errors.website && (
              <p className="mt-1 text-sm text-red-500">{errors.website}</p>
            )}
          </div>

          {/* Email/Phone No. */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Email/Phone No."
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.contactInfo}
                onChange={handleChange('contactInfo')}
              />
            </div>
            {errors.contactInfo && (
              <p className="mt-1 text-sm text-red-500">{errors.contactInfo}</p>
            )}
          </div>

          {/* Business Logo */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Business Logo"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.logo ? formData.logo.name : ''}
                readOnly
              />
            </div>
          </div>

          {/* Description Textarea */}
          <div>
            <div className="relative">
              <textarea
                placeholder="Short Description (Tell us about your business...)"
                value={formData.description}
                onChange={handleChange('description')}
                rows={4}
                className="w-full px-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors resize-none"
              />
              <div className="absolute bottom-3 right-4 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded-lg">
                {wordCount}/{maxWords} words
              </div>
            </div>
            {errors.description && (
              <p className="mt-1 text-sm text-red-500">{errors.description}</p>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-4 mt-16">
          <Button
            variant="primary"
            fullWidth
            onClick={handleSubmitForm}
          >
            Submit for Review
          </Button>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={onSkip}
              className="text-sm text-gray-600 font-medium hover:text-gray-800 transition-colors"
            >
              SKIP
            </button>

            {/* Dots */}
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
      </div>
    </Container>
  );
};
