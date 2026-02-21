import { Bell, Scan, User } from 'lucide-react';
import React from 'react';

const DashHeader = () => {
 return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#c9b8ff]">
      <div className="px-5 pt-6 pb-4 flex items-center justify-between max-w-lg lg:max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-white overflow-hidden border-2 border-white shadow-md flex items-center justify-center">
            <User/>
          </div>
          <h1 className="text-white font-bold text-lg tracking-wide">
            ABDULSALAM
          </h1>
        </div>

        <div className="flex items-center gap-4 text-white">
          <button className="hover:opacity-80 transition-opacity">
            <Scan />
          </button>
          <button className="hover:opacity-80 transition-opacity">
            <Bell />
          </button>
        </div>
      </div>
    </header>
 )
}

export default DashHeader;