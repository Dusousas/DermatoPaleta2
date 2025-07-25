// pages/services/[slug].tsx (arquivo principal refatorado)
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Breadcrumb from '@/components/subc/single/Breadcrumb';
import ServiceHeader from '@/components/subc/single/ServiceHeader';
import ServiceImages from '@/components/subc/single/ServiceImages';
import ServiceFaqs from '@/components/subc/single/ServiceFaqs';
import Tabela from '@/components/subc/single/Tabela';


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
  const t = useTranslations();
  const router = useRouter();

  if (router.isFallback) {
    return <div>{t('common.loading')}</div>;
  }

  if (!service) {
    return <div>{t('common.serviceNotFound')}</div>;
  }

  const { slug } = service;

  return (
    <>
      <Breadcrumb slug={slug} />
      <section className="pt-10">
        <ServiceHeader slug={slug} />
        <ServiceImages />

        <article className="flex flex-col lg:flex-row">
          <ServiceFaqs slug={slug} />
          <Tabela />
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