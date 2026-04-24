import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  scrolled = signal(false);
  mobileMenuOpen = signal(false);

  navLinks = [
    { label: 'Origins', href: '#origins' },
    { label: 'Fail-Safe Protocol', href: '#failsafe' },
    { label: 'The Physics', href: '#physics' },
    { label: 'Timeline', href: '#timeline' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 60);
  }

  toggleMobile() {
    this.mobileMenuOpen.update(v => !v);
  }

  scrollTo(event: Event, href: string) {
    event.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.mobileMenuOpen.set(false);
    }
  }
}
