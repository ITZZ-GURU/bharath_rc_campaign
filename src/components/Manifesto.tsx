import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Download, Eye, FileText, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Check, Sparkles, X } from 'lucide-react';

export default function Manifesto() {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });
  
  const widthTransform = useTransform(scrollYProgress, (latest) => {
    const base = (currentPage - 1) * 50;
    const currentProgress = typeof latest === 'number' ? latest * 50 : 0;
    return `${base + currentProgress}%`;
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };
    if (isFullscreen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 10, 130));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 10, 80));
  const handleResetZoom = () => setZoomLevel(100);

  const handleDownload = () => {
    // Elegant download simulation
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);

    // Trigger Print layout which is styled for beautiful PDF saving
    window.print();
  };

  const pages = [
    {
      pageNo: 1,
      title: 'YEMINENI BHARATH KUMAR',
      subtitle: 'Candidate for Regional Coordinator',
      region: 'Andhra Pradesh & Telangana | Corbett House',
      quote: '"Bridging the Gap, Strengthening Our Community."',
      sections: [
        {
          heading: 'MY VISION',
          content: 'Our program has a large and vibrant community of Telugu students, yet we often lack the connections that bring us together. My primary goal is to bridge this gap. I want to connect students across Andhra Pradesh and Telangana, ensuring that everyone—especially within Corbett House—feels supported, engaged, and part of a unified family.'
        },
        {
          heading: 'ACTION PLAN & MANIFESTO',
          subSections: [
            {
              title: 'Organizing Regular Regional Meetups',
              text: 'Facilitating both in-person and virtual gatherings to foster strong networking and friendships among students in AP & TS.'
            },
            {
              title: 'Reviving the Presence of Corbett House',
              text: 'Bringing active participation, spirit, and recognition back to Corbett House within our region through targeted engagement.'
            },
            {
              title: 'Improving Event Communication',
              text: 'Streamlining updates and announcements through dedicated, organized WhatsApp groups so no one misses out on important activities.'
            }
          ]
        }
      ]
    },
    {
      pageNo: 2,
      title: 'YEMINENI BHARATH KUMAR',
      subtitle: 'Candidate for Regional Coordinator',
      region: 'Andhra Pradesh & Telangana | Corbett House',
      sections: [
        {
          heading: 'ACTION PLAN (CONTINUED)',
          subSections: [
            {
              title: 'Collaborating on Joint Events',
              text: 'Working hand-in-hand with other coordinators to host impactful joint events and inter-house activities that benefit everyone.'
            },
            {
              title: 'Mentoring and Supporting New Students',
              text: 'Creating a welcoming environment for freshers, offering guidance, resources, and peer support to help them confidently navigate the degree.'
            }
          ]
        },
        {
          heading: 'VOTE FOR THE FUTURE',
          content: 'I pledge to make myself available to all regional students, helping freshers get accustomed to the academic rigors and creating a fun, interactive ecosystem where student feedback is actively heard and converted into campus programs.'
        }
      ],
      slogan: 'Vote for Connection. Vote for Community. Vote for Bharath.'
    }
  ];

  return (
    <motion.section
      id="manifesto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 px-4 md:px-8 max-w-5xl mx-auto"
    >
      
      {/* Print-Only Template (hidden on screen, perfectly formatted for PDF printer) */}
      <div className="hidden print:block bg-white text-slate-900 p-8 font-sans leading-relaxed max-w-4xl mx-auto">
        <div className="text-center border-b-4 border-amber-500 pb-4 mb-6">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">YEMINENI BHARATH KUMAR</h1>
          <p className="text-lg font-bold text-amber-600 mt-1">Candidate for Regional Coordinator</p>
          <p className="text-sm font-semibold text-slate-500">Andhra Pradesh & Telangana | Corbett House</p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 italic text-md text-slate-700 text-center">
          "Bridging the Gap, Strengthening Our Community."
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold border-b border-slate-300 pb-1 text-slate-800 mb-2">MY VISION</h2>
            <p className="text-slate-700 text-sm">
              Our program has a large and vibrant community of Telugu students, yet we often lack the connections that bring us together. My primary goal is to bridge this gap. I want to connect students across Andhra Pradesh and Telangana, ensuring that everyone—especially within Corbett House—feels supported, engaged, and part of a unified family.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold border-b border-slate-300 pb-1 text-slate-800 mb-2">ACTION PLAN & MANIFESTO</h2>
            <div className="space-y-4 mt-3">
              <div>
                <h3 className="text-md font-bold text-slate-800">1. Organizing Regular Regional Meetups</h3>
                <p className="text-slate-600 text-sm">Facilitating both in-person and virtual gatherings to foster strong networking and friendships among students in AP & TS.</p>
              </div>
              <div>
                <h3 className="text-md font-bold text-slate-800">2. Reviving the Presence of Corbett House</h3>
                <p className="text-slate-600 text-sm">Bringing active participation, spirit, and recognition back to Corbett House within our region through targeted engagement.</p>
              </div>
              <div>
                <h3 className="text-md font-bold text-slate-800">3. Improving Event Communication</h3>
                <p className="text-slate-600 text-sm">Streamlining updates and announcements through dedicated, organized WhatsApp groups so no one misses out on important activities.</p>
              </div>
              <div>
                <h3 className="text-md font-bold text-slate-800">4. Collaborating on Joint Events</h3>
                <p className="text-slate-600 text-sm">Working hand-in-hand with other coordinators to host impactful joint events and inter-house activities that benefit everyone.</p>
              </div>
              <div>
                <h3 className="text-md font-bold text-slate-800">5. Mentoring and Supporting New Students</h3>
                <p className="text-slate-600 text-sm">Creating a welcoming environment for freshers, offering guidance, resources, and peer support to help them confidently navigate the degree.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-6 border-t-2 border-slate-200">
          <p className="text-lg font-black text-amber-600 tracking-wider">Vote for Connection. Vote for Community. Vote for Bharath.</p>
          <p className="text-xs text-slate-400 mt-1">Official Manifesto PDF Document - Campaign for Regional Coordinator</p>
        </div>
      </div>

      {/* Screen Interface */}
      <div className="space-y-8 print:hidden">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-brand-gold uppercase tracking-widest">Document Center</span>
            <h2 className="text-3xl font-black font-cinzel text-brand-gold tracking-widest uppercase mt-1 flex items-center gap-2">
              <FileText className="text-brand-gold" />
              OFFICIAL MANIFESTO
            </h2>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className={`px-5 py-3 rounded uppercase font-cinzel font-black text-xs flex items-center gap-2 transition-all shadow-md transform hover:scale-102 ${
                downloadSuccess
                  ? 'bg-brand-emerald text-brand-cream border border-brand-emerald/40'
                  : 'bg-brand-gold text-brand-maroon hover:bg-brand-cream border border-brand-gold'
              }`}
            >
              {downloadSuccess ? (
                <>
                  <Check size={14} className="animate-ping" />
                  PDF Download Started
                </>
              ) : (
                <>
                  <Download size={14} />
                  Download Manifesto PDF
                </>
              )}
            </button>

            <button
              onClick={() => setIsFullscreen(prev => !prev)}
              className="px-4 py-3 bg-brand-red/40 hover:bg-brand-red/60 border border-brand-gold/40 text-brand-cream font-cinzel font-semibold text-xs uppercase tracking-wider rounded transition-all flex items-center gap-1.5"
            >
              <Eye size={14} />
              {isFullscreen ? 'Exit Online Reader' : 'Full View'}
            </button>
          </div>
        </div>

        {/* Digital Document Viewer */}
        <div ref={scrollContainerRef} className={`rounded overflow-hidden bg-brand-maroon/80 border-2 border-brand-gold shadow-2xl transition-all duration-300 relative ${isFullscreen ? 'fixed inset-4 z-50 overflow-y-auto max-w-5xl mx-auto bg-brand-maroon shadow-[0_0_0_100vw_rgba(0,0,0,0.8)]' : ''}`}>
          
          {/* Reader Top Bar */}
          <div className="sticky top-0 z-20 bg-[#4a0e0e] flex flex-col">
            <div className="px-4 py-3 border-b border-brand-gold/20 flex flex-wrap gap-4 items-center justify-between text-xs text-brand-cream/70">
              <div className="flex items-center gap-2 font-cinzel">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
                <span className="font-semibold text-brand-cream">Interactive Manifesto Reader</span>
              </div>

              {/* Viewer Zoom/Scale Controls */}
              <div className="flex items-center gap-2">
                <button onClick={handleZoomOut} className="p-1.5 hover:text-brand-gold hover:bg-brand-cream/5 rounded" title="Zoom Out"><ZoomOut size={14} /></button>
                <span className="font-mono min-w-[40px] text-center text-[11px] bg-brand-maroon px-2 py-1 rounded border border-brand-gold/10">{zoomLevel}%</span>
                <button onClick={handleZoomIn} className="p-1.5 hover:text-brand-gold hover:bg-brand-cream/5 rounded" title="Zoom In"><ZoomIn size={14} /></button>
                <button onClick={handleResetZoom} className="p-1.5 hover:text-brand-gold hover:bg-brand-cream/5 rounded" title="Reset Zoom"><RotateCcw size={14} /></button>
              </div>

              {/* Document Navigation */}
              <div className="flex items-center gap-2 font-mono">
                <button 
                  onClick={() => setCurrentPage(1)} 
                  disabled={currentPage === 1}
                  className="p-1 hover:text-brand-gold hover:bg-brand-cream/5 disabled:opacity-30 rounded disabled:pointer-events-none"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-brand-cream/90">Page {currentPage} of 2</span>
                <button 
                  onClick={() => setCurrentPage(2)} 
                  disabled={currentPage === 2}
                  className="p-1 hover:text-brand-gold hover:bg-brand-cream/5 disabled:opacity-30 rounded disabled:pointer-events-none"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Exit Full View (Close) Button */}
              {isFullscreen && (
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="px-3 py-1.5 bg-brand-red hover:bg-brand-gold text-brand-cream hover:text-brand-maroon border border-brand-gold/40 rounded transition-all flex items-center gap-1.5 font-cinzel font-bold text-[10px] uppercase tracking-wider cursor-pointer"
                  title="Exit Full View"
                >
                  <X size={12} />
                  <span>Exit Full View</span>
                </button>
              )}
            </div>

            {/* Reading Progress Bar (Full Screen Only) */}
            {isFullscreen && (
              <div className="h-1 bg-brand-maroon/50 w-full overflow-hidden border-b border-brand-gold/20">
                <motion.div 
                  className="h-full bg-brand-gold"
                  style={{ width: widthTransform }}
                  layout
                />
              </div>
            )}
          </div>

          {/* Interactive Document Page Space */}
          <div className="p-6 md:p-12 flex justify-center bg-brand-maroon/40 min-h-[460px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              {pages.map((page) => {
                if (page.pageNo !== currentPage) return null;
                return (
                  <motion.div
                    key={page.pageNo}
                    initial={{ opacity: 0, x: currentPage === 1 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: currentPage === 1 ? 30 : -30 }}
                    transition={{ duration: 0.4 }}
                    style={{ transform: `scale(${zoomLevel / 100})` }}
                    className="w-full max-w-2xl bg-brand-cream text-brand-maroon border-4 border-brand-gold rounded p-6 md:p-10 shadow-2xl text-left relative transform transition-transform duration-100"
                  >
                    {/* Page header */}
                    <div className="border-b-2 border-brand-maroon/20 pb-4 mb-6">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-black font-cinzel text-brand-maroon tracking-wider">{page.title}</h3>
                          <p className="text-xs md:text-sm font-semibold text-brand-red mt-0.5">{page.subtitle}</p>
                          <p className="text-[10px] md:text-xs text-brand-maroon/60 mt-0.5 font-serif italic">{page.region}</p>
                        </div>
                        <div className="bg-brand-maroon text-brand-cream font-mono text-[10px] font-bold px-2.5 py-1 rounded border border-brand-gold/20">
                          DOC PG {page.pageNo}
                        </div>
                      </div>
                    </div>

                    {/* Slogan block on page 1 */}
                    {page.quote && (
                      <div className="border-l-4 border-brand-gold bg-brand-maroon/5 px-4 py-2.5 italic text-sm text-brand-maroon rounded-r mb-6 font-serif">
                        {page.quote}
                      </div>
                    )}

                    {/* Main Document Content */}
                    <div className="space-y-6">
                      {page.sections.map((sec, sIdx) => (
                        <motion.div 
                          key={sIdx} 
                          className="space-y-3"
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-20px" }}
                          transition={{ duration: 0.5, delay: sIdx * 0.1 }}
                        >
                          <h4 className="text-xs font-bold font-cinzel text-brand-red uppercase tracking-widest flex items-center gap-1">
                            <Sparkles size={10} className="text-brand-gold" />
                            {sec.heading}
                          </h4>
                          
                          {sec.content && (
                            <p className="text-brand-maroon/90 text-xs md:text-sm leading-relaxed font-serif">
                              {sec.content}
                            </p>
                          )}

                          {sec.subSections && (
                            <div className="space-y-4 pl-1">
                              {sec.subSections.map((sub, ssIdx) => (
                                <div key={ssIdx} className="border-l-2 border-brand-gold pl-3">
                                  <h5 className="text-xs md:text-sm font-cinzel font-bold text-brand-maroon flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                                    {sub.title}
                                  </h5>
                                  <p className="text-brand-maroon/80 text-xs mt-1 leading-relaxed font-serif">
                                    {sub.text}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Footer block on page 2 */}
                    {page.slogan && (
                      <div className="mt-8 pt-6 border-t-2 border-brand-maroon/20 text-center">
                        <p className="text-sm font-black font-cinzel text-brand-red tracking-wider uppercase">
                          {page.slogan}
                        </p>
                      </div>
                    )}

                    {/* Page watermark indicator */}
                    <div className="absolute bottom-2 right-4 text-[9px] font-mono text-brand-maroon/40">
                      CORBETT_RC_BHARATH_2026
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Quick Reader Help Bar */}
          <div className="bg-brand-maroon p-3 border-t border-brand-gold/20 text-center text-[10px] text-brand-cream/60 font-mono">
            * This interactive viewer renders the candidate's exact filed election manifesto. Click Download to save or print.
          </div>
        </div>

      </div>
    </motion.section>
  );
}
