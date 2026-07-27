import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  GraduationCap,
  Award,
  ArrowRight,
  Linkedin,
  Instagram,
  Download,
  Terminal,
  Quote as QuoteIcon,
  Code,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { personalDetails, quotesList } from '../data/portfolioData';

const roles = [
  'B.Tech CSE (AIML) Student',
  'Java Full-Stack Developer',
  'Prompt Engineering Specialist',
  'C Language Programmer',
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const featuredQuote = quotesList[0];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Glow & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Hero Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-lg shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Available for AI / Software Engineering Opportunities</span>
            </div>

            {/* Name & Dynamic Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                  {personalDetails.name}
                </span>
              </h1>

              {/* Animated Rotating Role */}
              <div className="h-9 flex items-center">
                <span className="text-lg sm:text-2xl font-semibold text-slate-300 font-mono flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-cyan-400 inline" />
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-cyan-400"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </span>
              </div>
            </div>

            {/* Academic institution badge */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 text-xs sm:text-sm">
              <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">{personalDetails.degree}</p>
                <p className="text-slate-400 text-xs">{personalDetails.college}</p>
              </div>
            </div>

            {/* Short Tagline */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {personalDetails.shortTagline}
            </p>

            {/* Featured Quote Card */}
            <div className="relative p-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-cyan-500/20 text-xs">
              <QuoteIcon className="w-4 h-4 text-cyan-400/40 absolute top-3 right-3" />
              <p className="italic text-cyan-200/90 font-serif text-sm">
                "{featuredQuote.text}"
              </p>
              <p className="text-[11px] font-mono text-cyan-400 mt-1">
                — {featuredQuote.author} <span className="text-slate-500">({featuredQuote.role})</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
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
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalDetails.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-pink-500/50 transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram</span>
              </a>
            </div>

            {/* Key Quick Highlights Grid */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
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

          {/* Right Column: Hero Engineering Crest & Verification Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-sm group">
              {/* Outer Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />

              <div className="relative bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-hidden space-y-6">
                {/* Header Crest */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/30">
                      <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center font-black text-cyan-400 font-mono text-lg">
                        SK
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">{personalDetails.name}</h3>
                      <p className="text-[11px] text-cyan-400 font-mono">B.Tech CSE (AIML)</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3 h-3" /> AICTE Verified
                  </span>
                </div>

                {/* Technical Highlights Grid */}
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Code className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs text-slate-300 font-medium">Core C Programming</span>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 font-bold">Grade 90%</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Cpu className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-slate-300 font-medium">Employability Skills</span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold">Grade "O"</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      <span className="text-xs text-slate-300 font-medium">Prompt Engineering</span>
                    </div>
                    <span className="text-[11px] font-mono text-blue-400 font-bold">Grade "A"</span>
                  </div>
                </div>

                {/* College Info */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <GraduationCap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{personalDetails.collegeShort}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>3 EduSkills Virtual Internships Completed</span>
                  </div>
                </div>

                {/* Footer Quick Action */}
                <a
                  href="#certificates"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-all"
                >
                  <span>Explore Verified Certificates</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
