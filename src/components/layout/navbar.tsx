'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Link, usePathname } from '@/i18n/routing';
import { LogoSVG } from '@/components/ui/logo';
import { locales, localeNames, localeFlags, type Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const routeItems = [
  { key: 'home', href: '/' as const },
  { key: 'templates', href: '/templates' as const },
];

const anchorItems = [
  { key: 'pricing', href: '/#pricing' },
  { key: 'howItWorks', href: '/#how-it-works' },
  { key: 'faq', href: '/#faq' },
];

const allNavKeys = [...routeItems.map(i => i.key), ...anchorItems.map(i => i.key)];

export function Navbar() {
  const t = useTranslations('nav');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const pathname = usePathname();
  const locale = useLocale();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const linkClass = "relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group";
  const underline = <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl',
          'transition-all duration-500'
        )}
      >
        <nav
          className={cn(
            'flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500',
            isScrolled
              ? 'glass-strong shadow-2xl shadow-black/10'
              : 'bg-transparent'
          )}
        >
          {/* Logo */}
          <Link href="/" className="group opacity-90 hover:opacity-100 transition-opacity duration-300">
            <LogoSVG className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {routeItems.map((item) => (
              <Link key={item.key} href={item.href} className={linkClass}>
                {t(item.key)}
                {underline}
              </Link>
            ))}
            {anchorItems.map((item) => (
              <a key={item.key} href={item.href} className={linkClass}>
                {t(item.key)}
                {underline}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="relative p-3 rounded-xl hover:bg-foreground/5 transition-colors overflow-hidden"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? (
                      <Sun className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <Moon className="w-5 h-5 text-slate-700" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            )}

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="p-3 rounded-xl hover:bg-foreground/5 transition-colors flex items-center gap-2"
                aria-label="Select language"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:inline">{localeFlags[locale as Locale]}</span>
              </button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-40"
                      onClick={() => setIsLangDropdownOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 z-50 min-w-[160px] p-2 rounded-xl glass-strong shadow-xl border border-border/50"
                    >
                      {locales.map((lang) => (
                        <Link
                          key={lang}
                          href={pathname}
                          locale={lang}
                          onClick={() => setIsLangDropdownOpen(false)}
                          className={cn(
                            'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                            locale === lang
                              ? 'bg-primary/10 text-primary'
                              : 'hover:bg-foreground/5 text-muted-foreground hover:text-foreground'
                          )}
                        >
                          <span className="text-lg">{localeFlags[lang]}</span>
                          <span>{localeNames[lang]}</span>
                          {locale === lang && (
                            <span className="ml-auto text-primary">✓</span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Button variant="glow" size="sm" className="hidden sm:flex">
              {t('getStarted')}
            </Button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-xl hover:bg-foreground/5 transition-colors lg:hidden"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm glass-strong p-8 pt-24"
            >
              <div className="flex flex-col gap-2">
                {routeItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-4 text-xl font-medium rounded-xl hover:bg-foreground/5 transition-colors"
                    >
                      {t(item.key)}
                    </Link>
                  </motion.div>
                ))}
                {anchorItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: (routeItems.length + index) * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-4 text-xl font-medium rounded-xl hover:bg-foreground/5 transition-colors"
                    >
                      {t(item.key)}
                    </a>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: allNavKeys.length * 0.1 }}
                  className="mt-4"
                >
                  <Button variant="glow" size="lg" className="w-full">
                    {t('getStarted')}
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
