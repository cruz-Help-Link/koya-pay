import { AccountMode } from '@/types';
import { Card } from '@/components/ui';

interface ModeCardProps {
  mode: AccountMode;
  title: string;
  description: string;
  icon: string;
  isSelected: boolean;
  onSelect: (mode: AccountMode) => void;
}

export const ModeCard: React.FC<ModeCardProps> = ({
  mode,
  title,
  description,
  icon,
  isSelected,
  onSelect,
}) => {
  return (
    <Card
      isSelected={isSelected}
      onClick={() => onSelect(mode)}
      className="text-center"
    >
      <div className="flex flex-col items-center gap-3">
        <div className={`
          text-5xl mb-2 transition-transform duration-200
          ${isSelected ? 'scale-110' : ''}
        `}>
          {icon}
        </div>
        
        <h3 className={`
          text-xl font-semibold
          ${isSelected ? 'text-white' : 'text-koya-primary'}
        `}>
          {title}
        </h3>
        
        <p className={`
          text-sm
          ${isSelected ? 'text-white/90' : 'text-koya-text-secondary'}
        `}>
          {description}
        </p>
      </div>
    </Card>
  );
};
