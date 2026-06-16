import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  lineNumbers = Array.from({ length: 18 }, (_, i) => i + 1);

  stats = [
    { num: '3.7', label: 'GPA'           },
    { num: '16+', label: 'Həftə Təcrübə' },
    { num: '6+',  label: 'Sertifikat'    },
  ];

  chips = [
    'Angular 19', 'React.js', 'TypeScript',
    'Tailwind CSS', 'RxJS', 'REST API',
    'Docker', 'Git', 'Figma',
  ];
}