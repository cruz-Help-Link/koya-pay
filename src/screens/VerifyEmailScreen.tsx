import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Smile } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

export const VerifyEmailScreen: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [showSuccess, setShowSuccess] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value && !/^\d$/.test(value)) return;

    const nextOtp = [...otp];
    nextOtp[index] = value;
    setOtp(nextOtp);

    if (value && index < nextOtp.length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;

    const nextOtp = [...otp];
    for (let i = 0; i < pasted.length; i += 1) {
      nextOtp[i] = pasted[i];
    }
    setOtp(nextOtp);

    const focusIndex = Math.min(pasted.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length !== 6) return;
    setShowSuccess(true);
  };

  const accountType = sessionStorage.getItem("accountType") || "registered";
  const isStarterFlow = accountType === "starter";

  const handleContinue = () => {
    if (isStarterFlow) {
      navigate("/");
      return;
    }
    navigate("/onboarding/intro");
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <Container overlayIntensity="medium">
      <div className="relative flex min-h-screen flex-col px-6 pb-12 pt-16">
        <div className="mb-8 flex flex-col items-center">
          <img src="/src/assets/logo/koyapay-logo.png" className="h-20 w-20 object-contain -mb-8" alt="KoyaPay" />
          <div className="mt-6 text-2xl font-semibold">
            <span className="text-gray-400">Koya</span>
            <span className="text-black">Pay</span>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="mb-1 text-2xl font-bold text-[#1a1a1a]">Verify Email</h1>
          <p className="text-sm text-gray-600">Enter the 6-digit code sent to your email</p>
        </div>

        {!showSuccess ? (
          <div className="mb-auto">
            <div className="mb-8 flex justify-center gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(event) => handleChange(index, event.target.value)}
                  onKeyDown={(event) => handleKeyDown(index, event)}
                  onPaste={handlePaste}
                  className="h-14 w-12 rounded-xl border-2 border-[#C9B8FF]/60 bg-[#E5DEFF]/40 text-center text-xl font-bold text-[#1a1a1a] transition-colors focus:border-[#221144] focus:outline-none"
                />
              ))}
            </div>

            <div className="mb-8 text-center">
              <p className="text-sm text-gray-600">
                Didn&apos;t receive the code?{" "}
                <button type="button" onClick={() => setOtp(Array(6).fill(""))} className="font-semibold text-[#221144] hover:underline">
                  Resend
                </button>
              </p>
            </div>

            <Button variant="primary" fullWidth onClick={handleVerify} disabled={!isComplete}>
              Verify
            </Button>
          </div>
        ) : (
          <div className="mb-auto" />
        )}

        {showSuccess && (
          <div className="absolute inset-x-0 bottom-0 rounded-t-[2.5rem] bg-white px-8 pb-10 pt-10 shadow-2xl">
            <div className="mb-8 flex justify-center">
              <Smile className="h-24 w-24 text-[#221144]" strokeWidth={1.7} />
            </div>

            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-bold text-[#1a1a1a]">
                {isStarterFlow ? "Welcome to KoyaPay!" : "Email Verified"}
              </h2>
              <p className="text-lg text-gray-600">
                {isStarterFlow ? (
                  <>
                    Your starter business account
                    <br />
                    is ready to use
                  </>
                ) : (
                  <>
                    Your registered business account is ready.
                    <br />
                    Continue to complete verification.
                  </>
                )}
              </p>
            </div>

            <Button variant="primary" fullWidth onClick={handleContinue}>
              {isStarterFlow ? "Get Started" : "Continue Verification"}
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};
