import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy, AfterViewInit {
  typedText = signal('');
  showCursor = signal(true);

  private words = [
    'Computer Engineer...',
    'Frontend Developer...',
    'Angular Specialist...',
    'React Developer...',
    'UI/UX Enthusiast...',
  ];

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeTimer: any;
  private cursorTimer: any;

  tickerItems = [
    'Angular 19', 'React.js', 'TypeScript', 'Tailwind CSS',
    'JavaScript', 'RxJS', 'REST API', 'Docker',
    'Git', 'Figma', 'Java', 'Vue.js',
  ];

  get doubledTicker(): string[] {
    return [...this.tickerItems, ...this.tickerItems];
  }

  ngOnInit(): void {
    this.startTyping();
    this.startCursorBlink();
  }

  ngAfterViewInit(): void {}

  private startTyping(): void {
    const word = this.words[this.wordIndex];

    if (!this.isDeleting) {
      this.typedText.set(word.slice(0, ++this.charIndex));
      if (this.charIndex === word.length) {
        this.isDeleting = true;
        this.typeTimer = setTimeout(() => this.startTyping(), 2000);
        return;
      }
    } else {
      this.typedText.set(word.slice(0, --this.charIndex));
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
      }
    }

    this.typeTimer = setTimeout(
      () => this.startTyping(),
      this.isDeleting ? 50 : 90
    );
  }

  private startCursorBlink(): void {
    this.cursorTimer = setInterval(() => {
      this.showCursor.set(!this.showCursor());
    }, 500);
  }

  scrollTo(target: string): void {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    clearTimeout(this.typeTimer);
    clearInterval(this.cursorTimer);
  }
}