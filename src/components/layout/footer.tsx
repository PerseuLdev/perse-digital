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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
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
