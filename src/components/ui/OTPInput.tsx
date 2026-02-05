import { useRef, useState, useEffect, KeyboardEvent, ClipboardEvent } from 'react';

interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
}

export const OTPInput: React.FC<OTPInputProps> = ({
  length = 6,
  value,
  onChange,
  disabled = false,
  autoFocus = false,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Initialize refs array
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  useEffect(() => {
    // Update internal state when value prop changes
    const digits = value.split('').slice(0, length);
    const newOtp = [...Array(length).fill('')];
    digits.forEach((digit, index) => {
      newOtp[index] = digit;
    });
    setOtp(newOtp);
  }, [value, length]);

  useEffect(() => {
    // Auto-focus first input on mount if autoFocus is true
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  const handleChange = (index: number, digit: string) => {
    // Only allow digits
    if (digit && !/^\d$/.test(digit)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);
    onChange(newOtp.join(''));

    // Auto-focus next input
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      
      if (otp[index]) {
        // Clear current input
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
        onChange(newOtp.join(''));
      } else if (index > 0) {
        // Move to previous input and clear it
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
        onChange(newOtp.join(''));
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain');
    const digits = pastedData.replace(/\D/g, '').split('').slice(0, length);
    
    const newOtp = [...Array(length).fill('')];
    digits.forEach((digit, index) => {
      newOtp[index] = digit;
    });
    
    setOtp(newOtp);
    onChange(newOtp.join(''));

    // Focus the next empty input or the last input
    const nextEmptyIndex = newOtp.findIndex(digit => !digit);
    const focusIndex = nextEmptyIndex === -1 ? length - 1 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleFocus = (index: number) => {
    // Select the content on focus for easier replacement
    inputRefs.current[index]?.select();
  };

  return (
    <div className="flex items-center justify-center gap-3">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          onFocus={() => handleFocus(index)}
          disabled={disabled}
          className={`
            w-14 h-14 text-center text-2xl font-semibold
            rounded-2xl bg-white/90 backdrop-blur-sm
            border-2 transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-koya-primary/20
            disabled:opacity-50 disabled:cursor-not-allowed
            ${digit 
              ? 'border-koya-primary text-koya-primary' 
              : 'border-koya-border/30 text-koya-text-primary'
            }
            hover:border-koya-primary/50
          `}
          aria-label={`Digit ${index + 1}`}
        />
      ))}
    </div>
  );
};
