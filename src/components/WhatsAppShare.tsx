import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Copy, Check, Share2, Send, ExternalLink, HelpCircle } from 'lucide-react';

export default function WhatsAppShare() {
  const [copied, setCopied] = useState(false);
  
  // Custom Campaign message optimized for IITM BS Telugu student groups
  const initialMessage = `👋 Hi there! Please support our friend *Yemineni Bharath Kumar*, who is contesting for the *Regional Coordinator (RC)* position for *Andhra Pradesh & Telangana (Corbett House)*.

🎯 *His Core Commitments:*
1. Organising regular regional student meetups in AP & TS.
2. Boosting Corbett House spirit & participation.
3. Dedicated WhatsApp InfoHub so nobody misses deadlines.
4. Active freshman mentorship & academic support groups.

🤝 Let's vote for unity, connection, and a stronger Telugu student community!

🗳️ *Cast your vote here:* https://elections.iitmbs.org/vote
📄 *Read his full manifesto here:* ${window.location.href}

_Please forward this to all IITM BS student groups in AP/TS and Corbett House!_ 🗳️✨`;

  const [message, setMessage] = useState(initialMessage);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  const handleWhatsAppShare = () => {
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.section
      id="campaign-share"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 px-4 md:px-8 max-w-4xl mx-auto"
    >
      <div className="bg-[#5c131a] border-2 border-brand-gold rounded p-6 md:p-10 shadow-[12px_12px_0px_rgba(0,0,0,0.45)] relative overflow-hidden backdrop-blur-md">
        
        {/* Background Decorative Circles */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Column 1: Info */}
          <div className="lg:col-span-5 text-left space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/30">
              <Share2 size={10} className="text-brand-gold" />
              Campaign Spreader
            </span>
            <h3 className="text-2xl font-black font-cinzel text-brand-gold leading-tight tracking-widest uppercase">
              SPREAD THE WORD INSTANTLY!
            </h3>
            <p className="text-brand-cream/80 text-xs md:text-sm leading-relaxed font-serif">
              Every vote counts! Help us reach other Corbett House and Telugu students across Andhra Pradesh and Telangana by sharing Bharath's manifesto on WhatsApp groups and chats.
            </p>

            <div className="space-y-2 pt-2 font-serif">
              <h4 className="text-xs font-bold font-cinzel text-brand-gold uppercase tracking-widest">Growth Checklist:</h4>
              <ul className="text-xs text-brand-cream/70 space-y-1.5 pl-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  Forward to AP & TS Regional Groups
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  Share with fellow Corbett House members
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  Post on Discord & student group chats
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Editable Message and Actions */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded overflow-hidden bg-brand-maroon border border-brand-gold/30 shadow-inner">
              <div className="bg-[#320a0d] px-4 py-2 border-b border-brand-gold/15 flex items-center justify-between text-[11px] text-brand-cream/60 font-mono">
                <span>PREVIEW CAMPAIGN MESSAGE</span>
                <span className="text-[10px] text-brand-gold">Feel free to edit!</span>
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={8}
                className="w-full bg-transparent p-4 text-xs font-mono text-brand-cream/90 focus:outline-none focus:ring-1 focus:ring-brand-gold/30 leading-relaxed resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* Share button */}
              <button
                onClick={handleWhatsAppShare}
                className="flex-1 px-5 py-3.5 bg-brand-emerald hover:bg-brand-emerald/90 text-brand-cream border border-brand-gold/30 font-cinzel font-black uppercase text-xs tracking-wider rounded shadow-md transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <MessageSquare size={16} />
                Share on WhatsApp
                <ExternalLink size={12} className="opacity-80" />
              </button>

              {/* Copy button */}
              <button
                onClick={handleCopy}
                className={`px-5 py-3.5 rounded font-cinzel font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border ${
                  copied 
                    ? 'bg-brand-gold/20 text-brand-cream border-brand-gold/30' 
                    : 'bg-brand-red hover:bg-brand-red/80 border-brand-gold/30 text-brand-cream'
                }`}
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-brand-emerald" />
                    Message Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy Text Instead
                  </>
                )}
              </button>
            </div>
            <p className="text-[10px] text-brand-cream/50 text-center font-mono">
              * Launches WhatsApp with pre-composed text. No data is stored or collected.
            </p>
          </div>

        </div>

      </div>
    </motion.section>
  );
}
