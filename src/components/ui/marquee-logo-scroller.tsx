import * as React from 'react';
import { cn } from '../../utils/cn';

interface Logo {
    src: string;
    alt: string;
    href?: string;
    gradient: {
        from: string;
        via: string;
        to: string;
    };
}

interface MarqueeLogoScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    logos: Logo[];
    speed?: 'normal' | 'slow' | 'fast';
}

const MarqueeLogoScroller = React.forwardRef<HTMLDivElement, MarqueeLogoScrollerProps>(
    ({ title, description, logos, speed = 'normal', className, ...props }, ref) => {
        const durationMap = {
            normal: '40s',
            slow: '80s',
            fast: '20s',
        };
        const animationDuration = durationMap[speed];

        return (
            <>
                <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>

                <section
                    ref={ref}
                    aria-label={title}
                    className={cn(
                        'w-full overflow-hidden border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]',
                        className
                    )}
                    {...props}
                >
                    <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-8 pb-6 md:pb-8 border-b border-white/10">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                                {title}
                            </h2>
                            <p className="text-sm md:text-base text-neutral-400 self-start lg:justify-self-end">
                                {description}
                            </p>
                        </div>
                    </div>

                    <div className="marquee-wrapper bg-black/50 px-4 pb-6 md:px-6">
                        <div
                            className="marquee-content flex items-center gap-6 text-white"
                            style={{ animation: `marquee ${animationDuration} linear infinite` }}
                        >
                            {[...logos, ...logos].map((logo, index) => (
                                <a
                                    key={index}
                                    href={logo.href ?? '#'}
                                    target={logo.href ? '_blank' : undefined}
                                    rel={logo.href ? 'noopener noreferrer' : undefined}
                                    title={logo.alt}
                                    className="group relative h-24 w-40 shrink-0 overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20"
                                >
                                    <div
                                        style={{
                                            '--from': logo.gradient.from,
                                            '--via': logo.gradient.via,
                                            '--to': logo.gradient.to,
                                        } as React.CSSProperties}
                                        className="absolute inset-0 scale-150 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100 bg-gradient-to-br from-[var(--from)] via-[var(--via)] to-[var(--to)]"
                                    />
                                    <div className="relative z-10 flex h-full items-center justify-center p-3">
                                        <img
                                            src={logo.src}
                                            alt={logo.alt}
                                            className="h-3/4 w-auto object-contain"
                                        />
                                    </div>
                                    <span className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/80 px-2 py-1 text-[10px] uppercase tracking-[0.24em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                        {logo.alt}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        );
    }
);

MarqueeLogoScroller.displayName = 'MarqueeLogoScroller';

export { MarqueeLogoScroller };
