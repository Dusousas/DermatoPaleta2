import React from 'react';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id='about' className='py-20 bg-P2Gray/30'>
      <div className='maxW flex flex-col gap-10 justify-center items-center lg:flex-row'>
        <article className='flex flex-col lg:w-[50%]'>
          <h2 className="font-medium tracking-widest text-center uppercase lg:text-left">
            {t('subtitle')}
          </h2>
          <h1 className='font-semibold text-4xl mt-4 text-center lg:text-left'>
            {t('title')}
          </h1>
          <p className='mt-4 text-center lg:text-left'>
            {t('description1')}
          </p>
          <p className='mt-2 text-center lg:text-left'>
            {t('description2')}
          </p>

          <article className='mx-auto lg:mx-0'>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className='mt-8 flex items-center gap-6 hover:text-BlueS/70 hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer group'
              >
                <div className='border border-black h-0 w-10 group-hover:border-BrowS transition-colors duration-300 ease-in-out' />
                <p className='uppercase tracking-wider text-xl font-medium'>
                  {t(`items.item${i}`)}
                </p>
              </div>
            ))}
          </article>

          <div className='mt-10 mx-auto lg:mx-0'>
            <a className='bg-P1BlueM text-white px-6 py-4 font-medium' href='https://linktr.ee/leonardomartinelli?fbclid=PAZXh0bgNhZW0CMTEAAadVthTvcxnxmUpvkOztt1-KYP3U7C-y9SVxUbAB5azcoJEfAkie9deV1Mxm5A_aem_OwJu0Wusq2_Ap7hZ9KqvFw' target='_blank'>
              {t('button')}
            </a>
          </div>
        </article>

        <article className='lg:w-[40%] flex items-center justify-center'>
          <img
            className='w-[90%] h-[600px] object-cover rounded-md shadow-md'
            src='/about-1.PNG'
            alt='Imagem sobre'
          />
        </article>
      </div>
    </section>
  );
}
