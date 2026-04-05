import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioFilter } from '../../hooks/usePortfolioFilter';
import { siteConfig } from '../../data/siteConfig';

const focusableSelector =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusableElements(element) {
  return element ? Array.from(element.querySelectorAll(focusableSelector)) : [];
}

/**
 * Enhanced ProjectModal with deep project fields and improved accessibility
 */
export function ProjectModal({ item, onClose }) {
  const modalRef = useRef(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const { portfolioCategories } = siteConfig;
  const { getItemCategories } = usePortfolioFilter([], portfolioCategories);
  const itemCategories = item ? getItemCategories(item) : [];

  useEffect(() => {
    if (!item) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const activeElement = document.activeElement;
    const focusable = getFocusableElements(modalRef.current);
    if (focusable[0]) focusable[0].focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === 'Tab') {
        const focusableElements = getFocusableElements(modalRef.current);
        if (!focusableElements.length) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow || '';
      if (activeElement instanceof HTMLElement) {
        activeElement.focus();
      }
    };
  }, [item, onClose]);

  if (!item) {
    return null;
  }

  const handleOverlayClick = () => {
    onClose();
  };

  const handleOverlayKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClose();
    }
  };

  const renderMedia = (src, index) => {
    const isVideo = src.match(/\.(mp4|webm|ogg)(\?|$)/i);
    return isVideo ? (
      <video
        key={src}
        src={src}
        controls
        className="h-full w-full   bg-black object-cover"
      />
    ) : (
      <img
        key={src}
        src={src}
        alt={`${item.title} media ${index + 1}`}
        className="h-full w-full   object-cover"
      />
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          role="button"
          tabIndex={0}
          aria-label="Close project modal"
          onClick={handleOverlayClick}
          onKeyDown={handleOverlayKeyDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        <motion.div
          ref={modalRef}
          className="relative z-10 w-full max-w-6xl h-[90vh] overflow-y-auto rounded-[2rem] border border-white/10 bg-neutral-950/95 shadow-2xl ring-1 ring-white/5"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="absolute right-4 top-4 z-20">
            <motion.button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition hover:bg-white/10"
              onClick={onClose}
              aria-label="Close project modal"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
          </div>

          <div className="grid grid-cols-1 gap-6 p-6 lg:p-8">
            <div className="space-y-5">
              {/* Media Gallery */}
              <div className="overflow-hidden   bg-black/60 p-4">
                <motion.div
                  className="relative h-[380px]   overflow-hidden bg-neutral-900"
                  layoutId={`media-${item.id}-${activeMediaIndex}`}
                >
                  {item.gallery && item.gallery[activeMediaIndex] &&
                    renderMedia(item.gallery[activeMediaIndex], activeMediaIndex)
                  }
                </motion.div>
                {item.gallery && item.gallery.length > 1 && (
                  <div className="grid grid-cols-4 gap-3 mt-4">
                    {item.gallery.map((mediaSrc, index) => (
                      <motion.button
                        key={mediaSrc}
                        type="button"
                        onClick={() => setActiveMediaIndex(index)}
                        className={`overflow-hidden   border p-1 transition ${index === activeMediaIndex
                          ? 'border-emerald-400 shadow-lg shadow-emerald-400/20'
                          : 'border-white/10 hover:border-white/40'
                          }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {mediaSrc.match(/\.(mp4|webm|ogg)(\?|$)/i) ? (
                          <div className="flex h-16 items-center justify-center   bg-black text-white/70 text-xs">
                            Video
                          </div>
                        ) : (
                          <img
                            src={mediaSrc}
                            alt={`${item.title} thumbnail ${index + 1}`}
                            className="h-16 w-full   object-cover"
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-between   border border-white/10 bg-black/60 p-6">
              <div className="space-y-6">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {itemCategories.map((category, index) => (
                      <span
                        key={category.id}
                        className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/90 ${category.color === 'emerald' ? 'bg-emerald-500/20 border border-emerald-500/30' :
                          category.color === 'blue' ? 'bg-blue-500/20 border border-blue-500/30' :
                            category.color === 'purple' ? 'bg-purple-500/20 border border-purple-500/30' :
                              'bg-gray-500/20 border border-gray-500/30'
                          }`}
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                  <h2 id="project-modal-title" className="text-3xl font-semibold text-white mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-neutral-300 mb-4">
                    {item.summary}
                  </p>
                  <div className="text-sm font-mono uppercase tracking-[0.2em] text-emerald-400">
                    {item.role} · {item.timeline}
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className="space-y-6">
                  {/* Objective */}
                  {item.objective && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
                        Objective
                      </h3>
                      <p className="text-white text-sm leading-relaxed">{item.objective}</p>
                    </motion.div>
                  )}

                  {/* Process Steps */}
                  {item.processSteps && item.processSteps.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
                        Process
                      </h3>
                      <ol className="space-y-2">
                        {item.processSteps.map((step, index) => (
                          <li key={index} className="flex items-start gap-3 text-white text-sm leading-relaxed">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-xs text-emerald-400 mt-0.5">
                              {index + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </motion.div>
                  )}

                  {/* Challenges */}
                  {item.challenges && item.challenges.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
                        Challenges
                      </h3>
                      <ul className="space-y-2">
                        {item.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-3 text-white text-sm leading-relaxed">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Deliverables */}
                  {item.deliverables && item.deliverables.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
                        Deliverables
                      </h3>
                      <ul className="space-y-2">
                        {item.deliverables.map((deliverable, index) => (
                          <li key={index} className="flex items-start gap-3 text-white text-sm leading-relaxed">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2"></span>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Outcomes */}
                  {item.outcomes && item.outcomes.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
                        Outcomes
                      </h3>
                      <ul className="space-y-2">
                        {item.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-3 text-white text-sm leading-relaxed">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Tools & Technologies */}
                  {item.tools && item.tools.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
                        Tools & Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {item.tools.map((tool, index) => (
                          <motion.span
                            key={tool}
                            className="px-3 py-1 bg-white/5 rounded-full text-xs text-neutral-300 border border-white/10"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.05 }}
                          >
                            {tool}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Metrics */}
                  {item.metrics && item.metrics.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
                        Key Metrics
                      </h3>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {item.metrics.map((metric, index) => (
                          <motion.div
                            key={metric.label}
                            className="  bg-white/5 p-4 border border-white/10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                          >
                            <div className="text-sm text-neutral-400">{metric.label}</div>
                            <div className="text-2xl font-semibold text-white">{metric.value}</div>
                            {metric.detail && (
                              <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mt-2">
                                {metric.detail}
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Links */}
              {item.links && (
                <motion.div
                  className="space-y-4 mt-6 pt-6 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Links
                  </h3>
                  <div className="grid gap-3">
                    {item.links.live && (
                      <motion.a
                        href={item.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-between   border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-emerald-400/50 hover:bg-emerald-400/10"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Live Project
                        <iconify-icon icon="ph:arrow-right" width="16" className="text-white"></iconify-icon>
                      </motion.a>
                    )}
                    {item.links.caseStudy && (
                      <motion.a
                        href={item.links.caseStudy}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-between   border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-emerald-400/50 hover:bg-emerald-400/10"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Case Study
                        <iconify-icon icon="ph:arrow-right" width="16" className="text-white"></iconify-icon>
                      </motion.a>
                    )}
                    {item.links.source && (
                      <motion.a
                        href={item.links.source}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-between   border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-emerald-400/50 hover:bg-emerald-400/10"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Source Code
                        <iconify-icon icon="ph:arrow-right" width="16" className="text-white"></iconify-icon>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
