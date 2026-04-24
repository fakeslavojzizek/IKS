import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css'
})
export class Timeline {
  events = [
    {
      era: 'Ancient',
      year: '~400 BCE',
      title: 'Vimanika Shastra',
      description: 'Maharishi Bharadwaja compiles verses on aerial vehicles, describing propulsion, materials, and navigation systems.',
      icon: 'scroll'
    },
    {
      era: 'Ancient',
      year: '~200 BCE',
      title: 'Samarangana Sutradhara',
      description: 'King Bhoja documents mercury-powered engines and mechanical bird-like crafts in his treatise on architecture and machines.',
      icon: 'temple'
    },
    {
      era: 'Modern',
      year: '1903',
      title: 'Wright Brothers',
      description: 'The first powered flight at Kitty Hawk — humanity reclaims the skies through engineering, 2,300 years after the ancient texts.',
      icon: 'plane'
    },
    {
      era: 'Modern',
      year: '1970s',
      title: 'Crashworthiness Research',
      description: 'NASA and FAA begin systematic study of aircraft crash dynamics, energy absorption, and occupant survivability.',
      icon: 'research'
    },
    {
      era: 'Future',
      year: '2024+',
      title: 'Kinetic Mass Reduction',
      description: 'The KMR protocol synthesizes ancient modular design principles with modern engineering — ejecting mass to save lives.',
      icon: 'rocket'
    }
  ];
}
