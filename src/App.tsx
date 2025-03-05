import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

// Components
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Helmet>
        <html lang={i18n.language} />
        <meta name="description" content="Kevin Alejandro Naranjo Reyes - Ingeniero Mecatrónico y Líder de Desarrollo con más de 4 años de experiencia en software, inteligencia artificial y tecnologías innovadoras." />
        <meta name="keywords" content="Kevin Naranjo, Desarrollo de Software, Inteligencia Artificial, Machine Learning, Visión por Computadora, Ingeniero Mecatrónico, Colombia" />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-16 pb-20 md:pb-0">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
      <MobileNavbar />
    </div>
  );
};

export default App;