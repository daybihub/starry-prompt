import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="font-bold text-2xl bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
        XTARIFY AI
        <span className="text-xs font-normal text-white/60 ml-2 bg-white/10 px-2 py-0.5 rounded">beta</span>
      </div>
    </div>
  );
};