import { Project } from '../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    num: '001',
    emoji: '🚀',
    name: 'Eurasia — CRM Admin Panel',
    role: 'Frontend Developer · Uniser Group LLC',
    description:
      'Enterprise səviyyəli çox modullu CRM sistemi. 16 həftəlik sənaye təcrübəsi ərzində qurulub.',
    deliverables: [
      'JWT Bearer token, HttpInterceptor və CanActivate Auth Guard ilə tam təhlükəsizlik arxitekturası',
      'RxJS forkJoin ilə dinamik, rol əsaslı sidebar menyusu və kaskad dropdown-lar',
      'Angular Reactive Forms ilə tam validasiyalı istifadəçi idarəetmə və müqavilə ekranları',
    ],
    tags: ['Angular 19', 'TypeScript', 'RxJS', 'Reactive Forms', 'JWT', 'REST API'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    num: '002',
    emoji: '🎓',
    name: 'Full-Stack Veb Tətbiqləri',
    role: 'Developer · BEU & Div Academy',
    description:
      'Universitət və akademiya çərçivəsində qurulmuş responsive, interaktiv veb tətbiqlər kolleksiyası.',
    deliverables: [
      'CSS Grid və Flexbox ilə Figma dizaynlarının piksel-mükəmməl həyata keçirilməsi',
      'Təmiz JavaScript və komponent lifecycle prinsipləri ilə optimallaşdırılmış tətbiqlər',
      'Agile/Scrum metodologiyası ilə komanda mühitində əməkdaşlıq',
    ],
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Git'],
    demoUrl: '#',
    githubUrl: 'https://github.com/dianamemmedova',
  },
];