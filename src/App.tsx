import { BusinessDetailsFormPage } from "./pages/onboarding";

function App() {
  
   return (
    <BusinessDetailsFormPage 
      onSubmit={(data) => console.log('Form submitted:', data)}
      onSkip={() => console.log('Skipped')}
      onNext={() => console.log('Next step')}
    />
  );
}

export default App;
