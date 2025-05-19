import React from 'react';
import { Code, Smartphone, Terminal, PenTool } from 'lucide-react';

interface Skill {
  name: string;
  level: number;  // Percentage from 0-100
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: <Terminal className="text-blue-500" />,
    color: 'bg-blue-500',
    skills: [
      { name: 'C++', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Kotlin', level: 88 },
    ]
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone className="text-purple-500" />,
    color: 'bg-purple-500',
    skills: [
      { name: 'Android Development', level: 92 },
      { name: 'Kotlin Android', level: 88 },
      { name: 'Android UI/UX', level: 85 },
      { name: 'Android SDK', level: 90 },
      { name: 'Material Design', level: 85 }
    ]
  },
  {
    title: 'Web Development',
    icon: <Code className="text-teal-500" />,
    color: 'bg-teal-500',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'Responsive Design', level: 82 },
      { name: 'Web Standards', level: 80 }
    ]
  },
  {
    title: 'Development Tools',
    icon: <PenTool className="text-orange-500" />,
    color: 'bg-orange-500',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Android Studio', level: 92 },
      { name: 'VS Code', level: 85 },
      { name: 'Command Line', level: 80 }
    ]
  }
];