import React from 'react';

const PageLoader: React.FC = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 backdrop-blur-sm" role="status" aria-label="Loading">
    <div className="flex items-center gap-4 rounded-full border border-slate-100 bg-white px-6 py-4 shadow-lg">
      <span className="h-3 w-3 rounded-full bg-gold" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">Loading</span>
    </div>
  </div>
);

export default PageLoader;
