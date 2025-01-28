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

interface ContactInfo {
  label: string;
  value: string;
  icon: string; // Add icon property
  link?: string; // Optional link for mailto: or tel:
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
    { value: '2', label: 'Deliverables' },
    { value: 2, label: 'Clients' },
    { value: 2, label: 'Locations' }
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

  contactInfo: ContactInfo[] = [
    { label: 'Phone', value: '+91 9920279905', icon: 'phone', link: 'tel:9920279905' },
    { label: 'Email', value: 'jayseth34@gmail.com', icon: 'email', link: 'mailto:jayshaileshseth@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/jayseth34', icon: 'linkedin', link: 'https://www.linkedin.com/in/jayseth34' }
    // Add more contact info as needed (e.g., address, social media)
  ];

  developerBio = `I am a passionate and results-oriented Full Stack Angular/.NET Developer with a proven track record of delivering high-quality web applications. 
  I specialize in front-end development using Angular, creating user-friendly and responsive interfaces, and back-end development with .NET, building robust and scalable APIs. 
  I thrive in collaborative environments and enjoy tackling complex challenges to create innovative solutions that meet client needs.`;
  myEmail: any = 'jayseth34@gmail.com';

  openEmail() {
    window.location.href = `mailto:${this.myEmail}`;
}
}
