import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Code, Layers, Cpu, CheckCircle2, Award } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Sparkles,
  Code,
  Layers,
  Cpu,
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | 'all'>('all');

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : [skillCategories[activeTab as number]];

  return (
    <section id="skills" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technical Proficiency
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Engineered through academic rigor in CSE AIML and hands-on virtual internships certified by AICTE and EduSkills.
          </p>
        </div>

        {/* Filter Category Tabs - shown only if multiple categories exist */}
        {skillCategories.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}

        {/* Skill Category Cards Grid */}
        <div className="max-w-3xl mx-auto">
          {filteredCategories.map((cat, catIdx) => {
            const IconComponent = iconMap[cat.iconName] || Code;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden"
              >
                <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-400">{cat.skills.length} core competencies</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium flex items-center gap-2.5 hover:border-cyan-500/30 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
