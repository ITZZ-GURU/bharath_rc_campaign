import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Shield, MessageSquare, Zap, BookOpen, ChevronDown, Award, Sparkles } from 'lucide-react';

interface Pillar {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: React.ReactNode;
  color: string;
  bgHex: string;
  initiativeName: string;
}

export default function ActionPlan() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const pillars: Pillar[] = [
    {
      id: 1,
      title: 'Organizing Regular Regional Meetups',
      shortDesc: 'Facilitating both in-person and virtual gatherings to foster strong networking and friendships among students in AP & TS.',
      longDesc: 'We often lack physical study groups and social touchpoints. I will organize biannual physical meetups in major hubs like Hyderabad, Vijayawada, Visakhapatnam, and Tirupati, paired with monthly virtual icebreakers and gaming nights. This ensures everyone finds study partners and life-long friends close to home.',
      icon: <Users className="w-6 h-6 text-brand-gold" />,
      color: 'from-brand-gold to-brand-cream',
      bgHex: 'rgba(212, 175, 55, 0.15)',
      initiativeName: 'AP-TS Milan Connect'
    },
    {
      id: 2,
      title: 'Reviving the Presence of Corbett House',
      shortDesc: 'Bringing active participation, spirit, and recognition back to Corbett House within our region through targeted engagement.',
      longDesc: 'Corbett House is rich in potential, yet our presence can be far more active. I will introduce regional Corbett-themed trivia leagues, collaborative coding/project sprints, and cultural talent showcases. By celebrating every member’s wins, we will make Corbett the most spirited and talked-about house in our region!',
      icon: <Shield className="w-6 h-6 text-brand-gold" />,
      color: 'from-brand-gold to-brand-cream',
      bgHex: 'rgba(212, 175, 55, 0.15)',
      initiativeName: 'Corbett Resurgence Sprints'
    },
    {
      id: 3,
      title: 'Improving Event Communication',
      shortDesc: 'Streamlining updates and announcements through dedicated, organized WhatsApp groups so no one misses out.',
      longDesc: 'Crucial course and election announcements often get buried in crowded discord chats. I will launch highly moderated, announcement-only WhatsApp community feeds categorized by batches and interests. These will provide neat daily summaries and quick links so you never miss an event, webinar, or deadline.',
      icon: <MessageSquare className="w-6 h-6 text-brand-gold" />,
      color: 'from-brand-gold to-brand-cream',
      bgHex: 'rgba(212, 175, 55, 0.15)',
      initiativeName: 'Corbett InfoHub Feed'
    },
    {
      id: 4,
      title: 'Collaborating on Joint Events',
      shortDesc: 'Working hand-in-hand with other coordinators to host impactful joint events and inter-house activities.',
      longDesc: 'Unity creates impact. I will partner with other regional and house coordinators to arrange cross-house debate clubs, inter-regional pitch sessions, and joint sports tournaments. By combining resources, we can host higher-budget, highly-produced student events that benefit our entire student community.',
      icon: <Zap className="w-6 h-6 text-brand-gold" />,
      color: 'from-brand-gold to-brand-cream',
      bgHex: 'rgba(212, 175, 55, 0.15)',
      initiativeName: 'Inter-House Synapse'
    },
    {
      id: 5,
      title: 'Mentoring and Supporting New Students',
      shortDesc: 'Creating a welcoming environment for freshers, offering guidance, resources, and peer support to navigate the degree.',
      longDesc: 'Joining an online BS degree can feel overwhelming. I will establish a peer-to-peer mentoring ring where senior students from AP & TS act as guides for incoming freshers. We will distribute structured "Flasher Study Packs", host weekly live course guidance calls, and establish dedicated mental-health peer groups.',
      icon: <BookOpen className="w-6 h-6 text-brand-gold" />,
      color: 'from-brand-gold to-brand-cream',
      bgHex: 'rgba(212, 175, 55, 0.15)',
      initiativeName: 'Telugu Sahaya Mentorship'
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedCard(prev => (prev === id ? null : id));
  };

  return (
    <motion.section
      id="action-plan"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 px-4 md:px-8 bg-brand-maroon/20 border-y border-brand-gold/20"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-gold uppercase tracking-widest bg-brand-gold/10 px-4 py-1.5 rounded-full border border-brand-gold/20">
            <Award size={12} className="text-brand-gold" />
            The Manifesto
          </div>
          <h2 className="text-3xl md:text-4xl font-black font-cinzel text-brand-gold tracking-widest uppercase">
            CAMPUS ACTION PLAN
          </h2>
          <p className="text-brand-cream/80 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-serif">
            Five pragmatic initiatives designed to build genuine connection, house spirit, and systemic support across AP & TS.
          </p>
        </div>

        {/* Action Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const isExpanded = expandedCard === pillar.id;
            return (
              <motion.div
                key={pillar.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group rounded border transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isExpanded
                    ? 'col-span-1 md:col-span-2 lg:col-span-3 bg-[#5c131a] border-brand-gold shadow-[12px_12px_0px_rgba(0,0,0,0.45)]'
                    : 'bg-[#4e0d13] hover:bg-[#5c131a] border-brand-gold/30 hover:border-brand-gold shadow-[6px_6px_0px_rgba(0,0,0,0.25)] hover:shadow-[10px_10px_0px_rgba(0,0,0,0.35)]'
                }`}
                onClick={() => toggleExpand(pillar.id)}
              >
                {/* Visual Glow Highlight */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle 120px at 50% 10px, ${pillar.bgHex}, transparent)`
                  }}
                />

                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-brand-maroon border border-brand-gold/30 shadow-inner rounded">
                        {pillar.icon}
                      </div>
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-brand-gold font-bold bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/35">
                          {pillar.initiativeName}
                        </span>
                        <h3 className="text-md md:text-lg font-cinzel font-bold text-brand-cream mt-1 leading-snug">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Descriptions */}
                  <div className="text-sm text-brand-cream/90 leading-relaxed space-y-2 font-serif">
                    <p>{pillar.shortDesc}</p>
                    
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="pt-4 border-t border-brand-gold/20 text-brand-cream/80 text-xs md:text-sm leading-relaxed"
                      >
                        <strong className="text-brand-gold block mb-2 font-cinzel font-semibold flex items-center gap-1.5">
                          <Sparkles size={12} className="text-brand-gold" />
                          How We Will Execute This:
                        </strong>
                        {pillar.longDesc}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="mt-4 pt-3 border-t border-brand-gold/15 flex items-center justify-between text-xs font-mono text-brand-cream/60 group-hover:text-brand-gold transition-colors">
                  <span>Pillar {pillar.id} of 5</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase tracking-widest font-cinzel">
                      {isExpanded ? 'Collapse Details' : 'Read Action Plan'}
                    </span>
                    <ChevronDown 
                      size={14} 
                      className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-gold' : 'rotate-0'}`} 
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}
