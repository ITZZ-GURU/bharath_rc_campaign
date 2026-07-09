import React from 'react';
import { Mail, Instagram, Vote, ArrowUp, Shield, HelpCircle } from 'lucide-react';

export default function Footer({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#4a0e0e] border-t-2 border-brand-gold text-brand-cream/70 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Candidate campaign details */}
          <div className="md:col-span-5 space-y-4 text-left">
            <h4 className="text-brand-gold font-black font-cinzel tracking-widest text-lg flex items-center gap-2">
              <Shield className="text-brand-gold w-5 h-5" />
              YEMINENI BHARATH KUMAR
            </h4>
            <p className="text-xs text-brand-cream/80 leading-relaxed max-w-sm font-serif">
              Dedicated candidate for Regional Coordinator of Andhra Pradesh & Telangana regions. Part of Corbett House family at IIT Madras BS Degree. Working to bridge gaps, streamline communication, and empower student connectivity.
            </p>
            <p className="text-brand-gold/90 font-bold font-cinzel text-xs uppercase tracking-wider">
              "Vote for Connection. Vote for Community. Vote for Bharath."
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 text-left space-y-3">
            <h5 className="text-xs font-bold text-brand-gold uppercase tracking-widest font-cinzel">
              Campaign Links
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs font-serif">
              <button onClick={() => scrollToSection('home')} className="hover:text-brand-gold text-left transition-colors">Home</button>
              <button onClick={() => scrollToSection('action-plan')} className="hover:text-brand-gold text-left transition-colors">Action Plan</button>
              <button onClick={() => scrollToSection('manifesto')} className="hover:text-brand-gold text-left transition-colors">Manifesto</button>
              <button onClick={() => scrollToSection('support-wall')} className="hover:text-brand-gold text-left transition-colors">Supporters</button>
              <button onClick={() => scrollToSection('corbett-pride')} className="hover:text-brand-gold text-left transition-colors">Interactive</button>
            </div>
          </div>

          {/* Column 3: Contact & Actions */}
          <div className="md:col-span-4 text-left space-y-3">
            <h5 className="text-xs font-bold text-brand-gold uppercase tracking-widest font-cinzel">
              Get in Touch
            </h5>
            <div className="space-y-2.5 text-xs font-serif">
              {/* Institutional Email */}
              <a 
                href="mailto:24f2008632@ds.study.iitm.ac.in" 
                className="flex items-center gap-2 hover:text-brand-gold transition-colors text-brand-cream/80"
              >
                <Mail size={14} className="text-brand-gold shrink-0" />
                <span className="truncate">24f2008632@ds.study.iitm.ac.in</span>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/y_bharath_y/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-brand-gold transition-colors text-brand-cream/80"
              >
                <Instagram size={14} className="text-brand-gold shrink-0" />
                <span>@y_bharath_y</span>
              </a>

              {/* Voting link button */}
              <div className="pt-2">
                <a
                  href="https://elections.iitmbs.org/vote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-gold hover:bg-brand-cream text-brand-maroon border border-brand-gold font-cinzel font-black uppercase text-xs rounded transition-all shadow"
                >
                  <Vote size={12} />
                  Cast Your Vote Online
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer line */}
        <div className="pt-8 border-t border-brand-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-brand-cream/50">
          <p>© 2026 Official Campaign Team. All rights reserved. Built for Corbett House students of IIT Madras BS degree.</p>
          
          <button 
            onClick={handleScrollToTop}
            className="flex items-center gap-1 text-brand-cream/60 hover:text-brand-gold transition-colors bg-brand-maroon px-2.5 py-1.5 rounded border border-brand-gold/15"
          >
            <span>Scroll to Top</span>
            <ArrowUp size={10} />
          </button>
        </div>

      </div>
    </footer>
  );
}
