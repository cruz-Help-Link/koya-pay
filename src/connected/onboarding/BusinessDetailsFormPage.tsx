import { useNavigate } from 'react-router-dom';
import { BusinessDetailsFormPage as BusinessDetailsFormPageComponent } from '../../pages/onboarding';
import { useOnboardingStore } from '../../stores';

export const BusinessDetailsFormPage = () => {
  const navigate = useNavigate();
  const { currentStep, setBusinessDetails } = useOnboardingStore();

  const handleSubmit = (data: any) => {
    setBusinessDetails(data);
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard/home');
  };

  const handleSkip = () => {
    navigate('/');
  };

  const handleNext = () => {
    navigate('/onboarding/location-intro');
  };

  return (
    <BusinessDetailsFormPageComponent
      onSubmit={handleSubmit}
      onGoToDashboard={handleGoToDashboard}
      onSkip={handleSkip}
      onNext={handleNext}
      currentStep={currentStep}
      totalSteps={7}
    />
  );
};
