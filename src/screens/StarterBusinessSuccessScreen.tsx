import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Smile } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

export const StarterBusinessSuccessScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/onboarding');
  };

  return (
    <Container>
      <div className="flex flex-col min-h-screen px-6 pt-20 pb-12">
        {/* Logo - consistent with other screens */}
        <div className="flex flex-col items-center">
          <img 
            src='/src/assets/logo/koyapay-logo.png' 
            className='w-20 h-20 object-contain -mb-8' 
            alt="KoyaPay" 
          />
          <div className="text-2xl font-semibold mt-6">
            <span className="text-gray-400">Koya</span>
            <span className="text-black">Pay</span>
          </div>
        </div>

        {/* Success Content */}
        <div className="flex-1 flex items-end pb-8">
          <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            {/* Smiley Icon - black smiley face with thin lines, no background */}
            <div className="flex justify-center mb-8">
              <Smile className="w-32 h-32 text-black" strokeWidth={1.5} />
            </div>

            {/* Success Message */}
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-[#1a1a1a]">
                Welcome to KoyaPay!
              </h2>
              <p className="text-gray-600 text-lg">
                Your starter business account<br/>
                is ready to use 🎉
              </p>
            </div>

            {/* Action Button */}
            <Button
              variant="primary"
              fullWidth
              onClick={handleGoToDashboard}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
