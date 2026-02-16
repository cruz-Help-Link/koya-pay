import { useNavigate } from 'react-router-dom';
import { BusinessDetailsFormPage as BusinessDetailsFormPageComponent } from '../../pages/onboarding';
import { useOnboardingStore } from '../../stores';

export const BusinessDetailsFormPage = () => {
  const navigate = useNavigate();
  const { currentStep, goToNextStep, setBusinessDetails } = useOnboardingStore();

  const handleSubmit = (data: any) => {
    setBusinessDetails(data);
    goToNextStep();
    navigate('/onboarding/company-verification-intro');
  };

  const handleSkip = () => {
    navigate('/');
  };

  const handleNext = () => {
    goToNextStep();
    navigate('/onboarding/company-verification-intro');
  };

  return (
    <BusinessDetailsFormPageComponent
      onSubmit={handleSubmit}
      onSkip={handleSkip}
      onNext={handleNext}
      currentStep={currentStep}
      totalSteps={7}
    />
  );
};
