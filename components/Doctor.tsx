import React from 'react';
import { FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function Doctor() {
  const t = useTranslations('doctor');

  return (
    <section className='py-20 bg-white'>
      <div className='maxW flex flex-col gap-10 items-center lg:flex-row'>
        <article className='lg:w-1/2 flex justify-end'>
          <img className='w-[600px]' src="/doctor.png" alt="Dr. Leonardo Martinelli" />
        </article>

        <article className='lg:w-1/2'>
          <h2 className="font-medium tracking-widest text-center uppercase lg:text-left">
            {t('subtitle')}
          </h2>
          <h1 className='text-P1BlueM font-semibold text-4xl mt-2 text-center lg:text-left'>
            <span className='font-bold text-P1BlueD'>Dr. </span>Leonardo Martinelli
          </h1>
          <p className='mt-4 text-center lg:text-left'>
            {t('description1')}
          </p>
          <p className='mt-2 text-center lg:text-left'>
            {t('description2')}
          </p>

          <article className='flex mt-4 justify-center lg:justify-start gap-2'>
            <FaInstagramSquare className='text-3xl text-P1BlueM cursor-pointer' />
            <FaWhatsappSquare className='text-3xl text-P1BlueM cursor-pointer' />
          </article>

          <div className='mt-6 flex justify-center lg:justify-start'>
            <a className='bg-BrowP text-white px-6 py-2 font-medium' href="">
              {t('button')}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
