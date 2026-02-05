import { useRef, useState } from 'react';

interface UploadedFile {
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
}

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  onFileRemove?: (file: File) => void;
  accept?: string;
  maxSize?: number; // in MB
  title?: string;
  description?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  onFileRemove,
  accept = 'image/jpeg,image/png,application/pdf',
  maxSize = 2,
  title = 'Click or drag file to this area to upload',
  description = 'JPEG and PNG formats up to 2MB',
}) => {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | null) => {
    if (!file) return;

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      alert(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Simulate upload progress
    setUploadedFile({
      file,
      progress: 0,
      status: 'uploading',
    });

    onFileSelect(file);

    // Simulate upload
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadedFile(prev => prev ? { ...prev, progress } : null);

      if (progress >= 100) {
        clearInterval(interval);
        setUploadedFile(prev => prev ? { ...prev, status: 'completed' } : null);
      }
    }, 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleFileChange(file || null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  const handleRemove = () => {
    if (uploadedFile && onFileRemove) {
      onFileRemove(uploadedFile.file);
    }
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="w-full">
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleInputChange}
        className="hidden"
      />

      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-200
          ${isDragging
            ? 'border-koya-primary bg-koya-primary/5'
            : 'border-koya-border/50 bg-white/50'
          }
          ${!uploadedFile ? 'cursor-pointer' : ''}
        `}
        onClick={() => !uploadedFile && fileInputRef.current?.click()}
      >
        {!uploadedFile ? (
          <div className="space-y-4">
            {/* Upload Icon */}
            <div className="flex justify-center">
              <svg className="w-12 h-12 text-koya-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>

            {/* Text */}
            <div>
              <p className="text-koya-text-secondary text-sm font-medium mb-1">
                {title}
              </p>
              <p className="text-koya-text-tertiary text-xs">
                {description}
              </p>
            </div>

            {/* Browse Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="px-6 py-2 bg-white border-2 border-koya-primary text-koya-primary 
                       rounded-full font-medium hover:bg-koya-primary hover:text-white 
                       transition-all duration-200"
            >
              Browse File
            </button>
          </div>
        ) : (
          /* File Preview */
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-koya-light/50 rounded-xl">
              <div className="flex items-center gap-3">
                {/* File Icon */}
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-koya-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                </div>

                {/* File Info */}
                <div className="text-left">
                  <p className="text-sm font-medium text-koya-text-primary">
                    {uploadedFile.file.name}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-koya-text-tertiary">
                    <span>{formatFileSize(uploadedFile.file.size)} of {formatFileSize(uploadedFile.file.size)}</span>
                    {uploadedFile.status === 'uploading' && <span>• Uploading...</span>}
                    {uploadedFile.status === 'completed' && (
                      <span className="flex items-center gap-1 text-green-600">
                        • <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg> Completed
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Remove Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove();
                }}
                className="p-2 hover:bg-red-50 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Progress Bar */}
            {uploadedFile.status === 'uploading' && (
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-koya-primary transition-all duration-300"
                  style={{ width: `${uploadedFile.progress}%` }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
