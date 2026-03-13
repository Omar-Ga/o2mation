import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="border-t border-surface-dim dark:border-white/10 pt-12 pb-8 bg-surface dark:bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-start">
            <span className="font-display font-bold text-ink dark:text-white text-lg">{t('brand.name')}<span className="text-brand-muted">.</span></span>
            <p className="mt-1.5 text-xs text-ink-faint dark:text-gray-500">
              &copy; {new Date().getFullYear()} {t('brand.name')}. {t('footer.operational')}
            </p>
          </div>
          
          <div className="flex gap-6">
            <Link to="/" className="hover:text-brand-muted transition-colors text-sm text-ink-muted dark:text-gray-400">{t('footer.links.home')}</Link>
            <Link to="/solutions" className="hover:text-brand-muted transition-colors text-sm text-ink-muted dark:text-gray-400">{t('footer.links.solutions')}</Link>
            <Link to="/contact" className="hover:text-brand-muted transition-colors text-sm text-ink-muted dark:text-gray-400">{t('footer.links.contact')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
