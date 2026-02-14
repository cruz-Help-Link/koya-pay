import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { SocialButton } from "../components/ui/SocialButton";
import { Container } from "../components/ui/Container";
import { ChevronDown, ChevronLeft, ChevronUp, Eye, EyeOff, Mail, PersonStanding } from "lucide-react";
import Logo from "../components/Logo";

const countries = [
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "GH", name: "Ghana", flag: "🇬🇭" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
];

export const StarterBusinessScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: countries[0],
  });

  const validateForm = () => {
  const newErrors: Record<string, string> = {};

  // Full Name
  if (!formData.fullName.trim()) {
    newErrors.fullName = "Full name is required";
  }

  // Email
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Please enter a valid email";
  }

  // Password
  if (!formData.password) {
    newErrors.password = "Password is required";
  } else if (formData.password.length < 8) {
    newErrors.password = "Password must be at least 8 characters";
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
    newErrors.password =
      "Password must include uppercase, lowercase, and number";
  }

  // Confirm Password
  if (!formData.confirmPassword) {
    newErrors.confirmPassword = "Please confirm your password";
  } else if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/signup/verify-email");
    }
  };

  return (
    <Container>
      <div className="flex flex-col min-h-screen px-6 pt-12 pb-12">
        {/* Back Arrow */}
        <button
          onClick={() => navigate("/signup/account-type")}
          className="absolute top-6 left-6 p-2 rounded-xl hover:bg-white/50 transition-colors"
        >
          <ChevronLeft />
        </button>

        <Logo />
        
        {/* Header */}
        <div className="mt-8 mb-6">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">
            Starter Business
          </h1>
          <p className="text-sm text-gray-600">Let's create your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-auto">
          {/* Full Name */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <PersonStanding />
              </div>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  setErrors({ ...errors, fullName: "" });
                }}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <Mail/>
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setErrors({ ...errors, email: "" });
                }}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#221144] hover:text-[#1a0d33] transition-colors"
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  setErrors({ ...errors, password: "" });
                }}
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#221144] hover:text-[#1a0d33] transition-colors"
              >
                {showConfirmPassword ? <Eye /> : <EyeOff />}
              </button>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.confirmPassword}
                onChange={(e) => {
                  setFormData({ ...formData, confirmPassword: e.target.value });
                  setErrors({ ...errors, confirmPassword: "" });
                }}
              />
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Country Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              className="w-full pl-4 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 hover:border-[#221144] text-[#1a1a1a] font-medium transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold text-[#221144]">Country</span>
                <div className="flex flex-col gap-0.5">
                  <ChevronUp className="w-3 h-3"/>
                  <ChevronDown className="w-3 h-3"/>
                  
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={`https://flagcdn.com/24x18/${formData.country.code.toLowerCase()}.png`}
                  alt={formData.country.name}
                  className="w-6 h-4"
                />
                <span>{formData.country.name}</span>
              </div>
            </button>

            {/* Dropdown */}
            {showCountryDropdown && (
              <div className="absolute z-50 w-full mt-2 bg-white border-2 border-[#C9B8FF] rounded-2xl shadow-lg max-h-60 overflow-y-auto">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, country });
                      setShowCountryDropdown(false);
                    }}
                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#E5DEFF]/60 transition-colors text-left"
                  >
                    <img
                      src={`https://flagcdn.com/24x18/${country.code.toLowerCase()}.png`}
                      alt={country.name}
                      className="w-6 h-4"
                    />
                    <span className="font-medium text-[#1a1a1a]">
                      {country.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4">
            <Button type="submit" variant="primary" fullWidth
            onClick={handleSubmit}>
              Create Account
            </Button>
          </div>
        </form>

        {/* Social Auth */}
        <div className="mt-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">Register with</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <div className="flex items-center justify-center gap-6 mb-6">
            <SocialButton provider="facebook" />
            <SocialButton provider="google" />
            <SocialButton provider="apple" />
          </div>
          <p className="text-center text-sm text-[#1a1a1a]">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/welcome")}
              className="text-[#221144] font-semibold hover:underline"
            >
              Login Account
            </button>
          </p>
        </div>
      </div>
    </Container>
  );
};
