import React from 'react';
import { useTranslations } from 'next-intl';

export default function LineCta() {
  const t = useTranslations('lineCta');

  return (
    <section className='bg-P2BlueD py-10'>
      <div className='maxW'>
        <p className='text-center text-white text-2xl uppercase font-semibold'>
          {t('text')}
        </p>
        <div className='mt-6 flex justify-center'>
          <a className='bg-white text-P2BlueD px-6 py-2 font-medium uppercase' href=''>
            {t('button')}
          </a>
        </div>
      </div>
    </section>
  );
}
