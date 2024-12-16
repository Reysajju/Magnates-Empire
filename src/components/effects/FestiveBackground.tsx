import React from 'react';

export default function FestiveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/50 to-navy-950/50" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, transparent 90%, rgba(62, 184, 255, 0.1))`,
        backgroundSize: '100px 100px'
      }} />
    </div>
  );
}