import { useEffect, useRef } from 'react';

export function useParallax(speed = 0.5, direction = 'vertical') {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Only apply parallax when element is in viewport
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const rate = (scrolled - elementTop) * speed;

        if (direction === 'vertical') {
          element.style.transform = `translateY(${rate}px)`;
        } else if (direction === 'horizontal') {
          element.style.transform = `translateX(${rate}px)`;
        } else if (direction === 'rotate') {
          element.style.transform = `rotate(${rate}deg)`;
        } else if (direction === 'scale') {
          const scale = 1 + (rate * 0.001);
          element.style.transform = `scale(${scale})`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);

  return ref;
}