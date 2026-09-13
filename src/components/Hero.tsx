import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  ArrowRight,
  Linkedin,
  Instagram,
  Github,
  Quote as QuoteIcon,
  User,
} from 'lucide-react';
import { personalDetails, quotesList } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const featuredQuote = quotesList[0];

  return (
    <section id="hero" className="relative min-h-[85vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Glow & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Bio & Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-lg shadow-cyan-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span>Available for AI / Software Engineering Opportunities</span>
          </div>

          {/* Name & Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight" id="hero-main-heading">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                {personalDetails.name}
              </span>
            </h1>
          </div>

          {/* Academic institution badge */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 text-xs sm:text-sm max-w-xl">
            <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <p className="font-semibold text-white">{personalDetails.degree}</p>
              <p className="text-slate-400 text-xs">{personalDetails.college}</p>
            </div>
          </div>

          {/* Featured Quote Card */}
          <div className="relative p-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-cyan-500/20 text-xs max-w-2xl">
            <QuoteIcon className="w-4 h-4 text-cyan-400/40 absolute top-3 right-3" />
            <p className="italic text-cyan-200/90 font-serif text-sm">
              "{featuredQuote.text}"
            </p>
            <p className="text-[11px] font-mono text-cyan-400 mt-1">
              — {featuredQuote.author} <span className="text-slate-500">({featuredQuote.role})</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-pink-500/50 transition-all cursor-pointer"
              id="hero-instagram-button"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram</span>
            </a>

            <a
              href={personalDetails.github || 'https://github.com/saadji003-glitch'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer"
              id="hero-github-button"
            >
              <Github className="w-4 h-4 text-slate-200" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Key Quick Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 max-w-2xl">
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <span className="block text-xl font-extrabold text-cyan-400 font-mono">3+</span>
              <span className="text-[11px] text-slate-400">Virtual Internships</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <span className="block text-xl font-extrabold text-emerald-400 font-mono">AICTE</span>
              <span className="text-[11px] text-slate-400">Certified Scholar</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <span className="block text-xl font-extrabold text-blue-400 font-mono">C / Java</span>
              <span className="text-[11px] text-slate-400">Full Stack & C Logic</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
