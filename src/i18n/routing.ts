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
    '/sobre': {
      pt: '/sobre',
      en: '/about',
    },
    '/privacidade': {
      pt: '/privacidade',
      en: '/privacy-policy',
    },
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
