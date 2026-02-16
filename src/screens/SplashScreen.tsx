import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewLogo from '../assets/logo/Koyapay-NewLogo.png';
import '../screens/style/SplashScreen.css';

export const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showLogo, setShowLogo] = useState(true);
  const [activeBubble, setActiveBubble] = useState(-1);
  const words = ['trust', 'speed', 'integrity', 'accessibility'];

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(false);

      let index = 0;
      const bubbleInterval = setInterval(() => {
        setActiveBubble(index);
        index++;
        if (index >= words.length) {
          clearInterval(bubbleInterval);
        }
      }, 1200);
    }, 2000);

    const navTimer = setTimeout(() => {
      navigate('/welcome');
    }, 7500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#F5E6FF] flex items-center justify-center overflow-hidden relative">
      {showLogo && (
        <div className="flex items-center justify-center animate-fade-in">
          <img src={NewLogo} alt="KoyaPay" className="w-[1000px] h-auto object-contain" />
        </div>
      )}

      {!showLogo && (
        <div className="relative flex items-center justify-center animate-fade-in">
          <div
            className={`absolute w-10 h-10 rounded-full bg-[#221144] ${activeBubble === 0 ? 'animate-bubble-top' : ''}`}
            style={{ top: '-3rem', left: '50%', transform: 'translateX(-50%)' }}
          />
          <div
            className={`absolute w-10 h-10 rounded-full bg-[#221144] ${activeBubble === 1 ? 'animate-bubble-right' : ''}`}
            style={{ top: '50%', right: '-3rem', transform: 'translateY(-50%)' }}
          />
          <div
            className={`absolute w-10 h-10 rounded-full bg-[#221144] ${activeBubble === 2 ? 'animate-bubble-bottom' : ''}`}
            style={{ bottom: '-3rem', left: '50%', transform: 'translateX(-50%)' }}
          />
          <div
            className={`absolute w-10 h-10 rounded-full bg-[#221144] ${activeBubble === 3 ? 'animate-bubble-left' : ''}`}
            style={{ top: '50%', left: '-3rem', transform: 'translateY(-50%)' }}
          />

          <div className={`w-56 h-56 rounded-full bg-[#221144] flex items-center justify-center ${activeBubble >= 0 ? 'animate-circle-pulse' : ''}`}>
            <div className="text-center">
              {activeBubble >= 0 && activeBubble < words.length && (
                <p className="text-3xl font-bold text-[#F5E6FF] capitalize animate-text-pop" key={activeBubble}>
                  {words[activeBubble]}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};