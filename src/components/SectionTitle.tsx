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
    <div className={`mb-24 ${center ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="inline-block relative"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-8 text-slate-900 tracking-tighter uppercase leading-[0.9]">
          {title}
        </h2>
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: center ? '60%' : '100%', opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "circOut" }}
          className={`h-2 bg-gradient-to-r from-gold via-gold-light to-transparent rounded-full mb-10 ${center ? 'mx-auto' : ''}`}
        />
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className={`text-xl md:text-2xl text-slate-500 max-w-4xl font-light leading-relaxed text-justify ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;