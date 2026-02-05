import { useState } from 'react';
import { AccountMode } from '@/types';
import { MODE_OPTIONS } from '@/utils';
import { ModeCard } from './ModeCard';
import { Button } from '@/components/ui';

interface ModeSelectorProps {
  onComplete: (mode: AccountMode) => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({ onComplete }) => {
  const [selectedMode, setSelectedMode] = useState<AccountMode | null>(null);

  const handleContinue = () => {
    if (selectedMode) {
      onComplete(selectedMode);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-4">
        {MODE_OPTIONS.map((option) => (
          <ModeCard
            key={option.mode}
            mode={option.mode}
            title={option.title}
            description={option.description}
            icon={option.icon}
            isSelected={selectedMode === option.mode}
            onSelect={setSelectedMode}
          />
        ))}
      </div>

      <Button
        fullWidth
        size="lg"
        disabled={!selectedMode}
        onClick={handleContinue}
      >
        Continue
      </Button>
    </div>
  );
};
