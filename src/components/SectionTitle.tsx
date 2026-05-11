import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
}) => {
  return (
    <div className={`mb-20 ${center ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="inline-block"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter uppercase">
          {title}
        </h2>
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '100%', opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1.5 bg-gradient-to-r from-gold via-[#f7e08b] to-transparent rounded-full mb-8"
        />
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-xl text-slate-500 max-w-3xl font-light leading-relaxed ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;