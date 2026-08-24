import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { calculateExperience } from '../utils/experienceCalculator';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.skills'), path: '/skills' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/kevin0naranjo',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/kevin-alejandro-naranjo-reyes-2573351a2/',
    },
  ];

  return (
    <footer className="bg-slate-50 text-slate-900 pt-24 pb-12 relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center gap-4"
            >
              <NavLink to="/" className="text-3xl font-black tracking-tighter uppercase group">
                KEVIN<span className="text-gold group-hover:text-slate-900 transition-colors">NARANJO</span>
              </NavLink>
              <LanguageSwitcher />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-slate-500 text-lg max-w-md font-light leading-relaxed mb-8"
            >
              {t('footer.description', { count: Math.floor(calculateExperience()) })}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-slate-900 text-xs font-black uppercase tracking-widest mb-8">{t('footer.navigation')}</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-slate-500 hover:text-gold text-sm font-bold uppercase tracking-wider transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-900 text-xs font-black uppercase tracking-widest mb-8">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:alejandronaranjo357@gmail.com" className="break-all text-sm font-bold text-slate-900 transition-colors hover:text-gold">alejandronaranjo357@gmail.com</a>
              </li>
              <li>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">WhatsApp</p>
                <a href="https://wa.me/573175816061?text=Hola%20Kevin%2C%20quiero%20conversar%20sobre%20un%20proyecto." target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-gold text-sm font-bold transition-colors">+57 317 5816061</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
            © {currentYear} Kevin Naranjo. {t('footer.rights')}
          </p>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t('footer.builtWith')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
