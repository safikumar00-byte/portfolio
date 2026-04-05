import { siteConfig } from '../../data/siteConfig';
import HoverBorderGradient from '../ui/hover-border-gradient';

export function EngagementModels() {
  const { engagementModels } = siteConfig;

  return (
    <section className="py-32 bg-black border-b border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/5 pb-10">
          <div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase mb-4">
              06 — Partnership
            </div>
            <h2 className="text-4xl font-medium tracking-tight text-white">
              Engagement Models
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-sm text-right">
            Flexible structures for high-velocity teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {engagementModels.map((model) => (
            <div
              key={model.id}
              className="group relative overflow-hidden   border border-white/10 bg-neutral-950/80 p-10 transition-all duration-500 hover:border-white/20 hover:bg-neutral-900/80 hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400/30 via-transparent to-violet-400/30 opacity-80"></div>
              <div className="absolute top-6 right-6 text-white/20 group-hover:text-white/40 transition-colors">
                <iconify-icon icon={model.icon} width="32"></iconify-icon>
              </div>
              <div className="relative z-10 mb-10">
                <h3 className="text-2xl font-semibold text-white mb-3">{model.title}</h3>
                <p className="text-sm text-neutral-400 max-w-xl">
                  {model.subtitle}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-y-4 mb-10">
                {model.features.map((feature, idx) => (
                  <div key={idx} className="text-sm text-neutral-300 flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <HoverBorderGradient
                className="w-full text-[10px] font-semibold uppercase tracking-[0.24em] text-white"
                containerClassName="w-full"
                duration={1.2}
              >
                {model.cta}
              </HoverBorderGradient>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
