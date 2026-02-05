# KoyaPay Signup Flow - Complete Build Guide

A production-ready, pixel-perfect implementation of a mobile-first signup flow with TypeScript, React, and Tailwind CSS.

## 📸 Screenshots

This project implements 5 beautiful signup screens:
1. **Welcome Screen** - Landing page with logo and call-to-action buttons
2. **Account Type Screen** - Choose between Starter or Registered Business
3. **Business Type Screen** - Select Online, Offline, or Both
4. **Registration Form** - Complete signup with validation
5. **Email Verification** - OTP input with countdown timer

## 🎨 Design System

### Brand Colors
```css
Space Violet (Primary Dark): #221144
Soft Violet (Accent):        #AE92FF
Pure White:                   #FFFFFF
Pure Black:                   #000000
```

### Typography
- **Headings**: Aeonik Trial (with fallback to Inter/Helvetica)
- **Body Text**: Outfit (loaded from Google Fonts)

### Visual Style
- Gradient backgrounds with soft overlays
- Rounded buttons and inputs (border-radius: 1rem+)
- Smooth animations (fade-in, slide-up, scale)
- Mobile-first responsive design
- Decorative blur effects

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Basic knowledge of React and TypeScript
- A code editor (VS Code recommended)

### Installation

1. **Create project directory**
```bash
mkdir koyapay-signup
cd koyapay-signup
```

2. **Initialize the project**
```bash
npm create vite@latest . -- --template react-ts
```

3. **Install dependencies**
```bash
npm install

# Install required packages
npm install tailwindcss postcss autoprefixer
npm install class-variance-authority clsx tailwind-merge
npm install -D @types/node

# Initialize Tailwind
npx tailwindcss init -p
```

4. **Copy project files**

Copy all files from this package into your project:
```
src/
├── components/
│   ├── auth/
│   │   └── SocialAuthButtons.tsx
│   ├── layout/
│   │   └── Layout.tsx
│   ├── screens/
│   │   ├── WelcomeScreen.tsx
│   │   ├── AccountTypeScreen.tsx
│   │   ├── BusinessTypeScreen.tsx
│   │   ├── RegistrationFormScreen.tsx
│   │   └── EmailVerificationScreen.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Logo.tsx
│       ├── OTPInput.tsx
│       └── CountrySelect.tsx
├── lib/
│   └── utils.ts
├── styles/
│   └── globals.css
├── App.tsx
└── main.tsx
```

5. **Configure path aliases**

Update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Update `vite.config.ts`:
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

6. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:5173` to see your app!

## 📁 Project Structure

```
koyapay-signup/
├── public/
│   
    └── designs/                    
│       ├── auth
│       └── onboarding
├── src/
    ├── assets/                    
│       └── fonts/                   
│           ├── AeonikTrial-heading.ttf
│           └── Outfit-body.ttf
│        └── logo/                   
│           ├── logo.png
│           └── primary.png
│   ├── components/
│   │   ├── auth/                 # Authentication components
│   │   │   └── SocialAuthButtons.tsx
│   │   ├── layout/               # Layout wrapper
│   │   │   └── Layout.tsx
│   │   ├── screens/              # Main screens (5 total)
│   │   │   ├── WelcomeScreen.tsx
│   │   │   ├── AccountTypeScreen.tsx
│   │   │   ├── BusinessTypeScreen.tsx
│   │   │   ├── RegistrationFormScreen.tsx
│   │   │   └── EmailVerificationScreen.tsx
│   │   └── ui/                   # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Logo.tsx
│   │       ├── OTPInput.tsx
│   │       └── CountrySelect.tsx
│   ├── utils/
│   │   └── constant.ts              
│   ├── styles/
│   │   └── globals.css           # Global styles, fonts, animations
│   ├── App.tsx                   # Main app with routing
│   └── main.tsx                  # Entry point
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite configuration
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 🧩 Component Architecture

### Screen Components

#### 1. WelcomeScreen
```tsx
import { WelcomeScreen } from '@/components/screens/WelcomeScreen';

<WelcomeScreen
  onLoginClick={() => navigate('/login')}
  onSignUpClick={() => navigate('/signup')}
/>
```

