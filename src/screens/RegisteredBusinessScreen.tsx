// screens/RegisteredBusinessScreen.tsx
import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { SocialButton } from "../components/ui/SocialButton";
import { Container } from "../components/ui/Container";

export const RegisteredBusinessScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "Nigeria",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container overlayIntensity="medium">
      <div className="flex flex-col min-h-screen px-6 pt-16 pb-12">
        {/* Logo */}
        <div className="mb-6 lg:mb-8">
          <div className=" flex items-center justify-center">
            <img
              src="/src/assets/logo/logo.png"
              className="w-40 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
            />
          </div>
        </div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">
            Registered Business
          </h1>
          <p className="text-sm text-gray-600">Let's create your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-auto">
          <Input
            placeholder="Registered Business name"
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            }
            value={formData.businessName}
            onChange={(e) =>
              setFormData({ ...formData, businessName: e.target.value })
            }
          />
          <Input
            type="email"
            placeholder="Email"
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Input
            type="password"
            placeholder="Password"
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            }
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            }
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />

          {/* Country Selector */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[#2D1B69]">
              <span className="font-semibold">Country</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-full px-4 py-4 pl-28 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 flex items-center gap-2 text-[#2D1B69]">
              <span className="text-xl">🇳🇬</span>
              <span className="font-medium">Nigeria</span>
            </div>
          </div>

          <div className="pt-4">
            <Button type="submit" variant="primary" fullWidth>
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
            <button className="text-[#2D1B69] font-semibold hover:underline">
              Login Account
            </button>
          </p>
        </div>
      </div>
    </Container>
  );
};
