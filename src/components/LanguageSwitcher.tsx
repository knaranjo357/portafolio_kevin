import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('preferredLanguage', lng);
  };

  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <button 
        className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-white transition-colors"
        aria-label="Change language"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">{i18n.language === 'en' ? 'EN' : 'ES'}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <button
          onClick={() => changeLanguage('es')}
          className={`w-full text-left px-4 py-2 text-sm ${i18n.language === 'es' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-slate-700 hover:bg-slate-50'}`}
        >
          🇪🇸 {t('language.es')}
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`w-full text-left px-4 py-2 text-sm ${i18n.language === 'en' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-slate-700 hover:bg-slate-50'}`}
        >
          🇺🇸 {t('language.en')}
        </button>
      </div>
    </motion.div>
  );
};

export default LanguageSwitcher;