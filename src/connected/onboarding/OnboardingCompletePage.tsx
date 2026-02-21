import { useNavigate } from "react-router-dom";
import { OnboardingCompletePage as OnboardingCompletePageComponent } from "../../screens/onboarding";
import { useOnboardingStore } from "../../stores";

export const OnboardingCompletePage = () => {
  const navigate = useNavigate();
  const { reset } = useOnboardingStore();

  const handleGoToDashboard = () => {
    reset();
    navigate("/dashboard");
  };

  return (
    <OnboardingCompletePageComponent onGoToDashboard={handleGoToDashboard} />
  );
};
