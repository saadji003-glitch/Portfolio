import React from 'react';
import { motion } from 'motion/react';
import { User, GraduationCap, MapPin, Mail, BookOpen, Cpu, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Passionate CSE AIML Scholar & Software Developer
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Dedicated to solving complex computational problems through structured algorithms, clean code architecture, and innovative AI models.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Who I Am</h3>
                <p className="text-xs text-slate-400">Student, Programmer & Prompt Engineer</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {personalDetails.aboutBio}
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              My engineering journey combines core computer science principles with hands-on practice. Through virtual internships certified by <span className="text-cyan-400 font-semibold">AICTE</span> and <span className="text-cyan-400 font-semibold">EduSkills</span>, I have mastered Java Full-Stack web design, prompt engineering for generative AI systems, and employability skills.
            </p>

            {/* Core Competencies Checklist */}
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Key Professional Focus Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>AI Prompt Design & Few-Shot Logic</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Core C Language & Algorithm Design</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Java Full-Stack Web Development</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Problem Solving & Employability</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Details Sidebar Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Summary Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Education Details</h3>
                  <p className="text-xs text-slate-400">Academic Background</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[11px] font-mono border border-cyan-500/30">
                  B.Tech CSE (AIML)
                </span>
                <h4 className="text-sm font-bold text-white leading-snug">
                  P. R. Pote Patil College of Engineering and Management, Amravati
                </h4>
                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Amravati, Maharashtra, India
                </p>
                <p className="text-xs text-slate-300 pt-1">
                  Specialization in Artificial Intelligence, Machine Learning, Data Structures, and Software Development.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
                  <span className="text-slate-400">Full Name (Certificates):</span>
                  <span className="text-slate-200 font-semibold">{personalDetails.fullNameCertificates}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
                  <span className="text-slate-400">Contact Email:</span>
                  <a href={`mailto:${personalDetails.email}`} className="text-cyan-400 hover:underline font-mono">
                    {personalDetails.email}
                  </a>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-emerald-400 font-semibold">Active Student & Scholar</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
