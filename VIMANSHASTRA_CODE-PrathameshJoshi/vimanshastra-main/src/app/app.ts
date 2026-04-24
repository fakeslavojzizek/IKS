import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { environment } from '../environments/environment';
import { ParticleBackground } from './components/particle-background/particle-background';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { AncientWisdom } from './components/ancient-wisdom/ancient-wisdom';
import { FailsafeProtocol } from './components/failsafe-protocol/failsafe-protocol';
import { PhysicsSection } from './components/physics-section/physics-section';
import { Timeline } from './components/timeline/timeline';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ParticleBackground,
    Navbar,
    Hero,
    AncientWisdom,
    FailsafeProtocol,
    PhysicsSection,
    Timeline,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor() {
    const app = initializeApp(environment.firebase);
    const analytics = getAnalytics(app);
  }
}
