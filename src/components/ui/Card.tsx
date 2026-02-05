import type { CardProps } from '@/types';

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  isSelected = false,
  isDisabled = false,
}) => {
  const isClickable = !!onClick && !isDisabled;

  return (
    <div
      onClick={isDisabled ? undefined : onClick}
      className={`
        rounded-koya-lg p-6 transition-all duration-200
        ${isClickable ? 'cursor-pointer' : ''}
        ${isSelected 
          ? 'bg-koya-primary text-white shadow-koya-lg scale-[1.02]' 
          : 'bg-white/80 backdrop-blur-sm text-koya-text-primary border-2 border-koya-border/50'
        }
        ${isClickable && !isSelected ? 'hover:border-koya-primary/50 hover:shadow-koya active:scale-[0.98]' : ''}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
