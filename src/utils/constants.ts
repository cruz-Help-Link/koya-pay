import  { AccountMode } from '@/types';
import type { Country, ModeOption } from '@/types';


export const MODE_OPTIONS: ModeOption[] = [
  {
    mode: AccountMode.ONLINE,
    title: 'Online',
    description: 'Accept payments online only',
    icon: '🌐',
  },
  {
    mode: AccountMode.OFFLINE,
    title: 'Offline',
    description: 'Accept payments in-store only',
    icon: '🏪',
  },
  {
    mode: AccountMode.BOTH,
    title: 'Both',
    description: 'Accept payments everywhere',
    icon: '⚡',
  },
];

export const COUNTRIES: Country[] = [
  {
    code: 'NG',
    name: 'Nigeria',
    flag: '🇳🇬',
    dialCode: '+234',
  },
  {
    code: 'GH',
    name: 'Ghana',
    flag: '🇬🇭',
    dialCode: '+233',
  },
  {
    code: 'KE',
    name: 'Kenya',
    flag: '🇰🇪',
    dialCode: '+254',
  },
  {
    code: 'ZA',
    name: 'South Africa',
    flag: '🇿🇦',
    dialCode: '+27',
  },
];

export const PASSWORD_MIN_LENGTH = 8;
export const BUSINESS_NAME_MIN_LENGTH = 2;
