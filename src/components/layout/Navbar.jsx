import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import { Button } from '../ui/Button';
import HoverBorderGradient from '../ui/hover-border-gradient';

/**
 * Enhanced Navbar component with robust functionality
 */
export function Navbar({ theme, toggleTheme }) {
  const { navbar, footer } = siteConfig;
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);

  // Handle scroll for navbar background and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Update active section based on viewport intersection
      const sections = ['home', 'about', 'what-i-do', 'projects', 'cobntact'];
      const scrollPosition = scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key and outside click for mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };

    const handleClickOutside = (e) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !mobileMenuButtonRef.current?.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.div
      className="fixed top-0 z-20 w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className={`flex w-full max-w-[1400px] mx-auto items-center justify-between transition-all duration-300 px-6 py-6 ${isScrolled ? 'backdrop-blur-xl bg-black/80 border-b border-white/[0.08]' : ''
        }`}>
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="flex items-center gap-3 z-10 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2 -m-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-4 h-4 bg-white flex items-center justify-center rounded-full"></div>
          <span className="text-xs font-semibold tracking-tight text-white uppercase">
            {navbar.brand}
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-full p-1.5 pr-2 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          {navbar.links.map((link, index) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <motion.button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className={`px-5 py-2 rounded-full text-[11px] font-medium transition-all tracking-wide focus:outline-none focus:ring-2 focus:ring-white/50 ${isActive
                  ? 'bg-white text-black font-semibold hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.button>
            );
          })}

          {/* Social Links */}
          <div className="hidden lg:flex items-center gap-2 ml-2 pl-2 border-l border-white/10">
            {footer.sections.socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-2 text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <iconify-icon icon={`simple-icons:${social.label.toLowerCase().replace(' ', '')}`} width="16" height="16"></iconify-icon>
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle */}
          {/* <Button
            onClick={toggleTheme}
            variant="outline"
            size="sm"
            className="ml-2 text-[11px] uppercase tracking-[0.24em]"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </Button> */}

          {/* Hire Me CTA Button */}
          <HoverBorderGradient
            as="button"
            onClick={() => scrollToSection('#contact')}
            containerClassName="ml-2 px-0 py-0"
            className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white"
            duration={1.2}
          >
            Hire Me
          </HoverBorderGradient>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          ref={mobileMenuButtonRef}
          onClick={handleMenuToggle}
          className="flex md:hidden items-center gap-2 text-[11px] font-medium text-white uppercase tracking-wider hover:opacity-70 transition-opacity z-10 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2 -m-2"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          whileTap={{ scale: 0.95 }}
        >
          Menu
          <motion.span
            className="text-neutral-500"
            animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            +
          </motion.span>
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              className="fixed inset-0 bg-black/80 backdrop-blur-sm md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute top-20 left-6 right-6 bg-black/90 border border-white/10   p-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="space-y-4">
                  {navbar.links.map((link, index) => {
                    const isActive = activeSection === link.href.replace('#', '');
                    return (
                      <motion.button
                        key={index}
                        onClick={() => scrollToSection(link.href)}
                        className={`block w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-white/50 ${isActive
                          ? 'bg-white text-black font-semibold'
                          : 'text-neutral-400 hover:text-white hover:bg-white/5'
                          }`}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.label}
                      </motion.button>
                    );
                  })}

                  {/* Mobile Social Links */}
                  <div className="flex flex-col gap-4 pt-4 border-t border-white/10 mt-6">
                    <Button
                      onClick={toggleTheme}
                      variant="outline"
                      size="sm"
                      className="w-full text-[11px] uppercase tracking-[0.24em]"
                    >
                      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </Button>
                    <div className="flex items-center justify-center gap-4">
                      {footer.sections.socials.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          className="p-3 text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={social.label}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        >
                          <iconify-icon icon={`simple-icons:${social.label.toLowerCase().replace(' ', '')}`} width="20" height="20"></iconify-icon>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Hire Me CTA */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <HoverBorderGradient
                      as="button"
                      onClick={() => scrollToSection('#contact')}
                      className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white"
                      duration={1.2}
                    >
                      Hire Me
                    </HoverBorderGradient>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
}
