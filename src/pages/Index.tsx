import React, { useState } from 'react';
import { Logo } from '@/components/Logo';
import { PromptInput } from '@/components/PromptInput';
import { StockPrompts } from '@/components/StockPrompts';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Sun, Moon } from 'lucide-react';

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const [isDark, setIsDark] = useState(true);
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

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen p-4 md:p-8 relative overflow-hidden transition-colors duration-300 ${isDark ? 'dark bg-black' : 'bg-white'}`}>
      {/* Background squares */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10 border border-white/20 dark:border-white/20 light:border-black/20"
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

      {/* Gradient */}
      <div className={`absolute -top-[300px] -left-[300px] w-[1000px] h-[1000px] rounded-full blur-3xl pointer-events-none transition-all duration-300
        ${isDark ? 'bg-gradient-to-br from-purple-500/30 via-purple-500/20 to-transparent' : 'bg-gradient-to-br from-sky-300/30 via-sky-200/20 to-transparent'}`} />

      <div className="max-w-4xl mx-auto relative">
        <header className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="outline" className="rounded-full bg-white hover:bg-white/90 text-black border-0">
              Login
            </Button>
          </div>
        </header>

        <h1 className="text-[6rem] font-light text-center mt-8 mb-8">
          <span className="font-mono text-white/60 dark:text-white/60 light:text-black/60">Idea</span>{" "}
          <span className="font-serif text-white/60 dark:text-white/60 light:text-black/60">to</span>{" "}
          <span className="font-sans text-white/60 dark:text-white/60 light:text-black/60">Web</span>,{" "}
          <span className="font-bold dark:text-white light:text-black">FAST...</span>
        </h1>

        <main className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
          <PromptInput
            value={prompt}
            onChange={setPrompt}
            onSubmit={handleSubmit}
            onEnhance={handleEnhance}
          />
        </main>

        <StockPrompts onSelect={setPrompt} />

        {/* Social Media Buttons */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-4">
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