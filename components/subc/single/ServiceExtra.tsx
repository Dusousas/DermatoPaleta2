'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

type TreatmentKey = 'melasma' | 'gordura' | 'tricologia';

interface Props {
  treatment: string;
}

interface ExtraItem {
  title: string;
  description: string;
}

const allowedTreatments: TreatmentKey[] = ['melasma', 'gordura', 'tricologia'];

export default function ServiceExtra({ treatment }: Props) {
  // Verifica se o tratamento atual está entre os permitidos
  if (!allowedTreatments.includes(treatment as TreatmentKey)) return null;

  const t = useTranslations('services.extras');
  const rawData = t.raw(treatment as TreatmentKey);
  const extraItems: ExtraItem[] = Array.isArray(rawData) ? rawData : [];

  if (extraItems.length === 0) return null;

  return (
    <div className='mt-12'>
      <h2 className='font-bold uppercase'>Tratamentos disponíveis:</h2>
      <div className='space-y-6 mt-6'>
        {extraItems.map((item, index) => (
          <div key={index} className='max-w-[800px]'>
            <h3 className='font-semibold'>{item.title}</h3>
            <p className='mt-2'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
