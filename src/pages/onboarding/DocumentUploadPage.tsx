import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { FileUpload, Button, StepNavigation } from '../../components/ui';
import { Container } from '../../components/ui/Container';

interface DocumentUploadPageProps {
  documentType: string;
  onUploadComplete: (file: File) => void;
  onSkip: () => void;
  onNext: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const DocumentUploadPage: React.FC<DocumentUploadPageProps> = ({
  documentType = 'Utility bill',
  onUploadComplete,
  onSkip,
  onNext,
  currentStep = 7,
  totalSteps = 7,
}) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');

  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
    setError('');
  };

  const handleNext = () => {
    if (!uploadedFile) {
      setError('Please upload a document to continue');
      return;
    }
    onUploadComplete(uploadedFile);
    onNext();
  };

  return (
    <Container overlayIntensity="medium">
      <div className="flex flex-col min-h-screen px-6 pt-16 pb-12">
        {/* Back Arrow */}
        <button
          onClick={onSkip}
          className="absolute top-6 left-6 p-2 rounded-xl hover:bg-white/50 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src='/src/assets/logo/koyapay-logo.png' className='w-20 h-20 object-contain -mb-8' alt="KoyaPay" />
          <div className="text-2xl font-semibold mt-6">
            <span className="text-gray-400">Koya</span><span className="text-black">Pay</span>
          </div>
        </div>

        {/* Header */}
        <div className="mt-8 mb-6">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">
            {documentType}
          </h1>
          <p className="text-sm text-gray-600">Upload your document</p>
        </div>

        {/* File Upload */}
        <div className="flex-1 mb-auto">
          <FileUpload
            onFileSelect={handleFileSelect}
            accept="image/jpeg,image/png,application/pdf"
            maxSize={2}
          />
          {uploadedFile && (
            <p className="mt-4 text-sm text-green-600 font-medium">
              ✓ {uploadedFile.name} uploaded successfully
            </p>
          )}
          {error && (
            <p className="mt-4 text-sm text-red-500 font-medium">{error}</p>
          )}
        </div>

        {/* Action Button */}
        <div className="space-y-4 mt-16">
          <Button
            variant="primary"
            fullWidth
            onClick={handleNext}
          >
            Continue
          </Button>

          {/* Progress Indicator */}
          <StepNavigation
            totalSteps={totalSteps}
            currentStep={currentStep}
            onNext={handleNext}
            onSkip={onSkip}
          />
        </div>
      </div>
    </Container>
  );
};
