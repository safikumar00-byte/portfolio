import { useState } from 'react';
import { useParallax } from '../../hooks/useParallax';
import { siteConfig } from '../../data/siteConfig';
import { PortfolioCard } from './PortfolioCard';

export function PortfolioGrid({ items, viewMode = 'grid', onOpenProject }) {
  const { portfolioItems } = siteConfig;
  const parallaxGridRef = useParallax(0.1);

  const galleryItems = items ?? portfolioItems;

  const getContainerClass = () => {
    if (viewMode === 'vertical') {
      return 'space-y-6';
    }
    if (viewMode === 'horizontal') {
      return 'flex gap-4 overflow-x-auto pb-4 px-1 snap-x snap-mandatory';
    }
    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4';
  };

  const itemWrapperClass = viewMode === 'horizontal'
    ? 'snap-start min-w-[320px] flex-shrink-0'
    : 'w-full';

  return (
    <div className="relative overflow-hidden">
      <div ref={parallaxGridRef} className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className={getContainerClass()}>
          {galleryItems.map((item) => (
            <div key={item.id} className={itemWrapperClass}>
              <PortfolioCard item={item} onOpen={() => onOpenProject(item)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
