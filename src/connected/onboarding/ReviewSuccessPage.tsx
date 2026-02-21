import { useNavigate } from 'react-router-dom';
import { ReviewSuccessPage as ReviewSuccessPageComponent } from '../../pages/onboarding';

export const ReviewSuccessPage = () => {
  const navigate = useNavigate();

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
    />
  );
};
