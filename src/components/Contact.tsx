import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Linkedin,
  Instagram,
  Github,
  Copy,
  Check,
  Send,
  MapPin,
  GraduationCap,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger direct mailto link as fallback & show instant success message
    const mailtoUrl = `mailto:${personalDetails.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;

    window.location.href = mailtoUrl;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch With Saad Khan
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Open for internships, collaborative software projects, AI research conversations, and career opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Social Cards & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Scholar Profile Quick Card */}
            <div className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-3xl p-5 shadow-xl flex items-center gap-4 transition-all">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-cyan-500/40 shrink-0 shadow-md bg-slate-950 flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono text-base">
                  SK
                </span>
              </div>
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                  <Sparkles className="w-3 h-3" />
                  <span>Direct Communication</span>
                </span>
                <h4 className="text-sm font-bold text-white truncate">{personalDetails.name}</h4>
                <p className="text-xs text-slate-400 truncate">{personalDetails.collegeShort}</p>
              </div>
            </div>

            {/* Email Card with Copy Button */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Direct Email</h3>
                    <p className="text-xs text-slate-400">Primary Contact Address</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all cursor-pointer flex items-center gap-1.5 text-xs"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                  <span className="text-[11px] font-mono">{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="text-cyan-400 font-mono text-sm font-bold hover:underline truncate"
                >
                  {personalDetails.email}
                </a>
                <ExternalLink className="w-4 h-4 text-slate-500 shrink-0" />
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* LinkedIn */}
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-3xl p-5 flex flex-col justify-between shadow-xl transition-all"
                id="contact-linkedin-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">LinkedIn</h4>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">/in/saad-khan</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={personalDetails.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-900/80 border border-slate-800 hover:border-pink-500/50 rounded-3xl p-5 flex flex-col justify-between shadow-xl transition-all"
                id="contact-instagram-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-pink-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Instagram</h4>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">{personalDetails.instagramHandle || '@saadkn._'}</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalDetails.github || 'https://github.com/saadji003-glitch'}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-5 flex flex-col justify-between shadow-xl transition-all"
                id="contact-github-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Github className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">GitHub</h4>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">{personalDetails.githubHandle || '@saadji003-glitch'}</p>
                </div>
              </a>
            </div>

            {/* Location & Institution Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Base Location</h4>
                  <p className="text-xs text-slate-400">{personalDetails.location}</p>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <p className="font-semibold text-white">{personalDetails.college}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Amravati, Maharashtra, India</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="pb-4 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white">Send A Message</h3>
                <p className="text-xs text-slate-400">Fill out the form below to initiate an instant email conversation.</p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs text-cyan-200">
                    Your default mail application has been opened with your message addressed to <span className="font-mono font-bold">{personalDetails.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Opportunity / Internship Inquiry"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Saad, I would like to discuss..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Email Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
