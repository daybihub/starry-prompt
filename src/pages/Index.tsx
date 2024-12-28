import React, { useState } from 'react';
import { Logo } from '@/components/Logo';
import { PromptInput } from '@/components/PromptInput';
import { StockPrompts } from '@/components/StockPrompts';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin } from 'lucide-react';

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
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-green-500/30 via-green-500/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative">
        <header className="flex justify-between items-center">
          <Logo />
          <Button variant="outline" className="rounded-full bg-white hover:bg-white/90 text-black border-0">
            Login
          </Button>
        </header>

        <h1 className="text-5xl md:text-7xl font-light text-center mt-12 mb-16">
          <span className="font-mono text-white/60">Idea</span>{" "}
          <span className="font-serif text-white/60">to</span>{" "}
          <span className="font-sans text-white/60">Web</span>,{" "}
          <span className="font-bold text-white">FAST...</span>
        </h1>

        <main className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
          <PromptInput
            value={prompt}
            onChange={setPrompt}
            onSubmit={handleSubmit}
            onEnhance={handleEnhance}
          />
          <StockPrompts onSelect={setPrompt} />
        </main>

        {/* Social Media Buttons */}
        <div className="fixed bottom-8 right-8 flex gap-4">
          <Button size="icon" variant="outline" className="rounded-full w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10">
            <Facebook className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="outline" className="rounded-full w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10">
            <Linkedin className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;