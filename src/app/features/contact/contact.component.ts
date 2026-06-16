import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule,FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CONTACT_INFO } from '../../data/contact.data';

interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactInfo = CONTACT_INFO;
  submitted = signal(false);
  sending = signal(false);

  contactLinks: ContactLink[] = [
    {
      icon: '📧',
      label: 'E-poçt',
      value: this.contactInfo.email,
      href: `mailto:${this.contactInfo.email}`,
    },
    {
      icon: '📞',
      label: 'Telefon',
      value: this.contactInfo.phone,
      href: `tel:${this.contactInfo.phone}`,
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: this.contactInfo.linkedin,
      href: `https://${this.contactInfo.linkedin}`,
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: this.contactInfo.github,
      href: `https://${this.contactInfo.github}`,
    },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get name()    { return this.form.get('name');    }
  get email()   { return this.form.get('email');   }
  get message() { return this.form.get('message'); }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control?.invalid && control?.touched);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);

    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      this.form.reset();
    }, 1500);
  }
}