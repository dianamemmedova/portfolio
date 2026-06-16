import { Skill } from '../core/models/project.model';

export const SKILLS: Skill[] = [
  // Frontend
  { id: 1,  icon: '🅰️', name: 'Angular (v19)',    category: 'Frontend', percentage: 90 },
  { id: 2,  icon: '⚛️', name: 'React.js',         category: 'Frontend', percentage: 85 },
  { id: 3,  icon: '🟨', name: 'JavaScript (ES6+)', category: 'Frontend', percentage: 88 },
  { id: 4,  icon: '🔷', name: 'TypeScript',        category: 'Frontend', percentage: 87 },
  { id: 5,  icon: '🎨', name: 'Tailwind CSS',      category: 'Frontend', percentage: 92 },
  { id: 6,  icon: '🅱️', name: 'Bootstrap',         category: 'Frontend', percentage: 85 },
  { id: 7,  icon: '🌐', name: 'HTML5 / CSS3',      category: 'Frontend', percentage: 95 },
  { id: 8,  icon: '💚', name: 'Vue.js',            category: 'Frontend', percentage: 70 },

  // Backend & DB
  { id: 9,  icon: '🗄️', name: 'SQL',              category: 'Backend',  percentage: 75 },
  { id: 10, icon: '🔗', name: 'REST API',          category: 'Backend',  percentage: 88 },

  // Languages
  { id: 11, icon: '☕', name: 'Java',              category: 'Language', percentage: 72 },
  { id: 12, icon: '⚙️', name: 'C Programming',    category: 'Language', percentage: 70 },

  // Tools
  { id: 13, icon: '📦', name: 'Git / GitHub',      category: 'Tools',    percentage: 90 },
  { id: 14, icon: '🐳', name: 'Docker',            category: 'Tools',    percentage: 65 },
  { id: 15, icon: '🎯', name: 'Figma',             category: 'Tools',    percentage: 82 },
];