#### 2. AccountTypeScreen
```tsx
import { AccountTypeScreen } from '@/components/screens/AccountTypeScreen';

<AccountTypeScreen
  onStarterBusinessClick={() => navigate('/business-type')}
  onRegisteredBusinessClick={() => navigate('/register')}
  onLoginClick={() => navigate('/login')}
  onSocialAuth={(provider) => handleSocialAuth(provider)}
/>
```

#### 3. BusinessTypeScreen
```tsx
import { BusinessTypeScreen } from '@/components/screens/BusinessTypeScreen';

<BusinessTypeScreen
  onBusinessTypeSelect={(type) => handleTypeSelect(type)}
  onLoginClick={() => navigate('/login')}
  onSocialAuth={(provider) => handleSocialAuth(provider)}
/>
```

#### 4. RegistrationFormScreen
```tsx
import { RegistrationFormScreen } from '@/components/screens/RegistrationFormScreen';

<RegistrationFormScreen
  onSubmit={(data) => handleRegistration(data)}
  onLoginClick={() => navigate('/login')}
  onSocialAuth={(provider) => handleSocialAuth(provider)}
/>
```

#### 5. EmailVerificationScreen
```tsx
import { EmailVerificationScreen } from '@/components/screens/EmailVerificationScreen';

<EmailVerificationScreen
  email="user@example.com"
  onVerify={(otp) => handleVerification(otp)}
  onResendCode={() => handleResend()}
  onBack={() => navigate(-1)}
/>
```

### Reusable UI Components

#### Button
```tsx
import { Button } from '@/components/ui/Button';

// Primary button
<Button variant="primary" fullWidth>
  Create Account
</Button>

// Secondary button
<Button variant="secondary" onClick={handleClick}>
  Cancel
</Button>

// With loading state
<Button isLoading={isSubmitting}>
  Submit
</Button>

// With icons
<Button leftIcon={<Icon />}>
  Continue
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'ghost' | 'link'
- `size`: 'sm' | 'default' | 'lg' | 'icon'
- `fullWidth`: boolean
- `isLoading`: boolean
- `leftIcon`, `rightIcon`: React.ReactNode
- All standard button HTML attributes

#### Input
```tsx
import { Input } from '@/components/ui/Input';

// Basic input
<Input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

// With icon and error
<Input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  leftIcon={<LockIcon />}
  error="Password is required"
/>
```

**Props:**
- All standard input HTML attributes
- `leftIcon`, `rightIcon`: React.ReactNode
- `error`: string
- `containerClassName`: string

#### OTPInput
```tsx
import { OTPInput } from '@/components/ui/OTPInput';

<OTPInput
  length={6}
  value={otp}
  onChange={setOtp}
  onComplete={(code) => verifyCode(code)}
/>
```

**Features:**
- Auto-focus to next input on digit entry
- Paste support (extracts numbers only)
- Backspace navigation
- Arrow key navigation
- Complete callback when all digits filled

#### CountrySelect
```tsx
import { CountrySelect } from '@/components/ui/CountrySelect';

<CountrySelect
  value={country}
  onChange={setCountry}
/>
```

**Features:**
- Dropdown with country flags
- Pre-loaded with common countries
- Easy to extend with more countries

#### Logo
```tsx
import { Logo } from '@/components/ui/Logo';

// Full logo with text
<Logo size="lg" showText />

// Icon only
<Logo size="md" showText={false} />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg'
- `showText`: boolean
- `className`: string

## 🎨 Styling Guide

### Using Tailwind Classes

```tsx
// Brand colors
<div className="bg-space-violet text-soft-violet">
  Content
</div>

// Typography
<h1 className="font-aeonik font-bold text-3xl">
  Heading
</h1>

<p className="font-outfit text-base">
  Body text
</p>

// Spacing and layout
<div className="px-6 py-4 space-y-4">
  <Component />
</div>

// Animations
<div className="animate-fade-in">
  <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
    Staggered animation
  </div>
</div>
```

### Custom Animations

Available animations:
- `animate-fade-in` - Fade in (0.6s)
- `animate-slide-up` - Slide up from bottom (0.5s)
- `animate-scale-in` - Scale in (0.4s)

Use with staggered delays:
```tsx
<div className="animate-slide-up" style={{ animationDelay: '0.1s' }} />
<div className="animate-slide-up" style={{ animationDelay: '0.2s' }} />
<div className="animate-slide-up" style={{ animationDelay: '0.3s' }} />
```

## 🔧 Customization

