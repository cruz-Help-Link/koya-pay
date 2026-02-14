import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

export const CreateNewPasswordScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to login or dashboard
    navigate('/welcome');
  };

  return (
    <Container overlayIntensity="medium">
      <div className="flex flex-col min-h-screen px-6 pt-20 pb-12">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src='/src/assets/logo/koyapay-logo.png' className='w-20 h-20 object-contain -mb-8' alt="KoyaPay" />
          <div className="text-2xl font-semibold mt-6">
            <span className="text-gray-400">Koya</span><span className="text-black">Pay</span>
          </div>
        </div>

        {/* Success Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            {/* Success Icon - Checkmark */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-2xl font-bold text-[#1a1a1a]">
                Password Created Successfully
              </h2>
              <p className="text-gray-600">
                Your new password has been set. You can now login with your new password.
              </p>
            </div>

            {/* Action Button */}
            <Button
              variant="primary"
              fullWidth
              onClick={handleContinue}
            >
              Continue to Login
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
