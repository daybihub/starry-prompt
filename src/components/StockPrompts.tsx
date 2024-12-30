import React from 'react';

const stockPrompts = [
  {
    name: "Landing page",
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    prompt: "Create a modern and responsive landing page with a hero section, features section, testimonials, and a contact form. The design should be minimalist and focus on conversion."
  },
  {
    name: "Portfolio",
    preview: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2426&auto=format&fit=crop",
    prompt: "Design a portfolio website with a grid layout showcasing projects, an about section, skills section, and contact information. Include smooth animations and transitions between sections."
  },
  {
    name: "Dashboard",
    preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2420&auto=format&fit=crop",
    prompt: "Build an admin dashboard with a sidebar navigation, data visualization charts, tables for data display, and a dark/light theme toggle. Include responsive design for mobile devices."
  },
  {
    name: "E-commerce",
    preview: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2426&auto=format&fit=crop",
    prompt: "Create an e-commerce website with a product grid, shopping cart, checkout process, and user authentication. Include filters, search functionality, and product detail pages."
  },
  {
    name: "Blog",
    preview: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2426&auto=format&fit=crop",
    prompt: "Design a blog platform with a clean article layout, categories, tags, author profiles, and a comment system. Include a featured posts section and newsletter signup."
  }
];

interface StockPromptsProps {
  onSelect: (prompt: string) => void;
}

export const StockPrompts = ({ onSelect }: StockPromptsProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Template Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stockPrompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onSelect(prompt.prompt)}
            className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={prompt.preview} 
                alt={prompt.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
              />
            </div>
            <div className="p-3 text-sm font-medium">
              {prompt.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};