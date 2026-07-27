import React, { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '', eager = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`lazy-image relative overflow-hidden bg-slate-100 ${className}`}>
      {!isLoaded && !error && <div className="lazy-image-shimmer absolute inset-0 z-10" />}

      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        width="1200"
        height="800"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-[opacity,transform,filter] duration-300 ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105 grayscale'
        } ${className}`}
      />

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400 text-xs">
          Imagen no disponible
        </div>
      )}
    </div>
  );
};

export default LazyImage;
