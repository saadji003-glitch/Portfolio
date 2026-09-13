import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';
import QRCode from 'qrcode';

interface CertData {
  filename: string;
  courseTitle: string;
  period: string;
  durationWeeks: string;
  certId: string;
  studentId: string;
  grade: string;
  gradeScoreRange: string;
}

const certificates: CertData[] = [
  {
    filename: 'saad-khan-python-fullstack-certificate.pdf',
    courseTitle: 'Python Fullstack Developer Virtual Internship',
    period: 'During June - August 2026',
    durationWeeks: '8-weeks',
    certId: '4ce99c6948f05c29f633',
    studentId: 'STU69032200998f51761812992',
    grade: 'A',
    gradeScoreRange: 'A (Very Good): 70-79',
  },
  {
    filename: 'saad-khan-java-fullstack-certificate.pdf',
    courseTitle: 'Java Full Stack Development With Project Virtual Internship',
    period: 'During April - June 2026',
    durationWeeks: '8-weeks',
    certId: '422b925372aa7e3d1762',
    studentId: 'STU69032200998f51761812992',
    grade: 'C',
    gradeScoreRange: 'C (Fair): 50-59',
  },
  {
    filename: 'saad-khan-prompt-engineering-certificate.pdf',
    courseTitle: 'Prompt Engineering for AI Virtual Internship',
    period: 'During January - March 2026',
    durationWeeks: '10-weeks',
    certId: '4db7956e9a502c252b3b',
    studentId: 'STU69032200998f51761812992',
    grade: 'A',
    gradeScoreRange: 'A (Very Good): 70-79',
  },
  {
    filename: 'saad-khan-employability-skills-certificate.pdf',
    courseTitle: 'Employability Skill Job Ready Virtual Internship',
    period: 'During October - December 2025',
    durationWeeks: '10-weeks',
    certId: 'bac3bf94da879662af88024a3847d752',
    studentId: 'STU69032200998f51761812992',
    grade: 'O',
    gradeScoreRange: 'O (Outstanding): 90-100',
  },
];

