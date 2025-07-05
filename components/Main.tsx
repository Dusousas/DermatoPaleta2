"use client"

import React from 'react';
import { FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Main() {
    const t = useTranslations('main');

    return (
        <section className='bgMain relative'>
            <article className='absolute top-4 right-4'>
                <LanguageSwitcher />
            </article>
            <div className='maxW flex flex-col justify-center h-full'>
                <article className='flex flex-col gap-4 lg:w-[60%]'>
                    <h2 className="font-medium tracking-widest uppercase">
                        {t('subtitle')}
                    </h2>
                    <h1 className='font-semibold text-4xl lg:text-7xl'>
                        {t('title')}
                    </h1>
                    <p className=''>
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

                <article className='flex gap-2 absolute bottom-4 right-4'>
                    <FaInstagramSquare className='text-white text-3xl cursor-pointer' />
                    <FaWhatsappSquare className='text-white text-3xl cursor-pointer' />
                    <FaInstagramSquare className='text-white text-3xl cursor-pointer' />
                </article>

            </div>
        </section>
    );
}
