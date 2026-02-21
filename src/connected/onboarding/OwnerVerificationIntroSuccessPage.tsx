import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { OwnerVerificationIntroSuccessPage as OwnerVerificationIntroSuccessPageComponent } from "../../screens/onboarding";

export const OwnerVerificationIntroSuccessPage = () => {
  const navigate = useNavigate();

  // Automatically proceed to next step after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding/owner-details");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <OwnerVerificationIntroSuccessPageComponent
      onContinue={() => navigate("/onboarding/owner-details")}
    />
  );
};
