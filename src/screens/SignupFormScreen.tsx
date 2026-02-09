import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/ui';

interface SignupFormData {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
}

export const SignupFormScreen: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState<SignupFormData>({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (field: keyof SignupFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    }

    if (currentStep === 2) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }

    if (currentStep === 3) {
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else {
        if (formData.password.length < 8) {
          newErrors.password = 'Password must be at least 8 characters';
        } else if (!/[A-Z]/.test(formData.password)) {
          newErrors.password = 'Password must contain one uppercase letter';
        } else if (!/[0-9]/.test(formData.password)) {
          newErrors.password = 'Password must contain one number';
        }
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) {
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit and go to verification
      navigate('/signup/verify-email');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    } else {
      navigate('/signup');
    }
  };

  const handleSkip = () => {
    navigate('/signup/account-type');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h2>
            <p className="text-gray-600 mb-6">Tell us about yourself</p>
            
            <div className="space-y-4">
              <div>
                <Input
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange('fullName')}
                  leftIcon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  }
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.fullName}</p>}
              </div>

              <div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 z-10">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <select
                    value={formData.gender}
                    onChange={handleChange('gender')}
                    className={`w-full pl-12 pr-4 py-3.5 rounded-2xl bg-purple-50/50 backdrop-blur-sm border-2 ${
                      errors.gender ? 'border-red-500' : 'border-purple-200'
                    } text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200 appearance-none`}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {errors.gender && <p className="text-red-500 text-xs mt-1 ml-1">{errors.gender}</p>}
              </div>

              <div>
                <Input
                  type="date"
                  placeholder="Date of Birth"
                  value={formData.dateOfBirth}
                  onChange={handleChange('dateOfBirth')}
                  leftIcon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  }
                />
                {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1 ml-1">{errors.dateOfBirth}</p>}
              </div>
            </div>
          </>
        );
      
      case 2:
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Details</h2>
            <p className="text-gray-600 mb-6">How can we reach you?</p>
            
            <div className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange('email')}
                  leftIcon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  }
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                  leftIcon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  }
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
              </div>
            </div>
          </>
        );
      
      case 3:
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Secure Your Account</h2>
            <p className="text-gray-600 mb-6">Create a strong password</p>
            
            <div className="space-y-4">
              <div>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange('password')}
                    leftIcon={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password}</p>}
              </div>

              <div>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange('confirmPassword')}
                    leftIcon={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1 ml-1">{errors.confirmPassword}</p>}
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-sm text-gray-600">
                <p className="font-medium text-gray-900 mb-1">Password must contain:</p>
                <ul className="space-y-1 text-xs">
                  <li className={formData.password.length >= 8 ? 'text-green-600' : ''}>• At least 8 characters</li>
                  <li className={/[A-Z]/.test(formData.password) ? 'text-green-600' : ''}>• One uppercase letter</li>
                  <li className={/[0-9]/.test(formData.password) ? 'text-green-600' : ''}>• One number</li>
                </ul>
              </div>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 space-y-6 border border-purple-100">
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={handleBack}
                className="p-2 rounded-xl hover:bg-purple-50 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex-1 flex justify-center">
                <img src='/src/assets/logo/primary-dark.png' alt="KoyaPay" className='w-40 h-20 object-contain' />
              </div>
              <div className="w-10"></div>
            </div>
          </div>

          {/* Form Content */}
          <div className="min-h-[300px]">
            {renderStep()}
          </div>

          {/* Action Button */}
          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            {currentStep === totalSteps ? 'Complete' : 'Next'}
          </button>

          {/* Footer */}
          <div className="flex items-center justify-between text-sm pt-4">
            <button onClick={handleSkip} className="text-gray-500 hover:text-gray-700 font-medium">SKIP</button>
            <div className="flex gap-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index + 1 === currentStep ? 'bg-purple-600 w-8' : index + 1 < currentStep ? 'bg-purple-400 w-2' : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>
            <button onClick={handleNext} className="text-purple-600 hover:text-purple-700 font-medium">NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
