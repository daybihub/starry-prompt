import React, { useState } from 'react';
import { Logo } from '@/components/Logo';
import { PromptInput } from '@/components/PromptInput';
import { StockPrompts } from '@/components/StockPrompts';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt first",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Success",
      description: "Prompt submitted successfully!",
    });
  };

  const handleEnhance = () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt to enhance",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Enhancing",
      description: "Making your prompt even better...",
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-8 relative overflow-hidden bg-black">
      {/* Background squares */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10 border border-white/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Green gradient */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-green-500/20 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative">
        <header className="flex flex-col items-start">
          <Logo />
          <h1 className="text-2xl md:text-3xl font-light text-white/60 text-center w-full mt-4">
            Idea to Web, <span className="text-white">fast...</span>
          </h1>
        </header>

        <main className="glass-panel rounded-xl p-6">
          <PromptInput
            value={prompt}
            onChange={setPrompt}
            onSubmit={handleSubmit}
            onEnhance={handleEnhance}
          />
          <StockPrompts onSelect={setPrompt} />
        </main>
      </div>
    </div>
  );
};

export default Index;