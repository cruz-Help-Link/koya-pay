import { useNavigate } from 'react-router-dom';
import { CompanyVerificationSuccessPage as CompanyVerificationSuccessPageComponent } from '../../pages/onboarding';

export const CompanyVerificationSuccessPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to dashboard after successful verification
    navigate('/dashboard');
  };

  const handleSkip = () => {
    navigate('/');
  };

  const handleNext = () => {
    navigate('/dashboard');
  };

  return (
    <CompanyVerificationSuccessPageComponent
      onContinue={handleContinue}
      onSkip={handleSkip}
      onNext={handleNext}
      currentStep={5}
      totalSteps={7}
      monthlyLimit="5 Million per month"
    />
  );
};
