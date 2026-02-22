import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  AccountTypeScreen,
  RegisteredBusinessScreen,
  VerifyEmailScreen,
} from '../connected/auth';
import {
  OnboardingIntroPage,
  OwnerVerificationIntroSuccessPage,
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
  DocumentUploadSuccessPage,
} from '../connected/onboarding';
import OnboardingLayout from '../layouts/OnboardingLayout';
import SignupLayout from '../layouts/SignupLayout';
import { SplashScreen } from '../screens/SplashScreen';
import { BusinessModeScreen } from '../screens/BusinessModeScreen';
import { StarterBusinessScreen } from '../screens/StarterBusinessScreen';
import { CreateNewPasswordScreen } from '../screens/CreateNewPasswordScreen';
import KoyaPayLogin from "../pages/KoyaPayLogin";

import { VerifyEmailChangePassword } from "../screens/auth/VerifyEmailChangePassword";
import { ForgotPasswordScreen } from "../screens/auth/ForgotPasswordScreen";
import { LoginUserScreen } from '../connected/auth/LoginUserScreen';
import { CreateInvoiceScreen } from '../screens/CreateInvoiceScreen';
import { DashboardHomeScreen } from '../screens/DashboardHomeScreen';
import { DashboardTransactionsScreen } from '../screens/DashboardTransactionsScreen';
import { DashboardMoreScreen } from '../screens/DashboardMoreScreen';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "welcome",
    element: <KoyaPayLogin />,
  },
  {
    path: "login",
    element: <LoginUserScreen />,
  },
  {
    path: "forgot-password",
    element: <ForgotPasswordScreen />,
  },
  {
    path: "verify-reset-password",
    element: <VerifyEmailChangePassword />,
  },
  {
    path: "create-new-password",
    element: <CreateNewPasswordScreen />,
  },
  {
    path: "create-invoice",
    element: <CreateInvoiceScreen />,
  },
  {
    path: "dashboard",
    element: <Navigate to="/dashboard/home" replace />,
  },
  {
    path: "dashboard/home",
    element: <DashboardHomeScreen />,
  },
  {
    path: "dashboard/transactions",
    element: <DashboardTransactionsScreen />,
  },
  {
    path: "dashboard/more",
    element: <DashboardMoreScreen />,
  },
  {
    path: "/signup",
    element: <SignupLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/signup/account-type" replace />,
      },
      {
        path: "account-type",
        element: <AccountTypeScreen />,
      },
      {
        path: "business-mode",
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
        path: "verify-email",
        element: <VerifyEmailScreen />,
      },
      {
        path: 'create-new-password',
        element: <CreateNewPasswordScreen />,
      },
    ],
  },
  {
    path: "/onboarding",
    element: <OnboardingLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/onboarding/intro" replace />,
      },
      {
        path: "intro",
        element: <OnboardingIntroPage />,
      },
      {
        path: "owner-verification-intro-success",
        element: <OwnerVerificationIntroSuccessPage />,
      },
      {
        path: "owner-details",
        element: <OwnerDetailsFormPage />,
      },
      {
        path: "business-details",
        element: <BusinessDetailsFormPage />,
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
      {
        path: "location-intro",
        element: <BusinessLocationIntroPage />,
      },
      {
        path: "verification-method",
        element: <VerificationMethodSelectionPage />,
      },
      {
        path: "document-upload",
        element: <DocumentUploadPage />,
      },
      {
        path: "document-upload-success",
        element: <DocumentUploadSuccessPage />,
      },

      // Live photo upload
      // Letter head upload
      {
        path: "review",
        element: <ReviewSuccessPage />,
      },
      {
        path: "complete",
        element: <OnboardingCompletePage />,
      },
      
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
