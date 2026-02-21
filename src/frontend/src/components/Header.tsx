import { Link, useRouterState, useNavigate } from '@tanstack/react-router';
import { Scale, Menu, X, ChevronDown, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import { useIsCallerAdmin, useIsAdminActorFieldInitialized } from '../hooks/useQueries';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { identity, login, clear, loginStatus } = useInternetIdentity();
  const queryClient = useQueryClient();
  const { pathname } = useRouterState().location;
  const navigate = useNavigate();
  const { data: isAdmin, isLoading: isAdminLoading, refetch: refetchAdminStatus } = useIsCallerAdmin();
  const { data: isInitialized, isLoading: isInitializedLoading } = useIsAdminActorFieldInitialized();

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  useEffect(() => {
    if (isAuthenticated && !isAdminLoading) {
      refetchAdminStatus();
    }
  }, [isAuthenticated, refetchAdminStatus, isAdminLoading]);

  const showAdminButton = isAuthenticated && !isAdminLoading && isAdmin === true;
  const showInitializeLink = !isInitializedLoading && isInitialized === false;

  const handleAuth = async () => {
    if (isAuthenticated) {
      await clear();
      queryClient.clear();
    } else {
      try {
        await login();
      } catch (error: any) {
        console.error('Login error:', error);
        if (error.message === 'User is already authenticated') {
          await clear();
          setTimeout(() => login(), 300);
        }
      }
    }
  };

  const handleAdminClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate({ to: '/leads' });
    setMobileMenuOpen(false);
  };

  const handleInitializeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate({ to: '/initialize-admin' });
    setMobileMenuOpen(false);
  };

  const jurisdictions = [
    { href: '/jurisdiction/hyderabad', label: 'Hyderabad' },
    { href: '/jurisdiction/secunderabad', label: 'Secunderabad' },
    { href: '/jurisdiction/rangareddy', label: 'Rangareddy' },
    { href: '/jurisdiction/cyberabad', label: 'Cyberabad' },
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-lg transition-shadow">
            <Scale className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            The Jurists
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium">
                Jurisdictions
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {jurisdictions.map((jurisdiction) => (
                <DropdownMenuItem key={jurisdiction.href} asChild>
                  <Link to={jurisdiction.href} className="cursor-pointer">
                    {jurisdiction.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {showAdminButton && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium">
                  <Shield className="h-4 w-4 mr-2" />
                  Admin
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={handleAdminClick} className="cursor-pointer">
                  Leads Dashboard
                </DropdownMenuItem>
                {showInitializeLink && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleInitializeClick} className="cursor-pointer">
                      Initialize Admin
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <Button
            onClick={handleAuth}
            disabled={isLoggingIn}
            variant={isAuthenticated ? 'outline' : 'default'}
            className="ml-2"
          >
            {isLoggingIn ? 'Logging in...' : isAuthenticated ? 'Logout' : 'Login'}
          </Button>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-border/40">
              <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase">Jurisdictions</p>
              {jurisdictions.map((jurisdiction) => (
                <Link
                  key={jurisdiction.href}
                  to={jurisdiction.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  {jurisdiction.label}
                </Link>
              ))}
            </div>

            {showAdminButton && (
              <div className="pt-2 border-t border-border/40">
                <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase flex items-center">
                  <Shield className="h-3 w-3 mr-1" />
                  Admin
                </p>
                <button
                  onClick={handleAdminClick}
                  className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  Leads Dashboard
                </button>
                {showInitializeLink && (
                  <button
                    onClick={handleInitializeClick}
                    className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    Initialize Admin
                  </button>
                )}
              </div>
            )}

            <div className="pt-2 border-t border-border/40">
              <Button
                onClick={handleAuth}
                disabled={isLoggingIn}
                variant={isAuthenticated ? 'outline' : 'default'}
                className="w-full"
              >
                {isLoggingIn ? 'Logging in...' : isAuthenticated ? 'Logout' : 'Login'}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
