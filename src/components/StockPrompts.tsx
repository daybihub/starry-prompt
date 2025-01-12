import React from 'react';

const stockPrompts = [
  {
    name: "Página de inicio",
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    prompt: "Crea una página de inicio moderna y responsiva con una sección hero, sección de características, testimonios y un formulario de contacto. El diseño debe ser minimalista y enfocado en la conversión."
  },
  {
    name: "Portafolio",
    preview: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2426&auto=format&fit=crop",
    prompt: "Diseña un sitio web de portafolio con un diseño en cuadrícula que muestre proyectos, una sección sobre mí, sección de habilidades e información de contacto. Incluye animaciones suaves y transiciones entre secciones."
  },
  {
    name: "Dashboard",
    preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2420&auto=format&fit=crop",
    prompt: "Construye un panel de administración con navegación lateral, gráficos de visualización de datos, tablas para mostrar datos y un selector de tema claro/oscuro. Incluye diseño responsivo para dispositivos móviles."
  },
  {
    name: "E-commerce",
    preview: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2426&auto=format&fit=crop",
    prompt: "Crea un sitio web de comercio electrónico con una cuadrícula de productos, carrito de compras, proceso de pago y autenticación de usuarios. Incluye filtros, funcionalidad de búsqueda y páginas de detalles de productos."
  },
  {
    name: "Blog",
    preview: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2426&auto=format&fit=crop",
    prompt: "Diseña una plataforma de blog con un diseño limpio de artículos, categorías, etiquetas, perfiles de autores y un sistema de comentarios. Incluye una sección de publicaciones destacadas y registro de boletín."
  }
];

interface StockPromptsProps {
  onSelect: (prompt: string) => void;
}

export const StockPrompts = ({ onSelect }: StockPromptsProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Galería de Plantillas</h2>
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