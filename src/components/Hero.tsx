import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Vote, Sparkles, ArrowRight, CheckCircle, Mail, MapPin } from 'lucide-react';
import InteractivePhoto from './InteractivePhoto';

export default function Hero({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  const [pledged, setPledged] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(148);

  useEffect(() => {
    // Load initial pledge state
    const hasPledged = localStorage.getItem('bharath_pledged') === 'true';
    if (hasPledged) {
      setPledged(true);
      setPledgeCount(149);
    }
  }, []);

  const handlePledge = () => {
    if (!pledged) {
      localStorage.setItem('bharath_pledged', 'true');
      setPledged(true);
      setPledgeCount(prev => prev + 1);
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Title & Dynamic Campaign Messaging */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          
          {/* Tag/Badge with Entry Motion */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 self-start bg-brand-gold/10 border border-brand-gold/40 px-4 py-1.5 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-widest font-mono"
          >
            <Sparkles size={12} className="animate-pulse text-brand-gold" />
            Regional Coordinator Candidate 2026
          </motion.div>

          {/* Dynamic Typographical Header */}
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black font-cinzel tracking-wider text-brand-gold leading-tight"
            >
              YEMINENI <br />
              <span className="text-brand-cream block text-3xl md:text-4xl lg:text-5xl mt-1 tracking-widest">
                BHARATH KUMAR
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl font-medium text-brand-cream/80 flex items-center gap-1.5 font-serif"
            >
              <MapPin size={18} className="text-brand-gold" />
              Andhra Pradesh & Telangana <span className="text-brand-gold/40">|</span> Corbett House
            </motion.p>
          </div>

          {/* Slogan Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="border-l-4 border-brand-gold pl-4 py-2 italic text-brand-cream/90 text-md md:text-lg bg-[#551017] border border-brand-gold/10 rounded-r shadow-inner max-w-xl font-serif"
          >
            "Bridging the Gap, Strengthening Our Community."
          </motion.div>

          {/* Interactive Pledge Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="p-5 rounded-lg bg-[#5c131a] border-2 border-brand-gold/60 shadow-[8px_8px_0px_rgba(0,0,0,0.35)] backdrop-blur-sm max-w-lg"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono text-brand-gold uppercase tracking-widest">Support Campaign</p>
                <h4 className="text-brand-cream font-cinzel font-bold text-sm md:text-base mt-0.5">Pledge Your Vote for Bharath!</h4>
                <p className="text-xs text-brand-cream/70 mt-1">Join {pledgeCount} other Corbett House peers.</p>
              </div>
              <button
                onClick={handlePledge}
                disabled={pledged}
                className={`px-5 py-2.5 rounded font-cinzel font-black uppercase text-xs transition-all flex items-center gap-1.5 whitespace-nowrap shadow-md border ${
                  pledged 
                    ? 'bg-brand-emerald/20 text-brand-cream border-brand-emerald/40' 
                    : 'bg-brand-gold hover:bg-brand-cream text-brand-maroon border-brand-gold transform hover:scale-105 active:scale-95'
                }`}
              >
                {pledged ? (
                  <>
                    <CheckCircle size={14} className="text-brand-emerald" />
                    Pledged!
                  </>
                ) : (
                  <>
                    Pledge Vote
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Action Call buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="https://elections.iitmbs.org/vote"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-brand-emerald hover:bg-brand-emerald/90 border border-brand-gold/30 text-brand-cream font-cinzel font-black uppercase text-xs tracking-wider transition-all duration-300 shadow-[4px_4px_0px_#4a0e0e] hover:shadow-none flex items-center gap-2 transform hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <Vote size={18} />
              Go to Voting Portal
            </a>
            
            <button
              onClick={() => scrollToSection('manifesto')}
              className="px-6 py-3.5 bg-brand-red/40 hover:bg-brand-red/60 border border-brand-gold/40 text-brand-cream font-cinzel font-semibold text-xs uppercase tracking-wider rounded transition-all flex items-center gap-1.5"
            >
              Read Manifesto
              <ArrowRight size={16} />
            </button>
          </motion.div>

        </div>

        {/* Right Column: Dynamic Portrait component with Golden Mandala */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <InteractivePhoto />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
