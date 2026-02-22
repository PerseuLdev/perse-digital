'use client';

import { useTranslations } from 'next-intl';
import { LogoSVG } from '@/components/ui/logo';
import { Link } from '@/i18n/routing';

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="relative z-10 px-6 pt-20 pb-8 border-t border-border/50 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <LogoSVG className="h-11 w-auto" />
            </div>
            <p className="text-muted-foreground max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t('footer.links.company.title')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors duration-200">{t('footer.links.company.about')}</Link>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">{t('footer.links.company.contact')}</a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t('footer.links.resources.title')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/templates" className="text-muted-foreground hover:text-primary transition-colors duration-200">{t('footer.links.resources.templates')}</Link>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors duration-200">{t('footer.links.resources.pricing')}</a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors duration-200">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t('footer.links.contact.title')}</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://instagram.com/perse_digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-3 py-2 rounded-lg border border-transparent hover:border-pink-500/20 hover:bg-pink-500/5 transition-all duration-200"
                >
                  <svg className="w-4 h-4 text-pink-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-sm text-muted-foreground group-hover:text-pink-300 transition-colors duration-200">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@persedigital.com"
                  className="group inline-flex items-center gap-2.5 px-3 py-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-200"
                >
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-200">contact@persedigital.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            {t('footer.copyright')}
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200">
              {t('footer.links.legal.privacy')}
            </Link>
            <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200">
              {t('footer.links.legal.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
