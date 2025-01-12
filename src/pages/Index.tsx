import React, { useState } from 'react';
import { Logo } from '@/components/Logo';
import { PromptInput } from '@/components/PromptInput';
import { StockPrompts } from '@/components/StockPrompts';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Globe2, Code2, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Por favor ingresa un prompt primero",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "¡Éxito!",
      description: "¡Prompt enviado exitosamente!",
    });
  };

  const handleEnhance = () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Por favor ingresa un prompt para mejorar",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Mejorando",
      description: "Haciendo tu prompt aún mejor...",
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-8 relative overflow-hidden bg-[#030711]">
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

      <div className="max-w-6xl mx-auto relative">
        <header className="flex justify-between items-center">
          <Logo />
          <Button variant="outline" className="rounded-full bg-white hover:bg-white/90 text-black border-0">
            Iniciar Sesión
          </Button>
        </header>

        <div className="mt-12 mb-4">
          <h1 className="text-[6rem] font-light text-center">
            <span className="font-mono text-white/60">Idea</span>{" "}
            <span className="font-serif text-white/60">a</span>{" "}
            <span className="font-sans text-white/60">Web</span>,{" "}
            <span className="font-bold text-white">RÁPIDO...</span>
          </h1>
          <p className="text-gray-400 text-xl text-center mb-8">
            Crea aplicaciones web hermosas y modernas a la velocidad del pensamiento.
          </p>
        </div>

        <main className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
          <PromptInput
            value={prompt}
            onChange={setPrompt}
            onSubmit={handleSubmit}
            onEnhance={handleEnhance}
          />
        </main>

        <StockPrompts onSelect={setPrompt} />

        {/* Apoyado Por Section - Updated Layout */}
        <section className="mt-20">
          <div className="flex items-center justify-center gap-8">
            <h2 className="text-2xl font-semibold text-white">Apoyado por:</h2>
            <div className="flex items-center gap-8">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src="https://www.co.dev/images/y_combinator_logo.png"
                  alt={`Partner ${i}`}
                  className="h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Uso Section - Enhanced Design */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-white text-center mb-12">Casos de Uso</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-panel border-0 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe2 className="h-6 w-6 text-green-500" />
                  <CardTitle className="text-xl">Páginas Web</CardTitle>
                </div>
                <CardDescription>
                  Crea páginas web impresionantes y responsivas con solo un prompt de texto. Nuestra IA entiende tu visión y la convierte en realidad.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-panel border-0 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Code2 className="h-6 w-6 text-blue-500" />
                  <CardTitle className="text-xl">Aplicaciones Web</CardTitle>
                </div>
                <CardDescription>
                  Construye aplicaciones web complejas potenciadas por IA. Desde e-commerce hasta dashboards, da vida a tus ideas instantáneamente.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-panel border-0 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Cloud className="h-6 w-6 text-purple-500" />
                  <CardTitle className="text-xl">Soluciones de Hosting</CardTitle>
                </div>
                <CardDescription>
                  Despliega tus aplicaciones creadas con XTARIFY con nuestro servicio de hosting confiable. Escala sin esfuerzo según tus necesidades.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

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