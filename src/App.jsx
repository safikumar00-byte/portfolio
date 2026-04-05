import React, { useEffect, useState } from 'react';

// Layout Components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Home Components
import { HeroSection } from './components/home/HeroSection';
import { ClientLogos } from './components/home/ClientLogos';
import { AboutPreview } from './components/home/AboutPreview';
import { ServicesPreview } from './components/home/ServicesPreview';

// Portfolio Components
import { FeaturedWork } from './components/portfolio/FeaturedWork';
import { PortfolioFilters } from './components/portfolio/PortfolioFilters';
import { ProcessPipeline } from './components/portfolio/ProcessPipeline';
import { ProcessFAQ } from './components/portfolio/ProcessFAQ';
import { EngagementModels } from './components/portfolio/EngagementModels';
import { PricingPlans } from './components/portfolio/PricingPlans';
import { ContactForm } from './components/portfolio/ContactForm';
import { ProjectModal } from './components/portfolio/ProjectModal';

function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('portfolio-theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useScrollReveal();

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  const openProject = (item) => setSelectedProject(item);
  const closeProject = () => setSelectedProject(null);

  return (
    <div data-theme={theme} className="relative min-h-screen">
      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="z-10 relative">
        {/* Hero Section */}
        <div className="scroll-reveal">
          <HeroSection />
        </div>

        {/* About/Infrastructure Preview */}
        <div className="scroll-reveal">
          <AboutPreview />
        </div>

        {/* Client Logos Strip */}
        <div className="scroll-reveal">
          <ClientLogos />
        </div>

        {/* Featured Work */}
        <div className="scroll-reveal">
          <FeaturedWork />
        </div>

        {/* Services/Capabilities */}
        <div className="scroll-reveal">
          <ServicesPreview />
        </div>

        {/* Process Pipeline */}
        <div className="scroll-reveal">
          <ProcessPipeline />
        </div>

        {/* Portfolio Filters */}
        <div className="scroll-reveal">
          <PortfolioFilters onOpenProject={openProject} />
        </div>



        {/* FAQ Section */}
        {/* <div className="scroll-reveal">
          <ProcessFAQ />
        </div> */}

        {/* Engagement Models */}
        {/* <div className="scroll-reveal">
          <EngagementModels />
        </div> */}

        {/* Pricing Plans */}
        {/* <div className="scroll-reveal">
          <PricingPlans />
        </div> */}

        {/* Contact Form */}
        <div className="scroll-reveal">
          <ContactForm />
        </div>
      </main>

      {/* Footer */}
      <div className="scroll-reveal">
        <Footer />
      </div>

      {/* Project Modal */}
      <ProjectModal item={selectedProject} onClose={closeProject} />
    </div>
  );
}
