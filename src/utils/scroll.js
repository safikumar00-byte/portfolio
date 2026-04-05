/**
 * Smooth scroll utility functions
 */

/**
 * Smooth scroll to an element by selector or element
 * @param {string|Element} target - CSS selector or DOM element
 * @param {number} offset - Offset from top in pixels
 * @param {Object} options - Scroll options
 */
export function smoothScrollTo(target, offset = 0, options = {}) {
  const element = typeof target === 'string' ? document.querySelector(target) : target;

  if (!element) {
    console.warn('Smooth scroll target not found:', target);
    return;
  }

  const top = element.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top,
    behavior: 'smooth',
    ...options
  });
}

/**
 * Smooth scroll to section by ID
 * @param {string} sectionId - Section ID (without #)
 * @param {number} offset - Offset from top in pixels
 */
export function scrollToSection(sectionId, offset = 80) {
  const element = document.getElementById(sectionId);
  if (element) {
    smoothScrollTo(element, offset);
  }
}

/**
 * Initialize smooth scroll for all anchor links
 */
export function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    scrollToSection(targetId);
  });
}

/**
 * Get scroll progress (0-1)
 * @returns {number} Scroll progress
 */
export function getScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return Math.min(Math.max(scrollTop / docHeight, 0), 1);
}

/**
 * Check if element is in viewport
 * @param {Element} element - DOM element
 * @param {number} threshold - Visibility threshold (0-1)
 * @returns {boolean} Whether element is visible
 */
export function isInViewport(element, threshold = 0.1) {
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
  const elementHeight = rect.height;

  return visibleHeight / elementHeight >= threshold;
}