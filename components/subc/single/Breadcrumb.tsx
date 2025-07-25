// components/subc/single/Breadcrumb.tsx
import React from 'react';
import { useTranslations } from 'next-intl';

interface BreadcrumbProps {
  slug: string;
}

export default function Breadcrumb({ slug }: BreadcrumbProps) {
  const t = useTranslations();

  return (
    <article className="bg-gray-50 py-4">
      <div className="maxW">
        <nav className="flex items-center space-x-2 text-sm">
          <a href="/" className="text-gray-500 hover:text-BrowP">
            {t('common.home')}
          </a>
          <span className="text-gray-400">/</span>
          <a href="/#services" className="text-gray-500 hover:text-BrowP">
            {t('navbar.services')}
          </a>
          <span className="text-gray-400">/</span>
          <span className="text-BrowP font-medium">
            {t(`services.treatments.${slug}`)}
          </span>
        </nav>
      </div>
    </article>
  );
}