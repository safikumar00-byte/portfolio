import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import { usePortfolioFilter } from '../../hooks/usePortfolioFilter';
import { PortfolioGrid } from './PortfolioGrid';

export function PortfolioFilters({ onOpenProject }) {
  const { portfolioCategories, portfolioItems } = siteConfig;
  const { selectedCategory, setSelectedCategory, filters, filteredItems, getCategoryInfo } = usePortfolioFilter(
    portfolioItems,
    portfolioCategories
  );

  return (
    <section id="portfolio" className="border-b border-white/5 bg-black py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[10px] font-mono text-emerald-500 uppercase mb-4 tracking-widest flex items-center gap-2">
            <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
            Portfolio Live Feed
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            Explore work by category with live project highlights.
          </h2>
          <p className="max-w-2xl text-neutral-400 mt-4">
            Filter the portfolio feed and browse active projects that showcase design, development and growth work.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-between gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-3">
            {filters.map((filterId, index) => {
              const isActive = filterId === selectedCategory;
              const categoryInfo = filterId === 'all'
                ? { name: 'All Work', icon: 'ph:grid-four-light', color: 'gray' }
                : getCategoryInfo(filterId);

              return (
                <motion.button
                  key={filterId}
                  type="button"
                  onClick={() => setSelectedCategory(filterId)}
                  className={`group rounded-full px-4 py-2 text-xs transition-all duration-200 flex items-center gap-2 ${isActive
                    ? 'bg-white text-black shadow-[0_0_0_1px_rgba(255,255,255,0.12)]'
                    : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <iconify-icon
                    icon={categoryInfo.icon}
                    width="14"
                    height="14"
                    className={isActive ? 'text-black' : 'text-current'}
                  ></iconify-icon>
                  {categoryInfo.name}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {filteredItems.length > 0 ? (
          <PortfolioGrid items={filteredItems} onOpenProject={onOpenProject} />
        ) : (
          <motion.div
            className="  border border-white/10 bg-neutral-900/30 p-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-emerald-400 uppercase text-[10px] font-mono tracking-[0.35em] mb-4">
              No matches
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              No portfolio items found.
            </h3>
            <p className="max-w-xl mx-auto text-neutral-400">
              Try another category or reset the filter to view the full collection.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
