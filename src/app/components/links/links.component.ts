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
      liveDemo: 'https://delicate-profiterole-0b3644.netlify.app/home',
      description: 'Metalline is a metal selling company which build trst among the marketers to sell best quality metal.'
    },
    {
      name: 'Project 2',
      github: 'https://github.com/yourusername/project2',
      description: 'A brief description of Project 2. This project does not have a live demo yet.'
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
