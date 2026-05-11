import React from 'react';
import { motion } from 'framer-motion';

const SkeletonCard: React.FC = () => {
  return (
    <div className="premium-card h-full bg-white flex flex-col border border-slate-100/50 overflow-hidden">
      <div className="relative h-72 bg-slate-100 overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full h-full"
        />
      </div>
      <div className="p-10 space-y-4">
        <div className="h-2 w-20 bg-slate-100 rounded-full" />
        <div className="h-8 w-full bg-slate-100 rounded-lg" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-slate-50 rounded-md" />
          <div className="h-4 w-3/4 bg-slate-50 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
