import { useState } from 'react';
import { Button, Input, Select, Card } from '@/components/ui';
import { ModeCard, SocialAuthButton } from '@/components/auth';
import { AccountMode, SocialProvider } from '@/types';
import { MODE_OPTIONS, COUNTRIES } from '@/utils';

/**
 * Component Showcase
 * 
 * This page demonstrates all available components.
 * Useful for development, testing, and documentation.
 * 
 * To use: Import in App.tsx and route to /showcase
 */
export const ComponentShowcase: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('NG');
  const [selectedMode, setSelectedMode] = useState<AccountMode | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const countryOptions = COUNTRIES.map(country => ({
    value: country.code,
    label: country.name,
    icon: country.flag,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-koya-background to-koya-light p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-koya-primary">
            KoyaPay Component Showcase
          </h1>
          <p className="text-koya-text-secondary">
            All components in one place for development and testing
          </p>
        </div>

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-koya-text-primary">Buttons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-koya-text-secondary">Primary</p>
              <Button variant="primary" fullWidth>Primary Button</Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-koya-text-secondary">Secondary</p>
              <Button variant="secondary" fullWidth>Secondary Button</Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-koya-text-secondary">Ghost</p>
              <Button variant="ghost" fullWidth>Ghost Button</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-koya-text-secondary">Small</p>
              <Button size="sm" fullWidth>Small Button</Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-koya-text-secondary">Medium (Default)</p>
              <Button size="md" fullWidth>Medium Button</Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-koya-text-secondary">Large</p>
              <Button size="lg" fullWidth>Large Button</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-koya-text-secondary">Loading State</p>
              <Button isLoading fullWidth>Loading Button</Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-koya-text-secondary">Disabled State</p>
              <Button disabled fullWidth>Disabled Button</Button>
            </div>
          </div>
        </section>

        {/* Inputs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-koya-text-primary">Inputs</h2>
          
          <div className="space-y-4 max-w-md">
            <Input
              placeholder="Basic input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <Input
              placeholder="Email with icon"
              type="email"
              leftIcon={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              }
            />

            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password with toggle"
              rightIcon={
                <button onClick={() => setShowPassword(!showPassword)}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              }
            />

            <Input
              placeholder="Input with error"
              error="This field is required"
            />

            <Input
              placeholder="Disabled input"
              disabled
              value="Cannot edit this"
            />
          </div>
        </section>

        {/* Select */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-koya-text-primary">Select</h2>
          
          <div className="max-w-md">
            <Select
              label="Country"
              value={selectedCountry}
              onChange={setSelectedCountry}
              options={countryOptions}
            />
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-koya-text-primary">Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <h3 className="text-lg font-semibold mb-2">Basic Card</h3>
              <p className="text-koya-text-secondary">This is a basic card component</p>
            </Card>

            <Card isSelected>
              <h3 className="text-lg font-semibold mb-2">Selected Card</h3>
              <p>This card is in selected state</p>
            </Card>

            <Card onClick={() => alert('Clicked!')} className="cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">Clickable Card</h3>
              <p className="text-koya-text-secondary">Click me!</p>
            </Card>
          </div>
        </section>

        {/* Mode Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-koya-text-primary">Mode Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </section>

        {/* Social Auth Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-koya-text-primary">Social Auth</h2>
          
          <div className="flex items-center gap-4">
            <SocialAuthButton
              provider={SocialProvider.FACEBOOK}
              onClick={(p) => alert(`Clicked ${p}`)}
            />
            <SocialAuthButton
              provider={SocialProvider.GOOGLE}
              onClick={(p) => alert(`Clicked ${p}`)}
            />
            <SocialAuthButton
              provider={SocialProvider.APPLE}
              onClick={(p) => alert(`Clicked ${p}`)}
            />
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-koya-text-primary">Color Palette</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-20 bg-koya-primary rounded-lg"></div>
              <p className="text-sm font-medium">Primary</p>
              <code className="text-xs text-koya-text-tertiary">#3D2C6E</code>
            </div>
            
            <div className="space-y-2">
              <div className="h-20 bg-koya-secondary rounded-lg"></div>
              <p className="text-sm font-medium">Secondary</p>
              <code className="text-xs text-koya-text-tertiary">#6B5BA9</code>
            </div>
            
            <div className="space-y-2">
              <div className="h-20 bg-koya-background rounded-lg border-2 border-koya-border"></div>
              <p className="text-sm font-medium">Background</p>
              <code className="text-xs text-koya-text-tertiary">#D8CEF0</code>
            </div>
            
            <div className="space-y-2">
              <div className="h-20 bg-koya-light rounded-lg border-2 border-koya-border"></div>
              <p className="text-sm font-medium">Light</p>
              <code className="text-xs text-koya-text-tertiary">#E9E2F8</code>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-koya-text-primary">Typography</h2>
          
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-koya-text-primary">Heading 1</h1>
            <h2 className="text-3xl font-bold text-koya-text-primary">Heading 2</h2>
            <h3 className="text-2xl font-semibold text-koya-text-primary">Heading 3</h3>
            <h4 className="text-xl font-semibold text-koya-text-primary">Heading 4</h4>
            <p className="text-base text-koya-text-primary">Body text - Regular</p>
            <p className="text-sm text-koya-text-secondary">Small text - Secondary</p>
            <p className="text-xs text-koya-text-tertiary">Extra small - Tertiary</p>
          </div>
        </section>
      </div>
    </div>
  );
};
