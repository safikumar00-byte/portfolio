import { motion } from 'framer-motion';
import { usePortfolioFilter } from '../../hooks/usePortfolioFilter';
import { siteConfig } from '../../data/siteConfig';

/**
 * PortfolioCard component for displaying individual portfolio items
 * @param {Object} props
 * @param {Object} props.item - Portfolio item data
 * @param {Function} props.onOpen - Function to open project modal
 */
export function PortfolioCard({ item, onOpen }) {
  const { portfolioCategories } = siteConfig;
  const { getItemCategories } = usePortfolioFilter([], portfolioCategories);
  const itemCategories = getItemCategories(item);

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      className="group relative text-left overflow-hidden   border border-white/10 bg-neutral-950/80 transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.45)] hover:border-white/20"
      aria-label={`Open project details for ${item.title}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-72 overflow-hidden bg-neutral-900">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${item.gallery?.[0] || '/placeholder.jpg'}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Categories */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {itemCategories.slice(0, 2).map((category, index) => (
            <motion.span
              key={category.id}
              className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/90 ${
                category.color === 'emerald' ? 'bg-emerald-500/20 border border-emerald-500/30' :
                category.color === 'blue' ? 'bg-blue-500/20 border border-blue-500/30' :
                category.color === 'purple' ? 'bg-purple-500/20 border border-purple-500/30' :
                'bg-gray-500/20 border border-gray-500/30'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {category.name}
            </motion.span>
          ))}
          {itemCategories.length > 2 && (
            <span className="rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/90">
              +{itemCategories.length - 2}
            </span>
          )}
        </div>

        {/* Featured badge */}
        {item.featured && (
          <div className="absolute top-4 right-4">
            <span className="rounded-full bg-emerald-500 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-black font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="text-sm font-mono uppercase tracking-[0.2em] text-neutral-400 mb-3">
          {item.timeline} · {item.role}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-neutral-300 leading-relaxed mb-4 line-clamp-2">
          {item.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tools?.slice(0, 3).map((tool, index) => (
            <motion.span
              key={tool}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-neutral-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              {tool}
            </motion.span>
          ))}
          {item.tools?.length > 3 && (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              +{item.tools.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.button>
  );
}
