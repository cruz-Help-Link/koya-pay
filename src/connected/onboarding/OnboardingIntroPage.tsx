import { useNavigate } from 'react-router-dom';
import { OnboardingIntroPage as OnboardingIntroPageComponent } from '../../pages/onboarding';
import { useOnboardingStore } from '../../stores';

export const OnboardingIntroPage = () => {
  const navigate = useNavigate();
  const { currentStep, goToNextStep } = useOnboardingStore();

  const handleStart = () => {
    goToNextStep();
    // Show success page first before going to owner details
    navigate('/onboarding/owner-verification-intro-success');
  };

  const handleSkip = () => {
    navigate('/dashboard/home');
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
