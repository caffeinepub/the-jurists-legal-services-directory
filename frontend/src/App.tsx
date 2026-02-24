import React from 'react';
import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import JurisdictionPage from './pages/JurisdictionPage';
import LeadsPage from './pages/LeadsPage';
import InitializeAdminPage from './pages/InitializeAdminPage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Toaster } from './components/ui/sonner';

// Root route — Layout uses <Outlet /> internally
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

const serviceDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/$serviceSlug',
  component: ServiceDetailPage,
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

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogListPage,
});

const blogDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/$articleId',
  component: BlogDetailPage,
});

const hyderabadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/hyderabad',
  component: () => <JurisdictionPage jurisdiction="Hyderabad" />,
});

const secunderabadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/secunderabad',
  component: () => <JurisdictionPage jurisdiction="Secunderabad" />,
});

const rangareddyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rangareddy',
  component: () => <JurisdictionPage jurisdiction="Rangareddy" />,
});

const cyberabadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cyberabad',
  component: () => <JurisdictionPage jurisdiction="Cyberabad" />,
});

// Keep legacy jurisdiction paths working
const legacyHyderabadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/jurisdiction/hyderabad',
  component: () => <JurisdictionPage jurisdiction="Hyderabad" />,
});

const legacySecunderabadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/jurisdiction/secunderabad',
  component: () => <JurisdictionPage jurisdiction="Secunderabad" />,
});

const legacyRangareddyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/jurisdiction/rangareddy',
  component: () => <JurisdictionPage jurisdiction="Rangareddy" />,
});

const legacyCyberabadRoute = createRoute({
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

const adminLeadsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/leads',
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

const adminInitializeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/initialize',
  component: InitializeAdminPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  serviceDetailRoute,
  aboutRoute,
  contactRoute,
  blogRoute,
  blogDetailRoute,
  hyderabadRoute,
  secunderabadRoute,
  rangareddyRoute,
  cyberabadRoute,
  legacyHyderabadRoute,
  legacySecunderabadRoute,
  legacyRangareddyRoute,
  legacyCyberabadRoute,
  leadsRoute,
  adminLeadsRoute,
  initializeAdminRoute,
  adminInitializeRoute,
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
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
