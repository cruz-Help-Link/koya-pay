import { RegisterBusinessFormData, SocialProvider } from '@/types';

// API base URL - replace with your actual API endpoint
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.koyapay.com';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface RegisterResponse extends AuthTokens {
  userId: string;
  email: string;
  businessName: string;
}

/**
 * Authentication Service
 * 
 * Handles all authentication-related API calls.
 * This is a template - implement actual API endpoints.
 */
class AuthService {
  /**
   * Register a new business account
   */
  async registerBusiness(
    data: RegisterBusinessFormData
  ): Promise<ApiResponse<RegisterResponse>> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register/business`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          businessName: data.businessName,
          email: data.email,
          password: data.password,
          countryCode: data.countryCode,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        return {
          success: false,
          error: error.message || 'Registration failed',
        };
      }

      const result = await response.json();
      
      // Store tokens securely
      this.storeTokens({
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      });

      return {
        success: true,
        data: result,
      };
    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        error: 'Network error. Please check your connection.',
      };
    }
  }

  /**
   * Authenticate with social provider
   */
  async socialAuth(
    provider: SocialProvider
  ): Promise<ApiResponse<RegisterResponse>> {
    try {
      // Step 1: Get authorization URL from backend
      const authUrlResponse = await fetch(
        `${API_BASE_URL}/auth/social/${provider}/url`,
        {
          method: 'GET',
        }
      );

      const { url } = await authUrlResponse.json();

      // Step 2: Open OAuth popup/redirect
      // This is platform-specific (web vs mobile)
      window.location.href = url;

      // Step 3: Handle callback (implement in callback route)
      // Backend will exchange code for tokens and return user data

      return {
        success: true,
        message: 'Redirecting to authentication...',
      };
    } catch (error) {
      console.error('Social auth error:', error);
      return {
        success: false,
        error: 'Social authentication failed',
      };
    }
  }

  /**
   * Login with email and password
   */
  async login(email: string, password: string): Promise<ApiResponse<RegisterResponse>> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        return {
          success: false,
          error: error.message || 'Login failed',
        };
      }

      const result = await response.json();
      
      this.storeTokens({
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      });

      return {
        success: true,
        data: result,
      };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: 'Network error. Please check your connection.',
      };
    }
  }

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    try {
      const accessToken = this.getAccessToken();
      
      if (accessToken) {
        await fetch(`${API_BASE_URL}/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.clearTokens();
    }
  }

  /**
   * Refresh access token
   */
  async refreshAccessToken(): Promise<string | null> {
    try {
      const refreshToken = this.getRefreshToken();
      
      if (!refreshToken) {
        return null;
      }

      const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (!response.ok) {
        this.clearTokens();
        return null;
      }

      const { accessToken } = await response.json();
      localStorage.setItem('koyapay_access_token', accessToken);
      
      return accessToken;
    } catch (error) {
      console.error('Token refresh error:', error);
      this.clearTokens();
      return null;
    }
  }

  /**
   * Store authentication tokens
   */
  private storeTokens(tokens: AuthTokens): void {
    localStorage.setItem('koyapay_access_token', tokens.accessToken);
    localStorage.setItem('koyapay_refresh_token', tokens.refreshToken);
  }

  /**
   * Get access token from storage
   */
  getAccessToken(): string | null {
    return localStorage.getItem('koyapay_access_token');
  }

  /**
   * Get refresh token from storage
   */
  private getRefreshToken(): string | null {
    return localStorage.getItem('koyapay_refresh_token');
  }

  /**
   * Clear all tokens
   */
  private clearTokens(): void {
    localStorage.removeItem('koyapay_access_token');
    localStorage.removeItem('koyapay_refresh_token');
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }
}

// Export singleton instance
export const authService = new AuthService();
