import { useNavigate } from "react-router-dom";
import { VerificationMethodSelectionPage as VerificationMethodSelectionPageComponent } from "../../screens/onboarding";
import { useOnboardingStore } from "../../stores";
import type { VerificationMethod } from "../../types";

export const VerificationMethodSelectionPage = () => {
  const navigate = useNavigate();
  const { currentStep, goToNextStep, setVerificationMethod } =
    useOnboardingStore();

  const handleSelectMethod = (method: VerificationMethod) => {
    setVerificationMethod(method);
    goToNextStep();
    navigate("/onboarding/document-upload");
  };

  const handleSkip = () => {
    navigate("/");
  };

  const handleNext = () => {
    goToNextStep();
    navigate("/onboarding/document-upload");
  };

  return (
    <VerificationMethodSelectionPageComponent
      onSelectMethod={handleSelectMethod}
      onSkip={handleSkip}
      onNext={handleNext}
      currentStep={currentStep}
      totalSteps={7}
    />
  );
};