async function generatePDF(cert: CertData) {
  // A4 size: 210 x 297 mm
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;

  // Background - Off-white clean document canvas
  doc.setFillColor(254, 254, 254);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative corners (Top Left / Right Subtle geometric patterns)
  doc.setFillColor(15, 42, 74); // Deep Navy
  doc.rect(0, 0, 10, 297, 'F'); // Left deep navy margin accent
  doc.setFillColor(243, 112, 33); // Orange accent strip
  doc.rect(10, 0, 3, 297, 'F');

  // Top header area logos
  const topY = 16;

  // 1. Ministry of Education
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(20, 30, 50);
  doc.text('शिक्षा मंत्रालय', 22, topY);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  doc.text('MINISTRY OF EDUCATION', 22, topY + 4);
  doc.setFontSize(6);
  doc.setTextColor(100, 110, 120);
  doc.text('सत्यमेव जयते', 22, topY + 7.5);

  // 2. AICTE
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(215, 120, 20); // AICTE amber
  doc.text('AICTE', 65, topY);
  doc.setFontSize(6.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(70, 80, 90);
  doc.text('अखिल भारतीय तकनीकी शिक्षा परिषद्', 65, topY + 3.8);
  doc.text('All India Council for Technical Education', 65, topY + 7);

  // 3. National Internship Portal
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 105, 175);
  doc.text('NATIONAL', 120, topY);
  doc.text('INTERNSHIP', 120, topY + 3.8);
  doc.setFontSize(6.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 110, 120);
  doc.text('PORTAL', 120, topY + 7);

  // 4. EduSkills
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 42, 74);
  doc.text('EduSkills®', 165, topY);
  doc.setFontSize(6.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(90, 100, 110);
  doc.text('Nation Building Through Skills', 165, topY + 4);

  // Divider under logos
  doc.setDrawColor(220, 226, 235);
  doc.setLineWidth(0.4);
  doc.line(20, 28, 200, 28);

  // Central Seal: AICTE • EduSkills 2026 Virtual Internship
  const sealY = 46;
  const sealX = 110;

  // Outer gold circle with serrated / star ribbon feel
  doc.setFillColor(235, 160, 30);
  doc.circle(sealX, sealY, 15, 'F');
  // Inner navy circle
  doc.setFillColor(15, 42, 74);
  doc.circle(sealX, sealY, 13.5, 'F');
  // Seal text
  doc.setTextColor(245, 180, 45);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.5);
  doc.text('AICTE • EduSkills', sealX, sealY - 6.5, { align: 'center' });
  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text('2026', sealX, sealY - 0.5, { align: 'center' });
  doc.setFontSize(5.5);
  doc.setTextColor(245, 180, 45);
  doc.text('★ VIRTUAL INTERNSHIP ★', sealX, sealY + 5.5, { align: 'center' });

  // Main Heading
  doc.setFont('times', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(18, 38, 68);
  doc.text('Certificate of Virtual Internship', 110, 75, { align: 'center' });

  // Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(80, 90, 105);
  doc.text('This is to certify that', 110, 85, { align: 'center' });

  // Recipient Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(16, 40, 75);
  doc.text('saad khan atique ur raheman khan', 110, 98, { align: 'center' });

  // College / Institution
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(30, 45, 65);
  doc.text('P. R. Pote Patil College of Engineering and Management, Amravati', 110, 108, { align: 'center' });

  // Completion statement
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(70, 80, 95);
  doc.text(`has successfully completed the ${cert.durationWeeks}`, 110, 118, { align: 'center' });

  // Course Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14.5);
  doc.setTextColor(15, 35, 65);
  doc.text(cert.courseTitle, 110, 128, { align: 'center' });

  // Period
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(50, 65, 85);
  doc.text(cert.period, 110, 137, { align: 'center' });

  // Blessing / Propel line
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(90, 100, 115);
  doc.text('May this Internship learning propel you toward a bright and successful career.', 110, 147, { align: 'center' });

  // Supported by EduSkills Academy
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 110, 120);
  doc.text('Supported by', 96, 160);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 42, 74);
  doc.text('EduSkills', 113, 160);
  doc.setFontSize(7.5);
  doc.setTextColor(60, 130, 190);
  doc.text('ACADEMY', 113, 164);

  // Signatures Area
  const sigY = 186;

  // Left Signature: Dr. Buddha Chandrasekhar
  doc.setDrawColor(30, 50, 80);
  doc.setLineWidth(0.6);
  // Stylized signature stroke
  doc.line(45, sigY - 4, 75, sigY - 2);
  doc.line(55, sigY - 7, 65, sigY);
  doc.line(62, sigY - 6, 85, sigY - 4);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 45, 65);
  doc.text('Dr. Buddha Chandrasekhar', 65, sigY + 4, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(80, 90, 105);
  doc.text('Chief Coordinating Officer (CCO)', 65, sigY + 8, { align: 'center' });
  doc.text('AICTE, Ministry of Education', 65, sigY + 11.5, { align: 'center' });

  // Right Signature: Shubhajit Jagadev
  doc.line(135, sigY - 5, 165, sigY - 3);
  doc.line(145, sigY - 8, 155, sigY);
  doc.line(152, sigY - 7, 175, sigY - 5);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 45, 65);
  doc.text('Shubhajit Jagadev', 155, sigY + 4, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(80, 90, 105);
  doc.text('Chief Executive Officer (CEO)', 155, sigY + 8, { align: 'center' });
  doc.text('EduSkills', 155, sigY + 11.5, { align: 'center' });

  // Generate real QR Code data
  const qrVerificationData = `EduSkills-AICTE-Certificate:${cert.certId}|Student:${cert.studentId}|Candidate:saad khan atique ur raheman khan|Course:${cert.courseTitle}|Grade:${cert.grade}`;
  const qrDataUrl = await QRCode.toDataURL(qrVerificationData, {
    margin: 1,
    width: 140,
    color: {
      dark: '#102a4a',
      light: '#ffffff',
    },
  });

  // QR Code on bottom left
  doc.addImage(qrDataUrl, 'PNG', 32, 212, 22, 22);

  // Certificate ID and Student ID next to QR code
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 50, 65);
  doc.text('Certificate ID: ', 22, 240);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(cert.certId, 45, 240);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Student ID: ', 22, 246);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(cert.studentId, 41, 246);

  // Grade Badge Seal on bottom right
  const badgeX = 172;
  const badgeY = 224;

  doc.setFillColor(15, 76, 129); // Deep classic blue
  doc.circle(badgeX, badgeY, 13, 'F');
  doc.setFillColor(255, 255, 255);
  doc.circle(badgeX, badgeY, 11.5, 'F');
  doc.setFillColor(15, 76, 129);
  doc.circle(badgeX, badgeY, 10.5, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(5);
  doc.setTextColor(255, 255, 255);
  doc.text('INTERNSHIP GRADE', badgeX, badgeY - 5.5, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(255, 255, 255);
  doc.text(cert.grade, badgeX, badgeY + 4, { align: 'center' });

  // Bottom ribbon banner: Full Grade Scale Table
  const bannerY = 282;
  doc.setFillColor(12, 33, 62);
  doc.rect(0, bannerY, pageWidth, 15, 'F');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.2);
  doc.setTextColor(200, 220, 245);
  const gradeScaleText =
    'GRADE: O (Outstanding): 90-100 | E (Excellent): 80-89 | A (Very Good): 70-79 | B (Good): 60-69 | C (Fair): 50-59 | D (Average): 40-49 | P (Pass): 30-39 | F (Fail): Below 30';
  doc.text(gradeScaleText, pageWidth / 2, bannerY + 8, { align: 'center' });

  // Save to file
  const outPath = path.join(process.cwd(), 'public', 'certificates', cert.filename);
  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(outPath, pdfBuffer);
  console.log(`Generated: ${outPath} (${pdfBuffer.length} bytes)`);
}

