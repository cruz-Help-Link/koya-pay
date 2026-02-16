import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import primaryLogo from '../assets/logo/primary.png';

export const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showLogo, setShowLogo] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['trust', 'speed', 'integrity', 'accessibility'];

  useEffect(() => {
    // Stage 1: Show logo for 2 seconds
    const logoTimer = setTimeout(() => {
      setShowLogo(false);

      // Stage 2: Start cycling through words AFTER logo disappears
      const wordInterval = setInterval(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 1000);

      // Store interval ID for cleanup
      return () => clearInterval(wordInterval);
    }, 2000);

    // Navigate to welcome page after 7 seconds total (2s logo + 5s for all 4 words)
    const navTimer = setTimeout(() => {
      navigate('/welcome');
    }, 7000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#F5E6FF] flex items-center justify-center overflow-hidden relative">
      {/* Stage 1: Just the primary logo */}
      {showLogo && (
        <div className="flex items-center justify-center animate-fade-in">
          <img
            src={primaryLogo}
            alt="KoyaPay"
            className="w-[450px] h-auto object-contain"
          />
        </div>
      )}

      {/* Stage 2: Circles with animated text */}
      {!showLogo && (
        <div className="relative flex items-center justify-center animate-fade-in">
          {/* Four smaller circles around the big circle - #221144 color */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#221144] animate-pulse"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-10 w-10 h-10 rounded-full bg-[#221144] animate-pulse delay-75"></div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#221144] animate-pulse delay-150"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -left-10 w-10 h-10 rounded-full bg-[#221144] animate-pulse delay-300"></div>

          {/* Main big circle */}
          <div className="w-56 h-56 rounded-full bg-[#221144] flex items-center justify-center">
            {/* Animated text */}
            <div className="text-center">
              <p className="text-3xl font-bold text-[#F5E6FF] capitalize animate-text-fade" key={currentWordIndex}>
                {words[currentWordIndex]}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes text-fade {
          0% { opacity: 0; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 1; transform: scale(1); }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }

        .animate-text-fade {
          animation: text-fade 1s ease-in-out;
        }

        .delay-75 {
          animation-delay: 0.2s;
        }

        .delay-150 {
          animation-delay: 0.4s;
        }

        .delay-300 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};
