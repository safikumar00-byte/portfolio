import { siteConfig } from '../../data/siteConfig';

export function Footer() {
  const { footer, locations } = siteConfig;

  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-white opacity-90 select-none hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-t hover:from-neutral-800 hover:to-white transition-all duration-700 cursor-default">
            {footer.heading}
          </div>
          <div className="flex flex-col gap-4 text-right mb-4">
            <a href="#contact" className="text-lg text-neutral-400 hover:text-white transition-colors">
              {footer.cta}
            </a>
            <div className="text-sm text-neutral-600">
              {locations.join(' • ')}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          <div>
            <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4">
              Sitemap
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              {footer.sections.sitemap.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4">
              Socials
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              {footer.sections.socials.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 text-right">
            <p className="text-[10px] font-mono uppercase text-neutral-600">
              System Status:
              <span className="text-emerald-500 ml-1">Normal</span>
            </p>
            <p className="text-[10px] font-mono uppercase text-neutral-600 mt-1">
              {footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
