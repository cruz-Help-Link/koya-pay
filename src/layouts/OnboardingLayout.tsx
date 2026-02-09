import { Outlet, useLocation } from 'react-router-dom';
import { useOnboardingStore } from '../stores';
import { useEffect } from 'react';

const OnboardingLayout = () => {
  const location = useLocation();
  const { currentStep, setCurrentStep } = useOnboardingStore();

  // Map routes to step numbers
  const routeToStep: Record<string, number> = {
    '/onboarding/intro': 1,
    '/onboarding/owner-details': 2,
    '/onboarding/business-details': 3,
    '/onboarding/location-intro': 4,
    '/onboarding/verification-method': 5,
    '/onboarding/document-upload': 6,
    '/onboarding/review': 7,
    '/onboarding/complete': 8,
  };

  // Update current step when route changes
  useEffect(() => {
    const step = routeToStep[location.pathname];
    if (step && step !== currentStep) {
      setCurrentStep(step);
    }
  }, [location.pathname, currentStep, setCurrentStep]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-koya-primary/5 via-white to-koya-accent/5">
      <Outlet />
    </div>
  );
};

export default OnboardingLayout;
