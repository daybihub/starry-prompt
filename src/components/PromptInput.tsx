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
        className="w-full h-40 bg-black/90 backdrop-blur-sm rounded-xl p-4 pr-24 resize-none border-2 border-transparent focus:outline-none transition-all duration-300 scrollbar-custom focus:animate-[rotatingBorder_2s_linear_infinite]"
        placeholder="Enter your prompt here..."
        style={{
          borderImage: 'linear-gradient(0deg, #09cbca 50%, #ff3e81 50%) 1',
        }}
      />
      <div className="absolute bottom-4 right-4 flex flex-col items-center gap-2">
        <Button
          onClick={onSubmit}
          size="icon"
          className="rounded-[20px] w-16 h-16 relative overflow-hidden transition-all duration-300"
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