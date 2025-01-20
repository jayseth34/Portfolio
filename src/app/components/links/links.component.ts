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
      name: 'Project 2',
      github: 'https://github.com/jayseth34/healet-html',
      liveDemo: 'https://goldhealet.netlify.app/',
      description: 'Healet is a gold selling company which showcases all of it handwork jewellery through its site.'
    },
    {
      name: 'Project 3',
      github: 'https://github.com/yourusername/project3',
      liveDemo: 'https://project3.netlify.app',
      description: 'A brief description of Project 3.'
    },
    // Add more projects here
  ];
}
