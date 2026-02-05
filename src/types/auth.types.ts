export enum AccountMode {
  ONLINE = 'online',
  OFFLINE = 'offline',
  BOTH = 'both',
}

export enum AccountType {
  REGISTERED_BUSINESS = 'registered_business',
  INDIVIDUAL = 'individual',
  AGENT = 'agent',
}

export enum SocialProvider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  APPLE = 'apple',
}

export interface ModeOption {
  mode: AccountMode;
  title: string;
  description: string;
  icon: string;
}

export interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

export interface RegisterBusinessFormData {
  businessName: string;
  email: string;
  password: string;
  confirmPassword: string;
  countryCode: string;
}

export interface FormErrors {
  businessName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface ValidationRule {
  validate: (value: string) => boolean;
  message: string;
}
