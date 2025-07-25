// components/subc/single/ServiceFaqs.tsx
import React from 'react';
import { useTranslations } from 'next-intl';

interface ServiceFaqsProps {
  slug: string;
}

export default function ServiceFaqs({ slug }: ServiceFaqsProps) {
  const t = useTranslations();

  let faqs: Array<{ q: string; a: string }> = [];

  try {
    const faqsData = t.raw(`services.faqs.${slug}`);
    if (Array.isArray(faqsData)) {
      faqs = faqsData;
    }
  } catch (error) {
    console.warn(`FAQs not found for service: ${slug}`);
  }

  return (
    <article className="mt-10 bg-P2BlueD text-white px-4 py-20 lg:px-10 lg:w-1/2">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {t('services.faqsTitle')}
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
              {t('services.fallbackFaqs.question')} {i + 1}
            </summary>
            <p className="text-white font-Poppins border-x border-b border-white cardLinear p-4">
              {t('services.fallbackFaqs.answer')} {i + 1}
            </p>
          </details>
        ))
      )}
    </article>
  );
}