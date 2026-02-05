import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignupMethodScreen } from "./pages/SignUpMethod";
import KoyaPayLogin from "./pages/KoyaPayLogin";
import type { AccountType } from "./types";
import { VerifyEmailScreen } from "./screens/VerifyEmailScreen";
import { BusinessDetailsFormPage } from "./pages/onboarding";



function App() {
  
   return (
    <BusinessDetailsFormPage />
  );
}

export default App;
