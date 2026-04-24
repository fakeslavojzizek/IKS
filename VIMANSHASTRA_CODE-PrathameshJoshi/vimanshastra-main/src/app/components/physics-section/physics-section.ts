import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-physics-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './physics-section.html',
  styleUrl: './physics-section.css'
})
export class PhysicsSection {
  equations = [
    {
      formula: 'KE = ½mv²',
      name: 'Kinetic Energy',
      explanation: 'The energy of impact is directly proportional to mass. By ejecting engines (2,400 kg each) and landing gear (1,800 kg), we reduce the impacting mass from 75,000 kg to ~67,000 kg — a significant reduction in destructive energy.',
      highlight: 'm'
    },
    {
      formula: 'F = Δp / Δt',
      name: 'Impulse-Momentum',
      explanation: 'Impact force depends on momentum change over time. A lighter cabin experiences lower momentum at the same velocity, and combined with parachute deployment (increasing Δt), forces on occupants drop dramatically.',
      highlight: 'Δp'
    },
    {
      formula: 'E_saved = ½(m₁-m₂)v²',
      name: 'Energy Saved by KMR',
      explanation: 'At a crash velocity of 80 m/s, ejecting 8,600 kg of non-essential mass saves approximately 27.5 MJ of kinetic energy — equivalent to the energy released by 6.5 kg of TNT.',
      highlight: 'm₁-m₂'
    }
  ];

  comparisons = [
    { label: 'Standard Aircraft Impact', value: 240, unit: 'MJ', color: '#ff6b6b' },
    { label: 'After KMR Activation', value: 36, unit: 'MJ', color: '#4ade80' }
  ];
}
