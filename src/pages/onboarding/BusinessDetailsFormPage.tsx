import { useState } from 'react';
import { ArrowLeft, User, Globe, Mail, Camera, ArrowRight } from 'lucide-react';
import { Button, StepNavigation } from '../../components/ui';
import { Container } from '../../components/ui/Container';
import { SuccessShieldArt } from '../../components/ui/SuccessShieldArt';

interface BusinessDetails {
  businessName: string;
  website: string;
  contactInfo: string;
  logo: File | null;
  description: string;
}

interface BusinessDetailsFormPageProps {
  onSubmit: (data: BusinessDetails) => void;
  onGoToDashboard: () => void;
  onSkip: () => void;
  onNext: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const BusinessDetailsFormPage: React.FC<BusinessDetailsFormPageProps> = ({
  onSubmit,
  onGoToDashboard,
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
  const [showSuccess, setShowSuccess] = useState(false);

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
      setShowSuccess(true);
    }
  };

  return (
    <Container overlayIntensity="medium">
      <div className="relative flex min-h-screen flex-col px-6 pb-12 pt-16">
        <button
          onClick={onSkip}
          className="absolute left-6 top-6 rounded-xl p-2 transition-colors hover:bg-white/50"
        >
          <ArrowLeft className="h-6 w-6 text-gray-600" />
        </button>

        <div className="flex flex-col items-center">
          <img src='/src/assets/logo/koyapay-logo.png' className='h-20 w-20 object-contain -mb-8' alt="KoyaPay" />
          <div className="mt-6 text-2xl font-semibold">
            <span className="text-gray-400">Koya</span><span className="text-black">Pay</span>
          </div>
        </div>

        <div className="mb-6 mt-8">
          <h1 className="mb-1 text-2xl font-bold text-[#1a1a1a]">
            Owner&apos;s Verification
          </h1>
          <p className="text-sm text-gray-600">Verify owner and business</p>
        </div>

        {!showSuccess ? (
          <>
            <div className="mb-auto space-y-4">
              <div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                    <User className="h-6 w-6" />
                  </div>
                  <input
                    type="text"
                    placeholder="Business Name"
                    className="w-full rounded-2xl border-2 border-[#C9B8FF]/60 bg-[#E5DEFF]/40 py-4 pl-14 pr-4 font-medium text-[#1a1a1a] placeholder-gray-500 transition-colors focus:border-[#221144] focus:outline-none"
                    value={formData.businessName}
                    onChange={handleChange('businessName')}
                  />
                </div>
                {errors.businessName && (
                  <p className="mt-1 text-sm text-red-500">{errors.businessName}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                    <Globe className="h-6 w-6" />
                  </div>
                  <input
                    type="text"
                    placeholder="Website/Social media"
                    className="w-full rounded-2xl border-2 border-[#C9B8FF]/60 bg-[#E5DEFF]/40 py-4 pl-14 pr-4 font-medium text-[#1a1a1a] placeholder-gray-500 transition-colors focus:border-[#221144] focus:outline-none"
                    value={formData.website}
                    onChange={handleChange('website')}
                  />
                </div>
                {errors.website && (
                  <p className="mt-1 text-sm text-red-500">{errors.website}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <input
                    type="text"
                    placeholder="Email/Phone No."
                    className="w-full rounded-2xl border-2 border-[#C9B8FF]/60 bg-[#E5DEFF]/40 py-4 pl-14 pr-4 font-medium text-[#1a1a1a] placeholder-gray-500 transition-colors focus:border-[#221144] focus:outline-none"
                    value={formData.contactInfo}
                    onChange={handleChange('contactInfo')}
                  />
                </div>
                {errors.contactInfo && (
                  <p className="mt-1 text-sm text-red-500">{errors.contactInfo}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                    <Camera className="h-6 w-6" />
                  </div>
                  <input
                    type="text"
                    placeholder="Business Logo"
                    className="w-full rounded-2xl border-2 border-[#C9B8FF]/60 bg-[#E5DEFF]/40 py-4 pl-14 pr-4 font-medium text-[#1a1a1a] placeholder-gray-500 transition-colors focus:border-[#221144] focus:outline-none"
                    value={formData.logo ? formData.logo.name : ''}
                    readOnly
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <textarea
                    placeholder="Short Description"
                    value={formData.description}
                    onChange={handleChange('description')}
                    rows={4}
                    className="w-full resize-none rounded-2xl border-2 border-[#C9B8FF]/60 bg-[#E5DEFF]/40 px-4 py-4 font-medium text-[#1a1a1a] placeholder-gray-500 transition-colors focus:border-[#221144] focus:outline-none"
                  />
                  <div className="absolute bottom-3 right-4 rounded-lg bg-white/80 px-2 py-1 text-xs text-gray-500">
                    {Math.min(wordCount, maxWords)} words
                  </div>
                </div>
                {errors.description && (
                  <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                )}
              </div>
            </div>

            <div className="mt-16 space-y-4">
              <Button
                variant="primary"
                fullWidth
                onClick={handleSubmitForm}
              >
                Submit for Review
              </Button>

              <StepNavigation
                totalSteps={totalSteps}
                currentStep={currentStep}
                onNext={onNext}
                onSkip={onSkip}
              />
            </div>
          </>
        ) : (
          <>
            <div className="mb-auto" />

            <div className="absolute inset-x-0 bottom-0 rounded-t-[2.75rem] bg-white px-8 pb-7 pt-9 shadow-[0_-10px_30px_rgba(20,15,40,0.18)]">
              <SuccessShieldArt className="mb-2" />

              <div className="mb-5 text-center">
                <h2 className="text-[2rem] font-bold leading-none text-[#221144]">Successful</h2>
                <p className="mt-1.5 text-base text-gray-500">2 Million per month</p>
              </div>

              <button
                onClick={onGoToDashboard}
                className="flex w-full items-center justify-between rounded-full bg-[#221144] px-6 py-2 text-left shadow-[0_8px_16px_rgba(34,17,68,0.28)] transition-colors hover:bg-[#1a0d33]"
              >
                <span className="text-lg font-semibold leading-none text-white">Go to Dashboard</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C5B1F8]">
                  <ArrowRight className="h-5 w-5 text-[#221144]" />
                </span>
              </button>

              <div className="mt-6 flex items-center justify-center gap-6">
                <button
                  onClick={onSkip}
                  className="text-base font-medium tracking-wide text-[#221144] transition-colors hover:text-[#13062a]"
                >
                  SKIP
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalSteps }).map((_, index) => (
                    <span
                      key={index}
                      className={`h-2.5 w-2.5 rounded-full ${
                        index === currentStep - 1 ? 'bg-[#221144]' : 'bg-[#d6d2df]'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={onNext}
                  className="text-base font-medium tracking-wide text-[#221144] transition-colors hover:text-[#13062a]"
                >
                  NEXT
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};
