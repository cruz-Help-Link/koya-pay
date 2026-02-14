import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from "../LoadingBar";
import { Button, Input } from "../../components/ui";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Container } from "../../components/ui/Container";
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
  if (!validate()) return;
  setIsLoading(true);
  };

  const handleLoadingComplete = useCallback(() => {
  navigate("/dashboard/home");
}, [navigate]);

  if (isLoading) {
    return <LoadingBar duration={3000} onComplete={handleLoadingComplete} />;
  }

  return (
  <Container>
    <div className="min-h-screen  flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-sm rounded-xl p-8 space-y-6 ">

          <Logo />

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

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
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
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

            <div className="text-right">
              <button
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-[#221144] font-medium"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          <Button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-[#221144] to-[#AE92FF] text-white py-4 rounded-2xl"
          >
            Sign In
          </Button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-[#221144] font-semibold"
            >
              Sign Up
            </button>
          </p>

        </div>
      </div>
    </div>
  </Container>
);

};
