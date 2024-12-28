import React from 'react';

const stockPrompts = [
  "Create a modern landing page for a SaaS product",
  "Design a minimalist portfolio website",
  "Build a dashboard with analytics charts",
  "Make an e-commerce product page",
  "Design a blog homepage with featured posts"
];

interface StockPromptsProps {
  onSelect: (prompt: string) => void;
}

export const StockPrompts = ({ onSelect }: StockPromptsProps) => {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-muted-foreground mb-3">Stock Prompts</h3>
      <div className="grid gap-2">
        {stockPrompts.map((prompt, index) => (
          <div
            key={index}
            onClick={() => onSelect(prompt)}
            className="prompt-item"
          >
            {prompt}
          </div>
        ))}
      </div>
    </div>
  );
};