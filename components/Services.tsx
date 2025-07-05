import React from 'react';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    { id: 1, key: 'rhinoplasty', image: '/service-2.png' },
    { id: 2, key: 'liposuction', image: '/service-1.png' },
    { id: 3, key: 'botox', image: '/service-2.png' },
    { id: 4, key: 'lipFiller', image: '/service-1.png' },
    { id: 5, key: 'lipFiller', image: '/service-1.png' },
    { id: 6, key: 'lipFiller', image: '/service-2.png' },
    { id: 7, key: 'lipFiller', image: '/service-1.png' },
    { id: 8, key: 'lipFiller', image: '/service-2.png' },
  ];

  return (
    <section id='services' className='py-20 bg-P2Gray/30'>
      <div className='maxW'>
        <h2 className="font-medium tracking-widest text-center uppercase">
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
            <div key={service.id} className='flex flex-col items-center'>
              <img
                className='w-[380px] transition-transform duration-300 hover:scale-105 rounded-xl shadow-md'
                src={service.image}
                alt={t(`treatments.${service.key}`)}
              />
              <div className='flex gap-1 items-center mt-2'>
                <h1 className='text-7xl font-bold text-BrowP'>
                  {String(index + 1).padStart(2, '0')}
                </h1>
                <p className='text-lg font-medium tracking-widest text-BrowP/70 uppercase'>
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
