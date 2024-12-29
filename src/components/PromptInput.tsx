import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUp } from 'lucide-react';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onEnhance: () => void;
}

export const PromptInput = ({ value, onChange, onSubmit, onEnhance }: PromptInputProps) => {
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-40 bg-secondary/30 backdrop-blur-sm rounded-xl p-4 resize-none border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all focus:border-[#ff00ea] focus:shadow-[0_0_30px_-5px_#ff00ea] duration-300"
        placeholder="Enter your prompt here..."
      />
      <div className="absolute bottom-4 right-4 flex flex-col items-center gap-2">
        <Button
          onClick={onSubmit}
          size="icon"
          className="rounded-full w-16 h-16 relative overflow-hidden transition-all duration-300"
          style={{
            background: 'linear-gradient(-45deg, #9333ea, #3b82f6, #38bdf8, #4ade80, #22c55e)',
            backgroundSize: '400% 400%',
            animation: 'gradient 2s ease infinite',
          }}
        >
          <ArrowUp className="h-8 w-8 relative z-10" />
        </Button>
        <Button
          onClick={onEnhance}
          className="rounded-full bg-transparent border border-white/20 hover:bg-white/5 transition-all duration-300"
        >
          Enhance
        </Button>
      </div>
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};