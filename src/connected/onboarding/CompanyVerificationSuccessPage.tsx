import { useNavigate } from "react-router-dom";
import { CompanyVerificationSuccessPage as CompanyVerificationSuccessPageComponent } from "../../screens/onboarding";

export const CompanyVerificationSuccessPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Go to splash screen when company verification is complete
    navigate("/dashboard");
  };

  return (
    <CompanyVerificationSuccessPageComponent onContinue={handleContinue} />
  );
};
