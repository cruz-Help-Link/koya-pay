import React from 'react';
import { useNavigate } from 'react-router-dom';

const KoyaPayLogin: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 flex items-center justify-center p-4">
      {/* Container - responsive max width */}
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Phone frame simulation for larger screens */}
        <div className="bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 rounded-3xl lg:rounded-[3rem] overflow-hidden">
          {/* Main content */}
          <div className="px-8 py-12 lg:px-8 lg:py-10 xl:px-16 xl:py-20 flex flex-col items-center justify-center min-h-[600px] lg:min-h-[700px]">
            {/* Logo */}
            <div className="mb-6 lg:mb-8">
              <div className=" flex items-center justify-center">
                <img src='/src/assets/logo/logo.png' className='w-40 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28' />
              </div>
            </div>

            {/* Brand name */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-4 lg:mb-6">
              KoyaPay
            </h1>

            {/* Tagline */}
            <p className="text-lg lg:text-xl xl:text-2xl text-gray-800 text-center mb-12 lg:mb-16 xl:mb-20 max-w-xs lg:max-w-sm">
              Manage your money with KoyaPay
            </p>

            {/* Buttons */}
            <div className="w-full max-w-sm space-y-4 lg:space-y-5">
              {/* Login Account Button */}
              <button
                className="w-full py-4 lg:py-5 px-6 bg-white/40 backdrop-blur-sm text-gray-900 font-semibold rounded-full border-2 border-gray-900/20 hover:bg-white/60 transition-all duration-200 text-base lg:text-lg shadow-md hover:shadow-lg"
                onClick={() => alert('Login functionality coming soon!')}
              >
                Login Account
              </button>

              {/* Sign Up Button */}
              <button
                className="w-full py-4 lg:py-5 px-6 bg-gradient-to-r from-indigo-900 to-purple-900 text-white font-semibold rounded-full hover:from-indigo-800 hover:to-purple-800 transition-all duration-200 text-base lg:text-lg shadow-lg hover:shadow-xl"
                onClick={() => navigate('/signup')}
              >
                Sign UP
              </button>
            </div>
          </div>

          {/* Bottom indicator (hidden on mobile, shown on larger screens) */}
          <div className="hidden lg:block pb-4">
            <div className="w-32 h-1.5 bg-gray-800 rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoyaPayLogin;
