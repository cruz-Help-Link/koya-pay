import { useNavigate } from 'react-router-dom';
import { BusinessContactOTPPage as BusinessContactOTPPageComponent } from '../../pages/onboarding';

export const BusinessContactOTPPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (otp: string) => {
    console.log('OTP submitted:', otp);
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard/home');
  };

  const handleResend = () => {
    console.log('Resending OTP...');
  };

  const handleSkip = () => {
    navigate('/');
  };

  const handleNext = () => {
    navigate('/dashboard/home');
  };

  return (
    <BusinessContactOTPPageComponent
      contactEmail="support@company.com"
      onSubmit={handleSubmit}
      onGoToDashboard={handleGoToDashboard}
      onResend={handleResend}
      onSkip={handleSkip}
      onNext={handleNext}
      currentStep={4}
      totalSteps={7}
    />
  );
};
