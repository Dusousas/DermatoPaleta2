"use client"

import React from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Main() {
    const t = useTranslations('main');

    return (
        <>

            <section className='bgMain relative'>
                <div className='block absolute inset-0 bg-black/50 z-0' />

                <article className='absolute top-4 right-4 z-20'>
                    <LanguageSwitcher />
                </article>

                <div className='maxW flex flex-col justify-center h-full relative z-10'>
                    <article className='flex flex-col gap-4 lg:w-[60%]'>
                        <h2 className="font-medium tracking-widest uppercase text-center text-white lg:text-left">
                            {t('subtitle')}
                        </h2>
                        <h1 className='font-semibold text-center text-4xl text-white lg:text-left'>
                            {t('title')}
                        </h1>
                        <p className='text-white text-center lg:text-left lg:text-white'>
                            {t('description')}
                        </p>
                    </article>

                    <article className='mt-10 flex flex-col items-start'>
                        <div className='bg-P1BlueD text-white px-10 font-medium py-1 tracking-wide uppercase lg:py-4 lg:text-lg'>
                            01 {t('treatments.laser')}
                        </div>
                        <div className='bg-P1BlueD/90 text-white px-10 font-medium py-1 tracking-wide uppercase lg:py-4 lg:text-lg'>
                            02 {t('treatments.harmonization')}
                        </div>
                        <div className='bg-P1BlueD/80 text-white px-10 font-medium py-1 tracking-wide uppercase lg:py-4 lg:text-lg'>
                            03 {t('treatments.filler')}
                        </div>
                        <div className='bg-P1BlueD/70 text-white px-10 font-medium py-1 tracking-wide uppercase lg:py-4 lg:text-lg'>
                            04 {t('treatments.botox')}
                        </div>
                    </article>


                </div>
            </section>

            <article className='flex flex-col gap-2 absolute bottom-4 right-4 z-10'>
                <a target='_blank' href="https://www.instagram.com/drleonardomartinelli/"><img className='hover:opacity-70' src="/instagram.png" alt="" /></a>
                <a href=""><img className='hover:opacity-70' src="/whatsapp.png" alt="" /></a>
            </article>
        </>
    );
}