### Adding More Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  'space-violet': '#221144',
  'soft-violet': '#AE92FF',
  'custom-color': '#YOUR_COLOR',
}
```

### Adding More Countries

Edit `src/components/ui/CountrySelect.tsx`:
```typescript
const countries: Country[] = [
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'YOUR_CODE', name: 'Your Country', flag: '🏳️' },
  // Add more...
];
```

### Modifying Validation Rules

Edit `src/components/screens/RegistrationFormScreen.tsx`:
```typescript
const validateForm = (): boolean => {
  const newErrors: Partial<Record<keyof FormData, string>> = {};
  
  // Add your custom validation
  if (!formData.email.trim()) {
    newErrors.email = 'Email is required';
  }
  
  // Add more rules...
  
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```

### Changing Animations

Edit `src/styles/globals.css`:
```css
@keyframes yourAnimation {
  from { /* start state */ }
  to { /* end state */ }
}
```

Then add to `tailwind.config.ts`:
```typescript
animation: {
  'your-animation': 'yourAnimation 0.5s ease-out',
}
```

## 🔐 Form Validation

### Built-in Validation

The registration form includes:
- ✅ Required field validation
- ✅ Email format validation
- ✅ Password length (min 8 characters)
- ✅ Password confirmation matching
- ✅ Real-time error display

### Adding Custom Validation

```typescript
// In RegistrationFormScreen.tsx
const validateForm = (): boolean => {
  const newErrors: Partial<Record<keyof FormData, string>> = {};
  
  // Custom validation example
  if (formData.password.length < 12) {
    newErrors.password = 'Password must be at least 12 characters';
  }
  
  if (!/[A-Z]/.test(formData.password)) {
    newErrors.password = 'Password must contain uppercase letter';
  }
  
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```


## 📱 Responsive Design

The app is mobile-first and fully responsive:

### Breakpoints
```typescript
// Tailwind breakpoints
sm: 640px   // Small devices
md: 768px   // Tablets
lg: 1024px  // Desktops
xl: 1280px  // Large desktops
```

### Usage
```tsx
<div className="px-4 md:px-8 lg:px-12">
  <h1 className="text-2xl md:text-3xl lg:text-4xl">
    Responsive heading
  </h1>
</div>
```


## 🐛 Troubleshooting

### Issue: Fonts not loading
**Solution**: 
1. Check font files are in `public/fonts/`
2. Verify paths in `globals.css`
3. The app uses fallback fonts (Inter) automatically

### Issue: Tailwind classes not working
**Solution**:
1. Ensure `globals.css` is imported in `main.tsx`
2. Check `tailwind.config.ts` content paths
3. Restart dev server

### Issue: Path aliases not working
**Solution**:
1. Check `tsconfig.json` has correct paths
2. Check `vite.config.ts` has alias configuration
3. Restart dev server

### Issue: Build fails
**Solution**:
1. Run `npm install` again
2. Delete `node_modules` and reinstall
3. Check for TypeScript errors

## 📚 Additional Resources

### Learn More
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

### Component Libraries
- Consider adding [Radix UI](https://www.radix-ui.com/) for advanced components
- Or [Headless UI](https://headlessui.com/) for accessibility

### Form Management (Optional)
- [React Hook Form](https://react-hook-form.com/) - Performance
- [Formik](https://formik.org/) - Feature-rich

## 🎓 Best Practices

### Component Organization
✅ One component per file
✅ Props interfaces defined
✅ Proper TypeScript types
✅ Reusable components in `ui/` folder
✅ Feature components grouped

### Code Style
✅ Use functional components
✅ Use TypeScript strict mode
✅ Avoid inline styles (use Tailwind)
✅ Keep components small and focused
✅ Use meaningful names

### Performance
✅ Lazy load screens if needed
✅ Memoize expensive computations
✅ Optimize images
✅ Use production build for deployment

## 🤝 Contributing

If you're building on this project:

1. Keep the component structure
2. Follow TypeScript conventions
3. Maintain design consistency
4. Update documentation
5. Test thoroughly



## 🎯 Next Steps

After completing the basic setup:

1. ✅ Get the app running locally
2. ✅ Customize colors and branding
3. ✅ Connect to your backend API
4. ✅ Add authentication logic
5. ✅ Implement error handling
6. ✅ Add loading states
7. ✅ Test on mobile devices
8. ✅ Deploy to production

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

Happy coding! 🚀