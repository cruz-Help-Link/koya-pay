import { useNavigate } from "react-router-dom";
import { CompanyCACDetailsFormPage as CompanyCACDetailsFormPageComponent } from "../../screens/onboarding";

export const CompanyCACDetailsFormPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (data: any) => {
    console.log("Company CAC Details:", data);
    navigate("/onboarding/executive-verification");
  };

  const handleSkip = () => {
    navigate("/");
  };

  const handleNext = () => {
    navigate("/onboarding/executive-verification");
  };

  return (
    <CompanyCACDetailsFormPageComponent
      onSubmit={handleSubmit}
      onSkip={handleSkip}
      onNext={handleNext}
      currentStep={2}
      totalSteps={7}
    />
  );
};
