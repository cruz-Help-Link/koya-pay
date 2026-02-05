import { useState } from 'react';

interface ImageEditorProps {
  imageSrc: string;
  onSave: (editedImage: string) => void;
  onCancel: () => void;
}

export const ImageEditor: React.FC<ImageEditorProps> = ({
  imageSrc,
  onSave,
  onCancel,
}) => {
  const [crop, setCrop] = useState(50);
  const [enhance, setEnhance] = useState(50);
  const [exposure, setExposure] = useState(50);

  const handleSave = () => {
    // In a real implementation, apply the edits and return edited image
    onSave(imageSrc);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Image Preview */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-koya-lg">
          <img
            src={imageSrc}
            alt="Preview"
            className="w-full h-full object-cover"
            style={{
              filter: `brightness(${exposure}%) contrast(${enhance}%)`,
            }}
          />
          
          {/* Corner Handles */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-white rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-white rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-white rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-white rounded-br-lg" />
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-4 px-6 pb-6">
        {/* Crop */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-koya-text-primary">Crop</label>
          <input
            type="range"
            min="0"
            max="100"
            value={crop}
            onChange={(e) => setCrop(Number(e.target.value))}
            className="w-full h-2 bg-koya-light rounded-lg appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                     [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
                     [&::-webkit-slider-thumb]:bg-koya-primary [&::-webkit-slider-thumb]:cursor-pointer"
          />
        </div>

        {/* Enhance */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-koya-text-primary">Enhance</label>
          <input
            type="range"
            min="0"
            max="100"
            value={enhance}
            onChange={(e) => setEnhance(Number(e.target.value))}
            className="w-full h-2 bg-koya-light rounded-lg appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                     [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
                     [&::-webkit-slider-thumb]:bg-koya-primary [&::-webkit-slider-thumb]:cursor-pointer"
          />
        </div>

        {/* Exposure */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-koya-text-primary">Exposure</label>
          <input
            type="range"
            min="0"
            max="100"
            value={exposure}
            onChange={(e) => setExposure(Number(e.target.value))}
            className="w-full h-2 bg-koya-light rounded-lg appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                     [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
                     [&::-webkit-slider-thumb]:bg-koya-primary [&::-webkit-slider-thumb]:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
