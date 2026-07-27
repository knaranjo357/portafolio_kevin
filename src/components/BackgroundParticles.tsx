import React from 'react';

/**
 * Lightweight ambient background. The previous canvas particle engine added a
 * large runtime cost to every route; this version keeps the visual depth using
 * compositor-friendly CSS only.
 */
const BackgroundParticles: React.FC = () => (
  <div className="ambient-background" aria-hidden="true">
    <span className="ambient-orb ambient-orb-one" />
    <span className="ambient-orb ambient-orb-two" />
    <span className="ambient-orb ambient-orb-three" />
  </div>
);

export default BackgroundParticles;
