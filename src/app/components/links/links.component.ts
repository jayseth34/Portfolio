import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  name: string;
  github: string;
  liveDemo?: string; // Optional live demo link
  description: string;
}

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
  projects: Project[] = [
    {
      name: 'Metalline',
      github: 'https://github.com/jayseth34/met/tree/main/src',
      liveDemo: 'https://metline.netlify.app/home',
      description: 'Metalline is a metal selling company which build trust among the marketers to sell best quality metal.'
    },
    {
      name: 'Gold Healet',
      github: 'https://github.com/jayseth34/healet-html',
      liveDemo: 'https://goldhealet.netlify.app/',
      description: 'Healet is a gold selling company which showcases all of it handwork jewellery through its site.'
    },
    {
      name: 'DONEE',
      github: 'https://github.com/jayseth34/DONEE',
      liveDemo: 'https://jayseth34.github.io/DONEE/#',
      description: 'DONEE is an application to donate for the needful. It ses Razor pay for payment methods.'
    },
    // Add more projects here
  ];
}
