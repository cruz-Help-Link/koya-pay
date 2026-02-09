import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AccountMode } from '../types';
import type { VerificationMethod } from '../types';

interface OwnerDetails {
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  idType: string;
  idNumber: string;
  idDocument: File | null;
}

interface BusinessDetails {
  businessName: string;
  website: string;
  contactInfo: string;
  logo: File | null;
  description: string;
}

interface OnboardingState {
  // Progress tracking
  currentStep: number;
  completedSteps: number[];
  
  // Data
  ownerDetails: OwnerDetails;
  businessDetails: BusinessDetails;
  businessMode: AccountMode | null;
  verificationMethod: VerificationMethod | null;
  uploadedDocuments: {
    utilityBill?: File;
    livePhoto?: File;
    letterhead?: File;
  };
  
  // Actions
  setCurrentStep: (step: number) => void;
  markStepCompleted: (step: number) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  setOwnerDetails: (details: Partial<OwnerDetails>) => void;
  setBusinessDetails: (details: Partial<BusinessDetails>) => void;
  setBusinessMode: (mode: AccountMode) => void;
  setVerificationMethod: (method: VerificationMethod) => void;
  uploadDocument: (type: string, file: File) => void;
  reset: () => void;
}

const initialOwnerDetails: OwnerDetails = {
  fullName: '',
  dateOfBirth: '',
  nationality: '',
  idType: '',
  idNumber: '',
  idDocument: null,
};

const initialBusinessDetails: BusinessDetails = {
  businessName: '',
  website: '',
  contactInfo: '',
  logo: null,
  description: '',
};

const initialState = {
  currentStep: 1,
  completedSteps: [],
  ownerDetails: initialOwnerDetails,
  businessDetails: initialBusinessDetails,
  businessMode: null,
  verificationMethod: null,
  uploadedDocuments: {},
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      ...initialState,
      
      setCurrentStep: (step) => set({ currentStep: step }),
      
      markStepCompleted: (step) => set((state) => ({
        completedSteps: [...new Set([...state.completedSteps, step])],
      })),
      
      goToNextStep: () => set((state) => ({
        currentStep: Math.min(state.currentStep + 1, 7),
        completedSteps: [...new Set([...state.completedSteps, state.currentStep])],
      })),
      
      goToPreviousStep: () => set((state) => ({
        currentStep: Math.max(state.currentStep - 1, 1),
      })),
      
      setOwnerDetails: (details) => set((state) => ({
        ownerDetails: { ...state.ownerDetails, ...details },
      })),
      
      setBusinessDetails: (details) => set((state) => ({
        businessDetails: { ...state.businessDetails, ...details },
      })),
      
      setBusinessMode: (mode) => set({ businessMode: mode }),
      
      setVerificationMethod: (method) => set({ verificationMethod: method }),
      
      uploadDocument: (type, file) => set((state) => ({
        uploadedDocuments: { ...state.uploadedDocuments, [type]: file },
      })),
      
      reset: () => set(initialState),
    }),
    {
      name: 'koyapay-onboarding-storage',
    }
  )
);
