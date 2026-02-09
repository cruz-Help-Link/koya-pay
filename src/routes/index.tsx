import { createBrowserRouter, Navigate } from 'react-router-dom';
import {
  SignupMethodScreen,
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
} from '../connected/onboarding';
import KoyaPayLogin from '../pages/KoyaPayLogin';
import OnboardingLayout from '../layouts/OnboardingLayout';
import SignupLayout from '../layouts/SignupLayout';
import { SplashScreen } from '../screens/SplashScreen';
import { SignupFormScreen } from '../screens/SignupFormScreen';

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
        element: <SignupMethodScreen />,
      },
      {
        path: 'details',
        element: <SignupFormScreen />,
      },
      {
        path: 'account-type',
        element: <AccountTypeScreen />,
      },
      {
        path: 'register',
        element: <RegisteredBusinessScreen />,
      },
      {
        path: 'verify-email',
        element: <VerifyEmailScreen />,
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
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
