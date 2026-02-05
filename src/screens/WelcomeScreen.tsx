// screens/WelcomeScreen.tsx
import React from 'react';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';

export const WelcomeScreen: React.FC = () => {
  return (
    <Container overlayIntensity="medium">
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        {/* Logo and Branding */}
        <div className="text-center mb-16">
          <div className="mb-6 lg:mb-8">
              <div className=" flex items-center justify-center">
                <img src='/src/assets/logo/logo.png' className='w-40 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28' />
              </div>
            </div>
          <p className="text-lg text-[#1a1a1a] leading-relaxed">
            Manage your money
            <br />
            with KoyaPay
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="w-full max-w-sm space-y-4">
          <Button variant="secondary" fullWidth>
            Login Account
          </Button>
          <Button variant="primary" fullWidth>
            Sign UP
          </Button>
        </div>
      </div>
    </Container>
  );
};