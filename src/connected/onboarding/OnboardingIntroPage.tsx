import { useNavigate } from 'react-router-dom';
import { OnboardingIntroPage as OnboardingIntroPageComponent } from '../../pages/onboarding';
import { useOnboardingStore } from '../../stores';

export const OnboardingIntroPage = () => {
  const navigate = useNavigate();
  const { currentStep, goToNextStep } = useOnboardingStore();

  const handleStart = () => {
    goToNextStep();
    navigate('/onboarding/owner-details');
  };

  const handleSkip = () => {
    navigate('/onboarding/complete');
  };

  return (
    <OnboardingIntroPageComponent
      onStart={handleStart}
      onSkip={handleSkip}
      currentStep={currentStep}
      totalSteps={7}
    />
  );
};
