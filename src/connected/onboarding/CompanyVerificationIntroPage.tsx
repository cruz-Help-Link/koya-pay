import { useNavigate } from 'react-router-dom';
import { CompanyVerificationIntroPage as CompanyVerificationIntroPageComponent } from '../../pages/onboarding';

export const CompanyVerificationIntroPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/onboarding/company-cac-details');
  };

  const handleSkip = () => {
    navigate('/');
  };

  const handleNext = () => {
    navigate('/onboarding/company-cac-details');
  };

  return (
    <CompanyVerificationIntroPageComponent
      onStart={handleStart}
      onSkip={handleSkip}
      onNext={handleNext}
      currentStep={1}
      totalSteps={7}
    />
  );
};
