import { Certificate, Project, SkillCategory, Quote } from '../types';

export const personalDetails = {
  name: 'Saad Khan',
  fullNameCertificates: 'Saad Khan Atique Ur Raheman Khan',
  title: 'CSE AIML Engineer & Full-Stack Developer',
  college: 'P. R. Pote Patil College of Engineering and Management',
  collegeShort: 'P.R. Pote Patil College of Engineering, Amravati',
  location: 'Amravati, Maharashtra, India',
  degree: 'B.Tech in Computer Science & Engineering (AI & ML)',
  status: 'Pursuing B.Tech CSE (AIML)',
  email: 'saadji003@gmail.com',
  github: 'https://github.com/saadji003-glitch',
  githubHandle: '@saadji003-glitch',
  linkedin: 'https://www.linkedin.com/in/saad-khan-79653a37b',
  instagram: 'https://www.instagram.com/saadkn._?igsi=MXF5dTJyb2V0M2djMw==',
  instagramHandle: '@saadkn._',
  photoUrl: '/profile.jpg',
  aboutBio: `I am an ambitious Computer Science student specializing in Artificial Intelligence and Machine Learning (CSE AIML) at P.R. Pote Patil College of Engineering and Management, Amravati. Driven by a deep curiosity for intelligent systems and modern software craftsmanship, I build software solutions ranging from core C language utilities to Java Full-Stack web platforms and advanced AI prompt engineering workflows.`,
  shortTagline: 'Crafting intelligent algorithms, elegant full-stack solutions, and high-impact AI prompt engineering.',
};

export const quotesList: Quote[] = [
  {
    text: 'The code you write today builds the intelligent systems of tomorrow.',
    author: 'Saad Khan',
    role: 'CSE AIML Innovator',
    category: 'mindset',
  },
  {
    text: 'Prompt engineering is the art of speaking human intention to artificial intelligence in a language both can synthesize.',
    author: 'AI Research Circle',
    role: 'Generative AI Mindset',
    category: 'ai',
  },
  {
    text: 'First, solve the problem. Then, write the code.',
    author: 'John Johnson',
    role: 'Computer Scientist',
    category: 'tech',
  },
  {
    text: 'Machine learning is not about replacing human wisdom; it is about extending our potential to solve complex challenges.',
    author: 'Andrew Ng',
    role: 'AI Pioneer',
    category: 'ai',
  },
  {
    text: 'Simplicity is prerequisite for reliability.',
    author: 'Edsger W. Dijkstra',
    role: 'Turing Award Winner',
    category: 'tech',
  },
];

export const certificatesList: Certificate[] = [
  {
    id: 'cert-prompt-eng',
    title: 'Prompt Engineering for AI Virtual Internship',
    issuer: 'EduSkills Academy & AICTE',
    supportedBy: 'Ministry of Education, Govt. of India',
    period: 'January - March 2026',
    duration: '10-Week Virtual Internship',
    studentId: 'STU69032200998f51761812992',
    certificateId: '4db7956e9a502c252b3b',
    grade: 'A',
    gradeLabel: 'Very Good (70-79%)',
    gradeColor: 'from-cyan-500 to-blue-600',
    summary: 'Comprehensive 10-week AI internship mastering system prompt creation, zero-shot/few-shot prompt design, chain-of-thought reasoning, LLM fine-tuning techniques, and generative AI workflow integration.',
    skillsLearned: [
      'Prompt Architecture & Design',
      'Zero-Shot & Few-Shot Learning',
      'Chain-of-Thought Reasoning',
      'LLM Behavior Control & Guardrails',
      'Generative AI Application Flow',
      'AI Safety & Context Optimization',
    ],
  },
  {
    id: 'cert-employability',
    title: 'Employability Skill Job Ready Virtual Internship',
    issuer: 'EduSkills & AICTE',
    supportedBy: 'Wadhwani Foundation',
    period: 'October - December 2025',
    duration: '10-Week Virtual Internship',
    studentId: 'STU69032200998f51761812992',
    certificateId: 'bac3bf94da879662af88024a3847d752',
    grade: 'O',
    gradeLabel: 'Outstanding (90-100%)',
    gradeColor: 'from-emerald-400 to-teal-600',
    summary: 'Awarded top Outstanding Grade "O" in a prestigious 10-week employability program backed by Wadhwani Foundation. Developed critical problem-solving, corporate communication, agile teamwork, and career readiness.',
    skillsLearned: [
      'Agile Workplace Mindset',
      'Corporate Communication',
      'Analytical Problem Solving',
      'Team Leadership & Collaboration',
      'Time Management & Agility',
      'Professional Presentation Skills',
    ],
  },
  {
    id: 'cert-java-fullstack',
    title: 'Java Full Stack Development With Project Virtual Internship',
    issuer: 'EduSkills Academy & AICTE',
    supportedBy: 'Ministry of Education, Govt. of India',
    period: 'April - June 2026',
    duration: '8-Week Virtual Internship',
    studentId: 'STU69032200998f51761812992',
    certificateId: '422b925372aa7e3d1762',
    grade: 'C',
    gradeLabel: 'Passed Internship Grade',
    gradeColor: 'from-amber-400 to-orange-500',
    summary: 'Hands-on 8-week virtual internship in Java Full Stack development. Gained experience in Object-Oriented Programming in Java, Web API architectures, relational backend concepts, and project deployment.',
    skillsLearned: [
      'Core Java & Object-Oriented Programming',
      'Java Web APIs & Servlets',
      'Full Stack Architecture',
      'Frontend-Backend Integration',
      'Relational Database Basics',
      'Project Build & Debugging',
    ],
  },
];

