import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, CheckCircle2, FileText, ExternalLink, ShieldCheck, X, Sparkles, Building2, User } from 'lucide-react';
import { certificatesList, personalDetails } from '../data/portfolioData';
import { Certificate } from '../types';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="relative py-20 bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>AICTE & EduSkills Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Virtual Internship Certificates & Credentials
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            National Internship Portal certificates backed by AICTE, Ministry of Education (Govt. of India), EduSkills Academy, and Wadhwani Foundation.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificatesList.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-6 flex flex-col justify-between shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>AICTE / EduSkills</span>
                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold font-mono text-white bg-gradient-to-r ${cert.gradeColor} shadow-md`}
                  >
                    Grade '{cert.grade}'
                  </span>
                </div>

                {/* Certificate Title */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-cyan-300/90 font-medium mt-1">
                    {cert.issuer} {cert.supportedBy ? `• ${cert.supportedBy}` : ''}
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">{cert.period} ({cert.duration})</p>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.summary}
                </p>

                {/* Skills Learned Pills */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Core Competencies Verified:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.slice(0, 4).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 border border-slate-800 text-[11px]"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skillsLearned.length > 4 && (
                      <span className="px-2 py-1 rounded-lg bg-slate-950 text-slate-400 text-[10px] font-mono">
                        +{cert.skillsLearned.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Full Certificate</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Detailed Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Official Certificate Visual Render Frame */}
              <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 border-4 border-cyan-800/30 shadow-inner space-y-6 font-sans">
                {/* Certificate Header Banner */}
                <div className="flex items-center justify-between border-b pb-4 border-slate-200">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-8 h-8 text-cyan-700" />
                    <div>
                      <h4 className="text-xs font-bold tracking-widest uppercase text-slate-600">
                        National Internship Portal • EduSkills
                      </h4>
                      <p className="text-[10px] text-slate-500">Ministry of Education, Govt. of India & AICTE</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-cyan-800 bg-cyan-100 px-3 py-1 rounded-full border border-cyan-300">
                      Grade '{selectedCert.grade}' ({selectedCert.gradeLabel})
                    </span>
                  </div>
                </div>

                {/* Main Body */}
                <div className="text-center space-y-3 py-2">
                  <p className="text-xs font-serif uppercase tracking-widest text-slate-500">
                    Certificate of Virtual Internship
                  </p>
                  <p className="text-xs text-slate-600">This is to certify that</p>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif capitalize underline decoration-cyan-500 underline-offset-4">
                    {personalDetails.fullNameCertificates}
                  </h3>
                  <p className="text-xs font-medium text-slate-700">
                    {personalDetails.college}
                  </p>
                  <p className="text-xs text-slate-600 max-w-lg mx-auto">
                    has successfully completed the 10-week / 8-week{' '}
                    <span className="font-bold text-slate-900">{selectedCert.title}</span> during{' '}
                    <span className="font-semibold">{selectedCert.period}</span>.
                  </p>
                </div>

                {/* Verification Metadata Box */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Student ID:</span>
                    <span className="text-slate-800 font-bold break-all">{selectedCert.studentId}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Certificate ID:</span>
                    <span className="text-slate-800 font-bold break-all">{selectedCert.certificateId}</span>
                  </div>
                </div>
              </div>

              {/* Skills Verified List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Verified Skills & Competencies:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {selectedCert.skillsLearned.map((s, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer"
                >
                  Close Viewer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
