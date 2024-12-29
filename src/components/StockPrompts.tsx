import React from 'react';

const stockPrompts = [
  {
    name: "Landing page",
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    name: "Portfolio",
    preview: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2426&auto=format&fit=crop"
  },
  {
    name: "Dashboard",
    preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2420&auto=format&fit=crop"
  },
  {
    name: "E-commerce",
    preview: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2426&auto=format&fit=crop"
  },
  {
    name: "Blog",
    preview: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2426&auto=format&fit=crop"
  }
];

interface StockPromptsProps {
  onSelect: (prompt: string) => void;
}

export const StockPrompts = ({ onSelect }: StockPromptsProps) => {
  return (
    <div className="mt-12 flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stockPrompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onSelect(prompt.name)}
            className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={prompt.preview} 
                alt={prompt.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
              />
            </div>
            <div className="p-3 text-sm font-medium">
              {prompt.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};