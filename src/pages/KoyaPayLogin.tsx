import React from 'react';
import { useNavigate } from 'react-router-dom';

const KoyaPayLogin: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Container - responsive max width */}
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Phone frame simulation for larger screens */}
        <div className="bg-white rounded-3xl lg:rounded-[3rem] overflow-hidden">
          {/* Main content */}
          <div className="px-8 py-12 lg:px-8 lg:py-10 xl:px-16 xl:py-20 flex flex-col items-center justify-center min-h-[600px] lg:min-h-[700px]">
            {/* Logo */}
            <div className=" flex flex-col items-center 0">
          <img src='/src/assets/logo/koyapay-logo.png' className='w-20 h-20 object-contain -mb-8' alt="KoyaPay" />
          <div className="text-2xl font-semibold mt-6 ">
            <span className="text-gray-400">Koya</span><span className="text-black">Pay</span>
          </div>
        </div>

            {/* Tagline */}
            <p className="text-lg lg:text-xl xl:text-2xl text-gray-800 text-center mt-12 lg:mb-16 xl:mb-20 max-w-xs lg:max-w-sm">
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
                className="w-full py-4 lg:py-5 px-6 bg-gradient-to-r from-[#221144] to-[#1a0d33] text-white font-semibold rounded-full hover:from-[#1a0d33] hover:to-[#110822] transition-all duration-200 text-base lg:text-lg shadow-lg hover:shadow-xl"
                onClick={() => navigate('/signup')}
              >
                Sign UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoyaPayLogin;