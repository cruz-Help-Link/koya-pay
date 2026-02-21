import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from "../LoadingBar";
import { Button, Container, Input } from "../../components/ui";
import { Eye, EyeOff, Lock } from "lucide-react";
import Logo from "../../components/Logo";

export const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange =
    (field: "email" | "password") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    navigate('/dashboard/home')
  };

  if (isLoading) {
    return <LoadingBar duration={3000} onComplete={() => navigate("/home")} />;
  }

  return (
    <Container>

      <div className="w-full max-w-md">
        <div className="backdrop-blur-sm shadow-xl p-8 space-y-6">
          {/* Logo */}
                  <Logo />

          {/* Header */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange("email")}
               leftIcon={<Lock className="w-5 h-5" />}

              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange("password")}
                  leftIcon={<Lock className="w-5 h-5" />}

                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 ml-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-[#221144] hover:text-[#1a0d33] font-medium transition-colors"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          {/* Login Button */}
          <Button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-[#221144] to-[#AE92FF] hover:from-[#1a0d33] hover:to-[#9e7ff0] text-white font-semibold py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign In
          </Button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
              <p onClick={() => navigate("/signup")}
              className="text-[#221144] font-semibold hover:text-[#1a0d33] transition-colors">
              Sign Up
              </p>
          </p>
        </div>
      </div>
      </Container>
  );
};
