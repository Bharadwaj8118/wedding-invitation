import { useState, useEffect, useRef } from 'react';

export function useTypewriter(fullText, speed = 18) {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (!fullText) { setText(''); return; }
    setText('');
    setIsTyping(true);
    let i = 0;
    timer.current = setInterval(() => {
      setText(fullText.slice(0, ++i));
      if (i >= fullText.length) {
        clearInterval(timer.current);
        setIsTyping(false);
      }
    }, speed);
    return () => clearInterval(timer.current);
  }, [fullText, speed]);

  return { text, isTyping };
}
