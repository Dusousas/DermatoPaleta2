import React from 'react';
import { useTranslations } from 'next-intl';
import Drag from './subc/Drag';

export default function Portfolio() {
  const t = useTranslations('portfolio');

  return (
    <section className='py-20 bg-white '>
      <div className='maxW flex flex-col gap-10 justify-center items-center lg:flex-row'>
        <Drag />

        <article>
          <h2 className="text-P2Brown font-medium tracking-widest text-center uppercase lg:text-left">
            {t('subtitle')}
          </h2>
          <h1 className='text-BlueS font-semibold text-4xl mt-2 text-center uppercase lg:text-left'>
            {t('title')}
          </h1>
          <p className='text-P2Brown text-center font-semibold mt-2 lg:text-left'>
            {t('highlight')}
          </p>
          <p className='text-P2Brown text-center mt-2 lg:text-left'>
            {t('description')}
          </p>

        </article>
      </div>
    </section>
  );
}
