'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className='bg-WhiteD py-6 shadow-sm'>
      <div className='maxW'>
        <p className='text-center'>{t('rights')}</p>
      </div>
    </footer>
  );
}
