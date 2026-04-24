import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-failsafe-protocol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './failsafe-protocol.html',
  styleUrl: './failsafe-protocol.css'
})
export class FailsafeProtocol {
  modules = [
    {
      id: 'engine-left',
      name: 'Port Engine Module',
      mass: '2,400 kg',
      ejectionForce: '45 kN',
      status: 'ARMED',
      color: '#ff6b6b'
    },
    {
      id: 'engine-right',
      name: 'Starboard Engine Module',
      mass: '2,400 kg',
      ejectionForce: '45 kN',
      status: 'ARMED',
      color: '#ff6b6b'
    },
    {
      id: 'landing-gear',
      name: 'Landing Gear Assembly',
      mass: '1,800 kg',
      ejectionForce: '30 kN',
      status: 'ARMED',
      color: '#ffd93d'
    },
    {
      id: 'tail-section',
      name: 'Tail Section Module',
      mass: '1,200 kg',
      ejectionForce: '25 kN',
      status: 'STANDBY',
      color: '#6bcfff'
    },
    {
      id: 'wing-tips',
      name: 'Wing-tip Assemblies',
      mass: '800 kg',
      ejectionForce: '20 kN',
      status: 'STANDBY',
      color: '#6bcfff'
    }
  ];

  activeModule: string | null = null;

  setActive(id: string) {
    this.activeModule = this.activeModule === id ? null : id;
  }

  getTotalEjectMass(): string {
    const total = this.modules.reduce((sum, m) => sum + parseInt(m.mass.replace(/,/g, '')), 0);
    return total.toLocaleString();
  }
}
