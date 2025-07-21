"use client"

import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const servicesData = {
  botulinica: {
    id: 1,
  },
  colageno: {
    id: 2,
  },
  hialuronico: {
    id: 3,
  },
  skinbooster: {
    id: 4,
  },
  blefaroplastia: {
    id: 5,
  },
  plasma: {
    id: 6,
  },
  melasma: {
    id: 8,
  },
  tricologia: {
    id: 9,
  },
  gordura: {
    id: 10,
  },
};

interface ServiceDetailPageProps {
  service: {
    slug: string;
    data: typeof servicesData[keyof typeof servicesData];
  };
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const t = useTranslations('services');
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  if (!service) {
    return <div>Serviço não encontrado</div>;
  }

  const { slug } = service;
  const faqs = t.raw(`faqs.${slug}`) as Array<{ q: string; a: string }>;

  return (
    <>
      {/* BREADCRUMB */}
      <article className="bg-gray-50 py-4">
        <div className="maxW">
          <nav className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-gray-500 hover:text-BrowP">Início</a>
            <span className="text-gray-400">/</span>
            <a href="/#services" className="text-gray-500 hover:text-BrowP">Serviços</a>
            <span className="text-gray-400">/</span>
            <span className="text-BrowP font-medium">{t(`treatments.${slug}`)}</span>
          </nav>
        </div>
      </article>

      <section className="py-10">
        <div className="maxW">
          <article className="absolute top-[150px] right-4 z-10">
            <LanguageSwitcher />
          </article>
          <h1 className="text-center text-4xl uppercase font-bold">
            {t(`treatments.${slug}`)}
          </h1>

          <p className="text-center mt-2">
            {t(`descriptions.${slug}`)}
          </p>

          <article className="flex flex-col gap-10 justify-center items-center mt-10 lg:flex-row">
            <img className="lg:w-[30%] h-[500px] object-cover" src="/after-1.JPG" alt="" />
            <img className="lg:w-[30%] h-[500px] object-cover" src="/before-1.JPG" alt="" />
            <img className="lg:w-[30%] h-[500px] object-cover" src="/after-1.JPG" alt="" />
          </article>
        </div>

        {/* FAQS */}
        <article className="flex flex-col lg:flex-row">
          <article className="mt-10 bg-P2BlueD text-white px-4 py-20 lg:px-10 lg:w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Perguntas Frequentes
            </h2>
            {faqs && faqs.length > 0 ? (
              faqs.map((faq, i) => (
                <details key={i} className={i > 0 ? 'mt-4' : ''}>
                  <summary className="text-white border border-white rounded-t-xl cursor-pointer p-4 font-semibold hover:bg-white/10 transition-colors">
                    {faq.q}
                  </summary>
                  <p className="text-white font-Poppins border-x border-b border-white cardLinear p-4">
                    {faq.a}
                  </p>
                </details>
              ))
            ) : (
              // Fallback caso não existam FAQs para o serviço
              Array.from({ length: 5 }).map((_, i) => (
                <details key={i} className={i > 0 ? 'mt-4' : ''}>
                  <summary className="text-white border border-white rounded-t-xl cursor-pointer p-4 font-semibold">
                    Pergunta {i + 1}
                  </summary>
                  <p className="text-white font-Poppins border-x border-b border-white cardLinear p-4">
                    Resposta {i + 1}
                  </p>
                </details>
              ))
            )}
          </article>
          <article className="bg-P2Brown/80 px-10 py-10 lg:w-1/2 lg:mt-10">
            {/* Conteúdo adicional pode ser adicionado aqui */}
          </article>
        </article>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const serviceKeys = Object.keys(servicesData);

  const paths = locales
    ? locales.flatMap(locale =>
        serviceKeys.map(slug => ({
          params: { slug },
          locale,
        }))
      )
    : serviceKeys.map(slug => ({
        params: { slug },
      }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug as string;

  if (!slug || !(slug in servicesData)) {
    return {
      notFound: true,
    };
  }

  const service = {
    slug,
    data: servicesData[slug as keyof typeof servicesData],
  };

  return {
    props: {
      service,
      messages: (await import(`../../messages/S${locale}.json`)).default,
    },
  };
};