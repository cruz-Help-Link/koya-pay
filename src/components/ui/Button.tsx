// import type { ButtonProps } from '@/types';


// export const Button: React.FC<ButtonProps> = ({
//   variant = 'primary',
//   size = 'md',
//   fullWidth = false,
//   isLoading = false,
//   disabled,
//   className = '',
//   children,
//   ...props
// }) => {
//   const baseStyles = 'font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
//   const variantStyles = {
//     primary: 'bg-koya-primary text-white hover:bg-koya-secondary active:scale-[0.98]',
//     secondary: 'bg-transparent text-koya-primary border-2 border-koya-primary hover:bg-koya-light active:scale-[0.98]',
//     ghost: 'bg-transparent text-koya-primary hover:bg-koya-light',
//   };

//   const sizeStyles = {
//     sm: 'px-4 py-2 text-sm rounded-lg',
//     md: 'px-6 py-3 text-base rounded-koya',
//     lg: 'px-8 py-4 text-lg rounded-koya-lg',
//   };

//   const widthStyle = fullWidth ? 'w-full' : '';

//   return (
//     <button
//       className={`
//         ${baseStyles}
//         ${variantStyles[variant]}
//         ${sizeStyles[size]}
//         ${widthStyle}
//         ${className}
//       `}
//       disabled={disabled || isLoading}
//       {...props}
//     >
//       {isLoading ? (
//         <span className="flex items-center justify-center gap-2">
//           <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//           </svg>
//           <span>Loading...</span>
//         </span>
//       ) : (
//         children
//       )}
//     </button>
//   );
// };



// components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-8 py-4 rounded-full font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#2D1B69] hover:bg-[#1f1347] text-white',
    secondary: 'bg-transparent border-2 border-[#2D1B69] text-[#2D1B69] hover:bg-[#2D1B69]/5',
    text: 'bg-transparent text-[#2D1B69] hover:text-[#1f1347]',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};