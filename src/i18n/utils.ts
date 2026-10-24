import { translations, type Locale } from './translations';

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'fr' || lang === 'en') {
    return lang;
  }
  return 'pt';
}

export const locales: Locale[] = ['pt', 'fr', 'en'];

export const SITE_URL = 'https://taxisrestauracao.pt';

/** Path with trailing slash, matching how Cloudflare Pages serves the pages (/en -> /en/). */
export function localePath(locale: Locale) {
  return locale === 'pt' ? '/' : `/${locale}/`;
}

export const localeNames: Record<Locale, string> = {
  pt: 'Português',
  fr: 'Français',
  en: 'English',
};
