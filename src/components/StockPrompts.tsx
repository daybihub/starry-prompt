import React from 'react';

const stockPrompts = [
  "Landing page",
  "Portfolio",
  "Dashboard",
  "E-commerce",
  "Blog"
];

interface StockPromptsProps {
  onSelect: (prompt: string) => void;
}

export const StockPrompts = ({ onSelect }: StockPromptsProps) => {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-white/60 mb-3">Stock Prompts</h3>
      <div className="flex flex-wrap gap-2">
        {stockPrompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onSelect(prompt)}
            className="px-3 py-1.5 text-sm rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};