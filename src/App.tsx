import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Shield, Vote, ExternalLink, Sparkles, PhoneCall } from 'lucide-react';

import Hero from './components/Hero';
import ActionPlan from './components/ActionPlan';
import Manifesto from './components/Manifesto';
import WhatsAppShare from './components/WhatsAppShare';
import SupportWall from './components/SupportWall';
import CorbettPride from './components/CorbettPride';
import Footer from './components/Footer';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Action Plan', id: 'action-plan' },
    { label: 'Manifesto', id: 'manifesto' },
    { label: 'Supporters', id: 'support-wall' },
    { label: 'Spirit Hub', id: 'corbett-pride' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy trigger
      const scrollPos = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky nav bar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#320a0d] text-brand-cream overflow-x-hidden font-serif selection:bg-brand-gold/30 selection:text-brand-cream">
      
      {/* Decorative ambient lighting backdrops */}
      <div className="fixed top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-red/10 blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[150px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-10 w-[350px] h-[350px] rounded-full bg-brand-emerald/5 blur-[120px] pointer-events-none -z-10" />

      {/* Campaign Top Info-Bar (Telugu Community Notice) */}
      <div className="bg-gradient-to-r from-brand-maroon via-brand-red to-brand-maroon text-brand-cream text-center py-2.5 px-4 border-b-2 border-brand-gold/20 text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 z-50 relative print:hidden font-cinzel uppercase">
        <Sparkles size={12} className="text-brand-gold animate-pulse" />
        <span>Empowering Corbett House students across AP & TS for connection & collaboration!</span>
        <span className="hidden sm:inline-block text-[10px] bg-brand-gold/15 text-brand-gold px-1.5 py-0.5 rounded border border-brand-gold/30 font-bold ml-1.5 font-cinzel">Elections 2026</span>
      </div>

      {/* Sticky Navigation Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 print:hidden ${
        isScrolled 
          ? 'bg-[#4a0e0e]/95 backdrop-blur-md border-b-2 border-brand-gold/30 shadow-lg' 
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand Icon */}
          <motion.button 
            onClick={() => scrollToSection('home')} 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 group text-left"
          >
            <div className="p-2 rounded bg-brand-gold shadow-md group-hover:scale-105 transition-transform duration-300 border border-brand-gold">
              <Shield className="text-brand-maroon w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-black tracking-widest text-brand-gold block uppercase leading-none font-cinzel">BHARATH KUMAR</span>
              <span className="text-[10px] font-mono font-semibold text-brand-cream tracking-wider mt-0.5 block">Candidate for Corbett RC</span>
            </div>
          </motion.button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05, color: '#d4af37' }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 text-xs font-black font-cinzel uppercase rounded tracking-wider transition-all ${
                  activeSection === item.id
                    ? 'text-brand-gold bg-brand-gold/10 border border-brand-gold/30 shadow-inner'
                    : 'text-brand-cream/70 hover:bg-brand-cream/5 border border-transparent'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Call to action "VOTE NOW" Button */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="https://elections.iitmbs.org/vote"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-4.5 py-2.5 bg-brand-gold hover:bg-brand-cream text-brand-maroon font-cinzel font-black uppercase text-xs rounded tracking-wider shadow transition-all flex items-center gap-1.5 border border-brand-gold cursor-pointer"
            >
              <Vote size={14} />
              Vote Now
              <ExternalLink size={10} />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2 text-brand-cream hover:text-brand-gold hover:bg-brand-cream/5 rounded transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden sticky top-20 left-0 w-full bg-brand-maroon border-b border-brand-gold/30 shadow-2xl z-30 print:hidden"
          >
            <div className="px-4 py-6 space-y-4 text-left max-w-sm mx-auto">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.02, x: 5, color: '#d4af37' }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-3 text-sm font-bold font-cinzel uppercase tracking-wider rounded text-left transition-colors ${
                      activeSection === item.id
                        ? 'text-brand-gold bg-brand-gold/10 border border-brand-gold/20'
                        : 'text-brand-cream/85 hover:bg-brand-cream/5'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-brand-gold/20">
                <motion.a
                  href="https://elections.iitmbs.org/vote"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-brand-gold text-brand-maroon border border-brand-gold font-cinzel font-black uppercase text-xs rounded flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Vote size={14} />
                  Cast Your Vote Online
                  <ExternalLink size={12} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content Stream */}
      <main className="relative">
        <Hero scrollToSection={scrollToSection} />
        <ActionPlan />
        <Manifesto />
        <WhatsAppShare />
        <CorbettPride />
        <SupportWall />
      </main>

      {/* Footer block */}
      <Footer scrollToSection={scrollToSection} />

    </div>
  );
}
