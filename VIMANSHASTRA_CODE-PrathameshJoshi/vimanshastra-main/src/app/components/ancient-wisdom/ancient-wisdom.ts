import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ancient-wisdom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ancient-wisdom.html',
  styleUrl: './ancient-wisdom.css'
})
export class AncientWisdom {
  features = [
    {
      icon: 'mercury',
      title: 'Mercury Vortex Engine',
      description: 'The Samaara Sutradhara describes a propulsion system using heated mercury — a concept that mirrors modern ion propulsion principles.',
      verse: 'Atha Dhoomayantra — "The Smoke Machine"'
    },
    {
      icon: 'materials',
      title: 'Advanced Materials',
      description: 'Texts describe lightweight alloys and heat-resistant compounds, anticipating composite materials used in aerospace today.',
      verse: 'Tripura Vimana — Metals of Three Cities'
    },
    {
      icon: 'navigation',
      title: 'Gyroscopic Navigation',
      description: 'References to stabilization devices and directional instruments that parallel modern gyroscope and avionics systems.',
      verse: 'Yantra Sarvasva — "All About Machines"'
    }
  ];
}
