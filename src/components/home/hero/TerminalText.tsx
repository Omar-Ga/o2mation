import { useState, useEffect, memo } from 'react';

export const TerminalText = memo(() => {
  const [text, setText] = useState('');
  const fullText = "Initialize system sequence... > Loading modules... > AI Agents: ONLINE > API Gateways: CONNECTED";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 font-mono text-sm text-neon-green/80 mb-12 min-h-[20px]">
      &gt; {text}<span className="animate-pulse">_</span>
    </div>
  );
});
