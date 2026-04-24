import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit {
  isVisible = signal(false);

  stats = [
    { value: '~400 BCE', label: 'Earliest Vimana References' },
    { value: '3,000+', label: 'Sanskrit Verses on Flight' },
    { value: '85%', label: 'Potential Impact Reduction' }
  ];

  ngOnInit() {
    setTimeout(() => this.isVisible.set(true), 300);
  }
}
