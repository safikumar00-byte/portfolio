import { siteConfig } from '../../data/siteConfig';

export function ProcessFAQ() {
  const { faqs } = siteConfig;

  return (
    <section className="border-b border-white/5 bg-black py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-[10px] font-mono text-neutral-500 uppercase mb-4">
              05 — Protocols
            </div>
            <h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-6">
              Operational
              <br />
              Queries
            </h2>
            <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
              Standard configurations and compatibility checks for new partners.
            </p>
          </div>
          <div className="lg:col-span-8 border-t border-white/10">
            {faqs.map((faq, idx) => (
              <div key={idx} className="group border-b border-white/10">
                <details className="group">
                  <summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none">
                    <span className="text-white font-medium tracking-tight">
                      {faq.question}
                    </span>
                    <span className="text-neutral-500 font-mono text-xs group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <div className="pb-6 text-neutral-400 text-sm leading-relaxed max-w-2xl overflow-hidden">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
