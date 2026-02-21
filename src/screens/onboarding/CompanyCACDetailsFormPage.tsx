import { useState } from 'react';
import { ArrowLeft, FileText, User, Globe, CreditCard } from 'lucide-react';
import { Button, StepNavigation } from '../../components/ui';
import { Container } from '../../components/ui/Container';

interface CompanyCACDetails {
  rcbnNumber: string;
  registeredName: string;
  registrationType: string;
  cacDoc: File | null;
}

interface CompanyCACDetailsFormPageProps {
  onSubmit: (data: CompanyCACDetails) => void;
  onSkip: () => void;
  onNext: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const CompanyCACDetailsFormPage: React.FC<CompanyCACDetailsFormPageProps> = ({
  onSubmit,
  onSkip,
  onNext,
  currentStep = 2,
  totalSteps = 7,
}) => {
  const [formData, setFormData] = useState<CompanyCACDetails>({
    rcbnNumber: '',
    registeredName: '',
    registrationType: '',
    cacDoc: null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof CompanyCACDetails) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.rcbnNumber.trim()) {
      newErrors.rcbnNumber = "RC/BN Number is required";
    }

    if (!formData.registeredName.trim()) {
      newErrors.registeredName = "Registered Name is required";
    }

    if (!formData.registrationType.trim()) {
      newErrors.registrationType = "Registration Type is required";
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
    <Container>
      <div className="flex flex-col min-h-screen px-6 pt-16 pb-12">
        {/* Back Arrow */}
        <button
          onClick={onSkip}
          className="absolute top-6 left-6 p-2 rounded-xl hover:bg-white/50 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
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
            Company's Verification
          </h1>
          <p className="text-sm text-gray-600">(CAC)</p>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-auto">
          {/* RC/BN Number */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <FileText className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="RC/BN Number"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.rcbnNumber}
                onChange={handleChange('rcbnNumber')}
              />
            </div>
            {errors.rcbnNumber && (
              <p className="mt-1 text-sm text-red-500">{errors.rcbnNumber}</p>
            )}
          </div>

          {/* Registered Name */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <User className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="Registered Name"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.registeredName}
                onChange={handleChange('registeredName')}
              />
            </div>
            {errors.registeredName && (
              <p className="mt-1 text-sm text-red-500">{errors.registeredName}</p>
            )}
          </div>

          {/* Registration Type */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <Globe className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="Registration Type"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.registrationType}
                onChange={handleChange('registrationType')}
              />
            </div>
            {errors.registrationType && (
              <p className="mt-1 text-sm text-red-500">{errors.registrationType}</p>
            )}
          </div>

          {/* CAC Doc */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <CreditCard className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="CAC Doc"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.cacDoc ? formData.cacDoc.name : ''}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-4 mt-16">
          <Button
            variant="primary"
            fullWidth
            onClick={handleSubmitForm}
          >
            Continue
          </Button>

          {/* Progress Indicator */}
          <StepNavigation
            totalSteps={totalSteps}
            currentStep={currentStep}
            onNext={onNext}
            onSkip={onSkip}
          />
        </div>
      </div>
    </Container>
  );
};
