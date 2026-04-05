import { siteConfig } from '../../data/siteConfig';
import { SpotlightGrid } from '../shared/SpotlightGrid';

export function ServicesPreview() {
  const { capabilities, sectionTitles } = siteConfig;

  return (
    <section id="what-i-do" className="border-b border-white/5 bg-black py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-end justify-between mb-24">
          <div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase mb-4">
              {sectionTitles.whatIDo}
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white max-w-2xl leading-[1.05]">
              Full-stack design engineering for
              <span className="text-neutral-600"> mission critical </span>
              applications.
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-[10px] font-mono text-neutral-500 uppercase mb-1">
              Architecture
            </div>
            <div className="text-white font-mono text-sm">v3.0.1</div>
          </div>
        </div>

        {/* Schematic Grid */}
        <SpotlightGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="group relative overflow-hidden   border border-white/10 bg-neutral-950/80 p-8 transition-all duration-500 hover:border-white/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400/30 via-transparent to-purple-400/30 opacity-80"></div>
              <div className="relative z-10">
                <div className="mb-8 flex h-14 w-14 items-center justify-center   bg-white/5 text-white/80 transition-colors group-hover:bg-white/10">
                  <iconify-icon icon={capability.icon} width="28"></iconify-icon>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                <ul className="space-y-3">
                  {capability.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between text-sm text-neutral-400 transition-colors group-hover:text-white border-b border-white/5 pb-3"
                    >
                      <span className="flex items-center gap-2">
                        {item.name}
                        {item.popular && (
                          <span className="inline-flex items-center px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.15em] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded">
                            Popular
                          </span>
                        )}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                        {item.number}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </SpotlightGrid>
      </div>
    </section>
  );
}
