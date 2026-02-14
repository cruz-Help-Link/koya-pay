import { useNavigate } from 'react-router-dom';
import { RegisteredBusinessScreen as RegisteredBusinessScreenComponent } from '../../screens/RegisteredBusinessScreen';
import { useSignupStore } from '../../stores';

export const RegisteredBusinessScreen = () => {
  const navigate = useNavigate();
  const { setFormData } = useSignupStore();

  // Component integration placeholder
  return <RegisteredBusinessScreenComponent />;
};
