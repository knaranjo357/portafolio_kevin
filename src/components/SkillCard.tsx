import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  color?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  icon,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="premium-card p-10 group bg-white"
    >
      <div className="mb-8 p-4 bg-slate-50 border border-slate-100 rounded-2xl inline-block text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight group-hover:text-gold transition-colors">{title}</h3>
      <p className="text-slate-500 leading-relaxed font-light">{description}</p>
      
      {/* Decorative accent */}
      <div className="mt-8 h-1 w-12 bg-gradient-to-r from-gold to-transparent rounded-full opacity-30 group-hover:w-24 transition-all duration-500"></div>
    </motion.div>
  );
};

export default SkillCard;