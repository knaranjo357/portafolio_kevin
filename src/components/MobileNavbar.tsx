import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const MobileNavbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language.toLowerCase().startsWith('en');
  
  const navItems = [
    { path: '/', icon: <Home size={18} />, label: t('nav.home'), shortLabel: t('nav.home') },
    { path: '/about', icon: <User size={18} />, label: t('nav.about'), shortLabel: t('nav.about') },
    { path: '/skills', icon: <Code size={18} />, label: t('nav.skills'), shortLabel: isEnglish ? 'Services' : 'Servicios' },
    { path: '/projects', icon: <Briefcase size={18} />, label: t('nav.projects'), shortLabel: isEnglish ? 'Cases' : 'Casos' },
    { path: '/contact', icon: <MessageSquare size={18} />, label: t('nav.contact'), shortLabel: t('nav.contact') },
  ];

  return (
    <>
      {/* Language Switcher for Mobile */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <LanguageSwitcher />
      </div>

      {/* Mobile Navigation Bar */}
      <motion.nav 
        className="mobile-nav md:hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-5">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `mobile-nav-item ${isActive ? 'active' : ''}`
              }
              aria-label={item.label}
            >
              {item.icon}
              <span className="mt-1">{item.shortLabel}</span>
            </NavLink>
          ))}
        </div>
      </motion.nav>
    </>
  );
};

export default MobileNavbar;
