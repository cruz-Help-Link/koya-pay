import type { FormErrors, RegisterBusinessFormData } from '@/types';
import { PASSWORD_MIN_LENGTH, BUSINESS_NAME_MIN_LENGTH } from './constants';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= PASSWORD_MIN_LENGTH;
};

export const validateBusinessName = (name: string): boolean => {
  return name.trim().length >= BUSINESS_NAME_MIN_LENGTH;
};

export const validateRegisterBusinessForm = (
  data: RegisterBusinessFormData
): FormErrors => {
  const errors: FormErrors = {};

  if (!validateBusinessName(data.businessName)) {
    errors.businessName = `Business name must be at least ${BUSINESS_NAME_MIN_LENGTH} characters`;
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.password) {
    errors.password = 'Password is required';
  } else if (!validatePassword(data.password)) {
    errors.password = `Password must be at least ${PASSWORD_MIN_LENGTH} characters`;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

export const hasFormErrors = (errors: FormErrors): boolean => {
  return Object.keys(errors).length > 0;
};
