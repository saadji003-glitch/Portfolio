export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  supportedBy?: string;
  period: string;
  duration: string;
  studentId: string;
  certificateId: string;
  grade: string;
  gradeLabel: string;
  gradeColor: string;
  summary: string;
  skillsLearned: string[];
  pdfName?: string;
}

export interface Project {
  id: string;
  title: string;
  language: string;
  category: string;
  description: string;
  longDescription: string;
  highlights: string[];
  tags: string[];
  codeSnippet?: string;
  isInteractive?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number;
    badge?: string;
  }[];
}

export interface Quote {
  text: string;
  author: string;
  role: string;
  category: 'tech' | 'ai' | 'mindset';
}
