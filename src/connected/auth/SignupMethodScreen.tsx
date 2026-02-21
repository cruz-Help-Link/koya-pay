import { useNavigate } from "react-router-dom";
import { SignupMethodScreen as SignupMethodScreenComponent } from "../../screens/SignUpMethod";
import { useSignupStore } from "../../stores";

export const SignupMethodScreen = () => {
  const navigate = useNavigate();
  const { setSignupMethod } = useSignupStore();

  // For now, this component handles its own navigation
  // Later we can enhance to integrate with the store
  return <SignupMethodScreenComponent />;
};
