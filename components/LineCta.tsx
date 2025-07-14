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
        <div className='mt-6 flex flex-col text-center gap-4 justify-center lg:flex-row text-left'>
          <a className='bg-white text-P2BlueD px-6 py-2 font-medium uppercase' target='_blank' href='https://api.whatsapp.com/send?phone=5514997856389&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Leonardo%20Martinelli,%20na%20clínica%20de%20Torrinha/SP.'>
            {t('button')}
          </a>
          <a className='bg-white text-P2BlueD px-6 py-2 font-medium uppercase' target='_blank' href='https://api.whatsapp.com/send/?phone=5511933692314&text=Olá%2C+gostaria+de+agendar+uma+consulta+com+o+Dr.+Leonardo+Martinelli%2C+na+clínica+de+São+Paulo%2FSP.&type=phone_number&app_absent=0'>
            {t('button1')}
          </a>
        </div>
      </div>
    </section>
  );
}
