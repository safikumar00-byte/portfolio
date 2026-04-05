import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import HoverBorderGradient from '../ui/hover-border-gradient';

export function AboutPreview() {
  const { infrastructure } = siteConfig;

  return (
    <section id="about" className="relative bg-black border-b border-white/5 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row min-h-[900px]">
        {/* Left: Typography Content */}
        <div className="w-full md:w-[40%] px-6 py-20 md:py-32 flex flex-col justify-center relative z-20 bg-gradient-to-r from-black via-black to-transparent">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-white/10 rounded-full bg-white/5 self-start">
            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest">
              {infrastructure.subtitle}
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8 leading-[0.9]">
            The
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-500">
              {infrastructure.title}
            </span>
          </h2>

          <div className="space-y-8 max-w-sm">
            <p className="text-neutral-400 text-lg font-light leading-relaxed">
              {infrastructure.description}
            </p>

            <div className="flex flex-col gap-4">
              {infrastructure.tags.map((tag, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                      <iconify-icon icon={tag.icon} className="text-neutral-400 group-hover:text-white transition-colors"></iconify-icon>
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{tag.title}</div>
                    <div className="text-[10px] text-neutral-500 font-mono uppercase">{tag.techs}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <HoverBorderGradient
                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white"
                duration={1.2}
              >
                {infrastructure.button}
              </HoverBorderGradient>
            </div>
          </div>
        </div>

        {/* Right: The Infinite 3D Wall (Graphic) */}
        <div className="absolute right-[-10%] md:right-[-5%] top-[-10%] bottom-[-10%] w-[120%] md:w-[70%] wall-container overflow-hidden pointer-events-none md:pointer-events-auto">
          <div className="wall-grid h-full w-full flex gap-6 px-10">
            {/* Column 1 (Scroll Up) */}
            <div className="wall-column wall-column-up flex flex-col gap-6 w-full">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={`col1-${i}`}>
                  {siteConfig.techStack.slice(0, 4).map((tech, idx) => (
                    <div key={idx} className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <iconify-icon
                          icon={tech.icon}
                          width="32"
                          className="text-white"
                          style={tech.color ? { color: tech.color } : undefined}
                        ></iconify-icon>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                      </div>
                      <div>
                        <div className="text-sm font-mono text-white/80">{tech.name}</div>
                        <div className="text-[9px] font-mono text-neutral-500">{tech.version}</div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>

            {/* Column 2 (Scroll Down) */}
            <div className="wall-column wall-column-down flex flex-col gap-6 w-full pt-12">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={`col2-${i}`}>
                  {siteConfig.techStack.slice(4, 8).map((tech, idx) => (
                    <div key={idx} className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <iconify-icon
                          icon={tech.icon}
                          width="32"
                          className="text-white"
                          style={tech.color ? { color: tech.color } : undefined}
                        ></iconify-icon>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                      </div>
                      <div>
                        <div className="text-sm font-mono text-white/80">{tech.name}</div>
                        <div className="text-[9px] font-mono text-neutral-500">{tech.version}</div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>

            {/* Column 3 (Scroll Up) */}
            <div className="wall-column wall-column-up flex flex-col gap-6 w-full pt-24 hidden lg:flex">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={`col3-${i}`}>
                  {siteConfig.techStack.slice(8).map((tech, idx) => (
                    <div key={idx} className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <iconify-icon
                          icon={tech.icon}
                          width="32"
                          className="text-white"
                          style={tech.color ? { color: tech.color } : undefined}
                        ></iconify-icon>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                      </div>
                      <div>
                        <div className="text-sm font-mono text-white/80">{tech.name}</div>
                        <div className="text-[9px] font-mono text-neutral-500">{tech.version}</div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Heavy Masking on the Wall to Blend it */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
