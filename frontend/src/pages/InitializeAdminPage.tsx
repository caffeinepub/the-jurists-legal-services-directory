import { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Shield, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Alert, AlertDescription } from '../components/ui/alert';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useIsAdminActorFieldInitialized, useInitializeAccessControl, useIsCallerAdmin } from '../hooks/useQueries';

export default function InitializeAdminPage() {
  const navigate = useNavigate();
  const { identity, login, loginStatus } = useInternetIdentity();
  const { data: isAlreadyInitialized, isLoading: checkingInitStatus, refetch: refetchInitStatus } = useIsAdminActorFieldInitialized();
  const { data: isAdmin, refetch: refetchAdminStatus } = useIsCallerAdmin();
  const initializeAccessControlMutation = useInitializeAccessControl();
  const [initSuccess, setInitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (identity) {
      refetchInitStatus();
      refetchAdminStatus();
    }
  }, [identity, refetchInitStatus, refetchAdminStatus]);

  useEffect(() => {
    if (isAlreadyInitialized && isAdmin && identity) {
      navigate({ to: '/leads' });
    }
  }, [isAlreadyInitialized, isAdmin, identity, navigate]);

  const handleInitialize = async () => {
    if (!identity) {
      setError('Please log in with Internet Identity first.');
      return;
    }

    setError(null);

    try {
      await initializeAccessControlMutation.mutateAsync();
      setInitSuccess(true);

      await refetchAdminStatus();
      await refetchInitStatus();

      setTimeout(() => {
        navigate({ to: '/leads' });
      }, 2000);
    } catch (err: any) {
      console.error('Admin initialization error:', err);

      if (err.message?.includes('already initialized')) {
        setError('Admin access has already been initialized by another user.');
      } else {
        setError(err.message || 'Failed to initialize admin access. Please try again.');
      }
    }
  };

  const handleLogin = async () => {
    try {
      await login();
    } catch (err: any) {
      console.error('Login error:', err);
      setError('Failed to log in. Please try again.');
    }
  };

  if (checkingInitStatus) {
    return (
      <div className="container py-24">
        <div className="max-w-2xl mx-auto text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Checking initialization status...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-24">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Admin Access Setup</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connect your Internet Identity to establish admin access for The Jurists legal directory platform.
          </p>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl">One-Time Admin Initialization</CardTitle>
            <CardDescription className="text-base">
              This process securely connects your Internet Identity to the admin role, granting you access to the leads
              dashboard and management features.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {isAlreadyInitialized && !initSuccess && (
              <Alert className="border-secondary bg-secondary/10">
                <AlertCircle className="h-5 w-5 text-secondary" />
                <AlertDescription className="text-base">
                  Admin access has already been configured. If you are the admin, please log in to access the dashboard.
                </AlertDescription>
              </Alert>
            )}

            {initSuccess && (
              <Alert className="border-green-500 bg-green-500/10">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <AlertDescription className="text-base font-semibold text-green-700 dark:text-green-400">
                  ✓ Admin access initialized successfully! You are now the admin. Redirecting to the leads dashboard...
                </AlertDescription>
              </Alert>
            )}

            {error && !initSuccess && (
              <Alert variant="destructive">
                <AlertCircle className="h-5 w-5" />
                <AlertDescription className="text-base">{error}</AlertDescription>
              </Alert>
            )}

            {!initSuccess && !isAlreadyInitialized && (
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Setup Instructions:</h3>
                <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                  <li className="leading-relaxed">
                    <span className="font-medium text-foreground">Log in with Internet Identity</span> — Authenticate
                    using your Internet Identity to establish your identity.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-medium text-foreground">Click "Initialize Admin Access"</span> — This securely
                    connects your identity to the admin role in the backend.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-medium text-foreground">Access the Dashboard</span> — Once initialized, you'll
                    be automatically redirected to the leads management page.
                  </li>
                </ol>
              </div>
            )}

            <div className="pt-4 space-y-3">
              {!identity ? (
                <Button
                  size="lg"
                  onClick={handleLogin}
                  disabled={loginStatus === 'logging-in'}
                  className="w-full text-base"
                >
                  {loginStatus === 'logging-in' ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    <>
                      <Shield className="h-5 w-5 mr-2" />
                      Log in with Internet Identity
                    </>
                  )}
                </Button>
              ) : (
                <>
                  {!isAlreadyInitialized && !initSuccess && (
                    <Button
                      size="lg"
                      onClick={handleInitialize}
                      disabled={initializeAccessControlMutation.isPending}
                      className="w-full text-base bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    >
                      {initializeAccessControlMutation.isPending ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Initializing admin access...
                        </>
                      ) : (
                        <>
                          <Shield className="h-5 w-5 mr-2" />
                          Initialize Admin Access
                        </>
                      )}
                    </Button>
                  )}

                  {isAlreadyInitialized && (
                    <Button
                      size="lg"
                      onClick={() => navigate({ to: '/leads' })}
                      className="w-full text-base"
                    >
                      Go to Leads Dashboard
                    </Button>
                  )}
                </>
              )}
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Security Note:</strong> This initialization can only be performed
                once. The first user to complete this process becomes the admin. Ensure you are authorized to set up
                admin access for The Jurists platform.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            Need help? Contact support at{' '}
            <a href="mailto:info@thejurists.in" className="text-primary hover:underline">
              info@thejurists.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
