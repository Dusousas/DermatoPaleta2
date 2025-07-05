/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'pt-BR',
    localeDetection: true,
  },
};

module.exports = nextConfig;
