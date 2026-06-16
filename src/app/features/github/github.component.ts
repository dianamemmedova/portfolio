import { Component, OnInit, signal } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';


import { CommonModule, NgClass } from '@angular/common';

interface ContribBox {
  level: number;
}

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [ScrollRevealDirective ,CommonModule, NgClass],
  templateUrl: './github.component.html',
  styleUrl: './github.component.scss',
})
export class GithubComponent implements OnInit {
  githubUrl = 'https://github.com/dianamemmedova';

  stats = [
    { num: '15+',  label: 'Repo'    },
    { num: '300+', label: 'Commit'  },
    { num: '6+',   label: 'Starred' },
  ];

  recentRepos = [
    {
      name: 'portfolio',
      desc: 'Şəxsi portfolio saytı — Angular 19',
      lang: 'TypeScript',
      stars: 2,
    },
    {
      name: 'book-store',
      desc: 'React kitab mağazası tətbiqi',
      lang: 'TypeScript',
      stars: 3,
    },
    {
      name: 'eurasia-crm',
      desc: 'Enterprise CRM admin paneli',
      lang: 'TypeScript',
      stars: 1,
    },
  ];

  contribBoxes = signal<ContribBox[]>([]);

  ngOnInit(): void {
    this.generateContribGrid();
  }

  private generateContribGrid(): void {
    const boxes: ContribBox[] = Array.from({ length: 364 }, () => {
      const r = Math.random();
      let level = 0;
      if (r > 0.65) level = 1;
      if (r > 0.78) level = 2;
      if (r > 0.88) level = 3;
      if (r > 0.95) level = 4;
      return { level };
    });
    this.contribBoxes.set(boxes);
  }

  getLangColor(lang: string): string {
    const colors: Record<string, string> = {
      TypeScript: '#3178c6',
      JavaScript: '#f7df1e',
      SCSS:       '#cc6699',
      HTML:       '#e34c26',
    };
    return colors[lang] ?? '#ff6b35';
  }
}