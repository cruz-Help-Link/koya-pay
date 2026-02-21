import { useNavigate } from "react-router-dom";
import { BusinessLocationIntroPage as BusinessLocationIntroPageComponent } from "../../screens/onboarding";
import { useOnboardingStore } from "../../stores";

export const BusinessLocationIntroPage = () => {
  const navigate = useNavigate();
  const { currentStep, goToNextStep } = useOnboardingStore();

  const handleStart = () => {
    goToNextStep();
    navigate("/onboarding/verification-method");
  };

  const handleNext = () => {
    goToNextStep();
    navigate("/onboarding/verification-method");
  };

  const handleSkip = () => {
    navigate("/");
  };

  return (
    <BusinessLocationIntroPageComponent
      onStart={handleStart}
      onNext={handleNext}
      onSkip={handleSkip}
      currentStep={currentStep}
      totalSteps={7}
    />
  );
};
