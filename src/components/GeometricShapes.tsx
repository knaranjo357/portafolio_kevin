import React from 'react';

interface GeometricShapesProps {
  className?: string;
}

const GeometricShapes: React.FC<GeometricShapesProps> = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <div className="absolute -right-[10%] -top-[10%] w-[1000px] h-[1000px] bg-gradient-to-br from-gold/10 via-slate-100/20 to-transparent rounded-full blur-[150px]" />
    <div className="absolute -left-40 top-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100/40 to-transparent rounded-full blur-[120px]" />
    <div className="absolute right-[5%] -bottom-40 w-[700px] h-[700px] bg-slate-50 rounded-full blur-[180px]" />
  </div>
);

export default GeometricShapes;
