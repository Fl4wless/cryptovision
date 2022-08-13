module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    reloadOnPrerender: process.env.NEXT_PUBLIC_ENV === 'development',
    localeDetection: true,
  },
};
