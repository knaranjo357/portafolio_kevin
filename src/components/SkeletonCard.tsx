import React from 'react';

const SkeletonCard: React.FC = () => (
  <div className="premium-card h-full overflow-hidden border border-slate-100/50 bg-white" aria-hidden="true">
    <div className="h-72 bg-slate-100" />
    <div className="space-y-4 p-10">
      <div className="h-2 w-20 rounded-full bg-slate-100" />
      <div className="h-8 w-full rounded-lg bg-slate-100" />
      <div className="space-y-2">
        <div className="h-4 w-full rounded-md bg-slate-50" />
        <div className="h-4 w-3/4 rounded-md bg-slate-50" />
      </div>
    </div>
  </div>
);

export default SkeletonCard;
