import { useNavigate } from 'react-router-dom';
import { DocumentUploadPage as DocumentUploadPageComponent } from '../../pages/onboarding';
import { useOnboardingStore } from '../../stores';

export const DocumentUploadPage = () => {
  const navigate = useNavigate();
  const { currentStep, goToNextStep, uploadDocument, verificationMethod } = useOnboardingStore();

  const getDocumentType = () => {
    switch (verificationMethod) {
      case 'utility_bill':
        return 'Utility Bill';
      case 'live_photo':
        return 'Live Photo';
      case 'letterhead':
        return 'Letterhead';
      default:
        return 'Document';
    }
  };

  const handleUploadComplete = (file: File) => {
    uploadDocument(verificationMethod || 'document', file);
    goToNextStep();
    // Navigate to success page after upload
    navigate('/onboarding/document-upload-success');
  };

  const handleSkip = () => {
    navigate('/onboarding/document-upload-success');
  };

  const handleNext = () => {
    goToNextStep();
    navigate('/onboarding/document-upload-success');
  };

  return (
    <DocumentUploadPageComponent
      documentType={getDocumentType()}
      onUploadComplete={handleUploadComplete}
      onSkip={handleSkip}
      onNext={handleNext}
      currentStep={currentStep}
      totalSteps={7}
    />
  );
};
