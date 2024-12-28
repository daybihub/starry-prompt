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
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <Button
          onClick={onSubmit}
          size="icon"
          className="rounded-full w-14 h-14 relative overflow-hidden transition-all duration-300"
          style={{
            background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
          }}
        >
          <style jsx>{`
            @keyframes gradient {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `}</style>
          <ArrowUp className="h-6 w-6 relative z-10" />
        </Button>
        <Button
          onClick={onEnhance}
          className="rounded-full bg-transparent border border-white/20 hover:bg-white/5 transition-all duration-300"
        >
          Enhance
        </Button>
      </div>
    </div>
  );
};