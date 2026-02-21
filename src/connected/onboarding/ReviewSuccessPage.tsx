import { useNavigate } from "react-router-dom";
import { ReviewSuccessPage as ReviewSuccessPageComponent } from "../../screens/onboarding";

export const ReviewSuccessPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/onboarding/company-verification-intro");
  };

  return <ReviewSuccessPageComponent onContinue={handleContinue} />;
};