async function generateDeloittePDF() {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 297;
  const pageHeight = 210;

  // Background
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Deloitte Logo
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(32);
  doc.setTextColor(0, 0, 0);
  doc.text('Deloitte', 28, 38);

  // Deloitte Green Dot
  const logoWidth = doc.getTextWidth('Deloitte');
  doc.setFillColor(134, 188, 37); // #86BC25
  doc.circle(28 + logoWidth + 2.6, 35.8, 2.3, 'F');

  // Candidate Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(34);
  doc.setTextColor(17, 24, 39);
  doc.text('Saad Khan', 28, 58);

  // Simulation Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(31, 41, 55);
  doc.text('Technology Job Simulation', 28, 75);

  // Certificate Subtitle & Date
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(17);
  doc.setTextColor(55, 65, 81);
  doc.text('Certificate of Completion', 28, 92);

  doc.setFontSize(13.5);
  doc.setTextColor(75, 85, 99);
  doc.text('September 7th, 2026', 28, 102);

  // Practical Tasks Description
  doc.setFontSize(9.5);
  doc.setTextColor(75, 85, 99);
  doc.text('Over the period of September 2026, Saad Khan has completed practical tasks in:', 28, 142);

  doc.setTextColor(55, 65, 81);
  doc.text('Coding', 28, 151);
  doc.text('Development', 28, 157);

  // Signature Block (Tina McCreery)
  const sigX = 200;
  const sigY = 145;

  // Stylized cursive signature stroke
  doc.setDrawColor(30, 41, 59);
  doc.setLineWidth(0.6);
  doc.line(sigX, sigY + 2, sigX + 10, sigY - 8);
  doc.line(sigX + 6, sigY - 5, sigX + 16, sigY - 2);
  doc.line(sigX + 14, sigY - 6, sigX + 22, sigY + 1);
  doc.line(sigX + 20, sigY - 4, sigX + 28, sigY - 1);
  doc.line(sigX + 25, sigY - 7, sigX + 35, sigY - 3);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(17, 24, 39);
  doc.text('Tina McCreery', sigX, sigY + 9);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(75, 85, 99);
  doc.text('Chief Human', sigX, sigY + 14.5);
  doc.text('Resources Officer,', sigX, sigY + 19);
  doc.text('Deloitte', sigX, sigY + 23.5);

  // Verification Footer Line
  doc.setFontSize(7.5);
  doc.setTextColor(156, 163, 175);
  doc.text(
    'Enrolment Verification Code 6a9ecb4b39a1f8e666c72999 | User Verification Code 6a9eca591c45172ff2ec4f36 | Issued by Forage',
    28,
    195
  );

  // Save to file
  const outPath = path.join(process.cwd(), 'public', 'certificates', 'saad-khan-deloitte-technology-job-simulation.pdf');
  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(outPath, pdfBuffer);
  console.log(`Generated: ${outPath} (${pdfBuffer.length} bytes)`);
}

async function run() {
  const dir = path.join(process.cwd(), 'public', 'certificates');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const cert of certificates) {
    await generatePDF(cert);
  }
  await generateDeloittePDF();
  console.log('All certificates including Deloitte successfully generated as genuine PDF files.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
