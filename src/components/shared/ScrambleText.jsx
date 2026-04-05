import { useState, useRef, useEffect } from 'react';

export function ScrambleText({ text, className }) {
  const [displayText, setDisplayText] = useState(text);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  const intervalRef = useRef(null);

  const startScramble = () => {
    let iter = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((l, i) => {
            if (i < iter) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      if (iter >= text.length) clearInterval(intervalRef.current);
      iter += 1 / 3;
    }, 30);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleFocus = () => {
    startScramble();
  };

  const handleBlur = () => {
    stopScramble();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      startScramble();
    }
  };

  return (
    <button
      type="button"
      className={className}
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onClick={startScramble}
    >
      {displayText}
    </button>
  );
}
