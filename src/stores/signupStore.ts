import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AccountType } from '../types';

interface SignupState {
  // User selection
  accountType: AccountType | null;
  signupMethod: 'email' | 'phone' | 'social' | null;
  
  // Form data
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  businessName: string;
  countryCode: string;
  
  // Verification
  isEmailVerified: boolean;
  verificationCode: string;
  
  // Actions
  setAccountType: (type: AccountType) => void;
  setSignupMethod: (method: 'email' | 'phone' | 'social') => void;
  setFormData: (data: Partial<SignupState>) => void;
  setEmailVerified: (verified: boolean) => void;
  reset: () => void;
}

const initialState = {
  accountType: null,
  signupMethod: null,
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  businessName: '',
  countryCode: 'NG',
  isEmailVerified: false,
  verificationCode: '',
};

export const useSignupStore = create<SignupState>()(
  persist(
    (set) => ({
      ...initialState,
      
      setAccountType: (type) => set({ accountType: type }),
      
      setSignupMethod: (method) => set({ signupMethod: method }),
      
      setFormData: (data) => set((state) => ({ ...state, ...data })),
      
      setEmailVerified: (verified) => set({ isEmailVerified: verified }),
      
      reset: () => set(initialState),
    }),
    {
      name: 'koyapay-signup-storage',
    }
  )
);
