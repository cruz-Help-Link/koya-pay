import React from 'react';

const Logo = () => {
 return (
   <div>
    <div className=" flex flex-col items-center 0">
          <img src='/src/assets/logo/koyapay-logo.png' className='w-20 h-20 object-contain -mb-8' alt="KoyaPay" />
          <div className="text-2xl font-semibold mt-6 ">
            <span className="text-gray-400">Koya</span><span className="text-black">Pay</span>
          </div>
        </div>
   </div>
 )
}

export default Logo;