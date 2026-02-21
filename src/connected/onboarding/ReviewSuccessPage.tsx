import { useNavigate } from 'react-router-dom';
import { ReviewSuccessPage as ReviewSuccessPageComponent } from '../../pages/onboarding';
import { useOnboardingStore } from '../../stores';

export const ReviewSuccessPage = () => {
  const navigate = useNavigate();
  const { currentStep } = useOnboardingStore();

  const handleContinue = () => {
    navigate('/onboarding/complete');
  };

  const handleNext = () => {
    navigate('/onboarding/complete');
  };

  const handleSkip = () => {
    navigate('/');
  };

  return (
    <ReviewSuccessPageComponent
      onContinue={handleContinue}
      onNext={handleNext}
      onSkip={handleSkip}
      currentStep={currentStep}
      totalSteps={7}
    />
  );
};
