import { useState } from 'react';
import { FileUpload } from '../../components/ui';

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

  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
  };

  const handleNext = () => {
    if (uploadedFile) {
      onUploadComplete(uploadedFile);
    }
    onNext();
  };

  return (
    <div className="flex flex-col min-h-screen px-6 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-koya-primary rounded-xl flex items-center justify-center">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        <div className="text-left">
          <h1 className="text-xl font-bold text-koya-text-primary">
            {documentType}
          </h1>
        </div>
      </div>

      {/* File Upload */}
      <div className="flex-1">
        <FileUpload
          onFileSelect={handleFileSelect}
          accept="image/jpeg,image/png,application/pdf"
          maxSize={2}
        />
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-6 pt-6">
        <button
          onClick={onSkip}
          className="text-koya-text-primary font-medium hover:text-koya-primary transition-colors"
        >
          SKIP
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentStep - 1
                  ? 'bg-koya-primary w-3'
                  : 'bg-koya-text-tertiary/30'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="text-koya-text-primary font-medium hover:text-koya-primary transition-colors"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};
