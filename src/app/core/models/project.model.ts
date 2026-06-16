export interface Project {
  id: number;
  num: string;
  emoji: string;
  name: string;
  role: string;
  description: string;
  deliverables: string[];
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Skill {
  id: number;
  icon: string;
  name: string;
  category: string;
  percentage: number;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}