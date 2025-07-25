// components/subc/single/ServiceImages.tsx
import React from 'react';

export default function ServiceImages() {
  return (
    <div className="maxW">
      <article className="flex flex-col gap-10 justify-center items-center mt-10 lg:flex-row">
        <img 
          className="lg:w-[30%] h-[500px] object-cover" 
          src="/after-1.JPG" 
          alt="Resultado do tratamento - Depois" 
        />
        <img 
          className="lg:w-[30%] h-[500px] object-cover" 
          src="/before-1.JPG" 
          alt="Antes do tratamento" 
        />
        <img 
          className="lg:w-[30%] h-[500px] object-cover" 
          src="/after-1.JPG" 
          alt="Resultado do tratamento - Depois" 
        />
      </article>
    </div>
  );
}