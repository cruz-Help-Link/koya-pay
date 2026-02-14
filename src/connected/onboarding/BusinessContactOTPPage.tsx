import { useNavigate } from 'react-router-dom';
import { BusinessContactOTPPage as BusinessContactOTPPageComponent } from '../../pages/onboarding';

export const BusinessContactOTPPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (otp: string) => {
    console.log('OTP submitted:', otp);
    navigate('/onboarding/company-verification-success');
  };

  const handleResend = () => {
    console.log('Resending OTP...');
  };

  const handleSkip = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate('/onboarding/company-verification-success');
  };

  return (
    <BusinessContactOTPPageComponent
      contactEmail="support@company.com"
      onSubmit={handleSubmit}
      onResend={handleResend}
      onSkip={handleSkip}
      onNext={handleNext}
      currentStep={4}
      totalSteps={7}
    />
  );
};
