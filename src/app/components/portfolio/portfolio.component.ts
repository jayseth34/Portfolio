import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Count {
  value: string | number;
  label: string;
}

interface SkillCategory {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  counts: Count[] = [
    { value: '70+', label: 'Deliverables' },
    { value: 12, label: 'Clients' },
    { value: 66, label: 'Locations' }
  ];

  skills: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']
    },
    {
      name: 'Backend',
      skills: ['.NET', 'Hangfire', 'Firebase', 'Postman']
    },
    {
      name: 'Databases',
      skills: ['PostgreSQL', 'Oracle']
    }
  ];

  developerBio = `I am a passionate and results-oriented Full Stack Angular/.NET Developer with a proven track record of delivering high-quality web applications. 
  I specialize in front-end development using Angular, creating user-friendly and responsive interfaces, and back-end development with .NET, building robust and scalable APIs. 
  I thrive in collaborative environments and enjoy tackling complex challenges to create innovative solutions that meet client needs.`;
}
