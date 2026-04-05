import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { siteConfig } from '../../data/siteConfig';
import HoverBorderGradient from '../ui/hover-border-gradient';

export function ContactForm() {
  const { cta } = siteConfig;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch
  } = useForm({
    mode: 'onChange'
  });

  const projectTypes = [
    'Website Development',
    'Mobile App',
    'Brand Identity',
    'UI/UX Design',
    'Campaign Design',
    'Video Production',
    'Consulting',
    'Other'
  ];

  const budgets = [
    'Under $10K',
    '$10K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K+',
    'Let\'s discuss'
  ];

  const timelines = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // EmailJS configuration - you'll need to set these up in your EmailJS dashboard
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key';

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        company: data.company || 'Not specified',
        project_type: data.projectType || 'Not specified',
        budget: data.budget || 'Not specified',
        timeline: data.timeline || 'Not specified',
        message: data.message,
        to_email: 'your-email@example.com', // Replace with your email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const watchedFields = watch();

  if (isSubmitted) {
    return (
      <section id="contact" className="py-32 bg-black border-b border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            className="relative z-10 w-full bg-black border border-white/10   overflow-hidden min-h-[600px] flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background Video Card */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[80px] mix-blend-screen animate-pulse duration-[8s]"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
                style={{ filter: 'hue-rotate(120deg) contrast(1.2) saturate(1.2)' }}
              >
                <source src={cta.video.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_100%)]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            {/* Success Content */}
            <motion.div
              className="relative z-10 flex flex-col items-center text-center p-8 md:p-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 mb-10 border border-green-500/20 rounded-full bg-green-900/10 backdrop-blur-xl shadow-[0_0_20px_rgba(34,197,94,0.1)]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              >
                <span className="relative flex h-2 w-2">
                  <motion.span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono text-green-200 uppercase tracking-widest">
                  Message Sent
                </span>
              </motion.div>
              <motion.h2
                className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-8 leading-[0.9]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Thank You!
              </motion.h2>
              <motion.p
                className="text-neutral-400 text-lg font-light leading-relaxed max-w-lg mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Your message has been received. I'll get back to you within 24 hours to discuss your project.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <HoverBorderGradient
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-white"
                  duration={1.2}
                >
                  Send Another Message
                </HoverBorderGradient>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 bg-black border-b border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          className="relative z-10 w-full bg-black border border-white/10   overflow-hidden min-h-[800px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Video Card */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[80px] mix-blend-screen animate-pulse duration-[8s]"></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
              style={{ filter: cta.video.filter }}
            >
              <source src={cta.video.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_100%)]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          </div>

          {/* Form Content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-purple-500/20 rounded-full bg-purple-900/10 backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  <span className="text-[10px] font-mono text-purple-200 uppercase tracking-widest">
                    {cta.capacityMessage}
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6 leading-[0.9]">
                  Ready to
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-400 ml-3">
                    {cta.heading}?
                  </span>
                </h2>
                <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                  {cta.description}
                </p>
              </motion.div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', {
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-purple-500'
                        }`}
                      placeholder="Your full name"
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          className="text-red-400 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {errors.name.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address'
                        }
                      })}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-purple-500'
                        }`}
                      placeholder="your@email.com"
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          className="text-red-400 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      {...register('company')}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-neutral-300 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      {...register('projectType')}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                    >
                      <option value="" className="bg-black">Select project type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type} className="bg-black">{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-neutral-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      {...register('budget')}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                    >
                      <option value="" className="bg-black">Select budget</option>
                      {budgets.map(budget => (
                        <option key={budget} value={budget} className="bg-black">{budget}</option>
                      ))}
                    </select>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <label htmlFor="timeline" className="block text-sm font-medium text-neutral-300 mb-2">
                    Preferred Timeline
                  </label>
                  <select
                    id="timeline"
                    {...register('timeline')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                  >
                    <option value="" className="bg-black">Select timeline</option>
                    {timelines.map(timeline => (
                      <option key={timeline} value={timeline} className="bg-black">{timeline}</option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    {...register('message', {
                      required: 'Project details are required',
                      minLength: { value: 10, message: 'Please provide more details (at least 10 characters)' }
                    })}
                    rows={4}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-purple-500'
                      }`}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        className="text-red-400 text-sm mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {errors.message.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                <AnimatePresence>
                  {submitError && (
                    <motion.div
                      className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <p className="text-red-400 text-sm">{submitError}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <HoverBorderGradient
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className={`w-full sm:w-auto px-8 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-white ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    containerClassName={`w-full sm:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    duration={1.2}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        Sending...
                      </motion.div>
                    ) : (
                      cta.primaryButton
                    )}
                  </HoverBorderGradient>

                  {/* <div className="flex items-center gap-6">
                    <a
                      href="#pricing"
                      className="group text-xs font-mono text-neutral-500 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2"
                    >
                      {cta.secondaryLink}
                      <iconify-icon
                        icon="ph:arrow-right"
                        className="group-hover:translate-x-0.5 transition-transform"
                      ></iconify-icon>
                    </a>
                  </div> */}
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}