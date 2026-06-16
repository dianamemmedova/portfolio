import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SKILLS } from '../../data/skills.data';
import { Skill } from '../../core/models/project.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  allSkills: Skill[] = SKILLS;

  categories = ['Hamısı', 'Frontend', 'Backend', 'Language', 'Tools'];
  activeCategory = signal('Hamısı');

  filteredSkills = computed(() => {
    const cat = this.activeCategory();
    return cat === 'Hamısı'
      ? this.allSkills
      : this.allSkills.filter((s) => s.category === cat);
  });

  setCategory(cat: string): void {
    this.activeCategory.set(cat);
  }
}