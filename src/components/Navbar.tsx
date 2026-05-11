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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-2xl border-b border-slate-100 py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Brand Name */}
          <NavLink
            to="/"
            className="group"
            aria-label="Kevin Naranjo"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <img src="/logo.png" alt="KN Logo" className="h-10 w-10 object-contain rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-slate-900 text-2xl font-black tracking-tighter hidden lg:block">
                KEVIN<span className="text-gold">NARANJO</span>
              </span>
            </motion.div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-8"
            >
              <div className="flex items-center bg-slate-50 backdrop-blur-3xl rounded-full p-1 border border-slate-100 shadow-sm">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => `
                      relative px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500
                      ${isActive 
                        ? 'text-white bg-slate-900 shadow-xl' 
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                      }
                    `}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="mx-2 w-px h-4 bg-slate-200"></div>
                <LanguageSwitcher />
              </div>

              {/* WhatsApp Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://wa.me/573175816061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-50 backdrop-blur-3xl border border-slate-100 text-slate-900 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-gold hover:text-white hover:border-gold transition-all duration-500 shadow-sm"
                >
                  {t('home.whatsapp')}
                </a>
              </motion.div>
            </motion.div>
          </div>


          {/* Mobile Menu Button - Only visible on tablet, not on mobile */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:hidden sm:block hidden text-slate-900 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden sm:block hidden bg-white/95 backdrop-blur-3xl border-b border-slate-100"
          >
            <div className="container mx-auto px-4 py-12">
              <ul className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block py-4 px-6 rounded-2xl transition-all duration-500 text-sm font-black uppercase tracking-widest ${
                          isActive
                            ? 'bg-slate-900 text-white shadow-xl'
                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: navLinks.length * 0.1,
                  }}
                >
                  <a
                    href="https://wa.me/573175816061"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-5 px-6 bg-slate-50 border border-slate-100 text-slate-900 rounded-2xl text-center font-black uppercase tracking-widest hover:bg-gold hover:text-white hover:border-gold transition-all duration-500 shadow-sm"
                    aria-label="WhatsApp"
                  >
                    {t('home.whatsapp')}
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