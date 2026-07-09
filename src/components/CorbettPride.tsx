import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Zap, Trophy, Flame, HelpCircle, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctIdx: number;
  fact: string;
}

export default function CorbettPride() {
  const [spiritLevel, setSpiritLevel] = useState(84);
  const [hasFuelled, setHasFuelled] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Trivia States
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const trivia: Question[] = [
    {
      id: 1,
      text: 'Which majestic predator is the mascot of our proud Corbett House?',
      options: ['The Royal Bengal Tiger', 'The Golden Eagle', 'The Black Panther', 'The Asiatic Lion'],
      correctIdx: 0,
      fact: 'Corbett House is named after Jim Corbett National Park, famously renowned as the land of the magnificent Royal Bengal Tiger! 🐅'
    },
    {
      id: 2,
      text: 'Which iconic river links Andhra Pradesh and Telangana, flowing majestically into the Bay of Bengal?',
      options: ['River Kaveri', 'River Krishna', 'River Narmada', 'River Mahanadi'],
      correctIdx: 1,
      fact: 'The holy Krishna River connects both Telugu states (AP & TS) and serves as a lifeline for millions! 🌊'
    },
    {
      id: 3,
      text: 'What is the primary objective of Bharath’s campaign for Regional Coordinator?',
      options: ['Creating expensive clubs', 'Bridging connection gaps among Telugu students', 'Banning inter-house challenges', 'Promoting quiet study zones only'],
      correctIdx: 1,
      fact: 'Bharath’s core philosophy is "Bridging the Gap, Strengthening Our Community" through active regional meetups and student support. 🤝'
    }
  ];

  const handleFuel = () => {
    setSpiritLevel(prev => Math.min(prev + 1, 100));
    setClickCount(prev => prev + 1);
    setHasFuelled(true);
    setTimeout(() => setHasFuelled(false), 500);
  };

  const handleAnswer = (idx: number) => {
    if (selectedOpt !== null) return; // Prevent double clicks
    setSelectedOpt(idx);
    if (idx === trivia[currentQ].correctIdx) {
      setScore(prev => prev + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    setSelectedOpt(null);
    setShowResult(false);
    if (currentQ < trivia.length - 1) {
      setCurrentQ(prev => prev + 1);
    } else {
      // Game ended, trigger restart or score card
      setCurrentQ(trivia.length); // will display score screen
    }
  };

  const restartTrivia = () => {
    setCurrentQ(0);
    setSelectedOpt(null);
    setShowResult(false);
    setScore(0);
  };

  return (
    <motion.section
      id="corbett-pride"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 px-4 md:px-8 bg-brand-maroon/20 text-left border-b border-brand-gold/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Spirit Level Meter */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/30">
              <Zap size={10} className="animate-pulse text-brand-gold" />
              Interactive Zone
            </span>
            <h3 className="text-3xl font-black font-cinzel text-brand-gold tracking-widest uppercase leading-tight">
              FUELS THE CORBETT SPIRIT!
            </h3>
            <p className="text-brand-cream/80 text-sm leading-relaxed font-serif">
              Let's show the entire institute the strength and unity of the Corbett House in AP & TS. Tap the button to power up our regional house energy meter!
            </p>

            {/* Spirit Meter Visualizer */}
            <div className="p-6 rounded bg-[#5c131a] border-2 border-brand-gold space-y-4 shadow-[8px_8px_0px_rgba(0,0,0,0.35)]">
              <div className="flex justify-between items-end text-xs font-mono">
                <span className="text-brand-cream/80 font-semibold uppercase tracking-wide flex items-center gap-1">
                  <Flame size={14} className="text-brand-gold" />
                  Corbett Spirit Level
                </span>
                <span className="text-xl font-black text-brand-gold font-mono">{spiritLevel}%</span>
              </div>

              {/* Progress Slider Bar */}
              <div className="h-6 w-full bg-brand-maroon rounded overflow-hidden border border-brand-gold/20 p-1">
                <motion.div
                  className="h-full rounded bg-gradient-to-r from-brand-red via-brand-gold to-brand-red relative overflow-hidden"
                  animate={{ width: `${spiritLevel}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  {/* Flow Animation effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] w-24"
                    animate={{ x: ['-100%', '400%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between gap-4 pt-2">
                <button
                  onClick={handleFuel}
                  className="px-5 py-3 bg-brand-gold hover:bg-brand-cream text-brand-maroon font-cinzel font-black uppercase text-xs tracking-wider rounded shadow transition-all flex items-center gap-2 transform active:scale-95 border border-brand-gold"
                >
                  <Flame size={14} className={hasFuelled ? 'animate-bounce' : ''} />
                  Fuel The Spirit!
                </button>
                <span className="text-[11px] font-mono text-brand-cream/60">
                  ⚡ Fueled {clickCount} times by you
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: AP-TS Corbett Quiz trivia game */}
          <div className="lg:col-span-7 bg-[#5c131a] border-2 border-brand-gold p-6 md:p-8 rounded shadow-[8px_8px_0px_rgba(0,0,0,0.35)] flex flex-col justify-between min-h-[340px]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-brand-gold/20 mb-4">
                <span className="text-xs font-bold font-cinzel text-brand-gold uppercase tracking-widest flex items-center gap-1.5">
                  <Trophy size={14} className="text-brand-gold" />
                  AP-TS & Corbett Trivia
                </span>
                {currentQ < trivia.length && (
                  <span className="text-[10px] font-mono text-brand-cream/60">
                    Q. {currentQ + 1} of {trivia.length}
                  </span>
                )}
              </div>

              {/* Quiz Body */}
              <AnimatePresence mode="wait">
                {currentQ === trivia.length ? (
                  // Results panel
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-6 space-y-4 font-serif"
                  >
                    <Trophy className="w-12 h-12 text-brand-gold mx-auto animate-bounce" />
                    <div>
                      <h4 className="text-xl font-bold font-cinzel text-brand-gold uppercase tracking-widest">Quiz Completed!</h4>
                      <p className="text-xs text-brand-cream/80 mt-1">You scored {score} out of {trivia.length}</p>
                    </div>
                    <p className="text-xs text-brand-cream/70 max-w-sm mx-auto leading-relaxed">
                      {score === trivia.length 
                        ? "Absolute legend! You're fully geared up to support Corbett House with pride! 🐅🌟" 
                        : "Awesome effort! Join Bharath's network to learn more about our student community. 🤝"}
                    </p>
                    <button
                      onClick={restartTrivia}
                      className="px-4 py-2.5 bg-brand-maroon hover:bg-brand-red border border-brand-gold/30 text-brand-cream font-cinzel font-semibold text-xs uppercase tracking-widest rounded transition-all flex items-center gap-1.5 mx-auto"
                    >
                      <RefreshCw size={12} />
                      Play Again
                    </button>
                  </motion.div>
                ) : (
                  // Current Question view
                  <motion.div
                    key={currentQ}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h4 className="text-sm md:text-base font-bold font-cinzel text-brand-cream tracking-wide leading-relaxed">
                      {trivia[currentQ].text}
                    </h4>

                    {/* Options list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {trivia[currentQ].options.map((opt, oIdx) => {
                        const isSelected = selectedOpt === oIdx;
                        const isCorrect = oIdx === trivia[currentQ].correctIdx;
                        
                        let optStyle = 'bg-brand-maroon hover:bg-brand-maroon/80 border-brand-gold/20 text-brand-cream/85';
                        if (selectedOpt !== null) {
                          if (isCorrect) {
                            optStyle = 'bg-brand-emerald/20 border-brand-emerald text-brand-cream font-medium';
                          } else if (isSelected) {
                            optStyle = 'bg-brand-red/40 border-brand-gold/60 text-brand-cream';
                          } else {
                            optStyle = 'bg-brand-maroon opacity-40 border-transparent text-brand-cream/40';
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleAnswer(oIdx)}
                            disabled={selectedOpt !== null}
                            className={`p-3 text-xs rounded border text-left transition-all flex items-center justify-between gap-2 font-serif ${optStyle}`}
                          >
                            <span>{opt}</span>
                            {selectedOpt !== null && isCorrect && <CheckCircle size={14} className="text-brand-emerald shrink-0" />}
                            {selectedOpt !== null && isSelected && !isCorrect && <XCircle size={14} className="text-brand-gold shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanatory Fact */}
                    {showResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-brand-maroon border border-brand-gold/15 p-3 rounded text-xs text-brand-cream/80 leading-relaxed italic mt-2 font-serif"
                      >
                        {trivia[currentQ].fact}
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Next buttons */}
            {showResult && currentQ < trivia.length && (
              <button
                onClick={handleNext}
                className="mt-6 ml-auto px-4 py-2.5 bg-brand-gold hover:bg-brand-cream text-brand-maroon font-cinzel font-bold text-xs uppercase tracking-widest rounded transition-all flex items-center gap-1.5"
              >
                Next Question
                <RefreshCw size={12} className="animate-spin-slow" />
              </button>
            )}
          </div>

        </div>
      </div>
    </motion.section>
  );
}
