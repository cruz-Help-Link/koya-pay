import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  AccountTypeScreen,
  RegisteredBusinessScreen,
  VerifyEmailScreen,
} from "../connected/signup";
import {
  OnboardingIntroPage,
  OwnerDetailsFormPage,
  BusinessDetailsFormPage,
  BusinessLocationIntroPage,
  VerificationMethodSelectionPage,
  DocumentUploadPage,
  ReviewSuccessPage,
  OnboardingCompletePage,
} from "../connected/onboarding";
import KoyaPayLogin from "../pages/KoyaPayLogin";
import OnboardingLayout from "../layouts/OnboardingLayout";
import SignupLayout from "../layouts/SignupLayout";
import { SplashScreen } from "../screens/SplashScreen";
import { BusinessModeScreen } from "../screens/BusinessModeScreen";

import { VerifyEmailChangePassword } from "../screens/auth/VerifyEmailChangePassword";
import { CreateNewPasswordScreen } from "../screens/auth/CreateNewPasswordScreen";
import { LoginScreen } from "../screens/auth/LoginScreen";
import { ForgotPasswordScreen } from "../screens/auth/ForgotPasswordScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/welcome",
    element: <KoyaPayLogin />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordScreen />,
  },
  {
    path: "/verify-reset-password",
    element: <VerifyEmailChangePassword />,
  },
  {
    path: "/create-new-password",
    element: <CreateNewPasswordScreen />,
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
        path: "register",
        element: <RegisteredBusinessScreen />,
      },
      {
        path: "verify-email",
        element: <VerifyEmailScreen />,
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
        path: "owner-details",
        element: <OwnerDetailsFormPage />,
      },
      {
        path: "business-details",
        element: <BusinessDetailsFormPage />,
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
