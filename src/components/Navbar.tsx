import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.skills'), path: '/skills' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 hidden md:block ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Brand Name */}
          <NavLink
            to="/"
            className="text-xl font-bold"
            aria-label="Kevin Naranjo"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent text-2xl font-bold">
                  Kevin<span className="font-extrabold">Naranjo</span>
                </span>
                <motion.span 
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-full"
                  initial={{ width: 0, left: '50%' }}
                  animate={{ width: '100%', left: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                />
              </span>
            </motion.div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
            >
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1.5 mr-6 shadow-lg border border-slate-200/50">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => `
                      relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-in-out
                      ${isActive 
                        ? 'text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-md' 
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/80'
                      }
                    `}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <LanguageSwitcher />
              </div>

              {/* WhatsApp Button */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://wa.me/573175816061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2.5 rounded-full font-medium inline-flex items-center shadow-md hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <span className="relative z-10">WhatsApp</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute -inset-px rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-green-400"></span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Only visible on tablet, not on mobile */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:hidden sm:block hidden text-slate-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Navigation Dropdown (for tablet) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden sm:block hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-3">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block py-2.5 px-4 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-600/10 to-violet-600/10 text-blue-600 font-medium'
                            : 'text-slate-800 hover:bg-slate-100'
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: navLinks.length * 0.1,
                  }}
                >
                  <a
                    href="https://wa.me/573175816061"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2.5 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg text-center shadow-md"
                    aria-label="WhatsApp"
                  >
                    WhatsApp
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;