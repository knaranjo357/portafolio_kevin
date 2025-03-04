import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MobileNavbar: React.FC = () => {
  const { t } = useTranslation();
  
  const navItems = [
    { path: '/', icon: <Home size={20} />, label: t('nav.home') },
    { path: '/about', icon: <User size={20} />, label: t('nav.about') },
    { path: '/skills', icon: <Code size={20} />, label: t('nav.skills') },
    { path: '/projects', icon: <Briefcase size={20} />, label: t('nav.projects') },
    { path: '/contact', icon: <MessageSquare size={20} />, label: t('nav.contact') },
  ];

  return (
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
          >
            {item.icon}
            <span className="mt-1">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </motion.nav>
  );
};

export default MobileNavbar;