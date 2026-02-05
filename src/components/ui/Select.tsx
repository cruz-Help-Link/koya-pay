import { useState, useRef, useEffect } from 'react';
import type { SelectProps } from '@/types';

export const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  error,
  disabled = false,
  containerClassName = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);
  const hasError = !!error;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`w-full ${containerClassName}`} ref={selectRef}>
      {label && (
        <label className="block text-sm font-medium text-koya-text-secondary mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`
            w-full px-4 py-3.5 rounded-koya
            bg-koya-light/50 backdrop-blur-sm
            border-2 transition-all duration-200
            text-left text-koya-text-primary
            focus:outline-none focus:ring-2 focus:ring-koya-primary/20
            disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-between
            ${hasError 
              ? 'border-red-400 focus:border-red-500' 
              : 'border-transparent focus:border-koya-primary/30'
            }
          `}
        >
          <span className="flex items-center gap-2">
            {selectedOption?.icon && (
              <span className="text-xl">{selectedOption.icon}</span>
            )}
            <span>{selectedOption?.label || 'Select an option'}</span>
          </span>
          
          <svg
            className={`w-5 h-5 text-koya-text-tertiary transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-white rounded-koya shadow-koya-lg border border-koya-border overflow-hidden">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`
                  w-full px-4 py-3 text-left transition-colors
                  flex items-center gap-2
                  hover:bg-koya-light
                  ${value === option.value ? 'bg-koya-light/50 text-koya-primary font-medium' : 'text-koya-text-primary'}
                `}
              >
                {option.icon && (
                  <span className="text-xl">{option.icon}</span>
                )}
                <span>{option.label}</span>
              </button>
            ))}
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
};
