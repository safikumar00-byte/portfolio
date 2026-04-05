# Portfolio Project - Refactored Architecture

## Overview

This portfolio project has been refactored from a monolithic `App.jsx` into a fully modular, data-driven component architecture. All branding, content, and configuration are now centralized in `siteConfig.js`, making it easy to customize and maintain.

## Project Structure

```
src/
├── components/
│   ├── layout/                    # Global layout components
│   │   ├── Navbar.jsx             # Navigation bar
│   │   └── Footer.jsx             # Footer section
│   ├── home/                      # Home/Hero page sections
│   │   ├── HeroSection.jsx        # Hero banner with background
│   │   ├── ClientLogos.jsx        # Client logos marquee
│   │   ├── AboutPreview.jsx       # Infrastructure/About section
│   │   └── ServicesPreview.jsx    # Services/Capabilities grid
│   ├── portfolio/                 # Portfolio showcase sections
│   │   ├── FeaturedWork.jsx       # Featured project case study
│   │   ├── PortfolioGrid.jsx      # Client intel/case grid
│   │   ├── PortfolioFilters.jsx   # Testimonials
│   │   ├── ProcessPipeline.jsx    # 4-step process timeline
│   │   ├── ProcessFAQ.jsx         # FAQ accordion
│   │   ├── EngagementModels.jsx   # Service offerings
│   │   ├── PricingPlans.jsx       # Pricing cards
│   │   └── ContactCTA.jsx         # Call-to-action section
│   └── shared/                    # Reusable utility components
│       ├── MagneticButton.jsx     # Magnetic cursor button
│       ├── ScrambleText.jsx       # Scrambling text effect
│       └── SpotlightGrid.jsx      # Spotlight hover effect
├── data/
│   └── siteConfig.js              # Centralized content & config
├── hooks/
│   └── useIntersectionAnimation.js # Intersection observer hook
└── App.jsx                         # Main app component

```

## Configuration Guide

All content, branding, and configuration is managed through [src/data/siteConfig.js](src/data/siteConfig.js).

### Key Config Sections:

#### 1. **Brand & General**
```javascript
siteName: 'Your Portfolio',
tagline: 'Architecting Digital Excellence',
locations: ['New York', 'London', 'Tokyo'],
```

#### 2. **Navigation**
```javascript
navbar: {
  brand: 'Your Brand',
  links: [
    { label: 'Overview', href: '#' },
    { label: 'Ventures', href: '#' },
    // ...
  ],
},
```

#### 3. **Hero Section**
```javascript
hero: {
  tagline: 'System Online',
  version: 'v4.0.2',
  mainHeading: 'Architecting the next web.',
  description: 'We build world-class digital...',
  cta: 'Initiate Protocol',
  // ...
},
```

#### 4. **Testimonials**
```javascript
testimonials: [
  {
    id: 1,
    quote: 'We needed a Framer site that...',
    author: 'Alex Hormozi',
    company: 'Acquisition.com',
    image: 'https://...',
  },
  // ...
],
```

#### 5. **Pricing Plans**
```javascript
pricing: [
  {
    id: 1,
    title: 'Audit',
    monthlyPrice: '$4,500',
    annualPrice: '$4,500',
    features: ['UX/UI Analysis', 'Performance Report', ...],
  },
  // ...
],
```

... and many more sections. See the full file for all available options.

## Customization Examples

### Change Brand Name
Edit [src/data/siteConfig.js](src/data/siteConfig.js):
```javascript
siteName: 'My Amazing Agency',
navbar: {
  brand: 'My Agency',
  // ...
},
footer: {
  heading: 'My Agency',
  // ...
},
```

### Update Services/Capabilities
```javascript
capabilities: [
  {
    id: 1,
    title: 'Web Development',
    icon: 'ph:code-light',
    color: 'blue',
    items: [
      { name: 'React/Next.js', number: '01' },
      { name: 'Full Stack', number: '02' },
      // ...
    ],
  },
  // ...
],
```

### Add New Testimonials
```javascript
testimonials: [
  // Existing testimonials...
  {
    id: 4,
    quote: '"Your new testimonial here"',
    author: 'Client Name',
    company: 'Company Name',
    image: 'https://images.unsplash.com/...',
  },
],
```

### Modify Color Schemes
The project uses Tailwind CSS color classes. Update specific section colors by modifying the component className or the siteConfig color references:

```javascript
// In AboutPreview or other components
infrastructure: {
  tag: { color: 'purple' },  // Change from indigo to purple
},
```

## Component Examples

### Using siteConfig in a Component
```javascript
import { siteConfig } from '../../data/siteConfig';

export function MyComponent() {
  const { testimonials } = siteConfig;
  
  return (
    <div>
      {testimonials.map((item) => (
        <div key={item.id}>
          <p>{item.quote}</p>
          <h3>{item.author}</h3>
        </div>
      ))}
    </div>
  );
}
```

### Adding a New Section
1. Create a new component file in appropriate folder
2. Import siteConfig data
3. Add new data object to siteConfig.js
4. Import and use in App.jsx

Example:
```javascript
// components/portfolio/NewSection.jsx
import { siteConfig } from '../../data/siteConfig';

export function NewSection() {
  const { myNewData } = siteConfig;
  
  return (
    <section>
      {/* Your JSX here */}
    </section>
  );
}
```

Then in App.jsx:
```javascript
import { NewSection } from './components/portfolio/NewSection';

export default function App() {
  return (
    // ...
    <NewSection />
    // ...
  );
}
```

## Styling

- **Framework**: Tailwind CSS
- **Colors**: Dark theme (black background, white text)
- **Typography**: Inter font family
- **Utilities**: 
  - `SpotlightGrid` - Mouse tracking spotlight effect
  - `MagneticButton` - Magnetic cursor interaction
  - `ScrambleText` - Text scramble animation

## Data-Driven Architecture

All content is now configuration-based, meaning:
- ✅ No hardcoded text in components
- ✅ Easy to update content without touching JSX
- ✅ Centralized configuration management
- ✅ Scalable and maintainable structure

## Removed Dependencies

- ❌ "Designflo" branding (replaced with configurable brand)
- ❌ Hardcoded content (now in siteConfig.js)
- ❌ Scattered component imports (centralized in App.jsx)

## Getting Started

1. **Update `siteConfig.js`** with your brand, content, and services
2. **Customize colors** in Tailwind classes within components
3. **Add new testimonials/projects** in the config
4. **Run**: `npm run dev`
5. **Build**: `npm run build`

## File Sizes Comparison

### Before Refactoring
- App.jsx: ~1400 lines (monolithic)

### After Refactoring
- App.jsx: ~48 lines (clean, organized)
- siteConfig.js: ~300 lines (all content)
- 14 focused components: ~100-200 lines each

## Best Practices

1. **Don't edit components directly for content changes** - Use siteConfig.js
2. **Keep components focused** - Each component handles one section
3. **Use semantic HTML** - Maintain accessibility
4. **Prop drilling**: Components pull from siteConfig as needed
5. **Reusability**: Shared components in `/shared` folder

## Next Steps

- Add state management for dynamic data
- Implement API integration for testimonials/projects
- Add CMS integration for content management
- Deploy to Vercel or similar platform
- Set up GitHub CI/CD pipeline

---

**Happy building! 🚀**
