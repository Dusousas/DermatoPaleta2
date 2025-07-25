// components/subc/single/ServiceHeader.tsx
import React from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface ServiceHeaderProps {
  slug: string;
}

// Função helper para verificar se uma tradução existe
const getTranslationIfExists = (t: any, key: string): string | null => {
  try {
    const translation = t(key);
    return translation && translation !== key ? translation : null;
  } catch (error) {
    return null;
  }
};

export default function ServiceHeader({ slug }: ServiceHeaderProps) {
  const t = useTranslations();
  
  // Verificar se existe a descrição 2
  const description2 = getTranslationIfExists(t, `services.descriptions.${slug}2`);

  return (
    <div className="maxW">
      <article className="absolute top-[150px] right-4 z-10">
        <LanguageSwitcher />
      </article>
      
      <h1 className="text-center text-4xl uppercase font-bold">
        {t(`services.treatments.${slug}`)}
      </h1>

      <p className="text-center mt-4">
        {t(`services.descriptions.${slug}`)}
      </p>

      {/* Renderizar condicionalmente a descrição 2 */}
      {description2 && (
        <p className="text-center mt-2">
          {description2}
        </p>
      )}
    </div>
  );
}