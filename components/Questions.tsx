import React from 'react';
import { useTranslations } from 'next-intl';

export default function Questions() {
  const t = useTranslations('questions');

  return (
    <section id='questions' className='bg-P2Gray/30 py-20'>
      <div className='maxW'>
        <h2 className='font-medium tracking-widest text-center uppercase'>
          {t('subtitle')}
        </h2>
        <h1 className='font-semibold text-4xl mt-4 text-center'>
          {t('title')}
        </h1>

        <article className='mt-10 max-w-[1000px] mx-auto'>
          {Array.from({ length: 5 }).map((_, i) => (
            <details key={i} className={i > 0 ? 'mt-4' : ''}>
              <summary className="text-P2BlueD border border-P2BlueD rounded-t-xl cursor-pointer p-4 font-semibold">
                {t(`items.item${i + 1}.q`)}
              </summary>
              <p className="text-P2BlueD font-Poppins border-x border-b border-P2BlueD cardLinear p-4">
                {t(`items.item${i + 1}.a`)}
              </p>
            </details>
          ))}
        </article>
      </div>
    </section>
  );
}
