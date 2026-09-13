import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  CheckCircle2,
  FileText,
  ExternalLink,
  ShieldCheck,
  X,
  Download,
  Eye,
  FileCheck,
  Building2,
  GraduationCap,
} from 'lucide-react';
import { certificatesList } from '../data/portfolioData';
import { Certificate } from '../types';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [viewMode, setViewMode] = useState<'document' | 'pdf'>('document');

  const handleOpenCert = (cert: Certificate, initialMode: 'document' | 'pdf' = 'document') => {
    setSelectedCert(cert);
    setViewMode(initialMode);
  };

  return (
    <section id="certificates" className="relative py-20 bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Deloitte, AICTE & EduSkills Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Certificates & Industry Credentials
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Verified credentials and virtual internship certifications from Deloitte, AICTE, Ministry of Education (Govt. of India), and EduSkills Academy. Includes authentic PDF documents with official verification codes.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificatesList.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header Badges */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{cert.issuer.includes('Deloitte') ? 'Deloitte • Forage' : 'AICTE • EduSkills'}</span>
                    </span>
                    {cert.pdfUrl && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono flex items-center gap-1">
                        <FileCheck className="w-3 h-3 text-emerald-400" />
                        <span>Original PDF</span>
                      </span>
                    )}
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold font-mono text-white bg-gradient-to-r ${cert.gradeColor} shadow-md`}
                  >
                    {cert.grade === 'Completed' ? 'Verified Completion' : `Grade '${cert.grade}'`}
                  </span>
                </div>

                {/* Certificate Title */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-cyan-300/90 font-medium mt-1">
                    {cert.issuer} {cert.supportedBy ? `• ${cert.supportedBy}` : ''}
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {cert.period} ({cert.duration})
                  </p>
                </div>

                {/* Verification IDs */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] font-mono space-y-1">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>{cert.issuer.includes('Deloitte') ? 'Enrolment Code:' : 'Certificate ID:'}</span>
                    <span className="text-cyan-400 font-bold tracking-wider">{cert.certificateId}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>{cert.issuer.includes('Deloitte') ? 'User Code:' : 'Student ID:'}</span>
                    <span className="text-slate-300 font-semibold">{cert.studentId}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.summary}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-5 border-t border-slate-800/80">
                <button
                  onClick={() => handleOpenCert(cert, 'document')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
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
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-5 my-6 max-h-[92vh] overflow-y-auto"
            >
              {/* Top Modal Controls Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                      Authentic Credential Record
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {selectedCert.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {/* View Mode Toggle */}
                  {selectedCert.pdfUrl && (
                    <div className="inline-flex rounded-xl bg-slate-950 p-1 border border-slate-800 text-xs">
                      <button
                        onClick={() => setViewMode('document')}
                        className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                          viewMode === 'document'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Document View
                      </button>
                      <button
                        onClick={() => setViewMode('pdf')}
                        className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                          viewMode === 'pdf'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Embedded PDF
                      </button>
                    </div>
                  )}

                  {/* Direct Download Button */}
                  {selectedCert.pdfUrl && (
                    <a
                      href={selectedCert.pdfUrl}
                      download={selectedCert.pdfName}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Original PDF</span>
                    </a>
                  )}

                  {/* Open in New Tab */}
                  {selectedCert.pdfUrl && (
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
                      title="Open PDF in new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {/* Close Modal */}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all cursor-pointer"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* View Mode: Embedded PDF Viewer */}
              {viewMode === 'pdf' && selectedCert.pdfUrl ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
                    <span className="font-mono">Serving authentic PDF: {selectedCert.pdfName}</span>
                    <a
                      href={selectedCert.pdfUrl}
                      download={selectedCert.pdfName}
                      className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <Download className="w-3 h-3" /> Save to Device
                    </a>
                  </div>
                  <iframe
                    src={`${selectedCert.pdfUrl}#toolbar=1&navpanes=0`}
                    title={`Original PDF Certificate - ${selectedCert.title}`}
                    className="w-full h-[620px] rounded-2xl border border-slate-700/80 bg-slate-950 shadow-inner"
                  />
                </div>
              ) : selectedCert.id === 'cert-deloitte-tech' ? (
                /* View Mode: Authentic High-Resolution Deloitte Document Render */
                <div className="relative bg-white text-slate-900 rounded-2xl border-4 border-slate-200/90 shadow-2xl p-6 sm:p-12 font-sans overflow-hidden">
                  {/* Deloitte Brand Header */}
                  <div className="flex items-center gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight font-sans">
                      Deloitte
                    </span>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#86bc25] inline-block mb-1 sm:mb-2 ml-0.5" />
                  </div>

                  {/* Recipient & Program Title */}
                  <div className="mt-8 sm:mt-10 space-y-1">
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      Saad Khan
                    </h2>
                    <h3 className="text-xl sm:text-3xl font-bold text-slate-800 tracking-tight pt-1">
                      Technology Job Simulation
                    </h3>
                  </div>

                  {/* Subtitle & Date */}
                  <div className="mt-5 space-y-1">
                    <p className="text-base sm:text-xl text-slate-700 font-medium">
                      Certificate of Completion
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 font-normal">
                      September 7th, 2026
                    </p>
                  </div>

                  {/* Middle / Bottom section */}
                  <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
                    {/* Left: Practical tasks */}
                    <div className="space-y-3">
                      <p className="text-xs sm:text-sm text-slate-600">
                        Over the period of September 2026, Saad Khan has completed practical tasks in:
                      </p>
                      <ul className="text-xs sm:text-sm font-semibold text-slate-800 space-y-1 pl-1">
                        <li>Coding</li>
                        <li>Development</li>
                      </ul>
                    </div>

                    {/* Right: Signature Block */}
                    <div className="space-y-1 sm:text-left">
                      <div className="h-10 flex items-center">
                        <svg className="w-32 h-9 text-slate-800" viewBox="0 0 140 40" fill="none">
                          <path
                            d="M8 26 C 25 12, 45 32, 65 14 C 80 8, 95 24, 115 12 M28 8 C 36 28, 44 6, 52 24"
                            stroke="#111827"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-sm font-bold text-slate-900 pt-1">Tina McCreery</p>
                      <p className="text-xs text-slate-600">Chief Human</p>
                      <p className="text-xs text-slate-600">Resources Officer,</p>
                      <p className="text-xs text-slate-600">Deloitte</p>
                    </div>
                  </div>

                  {/* Footer Verification Code */}
                  <div className="mt-12 pt-4 border-t border-slate-200/80 text-[10px] sm:text-xs text-slate-400 font-mono flex flex-wrap items-center justify-between gap-2">
                    <p className="break-all">
                      Enrolment Verification Code <span className="text-slate-600 font-semibold">{selectedCert.certificateId}</span> | User Verification Code <span className="text-slate-600 font-semibold">{selectedCert.studentId}</span>
                    </p>
                    <span className="text-slate-500 font-sans font-medium">Issued by Forage</span>
                  </div>
                </div>
              ) : (
                /* View Mode: Authentic High-Resolution Document Render */
                <div className="relative bg-[#fdfcfb] text-slate-900 rounded-2xl border-4 border-slate-300/80 shadow-2xl p-6 sm:p-10 font-sans overflow-hidden">
                  {/* Left Navy & Orange Accent Stripe (as seen on the authentic certificate) */}
                  <div className="absolute top-0 bottom-0 left-0 w-3 bg-[#0f2a4a]" />
                  <div className="absolute top-0 bottom-0 left-3 w-1 bg-[#f37021]" />

                  {/* Top Logos Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center pb-5 border-b border-slate-200/90 pl-3">
                    {/* Ministry of Education */}
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded bg-slate-100 flex items-center justify-center text-slate-700 font-serif font-bold text-xs border border-slate-300 shrink-0">
                        🇮🇳
                      </div>
                      <div className="leading-tight">
                        <p className="text-[11px] font-bold text-slate-800">शिक्षा मंत्रालय</p>
                        <p className="text-[8px] font-semibold text-slate-600 tracking-wider">MINISTRY OF EDUCATION</p>
                        <p className="text-[7px] text-slate-500">सत्यमेव जयते</p>
                      </div>
                    </div>

                    {/* AICTE */}
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-700 font-bold text-[10px] shrink-0">
                        ⚙️
                      </div>
                      <div className="leading-tight">
                        <p className="text-[11px] font-extrabold text-amber-700">AICTE</p>
                        <p className="text-[7px] text-slate-600">अखिल भारतीय तकनीकी शिक्षा परिषद्</p>
                        <p className="text-[7px] text-slate-500">All India Council for Technical Education</p>
                      </div>
                    </div>

                    {/* National Internship Portal */}
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-black text-xs shrink-0">
                        N
                      </div>
                      <div className="leading-tight">
                        <p className="text-[9px] font-extrabold text-blue-800 leading-none">NATIONAL</p>
                        <p className="text-[9px] font-extrabold text-blue-800 leading-none">INTERNSHIP</p>
                        <p className="text-[7px] text-slate-500 font-medium">PORTAL</p>
                      </div>
                    </div>

                    {/* EduSkills */}
                    <div className="flex items-center gap-2 justify-self-start sm:justify-self-end">
                      <div className="leading-tight text-right sm:text-left">
                        <p className="text-[13px] font-black text-[#0f2a4a] tracking-tight">EduSkills®</p>
                        <p className="text-[7.5px] text-slate-500 font-medium">Nation Building Through Skills</p>
                      </div>
                    </div>
                  </div>

                  {/* Central Circular Seal: AICTE • EduSkills 2026 Virtual Internship */}
                  <div className="flex justify-center my-6">
                    <div className="relative flex flex-col items-center justify-center w-24 h-24 rounded-full bg-[#0f2a4a] text-white border-4 border-amber-400 shadow-lg text-center p-2">
                      <div className="absolute inset-1 rounded-full border border-dashed border-amber-300/60 pointer-events-none" />
                      <span className="text-[7px] font-bold text-amber-300 tracking-wider">AICTE • EduSkills</span>
                      <span className="text-base font-black tracking-tight text-white my-0.5">2026</span>
                      <span className="text-[6px] font-bold text-amber-300 tracking-widest uppercase">
                        ★ VIRTUAL INTERNSHIP ★
                      </span>
                    </div>
                  </div>

                  {/* Certificate Main Text */}
                  <div className="text-center space-y-2.5 max-w-2xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#112a4a] font-serif tracking-tight">
                      Certificate of Virtual Internship
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">This is to certify that</p>

                    <h3 className="text-xl sm:text-2xl font-black text-[#112a4a] font-serif tracking-normal pt-1 pb-0.5 capitalize">
                      saad khan atique ur raheman khan
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-slate-800">
                      P. R. Pote Patil College of Engineering and Management, Amravati
                    </p>

                    <p className="text-xs text-slate-600 pt-1">
                      has successfully completed the {selectedCert.duration.toLowerCase().includes('8') ? '8-weeks' : '10-weeks'}
                    </p>

                    {/* Internship Title */}
                    <div className="py-1">
                      <p className="text-base sm:text-lg font-extrabold text-[#112a4a] leading-tight">
                        {selectedCert.title}
                      </p>
                      <p className="text-xs font-bold text-slate-700 mt-1">{selectedCert.period}</p>
                    </div>

                    <p className="text-[11px] sm:text-xs text-slate-500 italic max-w-lg mx-auto pt-1">
                      May this Internship learning propel you toward a bright and successful career.
                    </p>

                    {/* Supported by EduSkills Academy */}
                    <div className="pt-3 flex items-center justify-center gap-1.5 text-xs">
                      <span className="text-slate-500">Supported by</span>
                      <span className="font-extrabold text-[#0f2a4a]">EduSkills</span>
                      <span className="text-[9px] font-bold text-cyan-700 bg-cyan-100 px-1.5 py-0.5 rounded">
                        ACADEMY
                      </span>
                    </div>
                  </div>

                  {/* Official Signatures Row */}
                  <div className="grid grid-cols-2 gap-6 pt-8 mt-6 border-t border-slate-200">
                    {/* Left: Dr. Buddha Chandrasekhar */}
                    <div className="text-center">
                      <div className="h-10 flex items-center justify-center">
                        <svg className="w-28 h-8 text-slate-800" viewBox="0 0 140 40" fill="none">
                          <path
                            d="M10 28 C 30 10, 50 35, 75 18 C 90 8, 105 25, 125 15 M35 12 C 45 28, 55 5, 60 22"
                            stroke="#1a365d"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-xs font-bold text-slate-900 mt-1">Dr. Buddha Chandrasekhar</p>
                      <p className="text-[10px] text-slate-600">Chief Coordinating Officer (CCO)</p>
                      <p className="text-[9px] text-slate-500">AICTE, Ministry of Education</p>
                    </div>

                    {/* Right: Shubhajit Jagadev */}
                    <div className="text-center">
                      <div className="h-10 flex items-center justify-center">
                        <svg className="w-28 h-8 text-slate-800" viewBox="0 0 140 40" fill="none">
                          <path
                            d="M15 25 C 40 8, 55 30, 80 14 C 95 6, 110 28, 128 12 M70 8 C 75 26, 85 4, 90 20"
                            stroke="#1a365d"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-xs font-bold text-slate-900 mt-1">Shubhajit Jagadev</p>
                      <p className="text-[10px] text-slate-600">Chief Executive Officer (CEO)</p>
                      <p className="text-[9px] text-slate-500">EduSkills</p>
                    </div>
                  </div>

                  {/* Verification Box, QR Code & Grade Seal */}
                  <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* QR Code & IDs */}
                    <div className="flex items-center gap-3">
                      {/* Stylized high-contrast QR visual */}
                      <div className="w-16 h-16 bg-white border border-slate-300 p-1 rounded shadow-sm shrink-0 grid grid-cols-4 gap-0.5">
                        <div className="bg-[#112a4a] rounded-xs" />
                        <div className="bg-[#112a4a] rounded-xs" />
                        <div className="bg-transparent" />
                        <div className="bg-[#112a4a] rounded-xs" />
                        <div className="bg-[#112a4a] rounded-xs" />
                        <div className="bg-transparent" />
                        <div className="bg-[#112a4a] rounded-xs" />
                        <div className="bg-transparent" />
                        <div className="bg-transparent" />
                        <div className="bg-[#112a4a] rounded-xs" />
                        <div className="bg-[#112a4a] rounded-xs" />
                        <div className="bg-[#112a4a] rounded-xs" />
                        <div className="bg-[#112a4a] rounded-xs" />
                        <div className="bg-transparent" />
                        <div className="bg-[#112a4a] rounded-xs" />
                        <div className="bg-[#112a4a] rounded-xs" />
                      </div>

                      <div className="text-[10px] font-mono leading-relaxed">
                        <p className="text-slate-600">
                          Certificate ID:{' '}
                          <span className="font-bold text-slate-900 break-all">{selectedCert.certificateId}</span>
                        </p>
                        <p className="text-slate-600">
                          Student ID:{' '}
                          <span className="font-bold text-slate-900 break-all">{selectedCert.studentId}</span>
                        </p>
                        <span className="inline-block mt-0.5 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[9px] font-semibold">
                          ✓ AICTE Verified Credential
                        </span>
                      </div>
                    </div>

                    {/* Grade Seal Badge */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#0f4c81] text-white flex flex-col items-center justify-center border-2 border-dashed border-white/60 shadow-md">
                        <span className="text-[6px] font-bold tracking-widest text-white/90 uppercase">GRADE</span>
                        <span className="text-xl font-black text-white leading-none">{selectedCert.grade}</span>
                        <span className="text-[6px] text-white/80 font-mono">INTERNSHIP</span>
                      </div>
                    </div>
                  </div>

                  {/* Official Grade Scale Footer Ribbon */}
                  <div className="mt-5 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 bg-[#0c213e] text-slate-200 py-2.5 px-4 text-center">
                    <p className="text-[8px] sm:text-[9.5px] font-mono tracking-wider opacity-90 leading-tight">
                      GRADE: O (Outstanding): 90-100 | E (Excellent): 80-89 | A (Very Good): 70-79 | B (Good): 60-69 |
                      C (Fair): 50-59 | D (Average): 40-49 | P (Pass): 30-39 | F (Fail): Below 30
                    </p>
                  </div>
                </div>
              )}

              {/* Skills Verified List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Verified Skills & Core Competencies:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {selectedCert.skillsLearned.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-3">
                <div className="text-xs text-slate-400 font-mono">
                  Issued under AICTE & EduSkills Virtual Internship Scheme
                </div>
                <div className="flex items-center gap-2">
                  {selectedCert.pdfUrl && (
                    <a
                      href={selectedCert.pdfUrl}
                      download={selectedCert.pdfName}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Original PDF</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer transition-all"
                  >
                    Close Viewer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
