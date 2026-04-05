import UnicornScene from 'unicornstudio-react';
import { useIntersectionAnimation } from '../../hooks/useIntersectionAnimation';
import { useParallax } from '../../hooks/useParallax';
import { ScrambleText } from '../shared/ScrambleText';
import HoverBorderGradient from '../ui/hover-border-gradient';
import { siteConfig } from '../../data/siteConfig';

export function HeroSection() {
  const heroTaglineRef = useIntersectionAnimation();
  const heroHeadingRef = useIntersectionAnimation();
  const heroContentRef = useIntersectionAnimation();
  const parallaxVideoRef = useParallax(0.3);
  const parallaxAuraRef = useParallax(0.2);
  const { hero } = siteConfig;

  return (
    <>
      {/* Hero Video Background */}
      <div ref={parallaxVideoRef} className="fixed inset-0 -z-30 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 mix-blend-screen"
          style={{ filter: hero.video.filter }}
        >
          <source src={hero.video.src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>

      {/* Aura Background */}
      <div
        ref={parallaxAuraRef}
        className="aura-background-component top-0 w-full mix-blend-screen -z-20 absolute h-[1200px]"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
        }}
      >
        <div className="aura-background-component top-0 w-full -z-10 absolute h-full pointer-events-none">
          <UnicornScene projectId="ILgOO23w4wEyPQOKyLO4" />
        </div>
      </div>

      {/* Technical Grid Overlay (Global) */}
      <div className="fixed inset-0 pointer-events-none z-0 technical-grid opacity-30"></div>

      {/* Vertical Structure Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 max-w-[1400px] mx-auto border-x border-white/[0.04]">
        <div className="absolute left-1/4 h-full w-px bg-white/[0.02]"></div>
        <div className="absolute left-2/4 h-full w-px bg-white/[0.02]"></div>
        <div className="absolute left-3/4 h-full w-px bg-white/[0.02]"></div>
      </div>

      {/* Hero Content */}
      <section id="home" className="z-10 relative max-w-[1400px] mx-auto px-6 pb-40 pt-32 border-b border-white/5">
        <div className="max-w-5xl">
          <div
            ref={heroTaglineRef}
            className="inline-flex items-center gap-3 px-3 py-1.5 mb-10 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]"
          >
            <div className="flex items-center gap-2 px-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <ScrambleText
                text={hero.tagline}
                className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest cursor-default"
              />
            </div>
            <div className="h-3 w-px bg-white/10"></div>
            <span className="text-[10px] text-neutral-400 font-mono">{hero.version}</span>
          </div>

          <h1
            ref={heroHeadingRef}
            className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-6xl md:text-8xl lg:text-[7rem] font-medium tracking-tighter text-white leading-[0.9] mb-12"
          >
            {hero.headline}
          </h1>

          <div
            ref={heroContentRef}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]"
          >
            <p className="text-lg text-neutral-400 max-w-xl leading-relaxed font-light">
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <HoverBorderGradient
                className="group px-8 py-4 text-xs font-bold uppercase tracking-widest text-white"
                duration={1.2}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <a
                    href={hero.buttons.secondaryHref}
                    className="inline-flex items-center justify-center text-nowrap text-xs font-bold uppercase tracking-widest text-white border border-white/10 rounded-full transition hover:bg-white/10"
                  >
                    {hero.buttons.primary}
                  </a>
                  <iconify-icon
                    icon="ph:arrow-down"
                    className="transition-transform group-hover:translate-x-1"
                  ></iconify-icon>
                </span>
              </HoverBorderGradient>
              <div className="h-px w-12 bg-white/20 hidden sm:block"></div>
              <span className="text-[10px] font-mono text-neutral-500">
                {hero.scrollText}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
