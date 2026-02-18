
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { DocumentUploadSuccessPage as DocumentUploadSuccessPageComponent } from '../../pages/onboarding';

export const DocumentUploadSuccessPage = () => {
  const navigate = useNavigate();

  // Automatically proceed to company verification intro after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding/company-verification-intro');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <DocumentUploadSuccessPageComponent
      onContinue={() => navigate('/onboarding/company-verification-intro')}
    />
  );
};
