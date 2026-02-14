import { createBrowserRouter, Navigate } from 'react-router-dom';
import {
  AccountTypeScreen,
  RegisteredBusinessScreen,
  VerifyEmailScreen,
} from '../connected/signup';
import {
  OnboardingIntroPage,
  OwnerDetailsFormPage,
  BusinessDetailsFormPage,
  BusinessLocationIntroPage,
  VerificationMethodSelectionPage,
  DocumentUploadPage,
  ReviewSuccessPage,
  OnboardingCompletePage,
  CompanyVerificationIntroPage,
  CompanyCACDetailsFormPage,
  ExecutiveVerificationFormPage,
  BusinessContactOTPPage,
  CompanyVerificationSuccessPage,
} from '../connected/onboarding';
import KoyaPayLogin from '../pages/KoyaPayLogin';
import OnboardingLayout from '../layouts/OnboardingLayout';
import SignupLayout from '../layouts/SignupLayout';
import { SplashScreen } from '../screens/SplashScreen';
import { BusinessModeScreen } from '../screens/BusinessModeScreen';
import { StarterBusinessScreen } from '../screens/StarterBusinessScreen';
import { CreateNewPasswordScreen } from '../screens/CreateNewPasswordScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SplashScreen />,
  },
  {
    path: '/welcome',
    element: <KoyaPayLogin />,
  },
  {
    path: '/signup',
    element: <SignupLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/signup/account-type" replace />,
      },
      {
        path: 'account-type',
        element: <AccountTypeScreen />,
      },
      {
        path: 'business-mode',
        element: <BusinessModeScreen />,
      },
      {
        path: 'starter-business',
        element: <StarterBusinessScreen />,
      },
      {
        path: 'register',
        element: <RegisteredBusinessScreen />,
      },
      {
        path: 'verify-email',
        element: <VerifyEmailScreen />,
      },
      {
        path: 'create-new-password',
        element: <CreateNewPasswordScreen />,
      },
    ],
  },
  {
    path: '/onboarding',
    element: <OnboardingLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/onboarding/intro" replace />,
      },
      {
        path: 'intro',
        element: <OnboardingIntroPage />,
      },
      {
        path: 'owner-details',
        element: <OwnerDetailsFormPage />,
      },
      {
        path: 'business-details',
        element: <BusinessDetailsFormPage />,
      },
      {
        path: 'location-intro',
        element: <BusinessLocationIntroPage />,
      },
      {
        path: 'verification-method',
        element: <VerificationMethodSelectionPage />,
      },
      {
        path: 'document-upload',
        element: <DocumentUploadPage />,
      },
      {
        path: 'review',
        element: <ReviewSuccessPage />,
      },
      {
        path: 'complete',
        element: <OnboardingCompletePage />,
      },
      {
        path: 'company-verification-intro',
        element: <CompanyVerificationIntroPage />,
      },
      {
        path: 'company-cac-details',
        element: <CompanyCACDetailsFormPage />,
      },
      {
        path: 'executive-verification',
        element: <ExecutiveVerificationFormPage />,
      },
      {
        path: 'business-contact-otp',
        element: <BusinessContactOTPPage />,
      },
      {
        path: 'company-verification-success',
        element: <CompanyVerificationSuccessPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
