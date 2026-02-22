import React from 'react';

interface SuccessShieldArtProps {
  className?: string;
}

export const SuccessShieldArt: React.FC<SuccessShieldArtProps> = ({ className = '' }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <svg width="220" height="130" viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38 15L55 36" stroke="#1F173F" strokeWidth="3" strokeLinecap="round" />
        <path d="M56 18L73 41" stroke="#1F173F" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="52" r="4.5" fill="#1F173F" />
        <circle cx="186" cy="58" r="4" fill="#3A2A66" />
        <circle cx="48" cy="76" r="4" fill="#1F173F" />
        <path d="M200 88L210 88L205 78L200 88Z" fill="#1F173F" />
        <path d="M174 96L184 96L179 86L174 96Z" fill="#1F173F" />
        <path
          d="M80 20L83.2 26.2L90 27L85 31.5L86.3 38L80 34.5L73.7 38L75 31.5L70 27L76.8 26.2L80 20Z"
          fill="#CDBAFD"
        />
        <path
          d="M110 14L114 21L122 22L116 27.5L117.6 35L110 30.8L102.4 35L104 27.5L98 22L106 21L110 14Z"
          fill="#B99EF7"
        />
        <path
          d="M140 20L143.2 26.2L150 27L145 31.5L146.3 38L140 34.5L133.7 38L135 31.5L130 27L136.8 26.2L140 20Z"
          fill="#CDBAFD"
        />
        <g>
          <path
            d="M110 47L136 59V76.8C136 94.2 123.9 107.4 110 112.8C96.1 107.4 84 94.2 84 76.8V59L110 47Z"
            fill="#221144"
          />
          <path
            d="M110 54L129 63V77.2C129 89.9 120.3 99.7 110 104.4C99.7 99.7 91 89.9 91 77.2V63L110 54Z"
            fill="#AE92FF"
          />
          <path
            d="M103.3 78.4L108.2 83.3L117.6 73.9"
            stroke="#221144"
            strokeWidth="3.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};
