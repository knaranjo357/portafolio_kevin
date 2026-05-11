import React from 'react';
import { motion } from 'framer-motion';

const PageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-xl">
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-2 border-slate-100 border-t-gold"
        />
        
        {/* Inner pulsing logo/element */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-8 h-8 bg-gold rounded-lg rotate-45 shadow-lg shadow-gold/20" />
        </motion.div>
        
        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.4em] text-gold whitespace-nowrap"
        >
          Loading Experience
        </motion.p>
      </div>
    </div>
  );
};

export default PageLoader;
