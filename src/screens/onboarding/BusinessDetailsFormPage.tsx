import { useState } from "react";
import { ArrowLeft, Building, Globe, Mail, Camera } from "lucide-react";
import { Button, StepNavigation } from "../../components/ui";
import { Container } from "../../components/ui/Container";

interface BusinessDetails {
  businessName: string;
  website: string;
  contactInfo: string;
  logo: File | null;
  description: string;
}

interface BusinessDetailsFormPageProps {
  onSubmit: (data: BusinessDetails) => void;
  onSkip: () => void;
  onNext: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const BusinessDetailsFormPage: React.FC<
  BusinessDetailsFormPageProps
> = ({ onSubmit, onSkip, onNext, currentStep = 3, totalSteps = 7 }) => {
  const [formData, setFormData] = useState<BusinessDetails>({
    businessName: "",
    website: "",
    contactInfo: "",
    logo: null,
    description: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const maxWords = 120;
  const wordCount = formData.description
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const handleChange =
    (field: keyof BusinessDetails) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: "" }));
    };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required";
    }

    if (!formData.website.trim()) {
      newErrors.website = "Website/Social media is required";
    }

    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = "Email/Phone number is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Business description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitForm = () => {
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Container>
      <div className="flex flex-col min-h-screen px-6 pt-10 pb-12">
        {/* Back Arrow */}
        <button
          onClick={onSkip}
          className="absolute top-6 left-6 p-2 rounded-xl hover:bg-white/50 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src="/src/assets/logo/koyapay-logo.png"
            className="w-20 h-20 object-contain -mb-8"
            alt="KoyaPay"
          />
          <div className="text-2xl font-semibold mt-6">
            <span className="text-gray-400">Koya</span>
            <span className="text-black">Pay</span>
          </div>
        </div>

        {/* Header */}
        <div className="mt-8 mb-6">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">
            Business Details
          </h1>
          <p className="text-sm text-gray-600">Tell us about your business</p>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-auto">
          {/* Business Name */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <Building className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="Business Name"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.businessName}
                onChange={handleChange("businessName")}
              />
            </div>
            {errors.businessName && (
              <p className="mt-1 text-sm text-red-500">{errors.businessName}</p>
            )}
          </div>

          {/* Website/Social media */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <Globe className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="Website/Social media"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.website}
                onChange={handleChange("website")}
              />
            </div>
            {errors.website && (
              <p className="mt-1 text-sm text-red-500">{errors.website}</p>
            )}
          </div>

          {/* Email/Phone No. */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <Mail className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="Email/Phone No."
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors"
                value={formData.contactInfo}
                onChange={handleChange("contactInfo")}
              />
            </div>
            {errors.contactInfo && (
              <p className="mt-1 text-sm text-red-500">{errors.contactInfo}</p>
            )}
          </div>

          {/* Business Logo */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#221144]">
                <Camera className="w-6 h-6" />
              </div>
              <input
                type="file"
                accept="image/*"
                id="logo-upload"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setFormData({ ...formData, logo: file });
                  }
                }}
              />
              <label
                htmlFor="logo-upload"
                className="flex items-center w-full pl-14 pr-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] transition-colors cursor-pointer"
              >
                <span
                  className={
                    formData.logo
                      ? "text-[#1a1a1a] font-medium"
                      : "text-gray-500 font-medium"
                  }
                >
                  {formData.logo ? formData.logo.name : "Business Logo"}
                </span>
              </label>
            </div>
          </div>
          {/* Description Textarea */}
          <div>
            <div className="relative">
              <textarea
                placeholder="Short Description (Tell us about your business...)"
                value={formData.description}
                onChange={handleChange("description")}
                rows={4}
                className="w-full px-4 py-4 rounded-2xl bg-[#E5DEFF]/40 border-2 border-[#C9B8FF]/60 focus:outline-none focus:border-[#221144] text-[#1a1a1a] placeholder-gray-500 font-medium transition-colors resize-none"
              />
              <div className="absolute bottom-3 right-4 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded-lg">
                {wordCount}/{maxWords} words
              </div>
            </div>
            {errors.description && (
              <p className="mt-1 text-sm text-red-500">{errors.description}</p>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-4 mt-10">
          <Button variant="primary" fullWidth onClick={handleSubmitForm}>
            Submit for Review
          </Button>

          {/* Progress Indicator */}
          <StepNavigation
            totalSteps={totalSteps}
            currentStep={currentStep}
            onNext={onNext}
            onSkip={onSkip}
          />
        </div>
      </div>
    </Container>
  );
};
