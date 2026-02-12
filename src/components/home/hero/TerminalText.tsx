import { useState, useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const TerminalText = memo(() => {
  const { t } = useTranslation('home');
  const [text, setText] = useState('');
  const fullText = t('hero.terminal');
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="h-8 font-mono text-sm text-neon-green/80 mb-12 min-h-[20px]">
      {t('hero.prompt')} {text}<span className="animate-pulse">_</span>
    </div>
  );
});
