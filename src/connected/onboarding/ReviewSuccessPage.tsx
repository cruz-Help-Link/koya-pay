import { useNavigate } from 'react-router-dom';
import { ReviewSuccessPage as ReviewSuccessPageComponent } from '../../pages/onboarding';
import { useOnboardingStore } from '../../stores';

export const ReviewSuccessPage = () => {
  const navigate = useNavigate();
  const { currentStep } = useOnboardingStore();

  const handleContinue = () => {
    navigate('/onboarding/company-verification-intro');
  };

  const handleNext = () => {
    navigate('/onboarding/company-verification-intro');
  };

  const handleSkip = () => {
    navigate('/onboarding/company-verification-intro');
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
