import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { useInternetIdentity } from './hooks/useInternetIdentity';
import { useGetCallerUserProfile, useIsCallerAdmin } from './hooks/useQueries';
import HomePage from './pages/HomePage';
import JurisdictionPage from './pages/JurisdictionPage';
import LeadsPage from './pages/LeadsPage';
import InitializeAdminPage from './pages/InitializeAdminPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import Layout from './components/Layout';
import ProfileSetupModal from './components/ProfileSetupModal';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from 'next-themes';

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const blogListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogListPage,
});

const blogDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/$articleId',
  component: BlogDetailPage,
});

const familyLawRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/family-law',
  component: () => <ServiceDetailPage service="family-law" />,
});

const corporateLawRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/corporate-law',
  component: () => <ServiceDetailPage service="corporate-law" />,
});

const criminalDefenseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/criminal-defense',
  component: () => <ServiceDetailPage service="criminal-defense" />,
});

const civilLitigationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/civil-litigation',
  component: () => <ServiceDetailPage service="civil-litigation" />,
});

const propertyLawRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/property-law',
  component: () => <ServiceDetailPage service="property-law" />,
});

const documentationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/documentation-services',
  component: () => <ServiceDetailPage service="documentation-services" />,
});

const taxLawRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/tax-law',
  component: () => <ServiceDetailPage service="tax-law" />,
});

const ipLawRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/ip-law',
  component: () => <ServiceDetailPage service="ip-law" />,
});

const startupLawRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/startup-law',
  component: () => <ServiceDetailPage service="startup-law" />,
});

const employmentLawRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/employment-law',
  component: () => <ServiceDetailPage service="employment-law" />,
});

const hyderabadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/jurisdiction/hyderabad',
  component: () => <JurisdictionPage jurisdiction="Hyderabad" />,
});

const secunderabadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/jurisdiction/secunderabad',
  component: () => <JurisdictionPage jurisdiction="Secunderabad" />,
});

const rangareddy = createRoute({
  getParentRoute: () => rootRoute,
  path: '/jurisdiction/rangareddy',
  component: () => <JurisdictionPage jurisdiction="Rangareddy" />,
});

const cyberabadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/jurisdiction/cyberabad',
  component: () => <JurisdictionPage jurisdiction="Cyberabad" />,
});

const leadsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/leads',
  component: () => (
    <ErrorBoundary>
      <LeadsPage />
    </ErrorBoundary>
  ),
});

const initializeAdminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/initialize-admin',
  component: InitializeAdminPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  aboutRoute,
  contactRoute,
  blogListRoute,
  blogDetailRoute,
  familyLawRoute,
  corporateLawRoute,
  criminalDefenseRoute,
  civilLitigationRoute,
  propertyLawRoute,
  documentationRoute,
  taxLawRoute,
  ipLawRoute,
  startupLawRoute,
  employmentLawRoute,
  hyderabadRoute,
  secunderabadRoute,
  rangareddy,
  cyberabadRoute,
  leadsRoute,
  initializeAdminRoute,
]);

function NotFoundComponent() {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
    </div>
  );
}

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundComponent,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  const { identity, isInitializing } = useInternetIdentity();
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();
  const { data: isAdmin } = useIsCallerAdmin();

  const isAuthenticated = !!identity;
  const showProfileSetup = isAuthenticated && !profileLoading && isFetched && userProfile === null;

  if (isInitializing) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <RouterProvider router={router} />
      {showProfileSetup && <ProfileSetupModal />}
      <Toaster />
    </ThemeProvider>
  );
}
