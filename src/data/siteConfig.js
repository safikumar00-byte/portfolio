// Site configuration and content management
import { portfolioItems } from './portfolioItems';
import { services } from './services';

export const siteConfig = {
  // Brand & General
  name: 'V Sunil Kumar',
  title: 'UI/UX Designer & Developer',
  siteName: 'V Sunil Kumar',
  tagline: 'UI/UX Designer & Developer',
  locations: ['New York', 'London', 'Tokyo'],
  sectionTitles: {
    aboutMe: 'About Me',
    whatIDo: 'What I Do',
    projects: 'Projects',
    letsBuild: "Let's Build Something Great",
  },
  portfolioCategories: [
    // Design & Creative
    {
      id: 'logos',
      name: 'Logos',
      description: 'Brand identity and logo design',
      icon: 'ph:bezier-curve-light',
      color: 'emerald',
      count: 0
    },
    {
      id: 'presentations',
      name: 'Presentations',
      description: 'Pitch decks and presentation design',
      icon: 'ph:presentation-light',
      color: 'blue',
      count: 0
    },
    {
      id: 'campaign-banners',
      name: 'Campaign Banners',
      description: 'Display advertising and banner creatives',
      icon: 'ph:image-light',
      color: 'purple',
      count: 0
    },
    {
      id: 'brochures',
      name: 'Brochures',
      description: 'Professional brochure design and layout',
      icon: 'ph:book-open-light',
      color: 'teal',
      count: 0
    },
    {
      id: 'ui-ux-designs',
      name: 'UI/UX Designs',
      description: 'User interface and experience design',
      icon: 'ph:palette-light',
      color: 'orange',
      count: 0
    },
    {
      id: 'branding',
      name: 'Branding',
      description: 'Complete brand identity systems',
      icon: 'ph:star-light',
      color: 'yellow',
      count: 0
    },
    {
      id: 'video-edits',
      name: 'Video Edits',
      description: 'Video editing and motion graphics',
      icon: 'ph:video-camera-light',
      color: 'red',
      count: 0
    },
    // Content & Documentation
    {
      id: 'product related proof reading documents',
      name: 'Product Proof Reading',
      description: 'Professional proofreading and editing',
      icon: 'ph:file-text-light',
      color: 'slate',
      count: 0
    },
    // Digital Development
    {
      id: 'campaign-landing-pages',
      name: 'Campaign Landing Pages',
      description: 'High-conversion landing page design',
      icon: 'ph:cursor-click-light',
      color: 'pink',
      count: 0
    },
    {
      id: 'websites',
      name: 'Websites',
      description: 'Full website design and development',
      icon: 'ph:globe-light',
      color: 'cyan',
      count: 0
    },
    {
      id: 'web-applications',
      name: 'Web Applications',
      description: 'Complex web app interfaces',
      icon: 'ph:app-window-light',
      color: 'indigo',
      count: 0
    },
    {
      id: 'mobile-applications',
      name: 'Mobile Applications',
      description: 'Mobile app design and UX',
      icon: 'ph:device-mobile-light',
      color: 'green',
      count: 0
    },
  ],
  portfolioItems,

  // Navigation
  navbar: {
    brand: 'V Sunil Kumar',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'What I Do', href: '#what-i-do' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  // Hero Section
  hero: {
    tagline: 'UI/UX Designer & Developer',
    version: 'Portfolio 2026',
    headline: 'Hi, I’m V Sunil Kumar.',
    subtitle: 'UI/UX Designer & Developer crafting impactful products across web, mobile, branding, and campaign design.',
    buttons: {
      primary: 'Download Resume',
      // secondary: 'Download Resume',
      secondaryHref: '/resume.pdf',
    },
    scrollText: 'SCROLL TO EXPLORE',
    video: {
      src: 'https://cdn.coverr.co/videos/coverr-digital-lines-moving-background-4770/1080p.mp4',
      filter: 'hue-rotate(150deg) contrast(1.2)',
    },
  },

  // Logo Strip / Clients
  clients: [
    { icon: 'simple-icons:openai', width: 24 },
    { icon: 'simple-icons:stripe', width: 40 },
    { icon: 'simple-icons:vercel', width: 24 },
    { icon: 'simple-icons:linear', width: 24 },
    { icon: 'simple-icons:revolut', width: 24 },
  ],

  // Featured Projects
  featuredProjects: [
    {
      id: 1,
      title: 'Novus Protocol',
      image: 'https://images.unsplash.com/photo-1620641788427-b9f4dbfcc338?q=80&w=2574&auto=format&fit=crop',
      category: 'Fintech',
      year: '2024',
      description: 'Redefining institutional trading interfaces with WebGL data visualization and sub-millisecond latency.',
      metrics: [
        { label: 'Impact', value: '+400%', detail: 'Volume processed' },
        { label: 'Stack', value: 'React, Rust, Wasm', detail: '' },
      ],
    },
    {
      id: 2,
      title: 'Astra Grid',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2574&auto=format&fit=crop',
      category: 'SaaS',
      year: '2025',
      description: 'Building a scalable operations dashboard for real-time revenue forecasting and intelligent automation.',
      metrics: [
        { label: 'Growth', value: '+310%', detail: 'Conversion uplift' },
        { label: 'Stack', value: 'Next.js, Node, Tailwind', detail: '' },
      ],
    },
    {
      id: 3,
      title: 'Helix Commerce',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2574&auto=format&fit=crop',
      category: 'Retail',
      year: '2024',
      description: 'A high-conversion commerce experience designed for premium brands and enterprise marketplaces.',
      metrics: [
        { label: 'Revenue', value: '+72%', detail: 'Average order value' },
        { label: 'Stack', value: 'React, Stripe, GraphQL', detail: '' },
      ],
    },
  ],

  // Services/Capabilities
  capabilities: services,

  // Infrastructure/Tech Stack
  infrastructure: {
    title: 'The Substrate.',
    subtitle: 'About Me',
    description: 'I craft intuitive digital products with a focus on meaningful interaction, polished interfaces, and seamless experience across web, mobile, and brand ecosystems.',
    tags: [
      {
        title: 'Modular Architecture',
        techs: 'React / Next.js / Astro',
        icon: 'ph:cube-transparent',
        glow: '#818cf8',
      },
      {
        title: 'Data Liquidity',
        techs: 'Supabase / Postgres / Redis',
        icon: 'ph:database',
        glow: '#818cf8',
      },
      {
        title: 'Global Edge',
        techs: 'Vercel / Cloudflare',
        icon: 'ph:rocket-launch',
        glow: '#818cf8',
      },
    ],
    button: 'Explore Full Stack',
  },

  // Tech Stack Wall Cards (The Infinite Wall)
  techStack: [
    { icon: 'simple-icons:nextdotjs', name: 'Next.js', version: 'v14.0.0 (App Rtr)' },
    { icon: 'simple-icons:react', name: 'React', version: 'Library', color: '#61DAFB' },
    { icon: 'simple-icons:stripe', name: 'Stripe', version: 'Payments', color: '#635BFF' },
    { icon: 'simple-icons:supabase', name: 'Supabase', version: 'Database', color: '#3ECF8E' },
    { icon: 'simple-icons:vercel', name: 'Vercel', version: 'Deployment' },
    { icon: 'simple-icons:linear', name: 'Linear', version: 'Management', color: '#5E6AD2' },
    { icon: 'simple-icons:tailwindcss', name: 'Tailwind', version: 'Styling', color: '#06B6D4' },
    { icon: 'simple-icons:openai', name: 'OpenAI', version: 'Intelligence' },
    { icon: 'simple-icons:github', name: 'GitHub', version: 'VCS' },
    { icon: 'simple-icons:figma', name: 'Figma', version: 'Design', color: '#F24E1E' },
    { icon: 'simple-icons:notion', name: 'Notion', version: 'Wiki' },
  ],

  // Portfolio / Client Intel
  clientCases: [
    {
      id: 1,
      camera: 'CAM_01',
      title: '$5M ARR Scaling',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: 2,
      camera: 'CAM_02',
      title: '60% Cost Reduction',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    },
    {
      id: 3,
      camera: 'CAM_03',
      title: 'Bleeding Edge UI',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: 4,
      camera: 'CAM_04',
      title: 'Lead Flow Automated',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop',
    },
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      quote: 'We needed a Framer site that didn\'t look like a template. Delivered a masterpiece that converts at 12%.',
      author: 'Alex Hormozi',
      company: 'Acquisition.com',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 2,
      quote: 'The rebranding positioned us as the market leader in B2B SaaS. Our valuation doubled in 6 months.',
      author: 'Sarah Chen',
      company: 'Founders Fund',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 3,
      quote: 'Incredible speed. Prototyped with Lovable and scaled with Webflow. The perfect modern approach.',
      author: 'David Park',
      company: 'Y Combinator',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    },
  ],

  // Process/Pipeline
  pipeline: [
    {
      step: '01',
      title: 'Strategic Alignment',
      description: 'Map business objectives to digital opportunities. Identify revenue drivers, user acquisition channels, and competitive advantages that will accelerate growth.',
      businessValue: 'Aligns every pixel with profit centers',
      timeframe: '1-2 weeks',
      deliverables: ['Business Case Analysis', 'ROI Projections', 'Success Metrics']
    },
    {
      step: '02',
      title: 'Experience Design',
      description: 'Craft user journeys that convert browsers to buyers. Design interfaces that reduce friction, increase engagement, and maximize conversion rates.',
      businessValue: 'Turns visitors into revenue streams',
      timeframe: '2-4 weeks',
      deliverables: ['User Flow Maps', 'Wireframes', 'Conversion Optimization Plan']
    },
    {
      step: '03',
      title: 'Technical Execution',
      description: 'Build scalable, performant solutions using modern frameworks. Implement analytics, A/B testing infrastructure, and conversion tracking from day one.',
      businessValue: 'Delivers measurable business results',
      timeframe: '4-8 weeks',
      deliverables: ['Production Application', 'Analytics Setup', 'Performance Benchmarks']
    },
    {
      step: '04',
      title: 'Growth Acceleration',
      description: 'Launch, optimize, and scale. Implement data-driven iterations, marketing integrations, and continuous improvement cycles to maximize ROI.',
      businessValue: 'Compounds returns through optimization',
      timeframe: 'Ongoing',
      deliverables: ['Live Product', 'Growth Roadmap', 'Performance Dashboard']
    },
  ],

  // FAQ
  faqs: [
    {
      question: 'What is the typical deployment velocity?',
      answer: 'Most infrastructure projects are executed in 4-8 week sprints. We prioritize velocity without compromising architectural integrity, utilizing our proprietary component libraries to accelerate the initial build phase.',
    },
    {
      question: 'Do you integrate with internal engineering teams?',
      answer: 'Yes. We often function as a specialized frontend unit, interfacing directly with your backend team via Linear and Slack Connect. We adhere to strict Git workflows and TypeScript standards.',
    },
    {
      question: 'Is post-launch support included?',
      answer: 'We offer "Retainer Protocols" for ongoing optimization, A/B testing, and feature expansion after the initial build is live. This ensures your digital infrastructure evolves with your market.',
    },
    {
      question: 'What is the preferred tech stack?',
      answer: 'Our core competency lies in Next.js, Webflow, and Framer. For web applications, we utilize React/TypeScript and Supabase. We select the stack based on scalability requirements and team capabilities.',
    },
  ],

  // Engagement Models
  engagementModels: [
    {
      id: 1,
      title: 'Dedicated Team',
      subtitle: 'Continuous integration with your product org.',
      icon: 'ph:infinite-light',
      features: [
        '2 Senior Designers',
        'Frontend Engineer',
        'Slack Connect',
        'Linear Integration',
      ],
      cta: 'Request Access',
    },
    {
      id: 2,
      title: 'Strategic Sprint',
      subtitle: 'Fixed-scope execution for critical launches.',
      icon: 'ph:target-light',
      features: [
        'Lovable MVP Build',
        'Brand Overhaul',
        'Webflow/Framer Site',
        'Ad Creatives',
      ],
      cta: 'Initiate Sprint',
    },
  ],

  // Pricing Plans
  pricing: [
    {
      id: 1,
      title: 'Audit',
      subtitle: 'Single Sprint',
      icon: 'ph:lightning-light',
      monthlyPrice: '$4,500',
      annualPrice: '$4,500',
      period: '/one-off',
      recommended: false,
      features: [
        'UX/UI Heuristic Analysis',
        'Performance Report',
        'Conversion Strategy',
        'Figma Delivery',
      ],
      cta: 'Start Audit',
    },
    {
      id: 2,
      title: 'Product Partner',
      subtitle: 'Recurring Ops',
      icon: 'ph:star-four-fill',
      monthlyPrice: '$8,500',
      annualPrice: '$6,800',
      period: '/mo',
      recommended: true,
      features: [
        'Unlimited Design Requests',
        'Frontend Dev (React/Webflow)',
        'Slack Connect Channel',
        '48h Turnaround Time',
        'Pause Anytime',
      ],
      cta: 'Subscribe Now',
    },
    {
      id: 3,
      title: 'Scale',
      subtitle: 'Enterprise',
      icon: 'ph:buildings-light',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      period: '/quote',
      recommended: false,
      features: [
        'Full Design System',
        'Dedicated Squad (3+)',
        'Priority Support',
        'Legal & SLA Contracts',
      ],
      cta: 'Contact Sales',
    },
  ],

  // CTA Section
  cta: {
    capacityMessage: 'Capacity: 2 Slots Remaining',
    heading: 'Ready to initiate?',
    description: 'Secure your production window for Q3. We are currently accepting applications for high-growth ventures seeking architectural overhaul.',
    primaryButton: 'Initialize Project',
    // secondaryLink: 'Pricing Models',
    video: {
      src: 'https://cdn.coverr.co/videos/coverr-digital-lines-moving-background-4770/1080p.mp4',
      filter: 'hue-rotate(240deg) contrast(1.2) saturate(1.2)',
    },
    glowColor: '#a855f7',
  },

  // Footer
  footer: {
    heading: 'V Sunil Kumar',
    cta: 'Start a Project ->',
    copyright: '© 2026 V Sunil Kumar. All rights reserved.',
    sections: {
      sitemap: [
        { label: 'Index', href: '#home' },
        { label: 'Capabilities', href: '#what-i-do' },
        { label: 'Portfolio', href: '#portfolio' },
      ],
      socials: [
        { label: 'Twitter / X', href: '#' },
        { label: 'LinkedIn', href: '#' },
        { label: 'Instagram', href: '#' },
      ],
    },
  },
};
