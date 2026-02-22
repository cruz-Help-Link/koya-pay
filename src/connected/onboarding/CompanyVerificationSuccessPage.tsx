import { useNavigate } from 'react-router-dom';
import { CompanyVerificationSuccessPage as CompanyVerificationSuccessPageComponent } from '../../pages/onboarding';

export const CompanyVerificationSuccessPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Go to splash screen when company verification is complete
    navigate('/');
  };

  return (
    <CompanyVerificationSuccessPageComponent
      onContinue={handleContinue}
    />
  );
};
