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
    es: "https://drive.google.com/file/d/1_aLJnccl0iJXmd6eEvIXzq27Pb2dGXVd/view?usp=sharing",
    en: "https://drive.google.com/file/d/1fmGcZzM3vxNya_f5cJrwL5ZDMS-kavRR/view?usp=sharing"
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
          className="absolute z-50 mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <a
            href={cvLinks.es}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-lg">🇪🇸</span>
            <span>{t('about.cvSpanish')}</span>
          </a>
          <a
            href={cvLinks.en}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-lg">🇺🇸</span>
            <span>{t('about.cvEnglish')}</span>
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default CVDownloadButton;