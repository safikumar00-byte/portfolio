import { MarqueeLogoScroller } from '../ui/marquee-logo-scroller';

const partners = [
  {
    src: new URL('../../assets/images/brands/bug-blooms.png', import.meta.url).href,
    alt: 'Bug Blooms',
    href: 'https://bug-blooms.com',
    gradient: { from: '#5C8EFF', via: '#1F56FF', to: '#102C7A' },
  },
  {
    src: new URL('../../assets/images/brands/cvm logo.png', import.meta.url).href,
    alt: 'CVM Logo',
    href: 'https://cvm-logo.com',
    gradient: { from: '#F3A260', via: '#E36A27', to: '#8E3C0B' },
  },
  {
    src: new URL('../../assets/images/brands/dreamruppee.svg', import.meta.url).href,
    alt: 'Dream Rupee',
    href: 'https://dreamrupee.com',
    gradient: { from: '#27C5A4', via: '#10806B', to: '#08372F' },
  },
  {
    src: new URL('../../assets/images/brands/instantcredit.png', import.meta.url).href,
    alt: 'Instant Credit',
    href: 'https://instantcredit.com',
    gradient: { from: '#F6D55C', via: '#E89C1F', to: '#8A5C12' },
  },
  {
    src: new URL('../../assets/images/brands/karyotica labs.png', import.meta.url).href,
    alt: 'Karyotica Labs',
    href: 'https://karyoticalabs.com',
    gradient: { from: '#B664FF', via: '#7A3EF4', to: '#3E1F8F' },
  },
  {
    src: new URL('../../assets/images/brands/keytoloans.png', import.meta.url).href,
    alt: 'Key To Loans',
    href: 'https://keytoloans.com',
    gradient: { from: '#A5F0E3', via: '#4BD6C8', to: '#1E8073' },
  },
  {
    src: new URL('../../assets/images/brands/lendingind.png', import.meta.url).href,
    alt: 'Lending Ind',
    href: 'https://lendingind.com',
    gradient: { from: '#E36FFF', via: '#9D3BFF', to: '#4A198F' },
  },
  {
    src: new URL('../../assets/images/brands/lowcredit.png', import.meta.url).href,
    alt: 'Low Credit',
    href: 'https://lowcredit.com',
    gradient: { from: '#FF7A66', via: '#D84A28', to: '#7B1A0E' },
  },
  {
    src: new URL('../../assets/images/brands/moon-safe.png', import.meta.url).href,
    alt: 'Moon Safe',
    href: 'https://moon-safe.com',
    gradient: { from: '#8C95FF', via: '#4C55F7', to: '#1E2A92' },
  },
  {
    src: new URL('../../assets/images/brands/party-perfkt.png', import.meta.url).href,
    alt: 'Party Perfkt',
    href: 'https://party-perfkt.com',
    gradient: { from: '#FF65A8', via: '#D92A7D', to: '#73174F' },
  },
  {
    src: new URL('../../assets/images/brands/rummyspark.png', import.meta.url).href,
    alt: 'Rummy Spark',
    href: 'https://rummyspark.com',
    gradient: { from: '#95FF8E', via: '#4ACF4E', to: '#1E5D25' },
  },
  {
    src: new URL('../../assets/images/brands/sfx.png', import.meta.url).href,
    alt: 'SFX',
    href: 'https://sfx.com',
    gradient: { from: '#F2F267', via: '#D6C22A', to: '#7B6F14' },
  },
  {
    src: new URL('../../assets/images/brands/tejkun.png', import.meta.url).href,
    alt: 'Tejkun',
    href: 'https://tejkun.com',
    gradient: { from: '#FFB86C', via: '#F58F32', to: '#7C4C14' },
  },
  {
    src: new URL('../../assets/images/brands/turbopaisa.png', import.meta.url).href,
    alt: 'Turbo Paisa',
    href: 'https://turbopaisa.com',
    gradient: { from: '#69FFD4', via: '#2AD29F', to: '#12674E' },
  },
  {
    src: new URL('../../assets/images/brands/urban-sprouts.png', import.meta.url).href,
    alt: 'Urban Sprouts',
    href: 'https://urban-sprouts.com',
    gradient: { from: '#94FFBB', via: '#4ECF7F', to: '#1B5B36' },
  },
  {
    src: new URL('../../assets/images/brands/visionaries ai.jpg', import.meta.url).href,
    alt: 'Visionaries AI',
    href: 'https://visionariesai.com',
    gradient: { from: '#B47CFF', via: '#7A4AFF', to: '#3F1F83' },
  },
];

export function ClientLogos() {
  return (
    <section id="clients" className="border-b border-white/5 bg-black">
      <div className="max-w-[1400px] mx-auto px-6">
        <MarqueeLogoScroller
          title="Trusted by Businesses Worldwide"
          description="Founders, developers, and business leaders across the globe choose us for their digital asset operations."
          logos={partners}
          speed="normal"
        />
      </div>
    </section>
  );
}
