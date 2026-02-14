import React from 'react';
import bgDecoration from "../../assets/hand.jpg"; // 👈 your image path

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#c9b8ff]">

      {/* Decoration Image Underlay */}
       <img
        src={bgDecoration}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      /> 

      {/* Purple Glow Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#c9b8ff] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#AE92FF] rounded-full blur-3xl" />
      </div>

      {/* Content Layer */}
      <div className={`relative z-10 flex min-h-screen items-center justify-center p-4 ${className}`}>
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

    </div>
  );
};
