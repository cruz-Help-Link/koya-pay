// import { forwardRef } from 'react';
// import type { InputProps } from '@/types';

// export const Input = forwardRef<HTMLInputElement, InputProps>(
//   ({ 
//     label, 
//     error, 
//     leftIcon, 
//     rightIcon, 
//     containerClassName = '',
//     className = '',
//     ...props 
//   }, ref) => {
//     const hasError = !!error;

//     return (
//       <div className={`w-full ${containerClassName}`}>
//         {label && (
//           <label className="block text-sm font-medium text-koya-text-secondary mb-2">
//             {label}
//           </label>
//         )}
        
//         <div className="relative">
//           {leftIcon && (
//             <div className="absolute left-4 top-1/2 -translate-y-1/2 text-koya-text-tertiary">
//               {leftIcon}
//             </div>
//           )}
          
//           <input
//             ref={ref}
//             className={`
//               w-full px-4 py-3.5 rounded-koya
//               bg-koya-light/50 backdrop-blur-sm
//               border-2 transition-all duration-200
//               text-koya-text-primary placeholder:text-koya-text-tertiary
//               focus:outline-none focus:ring-2 focus:ring-koya-primary/20
//               disabled:opacity-50 disabled:cursor-not-allowed
//               ${hasError 
//                 ? 'border-red-400 focus:border-red-500' 
//                 : 'border-transparent focus:border-koya-primary/30'
//               }
//               ${leftIcon ? 'pl-12' : ''}
//               ${rightIcon ? 'pr-12' : ''}
//               ${className}
//             `}
//             {...props}
//           />
          
//           {rightIcon && (
//             <div className="absolute right-4 top-1/2 -translate-y-1/2 text-koya-text-tertiary">
//               {rightIcon}
//             </div>
//           )}
//         </div>
        
//         {error && (
//           <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
//             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//             </svg>
//             {error}
//           </p>
//         )}
//       </div>
//     );
//   }
// );

// Input.displayName = 'Input';




import { forwardRef } from 'react';
import type { InputProps } from '../../types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    label, 
    error, 
    leftIcon, 
    rightIcon, 
    containerClassName = '',
    className = '',
    ...props 
  }, ref) => {
    const hasError = !!error;

    return (
      <div className={`w-full ${containerClassName}`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            className={`
              w-full px-4 py-3.5 rounded-2xl
              bg-purple-50/50 backdrop-blur-sm
              border-2 transition-all duration-200
              text-gray-900 placeholder:text-gray-400
              focus:outline-none focus:ring-2 focus:ring-purple-500/20
              disabled:opacity-50 disabled:cursor-not-allowed
              ${hasError 
                ? 'border-red-400 focus:border-red-500' 
                : 'border-purple-200 focus:border-purple-500'
              }
              ${leftIcon ? 'pl-12' : ''}
              ${rightIcon ? 'pr-12' : ''}
              ${className}
            `}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';