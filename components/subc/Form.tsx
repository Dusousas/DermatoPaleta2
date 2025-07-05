'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function Form() {
  const t = useTranslations('form');

  return (
    <section className='py-20 px-6 lg:px-32'>
      <form>
        <h1 className='text-white tracking-widest font-medium uppercase'>{t('subtitle')}</h1>
        <h1 className='text-white font-semibold text-4xl mt-2 uppercase'>{t('title')}</h1>

        <div className='flex flex-col mt-20'>
          <label className='text-white tracking-widest font-medium uppercase'>
            {t('nameLabel')}
          </label>
          <input
            className='bg-transparent border-b border-white outline-0 py-2 text-white'
            placeholder={t('namePlaceholder')}
            type="text"
          />
        </div>

        <div className='flex flex-col mt-6'>
          <label className='text-white tracking-widest font-medium uppercase'>
            {t('emailLabel')}
          </label>
          <input
            className='bg-transparent border-b border-white outline-0 py-2 text-white'
            placeholder={t('emailPlaceholder')}
            type="text"
          />
        </div>

        <div className='flex flex-col mt-6'>
          <label className='text-white tracking-widest font-medium uppercase'>
            {t('phoneLabel')}
          </label>
          <input
            className='bg-transparent border-b border-white outline-0 py-2 text-white'
            placeholder={t('phonePlaceholder')}
            type="text"
          />
        </div>

        <textarea
          className='bg-transparent border-b border-white outline-0 py-2 text-white w-full resize-none mt-6'
          rows={4}
          placeholder={t('messagePlaceholder')}
        />

        <div className='mt-6 flex justify-center lg:justify-start'>
          <button className='bg-P1BlueL text-white px-6 py-2 font-medium uppercase tracking-widest' type="submit">
            {t('button')}
          </button>
        </div>
      </form>
    </section>
  );
}
