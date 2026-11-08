import { Navigate, Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { ResumePage } from './components/ResumePage';
import { ContactPage } from './components/ContactPage';
import { PortfolioPreview } from './components/PortfolioPreview';
import { ScrollToTop } from './components/ScrollToTop';
import { Toaster } from './components/ui/sonner';

function RootLayout() {
  return (
    <div className="min-h-screen bg-[#FBFBFB]">
      <ScrollToTop />
      <Toaster />
      <Outlet />
    </div>
  );
}

function WithNavigation({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', element: <WithNavigation><AboutPage /></WithNavigation> },
      { path: 'projects', element: <WithNavigation><ProjectsPage /></WithNavigation> },
      { path: 'project/:slug', element: <WithNavigation><ProjectDetailPage /></WithNavigation> },
      { path: 'resume', element: <WithNavigation><ResumePage /></WithNavigation> },
      { path: 'contact', element: <WithNavigation><ContactPage /></WithNavigation> },
      { path: 'portfolio-preview', Component: PortfolioPreview },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