export const projectsList: Project[] = [
  {
    id: 'unit-converter-c',
    title: 'Unit Converter in C Language',
    language: 'C Language',
    category: 'Core C & Command-Line Utility',
    description: 'A modular menu-driven command-line application built in C language to execute high-precision conversions across Length, Weight, Temperature, and Time.',
    longDescription: 'Developed a menu-driven Unit Converter application in C that performs accurate conversions across multiple measurement units, including length, weight, temperature, and time. The project demonstrates a strong understanding of core C programming concepts such as functions, conditional statements, switch-case logic, loops, and user input handling. It provides a simple command-line interface that allows users to perform multiple conversions efficiently and accurately.',
    highlights: [
      'Modular functional architecture using C functions & headers',
      'Robust switch-case control structures for seamless user navigation',
      'Input validation & loop-based continuous conversion flow',
      'Includes Length (m, km, miles, ft, in), Weight (kg, g, lbs, oz), Temp (C, F, K), and Time (sec, min, hr, day)',
    ],
    tags: ['C Language', 'Switch-Case Logic', 'Control Flow', 'Algorithms', 'Functions', 'Modular Code'],
    isInteractive: true,
    codeSnippet: `#include <stdio.h>

void convertLength();
void convertWeight();
void convertTemperature();
void convertTime();

int main() {
    int choice;
    do {
        printf("\\n--- UNIT CONVERTER IN C ---\\n");
        printf("1. Length Conversion\\n2. Weight Conversion\\n");
        printf("3. Temperature Conversion\\n4. Time Conversion\\n5. Exit\\n");
        printf("Enter your choice (1-5): ");
        scanf("%d", &choice);

        switch(choice) {
            case 1: convertLength(); break;
            case 2: convertWeight(); break;
            case 3: convertTemperature(); break;
            case 4: convertTime(); break;
            case 5: printf("Exiting Unit Converter. Goodbye!\\n"); break;
            default: printf("Invalid choice! Please select 1-5.\\n");
        }
    } while(choice != 5);
    return 0;
}
`,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Skills',
    iconName: 'Code',
    skills: [
      { name: 'C Programming Language', level: 90, badge: 'Core Strong' },
      { name: 'Java Programming (OOP)', level: 85, badge: 'Certified' },
      { name: 'Python for AIML', level: 82, badge: 'Active' },
      { name: 'JavaScript & TypeScript', level: 80, badge: 'Web Tech' },
      { name: 'SQL & Database Queries', level: 78, badge: 'Data' },
      { name: 'HTML5 & CSS3 / Tailwind', level: 90, badge: 'UI Craft' },
    ],
  },
];
