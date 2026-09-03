import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  ArrowRight,
  Linkedin,
  Instagram,
  Github,
  Quote as QuoteIcon,
  Camera,
  Upload,
  User,
  CheckCircle2,
  Maximize2,
  Download,
  RotateCcw,
  X,
  Sparkles,
} from 'lucide-react';
import { personalDetails, quotesList } from '../data/portfolioData';
import { useProfilePhoto } from '../context/PhotoContext';

export const Hero: React.FC = () => {
  const featuredQuote = quotesList[0];
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { photoSrc, setPhoto, resetPhoto, isCustomPhoto } = useProfilePhoto();

  const [hasImageError, setHasImageError] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhoto(result);
        setHasImageError(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDownloadPhoto = () => {
    if (!photoSrc) return;
    const a = document.createElement('a');
    a.href = photoSrc;
    a.download = 'saad-khan-profile.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="hero" className="relative min-h-[85vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Glow & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bio & Hero Content */}
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

          {/* Right Column: Original Photo Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
            id="hero-profile-photo-container"
          >
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`relative w-full max-w-[340px] sm:max-w-[360px] p-3 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border ${
                isDragging
                  ? 'border-cyan-400 ring-4 ring-cyan-500/20'
                  : 'border-slate-800/90 shadow-2xl shadow-cyan-500/10 hover:border-cyan-500/40'
              } transition-all group`}
            >
              {/* Corner decorative light beam */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-6 right-6 z-20 px-3 py-1 rounded-full bg-slate-950/90 border border-cyan-500/40 text-cyan-300 text-[11px] font-mono shadow-md backdrop-blur-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>CSE (AIML)</span>
              </div>

              {/* Photo Display Card */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/90 flex flex-col items-center justify-center">
                {photoSrc && !hasImageError ? (
                  <>
                    <img
                      src={photoSrc}
                      alt={personalDetails.name}
                      referrerPolicy="no-referrer"
                      onError={() => setHasImageError(true)}
                      onClick={() => setIsLightboxOpen(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] cursor-pointer"
                      id="hero-profile-photo-image"
                      title="Click to view full portrait"
                    />

                    {/* Quick Floating Actions (Top Left) */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                      <button
                        type="button"
                        onClick={() => setIsLightboxOpen(true)}
                        className="p-1.5 rounded-lg bg-slate-950/80 hover:bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-cyan-400 backdrop-blur-md transition-all cursor-pointer shadow-md"
                        title="View Full Size"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={handleDownloadPhoto}
                        className="p-1.5 rounded-lg bg-slate-950/80 hover:bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-cyan-400 backdrop-blur-md transition-all cursor-pointer shadow-md"
                        title="Download Photo"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-slate-900/50 transition-colors"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                      <Camera className="w-8 h-8" />
                    </div>
                    <h4 className="text-white font-bold text-sm">Add Original Photo</h4>
                    <p className="text-slate-400 text-xs mt-1.5 max-w-[220px]">
                      Click or drop your photo file here to display it without AI alterations.
                    </p>
                    <span className="mt-4 px-3.5 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 border border-cyan-500/40">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Select Photo</span>
                    </span>
                  </div>
                )}

                {/* Subtle bottom gradient label */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">
                      {personalDetails.name}
                    </h3>
                    <p className="text-[11px] text-cyan-300 font-mono" id="hero-photo-subtitle">
                      CSE AIML Student
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {isCustomPhoto && (
                      <button
                        type="button"
                        onClick={resetPhoto}
                        className="p-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-400 hover:text-red-400 hover:border-red-500/50 transition-all shadow-md cursor-pointer"
                        title="Reset Photo"
                        aria-label="Reset Photo"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="p-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-md cursor-pointer"
                      title="Upload / Change original photo"
                      aria-label="Upload original photo"
                      id="hero-photo-upload-trigger"
                    >
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Hidden native file input for direct photo selection */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            <p className="text-[11px] text-slate-500 font-mono mt-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80" />
              <span>100% Original Photo &bull; Active in Portfolio</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      <AnimatePresence>
        {isLightboxOpen && photoSrc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <h3 className="text-white font-bold text-base">{personalDetails.name}</h3>
                </div>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
                <img
                  src={photoSrc}
                  alt={personalDetails.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-slate-400">
                  <p className="font-semibold text-slate-200">{personalDetails.degree}</p>
                  <p className="text-[11px] text-cyan-400 font-mono">{personalDetails.collegeShort}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownloadPhoto}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
