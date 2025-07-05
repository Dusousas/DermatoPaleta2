import React from 'react';
import { useTranslations } from 'next-intl';
import Drag from './subc/Drag';

export default function Portfolio() {
  const t = useTranslations('portfolio');

  return (
    <section className='py-32 bg-white '>
      <div className='maxW flex flex-col gap-10 justify-center items-center lg:flex-row'>
        <Drag />

        <article>
          <h2 className="text-BrowP font-medium tracking-widest text-center uppercase lg:text-left">
            {t('subtitle')}
          </h2>
          <h1 className='text-BlueS font-semibold text-4xl mt-2 text-center uppercase lg:text-left'>
            {t('title')}
          </h1>
          <p className='text-BrowP text-center font-semibold mt-2 lg:text-left'>
            {t('highlight')}
          </p>
          <p className='text-BrowP text-center mt-2 lg:text-left'>
            {t('description')}
          </p>

          <div className='mt-6 flex justify-center lg:justify-start'>
            <a className='bg-BrowP text-white px-6 py-2 font-medium' href=''>
              {t('button')}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
