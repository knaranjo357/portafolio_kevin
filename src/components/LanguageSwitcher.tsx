import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language.toLowerCase().startsWith('en') ? 'en' : 'es';

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('preferredLanguage', newLang);

    const url = new URL(window.location.href);
    if (newLang === 'en') {
      url.searchParams.set('lang', 'en');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  };

  const switchLabel = currentLanguage === 'en' ? 'Switch site to Spanish' : 'Cambiar el sitio a inglés';

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <button 
        type="button"
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-100 text-slate-900 hover:bg-white hover:border-gold transition-all duration-300 shadow-sm group active:scale-95"
        aria-label={switchLabel}
        title={switchLabel}
      >
        <Globe size={16} className="text-gold group-hover:rotate-12 transition-transform duration-500" />
        <span className="text-[10px] font-black uppercase tracking-widest">{currentLanguage === 'en' ? 'ES' : 'EN'}</span>
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher;
