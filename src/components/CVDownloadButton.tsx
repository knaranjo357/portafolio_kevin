import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CVDownloadButtonProps {
  className?: string;
  showLabel?: boolean;
}

const CVDownloadButton: React.FC<CVDownloadButtonProps> = ({ 
  className = "", 
  showLabel = true 
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const cvLinks = {
    es: "https://drive.google.com/file/d/1fmGcZzM3vxNya_f5cJrwL5ZDMS-kavRR/view?usp=sharing",
    en: "https://drive.google.com/file/d/1_aLJnccl0iJXmd6eEvIXzq27Pb2dGXVd/view?usp=sharing"
  };

  return (
    <div className="relative">
      <motion.button
        onClick={toggleDropdown}
        className={`flex items-center gap-2 ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download size={18} />
        {showLabel && <span>{t('home.downloadCV')}</span>}
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-50 mt-4 w-56 bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100"
        >
          <a
            href={cvLinks.es}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 text-slate-500 hover:text-gold hover:bg-slate-50 transition-all duration-300 border-b border-slate-50"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-xs font-black text-gold">ES</span>
            <span className="font-bold uppercase tracking-widest text-xs">{t('about.cvSpanish')}</span>
          </a>
          <a
            href={cvLinks.en}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 text-slate-500 hover:text-gold hover:bg-slate-50 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-xs font-black text-gold">EN</span>
            <span className="font-bold uppercase tracking-widest text-xs">{t('about.cvEnglish')}</span>
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default CVDownloadButton;