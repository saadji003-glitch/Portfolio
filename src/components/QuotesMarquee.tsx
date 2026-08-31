import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote as QuoteIcon, Sparkles, Shuffle, Terminal, Heart } from 'lucide-react';
import { quotesList } from '../data/portfolioData';

export const QuotesMarquee: React.FC = () => {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState<number>(0);

  const currentQuote = quotesList[activeQuoteIndex % quotesList.length] || quotesList[0];

  const handleNextQuote = () => {
    setActiveQuoteIndex((prev) => (prev + 1) % quotesList.length);
  };

  return (
    <section id="quotes" className="relative py-20 bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <QuoteIcon className="w-3.5 h-3.5" />
            <span>Inspirational Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Quotes on Code, AI & Wisdom
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Guiding philosophies shaping my perspective as a CSE AIML developer.
          </p>
        </div>

        {/* Featured Large Quote Display */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
            <QuoteIcon className="w-16 h-16 text-cyan-500/10 absolute top-6 right-6 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote.text}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 text-center"
              >
                <p className="text-xl sm:text-2xl font-serif italic text-cyan-100 leading-relaxed">
                  "{currentQuote.text}"
                </p>

                <div>
                  <h4 className="text-base font-bold text-white tracking-wide">
                    — {currentQuote.author}
                  </h4>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">{currentQuote.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">
                Quote {activeQuoteIndex + 1} of {quotesList.length}
              </span>

              <button
                onClick={handleNextQuote}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Next Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
