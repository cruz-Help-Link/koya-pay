import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  children: ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClassName?: string;
}

export interface SelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string; icon?: string }>;
  error?: string;
  disabled?: boolean;
  containerClassName?: string;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isSelected?: boolean;
  isDisabled?: boolean;
}
