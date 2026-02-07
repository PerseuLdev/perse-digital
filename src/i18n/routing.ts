import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/templates': {
      pt: '/modelos',
      en: '/models',
    },
    '/pricing': {
      pt: '/#pricing',
      en: '/#pricing',
    },
    '/how-it-works': {
      pt: '/#how-it-works',
      en: '/#how-it-works',
    },
    '/faq': {
      pt: '/#faq',
      en: '/#faq',
    },
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
