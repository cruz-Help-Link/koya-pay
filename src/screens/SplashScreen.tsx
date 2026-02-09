import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Logo Container */}
      <div className="flex flex-col items-center">
        <img 
          src="/src/assets/logo/primary-dark.png" 
          alt="KoyaPay" 
          className="w-80 h-40 object-contain animate-dance"
        />
      </div>
    </div>
  );
};
