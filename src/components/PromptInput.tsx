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
        className="w-full h-40 bg-secondary/30 backdrop-blur-sm rounded-xl p-4 resize-none border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
        placeholder="Enter your prompt here..."
      />
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <Button
          onClick={onSubmit}
          size="icon"
          className="rounded-full bg-gradient-to-r from-purple-500/80 to-blue-500/80 hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
        <Button
          onClick={onEnhance}
          className="enhance-button"
        >
          Enhance
        </Button>
      </div>
    </div>
  );
};