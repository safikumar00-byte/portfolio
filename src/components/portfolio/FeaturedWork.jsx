import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

export function FeaturedWork() {
  const { featuredProjects } = siteConfig;
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultiple = featuredProjects.length > 1;

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? featuredProjects.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) =>
      current === featuredProjects.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="border-b border-white/5 bg-black relative">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/5 relative">
          <div className="p-6 md:p-10 border-r border-white/5 flex flex-col justify-between h-full">
            <div className="text-[10px] font-mono text-neutral-500 uppercase mb-2">
              01 — Selected Works
            </div>
            <h2 className="text-2xl text-white font-medium tracking-tight">
              Case Index
            </h2>
          </div>
          <div className="md:col-span-3 p-6 md:p-10 flex items-center">
            <p className="text-sm text-neutral-500 max-w-lg">
              Deploying capital and creativity into digital products that shift markets.
            </p>
          </div>

          {hasMultiple && (
            <div className="absolute right-6 top-6 flex items-center gap-3 md:right-10 md:top-10">
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white transition hover:bg-white/10"
                aria-label="Previous featured project"
              >
                <iconify-icon icon="ph:caret-left-light" width="20"></iconify-icon>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white transition hover:bg-white/10"
                aria-label="Next featured project"
              >
                <iconify-icon icon="ph:caret-right-light" width="20"></iconify-icon>
              </button>
            </div>
          )}
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex w-full"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          >
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="min-w-full group relative border-b border-white/5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/40 transition-colors duration-700"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 h-[600px]">
                  {/* Visual Side */}
                  <div className="relative h-full border-r border-white/5 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                    {/* Floating UI Element Mockup */}
                    <div className="absolute bottom-12 left-12 right-12 group-hover:translate-y-[-10px] group-hover:translate-x-[5px] transition-transform duration-700">
                      <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                          </div>
                          <div className="text-[10px] font-mono text-neutral-500">Main_v2.tsx</div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-1.5 bg-white/10 rounded w-3/4"></div>
                          <div className="h-1.5 bg-white/10 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-12 flex flex-col justify-between relative bg-black">
                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <iconify-icon
                        icon="ph:arrow-up-right-light"
                        width="32"
                        className="text-white"
                      ></iconify-icon>
                    </div>

                    <div>
                      <div className="flex gap-2 mb-6">
                        {project.category && (
                          <span className="px-2 py-1 border border-white/10 text-[10px] font-mono text-neutral-400 uppercase">
                            {project.category}
                          </span>
                        )}
                        {project.year && (
                          <span className="px-2 py-1 border border-white/10 text-[10px] font-mono text-neutral-400 uppercase">
                            {project.year}
                          </span>
                        )}
                      </div>
                      <h3 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-4">
                        {project.title}
                      </h3>
                      <p className="text-neutral-500 max-w-xs leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-12">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="text-[10px] text-neutral-600 uppercase mb-1">
                            {metric.label}
                          </div>
                          <div className="text-xl text-white font-mono">{metric.value}</div>
                          {metric.detail && (
                            <div className="text-xs text-neutral-500">{metric.detail}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {hasMultiple && (
          <div className="flex items-center justify-center gap-3 py-8">
            {featuredProjects.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`h-2 w-8 rounded-full transition-all ${
                  activeIndex === idx ? 'bg-white' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Show project ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
