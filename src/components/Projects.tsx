import React from 'react';
import { motion } from 'motion/react';
import { FolderCode, Terminal, Sparkles, CheckCircle2, Code2, Cpu, Github, ExternalLink } from 'lucide-react';
import { projectsList, personalDetails } from '../data/portfolioData';
import { UnitConverterWidget } from './UnitConverterWidget';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderCode className="w-3.5 h-3.5" />
            <span>Software & Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Project & Application
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Core C programming algorithm demonstrating modular functions, control structures, and interactive conversions.
          </p>
        </div>

        {/* Featured Project: Unit Converter (C Language) with Interactive Widget */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                    ★ Featured Project
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
                    C Language
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
                    Menu-Driven CLI
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Unit Converter in C Language
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {projectsList[0].longDescription}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={personalDetails.github || 'https://github.com/saadji003-glitch'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer group"
                  id="project-github-link"
                >
                  <Github className="w-4 h-4 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* C Project Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {projectsList[0].highlights.map((h, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Embedded Live Interactive Unit Converter Widget */}
            <div className="pt-2">
              <UnitConverterWidget />
            </div>
          </motion.div>
        </div>

        {/* Secondary Projects Grid (if any exist) */}
        {projectsList.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {projectsList.slice(1).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-400">
                      {project.language}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{project.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Key Features:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 text-slate-400 border border-slate-800 text-[11px] font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
