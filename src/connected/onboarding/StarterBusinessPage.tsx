// screens/StarterBusinessScreen.tsx
import React from "react";
import { BusinessSignupForm } from "../../screens/BusinessSignupForm";

export const StarterBusinessPage: React.FC = () => (
  <BusinessSignupForm
    title="Starter Business"
    subtitle="Get started with your new business"
    nameFieldPlaceholder="Business name"
  />
);