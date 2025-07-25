'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      id: 1,
      key: 'botulinica',
      image: 'servicos/botulinica.jpg',

    },
    {
      id: 2,
      key: 'colageno',
      image: 'servicos/colageno.png',
  
    },
    {
      id: 3,
      key: 'hialuronico',
      image: 'servicos/hialuronico.jpg',

    },
    {
      id: 4,
      key: 'skinbooster',
      image: 'servicos/skinbooster.png',
    },
    {
      id: 5,
      key: 'blefaroplastia',
      image: 'servicos/blefaroplastia.png',
    },
    {
      id: 6,
      key: 'plasma',
      image: 'servicos/plasma.png',
    },
    {
      id: 8,
      key: 'melasma',
      image: 'servicos/melasma.jpg',
    },
    {
      id: 9,
      key: 'tricologia',
      image: 'servicos/tricologia.png',
    },
    {
      id: 10,
      key: 'gordura',
      image: 'servicos/gordura.jpg',
  
    },
  ];

  return (
    <section id='services' className='py-20 bg-P2Gray/30'>
      <div className='maxW'>
        <h2 className='font-medium tracking-widest text-center uppercase'>
          {t('subtitle')}
        </h2>
        <h1 className='font-semibold text-4xl mt-4 text-center'>
          {t('title')}
        </h1>
        <p className='text-center mt-2'>{t('description')}</p>

        <article className='flex flex-wrap gap-y-10 gap-5 mt-20 justify-center px-4'>
          {services.map((service, index) => (
            <div
              key={service.id}
              className='flex flex-col items-center text-center lg:max-w-[400px]'
            >
              <Link
                href={`/services/${service.key}`}
                locale={undefined}
                className='relative cursor-pointer group overflow-hidden rounded-xl shadow-md lg:w-[400px]'
              >
                <img
                  className='w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50'
                  src={service.image}
                  alt={t(`treatments.${service.key}`)}
                />

                {/* Overlay com indicador de "Saiba Mais" */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center'>
                  <div className='opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0'>
                    <div className='bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg'>
                      <span className='text-black font-semibold text-sm tracking-wide uppercase'>
                        Saiba Mais
                      </span>
                    </div>
                  </div>
                </div>

                {/* Ícone de seta no canto superior direito */}
                <div className='absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110'>
                  <svg 
                    className='w-4 h-4 text-gray-700' 
                    fill='none' 
                    stroke='currentColor' 
                    viewBox='0 0 24 24'
                  >
                    <path 
                      strokeLinecap='round' 
                      strokeLinejoin='round' 
                      strokeWidth={2} 
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' 
                    />
                  </svg>
                </div>

              </Link>

              <div className='flex gap-1 items-center mt-2'>
                <h1 className='text-5xl font-bold text-BrowP'>
                  {String(index + 1).padStart(2, '0')}
                </h1>
                <div className='flex flex-col items-start'>
                  <p className='text-md font-medium tracking-widest uppercase'>
                    {t(`treatments.${service.key}`)}
                  </p>
                  {/* Texto sutil indicando mais informações */}
                  <span className='text-xs text-gray-500 mt-1 italic'>
                    Clique para mais detalhes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}