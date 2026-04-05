import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, useMotionValue, useTransform } from 'framer-motion';

/**
 * Hook for scroll-triggered animations with intersection observer
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {boolean} options.triggerOnce - Whether to trigger only once
 * @param {string} options.direction - Animation direction ('up', 'down', 'left', 'right', 'fade')
 * @param {number} options.distance - Animation distance in pixels
 * @param {number} options.duration - Animation duration in seconds
 * @param {number} options.delay - Animation delay in seconds
 * @returns {Object} - ref and animation controls
 */
export function useScrollAnimation({
  threshold = 0.1,
  triggerOnce = true,
  direction = 'up',
  distance = 50,
  duration = 0.6,
  delay = 0
} = {}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: 'easeOut'
        }
      });
    } else if (!triggerOnce) {
      // Reset animation when element leaves viewport (if not triggerOnce)
      const initialX = direction === 'left' ? distance : direction === 'right' ? -distance : 0;
      const initialY = direction === 'up' ? distance : direction === 'down' ? -distance : 0;
      const initialScale = direction === 'scale' ? 0.8 : 1;

      controls.start({
        opacity: direction === 'fade' ? 0 : 1,
        x: initialX,
        y: initialY,
        scale: initialScale,
        transition: {
          duration: 0.3
        }
      });
    }
  }, [controls, inView, direction, distance, duration, delay, triggerOnce]);

  // Set initial state
  const initialX = direction === 'left' ? distance : direction === 'right' ? -distance : 0;
  const initialY = direction === 'up' ? distance : direction === 'down' ? -distance : 0;
  const initialScale = direction === 'scale' ? 0.8 : 1;

  return {
    ref,
    controls,
    initial: {
      opacity: direction === 'fade' ? 0 : 1,
      x: initialX,
      y: initialY,
      scale: initialScale
    }
  };
}

/**
 * Hook for smooth scroll progress-based animations
 * @param {number} start - Start scroll position (0-1)
 * @param {number} end - End scroll position (0-1)
 * @returns {Object} - Motion values for scroll progress
 */
export function useScrollProgress(start = 0, end = 1) {
  const scrollYProgress = useMotionValue(0);
  const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0.5, 1]);
  const y = useTransform(scrollYProgress, [start, end], [100, 0]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      scrollYProgress.set(Math.min(Math.max(scrollPercent, start), end));
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, [scrollYProgress, start, end]);

  return { scrollYProgress, scale, opacity, y };
}