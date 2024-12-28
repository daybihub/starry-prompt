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
    // Handle submission
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
    // Handle enhancement
    toast({
      title: "Enhancing",
      description: "Making your prompt even better...",
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-2">
          <Logo />
          <h1 className="text-2xl md:text-3xl font-light text-muted-foreground">
            Idea to Web, <span className="text-foreground">fast...</span>
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