import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {/* Shimmer effect while loading */}
      <AnimatePresence>
        {!isLoaded && !error && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10"
          >
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 scale-100 grayscale-0' : 'opacity-0 scale-110 grayscale'
        } ${className}`}
      />

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400 text-xs">
          Image not found
        </div>
      )}
    </div>
  );
};

export default LazyImage;
