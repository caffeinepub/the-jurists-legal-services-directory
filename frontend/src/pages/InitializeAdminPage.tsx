import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Shield, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useInitializeAccessControl, useIsAdminActorFieldInitialized } from '../hooks/useQueries';

export default function InitializeAdminPage() {
  const navigate = useNavigate();
  const { identity, login, loginStatus } = useInternetIdentity();
  const isAuthenticated = !!identity;
  const { data: isInitialized, isLoading: checkingInit } = useIsAdminActorFieldInitialized();
  const initMutation = useInitializeAccessControl();
  const [done, setDone] = useState(false);

  const handleInitialize = async () => {
    try {
      await initMutation.mutateAsync();
      setDone(true);
      setTimeout(() => navigate({ to: '/leads' }), 2000);
    } catch (err: unknown) {
      // error handled by mutation state
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white border border-border rounded-xl shadow-professional-lg p-8">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-7 h-7 text-primary" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-foreground mb-2">Admin Setup</h1>
          <p className="text-sm text-muted-foreground">
            Initialize the admin access control system for The Jurists dashboard.
          </p>
        </div>

        {checkingInit ? (
          <div className="text-center py-4">
            <Loader2 className="w-6 h-6 animate-spin text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Checking initialization status...</p>
          </div>
        ) : isInitialized ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-green-800">Admin already initialized</p>
            <p className="text-xs text-green-600 mt-1">The system is ready to use.</p>
          </div>
        ) : done ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-green-800">Admin initialized successfully!</p>
            <p className="text-xs text-green-600 mt-1">Redirecting to leads dashboard...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {!isAuthenticated ? (
              <div>
                <div className="bg-secondary border border-border rounded-lg p-4 mb-4">
                  <p className="text-sm text-muted-foreground text-center">
                    You must be logged in to initialize admin access.
                  </p>
                </div>
                <button
                  onClick={() => login()}
                  disabled={loginStatus === 'logging-in'}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded hover:bg-primary/90 transition-colors disabled:opacity-50 font-medium"
                >
                  {loginStatus === 'logging-in' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Logging in...
                    </>
                  ) : (
                    'Login to Continue'
                  )}
                </button>
              </div>
            ) : (
              <div>
                <div className="bg-secondary border border-border rounded-lg p-4 mb-4">
                  <p className="text-sm text-foreground font-medium mb-1">Your Principal ID:</p>
                  <p className="text-xs text-muted-foreground font-mono break-all">
                    {identity?.getPrincipal().toString()}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    This principal will be set as the admin.
                  </p>
                </div>

                {initMutation.isError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-red-700">
                      {(initMutation.error as Error)?.message ||
                        'Initialization failed. It may already be initialized.'}
                    </p>
                  </div>
                )}

                <button
                  onClick={handleInitialize}
                  disabled={initMutation.isPending}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded hover:bg-primary/90 transition-colors disabled:opacity-50 font-medium"
                >
                  {initMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Initializing...
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4" /> Initialize Admin
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
