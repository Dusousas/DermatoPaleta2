import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import LanguageSwitcher from '@/components/LanguageSwitcher';

// Dados dos serviços
const servicesData = {
  botulinica: {
    id: 1,
    image: '/servicos/botulinica.jpg',
    duration: '30-45 min',
    recovery: '24-48h',
    results: '3-7 dias',
  },
  colageno: {
    id: 2,
    image: '/servicos/colageno.png',
    duration: '45-60 min',
    recovery: '2-3 dias',
    results: '2-4 semanas',
  },
  hialuronico: {
    id: 3,
    image: '/servicos/hialuronico.jpg',
    duration: '30-60 min',
    recovery: '24-48h',
    results: 'Imediato',
  },
  skinbooster: {
    id: 4,
    image: '/servicos/skinbooster.png',
    duration: '30-45 min',
    recovery: '24h',
    results: '2-4 semanas',
  },
  blefaroplastia: {
    id: 5,
    image: '/servicos/blefaroplastia.png',
    duration: '60-90 min',
    recovery: '7-10 dias',
    results: '2-4 semanas',
  },
  plasma: {
    id: 6,
    image: '/servicos/plasma.png',
    duration: '45-60 min',
    recovery: '3-5 dias',
    results: '4-6 semanas',
  },
  melasma: {
    id: 8,
    image: '/servicos/melasma.jpg',
    duration: '30-45 min',
    recovery: '5-7 dias',
    results: '4-8 semanas',
  },
  tricologia: {
    id: 9,
    image: '/servicos/tricologia.png',
    duration: '60-90 min',
    recovery: '24-48h',
    results: '8-12 semanas',
  },
  gordura: {
    id: 10,
    image: '/servicos/gordura.jpg',
    duration: '45-90 min',
    recovery: '3-7 dias',
    results: '4-8 semanas',
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

  if (router.isFallback) return <div>Carregando...</div>;
  if (!service) return <div>Serviço não encontrado</div>;

  const { slug, data } = service;

  // Recupera FAQs do JSON de tradução
  const faqs = t.raw(`faqs.${slug}`) as { q: string; a: string }[] || [];

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

        <article className="flex flex-col lg:flex-row">
          {/* FAQs dinâmicas */}
          <article className="mt-10 bg-P2BlueD text-white px-4 py-20 lg:px-10 lg:w-1/2">
            {faqs.length > 0 ? (
              faqs.map((item, i) => (
                <details key={i} className={i > 0 ? 'mt-4' : ''}>
                  <summary className="text-text-white border border-text-white rounded-t-xl cursor-pointer p-4 font-semibold">
                    {item.q}
                  </summary>
                  <p className="text-white font-Poppins border-x border-b border-text-white cardLinear p-4">
                    {item.a}
                  </p>
                </details>
              ))
            ) : (
              <p className="text-white">Nenhuma pergunta frequente cadastrada para este tratamento.</p>
            )}
          </article>

          {/* Coluna secundária */}
          <article className="bg-P2Brown/80 px-10 py-10 lg:w-1/2 lg:mt-10">
            {/* Conteúdo adicional */}
          </article>
        </article>
      </section>
    </>
  );
}

// Slugs e rotas dinâmicas com idioma
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

// Props para cada página de serviço
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
