import React from 'react';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      id: 1,
      key: 'botulinica',
      image: 'servicos/botulinica.jpg',
      description: t('descriptions.botulinica'),
    },
    {
      id: 2,
      key: 'colageno',
      image: 'servicos/colageno.png',
      description: t('descriptions.colageno'),
    },
    {
      id: 3,
      key: 'hialuronico',
      image: 'servicos/hialuronico.jpg',
      description: t('descriptions.hialuronico'),
    },
    {
      id: 4,
      key: 'skinbooster',
      image: 'servicos/skinbooster.png',
      description: t('descriptions.skinbooster'),
    },
    {
      id: 5,
      key: 'blefaroplastia',
      image: 'servicos/blefaroplastia.png',
      description: t('descriptions.blefaroplastia'),
    },
    {
      id: 6,
      key: 'plasma',
      image: 'servicos/plasma.png',
      description: t('descriptions.plasma'),
    },
    {
      id: 8,
      key: 'melasma',
      image: 'servicos/melasma.jpg',
      description: t('descriptions.melasma'),
    },
    {
      id: 9,
      key: 'tricologia',
      image: 'servicos/tricologia.png',
      description: t('descriptions.tricologia'),
    },
    {
      id: 10,
      key: 'gordura',
      image: 'servicos/gordura.jpg',
      description: t('descriptions.gordura'),
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
        <p className='text-center mt-2'>
          {t('description')}
        </p>

        <article className='flex flex-wrap gap-y-10 gap-5 mt-20 justify-center'>
          {services.map((service, index) => (
            <div key={service.id} className='flex flex-col items-center text-center max-w-[400px]'>
              <div className='relative w-[400px] group overflow-hidden rounded-xl shadow-md'>
                <img
                  className='w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50'
                  src={service.image}
                  alt={t(`treatments.${service.key}`)}
                />
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <p className='text-white text-center px-6 py-4 text-lg font-medium leading-relaxed'>
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className='flex gap-1 items-center mt-2'>
                <h1 className='text-5xl font-bold text-BrowP'>
                  {String(index + 1).padStart(2, '0')}
                </h1>
                <p className='text-md font-medium tracking-widest text-BrowP/70 uppercase'>
                  {t(`treatments.${service.key}`)}
                </p>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}