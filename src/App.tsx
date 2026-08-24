import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SEOHelmet from './components/SEOHelmet';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Capabilities'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Contact = lazy(() => import('./pages/Contact'));

const App: React.FC = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const isEnglish = i18n.language.toLowerCase().startsWith('en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <MotionConfig reducedMotion="always" transition={{ duration: 0.22, ease: 'easeOut' }}>
      <div className="flex flex-col min-h-screen relative overflow-hidden">
      <a className="skip-link" href="#main-content">
        {isEnglish ? 'Skip to main content' : 'Saltar al contenido principal'}
      </a>
      <SEOHelmet />
      <Navbar />
      <main id="main-content" className="flex-grow pt-16 pb-20 md:pb-0">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
      <MobileNavbar />
      </div>
    </MotionConfig>
  );
};

export default App;
