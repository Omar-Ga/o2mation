import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="border-t border-white/10 pt-12 pb-8 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            <span className="font-mono text-xs text-neon-green">{t('footer.systemRoot')}</span>
            <p className="mt-2 text-xs text-gray-600">
              &copy; {new Date().getFullYear()} {t('brand.name')}. {t('footer.operational')}
            </p>
          </div>
          
          <div className="flex gap-8">
            <Link to="/" className="hover:text-neon-green transition-colors font-mono text-xs uppercase tracking-wider">{t('footer.links.home')}</Link>
            <Link to="/solutions" className="hover:text-neon-green transition-colors font-mono text-xs uppercase tracking-wider">{t('footer.links.solutions')}</Link>
            <Link to="/contact" className="hover:text-neon-green transition-colors font-mono text-xs uppercase tracking-wider">{t('footer.links.contact')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
