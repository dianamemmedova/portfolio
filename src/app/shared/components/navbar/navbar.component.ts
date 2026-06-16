import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  target: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  scrolled = signal(false);
  activeSection = signal('hero');

  links: NavLink[] = [
    { label: 'haqqımda',  target: 'about'    },
    { label: 'skills',    target: 'skills'   },
    { label: 'layihələr', target: 'projects' },
    { label: 'github',    target: 'github'   },
    { label: 'əlaqə',     target: 'contact'  },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
    this.detectActiveSection();
  }

  private detectActiveSection(): void {
    const sections = ['hero', 'about', 'skills', 'projects', 'github', 'contact'];
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 200) {
        this.activeSection.set(id);
        break;
      }
    }
  }

  scrollTo(target: string): void {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  }
}