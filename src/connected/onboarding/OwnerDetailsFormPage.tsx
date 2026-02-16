import { useNavigate } from 'react-router-dom';
import { OwnerDetailsFormPage as OwnerDetailsFormPageComponent } from '../../pages/onboarding';
import { useOnboardingStore } from '../../stores';

export const OwnerDetailsFormPage = () => {
  const navigate = useNavigate();
  const { currentStep, goToNextStep, setOwnerDetails } = useOnboardingStore();

  const handleContinue = (data: any) => {
    setOwnerDetails(data);
    goToNextStep();
    navigate('/onboarding/business-details');
  };

  const handleSkip = () => {
    navigate('/');
  };

  const handleNext = () => {
    goToNextStep();
    navigate('/onboarding/business-details');
  };

  return (
    <OwnerDetailsFormPageComponent
      onContinue={handleContinue}
      onSkip={handleSkip}
      onNext={handleNext}
      currentStep={currentStep}
      totalSteps={7}
    />
  );
};
