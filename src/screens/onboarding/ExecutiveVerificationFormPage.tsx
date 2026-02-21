import { useState } from 'react';
import { ArrowLeft, User, Calendar, Globe, CreditCard, Phone, Camera } from 'lucide-react';
import { Button, StepNavigation } from '../../components/ui';
import { Container } from '../../components/ui/Container';

interface ExecutiveDetails {
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  nin: string;
  phoneNumber: string;
  photo: File | null;
}

interface ExecutiveVerificationFormPageProps {
  onSubmit: (data: ExecutiveDetails) => void;
  onSkip: () => void;
  onNext: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const ExecutiveVerificationFormPage: React.FC<ExecutiveVerificationFormPageProps> = ({
  onSubmit,
  onSkip,
  onNext,
  currentStep = 3,
  totalSteps = 7,
}) => {
  const [formData, setFormData] = useState<ExecutiveDetails>({
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    nin: '',
    phoneNumber: '',
    photo: null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof ExecutiveDetails) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    }

    if (!formData.nationality.trim()) {
      newErrors.nationality = "Nationality is required";
    }

    if (!formData.nin.trim()) {
      newErrors.nin = "NIN/Passport is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
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
            Executive Verification
          </h1>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-auto">
          {/* Full Name */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <User className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.fullName}
                onChange={handleChange('fullName')}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <Calendar className="w-6 h-6" />
              </div>
              <input
                type="date"
                placeholder="Date of Birth"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.dateOfBirth}
                onChange={handleChange('dateOfBirth')}
              />
            </div>
            {errors.dateOfBirth && (
              <p className="mt-1 text-sm text-red-500">{errors.dateOfBirth}</p>
            )}
          </div>

          {/* Nationality */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <Globe className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="Nationality"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.nationality}
                onChange={handleChange('nationality')}
              />
            </div>
            {errors.nationality && (
              <p className="mt-1 text-sm text-red-500">{errors.nationality}</p>
            )}
          </div>

          {/* NIN/Passport */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <CreditCard className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="NIN/ Passport"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.nin}
                onChange={handleChange('nin')}
              />
            </div>
            {errors.nin && (
              <p className="mt-1 text-sm text-red-500">{errors.nin}</p>
            )}
          </div>

          {/* Phone Number for OTP */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <Phone className="w-6 h-6" />
              </div>
              <input
                type="tel"
                placeholder="Phone Number for OTP"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.phoneNumber}
                onChange={handleChange('phoneNumber')}
              />
            </div>
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Capture photograph */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <Camera className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="Capture photograph"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.photo ? formData.photo.name : ''}
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
