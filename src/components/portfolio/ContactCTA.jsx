import { siteConfig } from '../../data/siteConfig';
import HoverBorderGradient from '../ui/hover-border-gradient';

export function ContactCTA() {
  const { cta } = siteConfig;

  return (
    <section id="contact" className="py-32 bg-black border-b border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="relative z-10 w-full bg-black border border-white/10   overflow-hidden min-h-[600px] flex flex-col items-center justify-center group isolate">
          {/* Background Video Card */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[80px] mix-blend-screen animate-pulse duration-[8s]"></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
              style={{ filter: cta.video.filter }}
            >
              <source src={cta.video.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_100%)]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center p-8 md:p-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 border border-purple-500/20 rounded-full bg-purple-900/10 backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-[10px] font-mono text-purple-200 uppercase tracking-widest">
                {cta.capacityMessage}
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-8 leading-[0.9]">
              Ready to
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-400 ml-3">
                {cta.heading}?
              </span>
            </h2>
            <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-lg mb-12">
              {cta.description}
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <HoverBorderGradient
                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white"
                duration={1.2}
              >
                {cta.primaryButton}
              </HoverBorderGradient>

              {/* <div className="flex items-center gap-6">
                <a
                  href="#pricing"
                  className="group text-xs font-mono text-neutral-500 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  {cta.secondaryLink}
                  <iconify-icon
                    icon="ph:arrow-right"
                    className="group-hover:translate-x-0.5 transition-transform"
                  ></iconify-icon>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
