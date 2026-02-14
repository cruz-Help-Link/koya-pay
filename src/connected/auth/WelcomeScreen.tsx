import { useNavigate } from 'react-router-dom';
import { WelcomeScreen as WelcomeScreenComponent } from '../../screens/WelcomeScreen';

export const WelcomeScreen = () => {
  const navigate = useNavigate();

  // This component doesn't need store integration
  // Navigation is handled by buttons in the component itself
  return <WelcomeScreenComponent />;
};
