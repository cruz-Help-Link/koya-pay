import { useNavigate } from 'react-router-dom';
import { CompanyVerificationSuccessPage as CompanyVerificationSuccessPageComponent } from '../../pages/onboarding';

export const CompanyVerificationSuccessPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Go to splash screen when company verification is complete
    navigate('/');
  };

    // Navigate to dashboard after successful verification
    navigate('/onboarding/location-intro');
  };

  const handleSkip = () => {
    navigate('/');
  };

  const handleNext = () => {
    navigate('/onboarding/location-intro');
  };

  return (
    <CompanyVerificationSuccessPageComponent
      onContinue={handleContinue}
    />
  );
};
