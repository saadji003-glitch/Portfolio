import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, Sparkles } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Excellence
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Pursuing rigorous technical training in Artificial Intelligence & Machine Learning at Amravati's premier engineering institute.
          </p>
        </div>

        {/* Major Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden"
          >
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>Bachelor of Technology (B.Tech)</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Computer Science & Engineering (AI & ML)
                </h3>
                <p className="text-base text-cyan-400 font-medium">
                  {personalDetails.college}
                </p>
              </div>

              <div className="flex flex-col gap-2 shrink-0 md:text-right">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Currently Pursuing</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Amravati, Maharashtra</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
