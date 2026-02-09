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



import React from 'react';
import type { ButtonProps } from '../../types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  disabled,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl',
    ghost: 'bg-transparent text-purple-600 hover:bg-purple-50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-6 py-3 text-base rounded-2xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${widthStyle}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};