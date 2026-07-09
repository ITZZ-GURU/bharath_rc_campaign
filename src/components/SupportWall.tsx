import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Send, Check, MessageCircle, MapPin, Sparkles } from 'lucide-react';

interface SupportMessage {
  id: string;
  name: string;
  region: string;
  message: string;
  timestamp: string;
  likes: number;
}

export default function SupportWall() {
  const [messages, setMessages] = useState<SupportMessage[]>([]);
  const [name, setName] = useState('');
  const [region, setRegion] = useState('Andhra Pradesh');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [likedIds, setLikedIds] = useState<string[]>([]);

  useEffect(() => {
    const savedMessages = localStorage.getItem('bharath_support_messages');
    if (savedMessages) {
      const parsed = JSON.parse(savedMessages) as SupportMessage[];
      // Filter out any previously stored seed comments
      const filtered = parsed.filter(m => !m.id.startsWith('seed-'));
      setMessages(filtered);
    } else {
      setMessages([]);
    }

    const savedLikes = localStorage.getItem('bharath_liked_messages');
    if (savedLikes) {
      setLikedIds(JSON.parse(savedLikes));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const newMessage: SupportMessage = {
      id: `msg-${Date.now()}`,
      name: name.trim(),
      region,
      message: message.trim(),
      timestamp: 'Just now',
      likes: 0
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem('bharath_support_messages', JSON.stringify(updated));

    // Reset Form
    setName('');
    setMessage('');
    
    setTimeout(() => {
      setIsSubmitting(false);
    }, 800);
  };

  const handleLike = (id: string) => {
    if (likedIds.includes(id)) {
      // Unlike
      const newLiked = likedIds.filter(lId => lId !== id);
      setLikedIds(newLiked);
      localStorage.setItem('bharath_liked_messages', JSON.stringify(newLiked));

      const updated = messages.map(m => m.id === id ? { ...m, likes: m.likes - 1 } : m);
      setMessages(updated);
      localStorage.setItem('bharath_support_messages', JSON.stringify(updated));
    } else {
      // Like
      const newLiked = [...likedIds, id];
      setLikedIds(newLiked);
      localStorage.setItem('bharath_liked_messages', JSON.stringify(newLiked));

      const updated = messages.map(m => m.id === id ? { ...m, likes: m.likes + 1 } : m);
      setMessages(updated);
      localStorage.setItem('bharath_support_messages', JSON.stringify(updated));
    }
  };

  return (
    <motion.section
      id="support-wall"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
    >
      
      {/* Section Title */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-gold uppercase tracking-widest bg-brand-gold/10 px-4 py-1.5 rounded-full border border-brand-gold/20">
          <MessageCircle size={12} className="text-brand-gold" />
          Community Wall
        </div>
        <h2 className="text-3xl md:text-4xl font-black font-cinzel text-brand-gold tracking-widest uppercase">
          VOICES OF AP & TS SUPPORTERS
        </h2>
        <p className="text-brand-cream/80 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-serif">
          Pledge your support, leave a cheering message, and connect with other Corbett House members backing Bharath’s campaign!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Form to leave support */}
        <div className="lg:col-span-5 bg-[#5c131a] border-2 border-brand-gold p-6 md:p-8 rounded shadow-[8px_8px_0px_rgba(0,0,0,0.35)] text-left">
          <h3 className="text-lg font-bold font-cinzel text-brand-gold tracking-wider uppercase mb-4 flex items-center gap-2">
            <Sparkles size={16} className="text-brand-gold" />
            Write on the Board
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-xs font-semibold text-brand-gold uppercase tracking-widest mb-1.5 font-mono">
                Your Name / Alias
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh Reddy"
                className="w-full bg-brand-maroon border border-brand-gold/25 focus:border-brand-gold focus:outline-none p-3 rounded text-sm text-brand-cream transition-colors font-serif"
              />
            </div>

            {/* Region select */}
            <div>
              <label className="block text-xs font-semibold text-brand-gold uppercase tracking-widest mb-1.5 font-mono">
                Your Region
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full bg-brand-maroon border border-brand-gold/25 focus:border-brand-gold focus:outline-none p-3 rounded text-sm text-brand-cream/85 transition-colors font-serif"
              >
                <option value="Andhra Pradesh">Andhra Pradesh (AP)</option>
                <option value="Telangana">Telangana (TS)</option>
                <option value="Corbett Mate (Other)">Corbett Mate (Other)</option>
              </select>
            </div>

            {/* Message input */}
            <div>
              <label className="block text-xs font-semibold text-brand-gold uppercase tracking-widest mb-1.5 font-mono">
                Cheering Words
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="e.g. Backing you 100%! Super excited about the physical meets!"
                maxLength={200}
                className="w-full bg-brand-maroon border border-brand-gold/25 focus:border-brand-gold focus:outline-none p-3 rounded text-sm text-brand-cream transition-colors resize-none leading-relaxed font-serif"
              />
              <span className="block text-[10px] text-right text-brand-cream/50 font-mono mt-1">
                Max 200 characters
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-brand-gold hover:bg-brand-cream text-brand-maroon font-cinzel font-black uppercase text-xs tracking-wider rounded shadow transition-all flex items-center justify-center gap-1.5 border border-brand-gold transform active:scale-98"
            >
              {isSubmitting ? (
                <>
                  <Check size={14} className="animate-ping" />
                  Posting...
                </>
              ) : (
                <>
                  <Send size={14} />
                  Post Support Note
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Support Board Streams */}
        <div className="lg:col-span-7 space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {messages.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed border-brand-gold/20 rounded p-6 bg-brand-maroon/20">
              <MessageCircle className="mx-auto text-brand-gold/40 mb-3" size={32} />
              <p className="text-sm font-cinzel text-brand-gold uppercase tracking-wider font-bold">No support notes yet</p>
              <p className="text-xs text-brand-cream/60 font-serif mt-1">Be the first to leave a word of encouragement for Bharath's campaign!</p>
            </div>
          ) : (
            <AnimatePresence initial={false}>
              {messages.map((item) => {
                const isLiked = likedIds.includes(item.id);
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#5c131a]/40 border border-brand-gold/20 p-4 rounded flex items-start gap-4 text-left shadow-sm relative group"
                  >
                    {/* Left Avatar circle containing region initials */}
                    <div className={`p-3 rounded text-xs font-mono font-bold tracking-wider shrink-0 flex items-center justify-center w-11 h-11 ${
                      item.region.includes('Telangana')
                        ? 'bg-brand-red/30 text-brand-gold border border-brand-gold/30'
                        : item.region.includes('Andhra')
                        ? 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20'
                        : 'bg-[#4e0d13] text-brand-cream border border-brand-gold/10'
                    }`}>
                      {item.region.includes('Telangana') ? 'TS' : item.region.includes('Andhra') ? 'AP' : 'CB'}
                    </div>

                    {/* Message body */}
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-xs md:text-sm font-bold font-cinzel text-brand-gold uppercase tracking-wide">{item.name}</span>
                          <span className="text-[10px] font-mono font-medium flex items-center gap-0.5 text-brand-cream/60">
                            <MapPin size={10} className="text-brand-gold" />
                            {item.region}
                          </span>
                        </div>
                        <span className="text-[9px] text-brand-cream/40 font-mono shrink-0">{item.timestamp}</span>
                      </div>

                      <p className="text-brand-cream/95 text-xs md:text-sm leading-relaxed pr-6 font-serif">
                        {item.message}
                      </p>
                    </div>

                    {/* Like button on right */}
                    <button
                      onClick={() => handleLike(item.id)}
                      className={`absolute bottom-3 right-3 flex items-center gap-1 text-[10px] font-mono transition-colors p-1 rounded hover:bg-brand-cream/5 ${
                        isLiked ? 'text-brand-gold' : 'text-brand-cream/50 hover:text-brand-cream'
                      }`}
                    >
                      <Heart size={12} className={isLiked ? 'fill-brand-gold stroke-brand-gold' : ''} />
                      <span>{item.likes}</span>
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          )}
        </div>

      </div>
    </motion.section>
  );
}
