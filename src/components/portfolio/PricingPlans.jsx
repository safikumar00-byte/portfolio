import { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import HoverBorderGradient from '../ui/hover-border-gradient';

export function PricingPlans() {
  const { pricing } = siteConfig;
  const [isAnnualPricing, setIsAnnualPricing] = useState(true);

  return (
    <section id="pricing" className="py-32 bg-black border-b border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase mb-4">
              07 — Investment
            </div>
            <h2 className="text-4xl font-medium tracking-tight text-white">
              Transparent Protocols
            </h2>
          </div>

          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <span className="text-xs font-medium text-white">Monthly</span>
            <button
              type="button"
              aria-pressed={isAnnualPricing}
              onClick={() => setIsAnnualPricing(!isAnnualPricing)}
              className={`toggle-switch ${isAnnualPricing ? 'active' : ''}`}
            ></button>
            <span className="text-xs font-medium text-neutral-500">
              Quarterly <span className="text-emerald-500 text-[10px] ml-1">-20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 flex flex-col justify-between group ${
                plan.recommended
                  ? 'border border-emerald-500/30'
                  : 'border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-900/50 border border-emerald-500/30 rounded-full backdrop-blur-md">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                    Recommended
                  </span>
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-lg font-medium text-white">{plan.title}</h3>
                    <p className="text-xs text-neutral-500 mt-1">{plan.subtitle}</p>
                  </div>
                  <iconify-icon
                    icon={plan.icon}
                    className={plan.recommended ? 'text-emerald-500 text-xl' : 'text-neutral-600 text-xl'}
                  ></iconify-icon>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-medium tracking-tighter text-white">
                    {isAnnualPricing ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">{plan.period}</span>
                </div>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center gap-3 text-sm ${
                      plan.recommended ? 'text-white' : 'text-neutral-400'
                    }`}>
                      <iconify-icon
                        icon={plan.recommended ? 'ph:check-circle-fill' : 'ph:check'}
                        className={plan.recommended ? 'text-emerald-500' : 'text-white'}
                      ></iconify-icon>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <HoverBorderGradient
                className="w-full text-[11px] font-mono uppercase tracking-widest text-white"
                containerClassName="w-full"
                duration={1.2}
              >
                {plan.cta}
              </HoverBorderGradient>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
