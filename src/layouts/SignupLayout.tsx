import { Outlet } from 'react-router-dom';

const SignupLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-koya-primary/10 via-white to-koya-accent/10">
      <Outlet />
    </div>
  );
};

export default SignupLayout;
