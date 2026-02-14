import { useNavigate } from 'react-router-dom';
import { ExecutiveVerificationFormPage as ExecutiveVerificationFormPageComponent } from '../../pages/onboarding';

export const ExecutiveVerificationFormPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (data: any) => {
    console.log('Executive Details:', data);
    navigate('/onboarding/business-contact-otp');
  };

  const handleSkip = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate('/onboarding/business-contact-otp');
  };

  return (
    <ExecutiveVerificationFormPageComponent
      onSubmit={handleSubmit}
      onSkip={handleSkip}
      onNext={handleNext}
      currentStep={3}
      totalSteps={7}
    />
  );
};
