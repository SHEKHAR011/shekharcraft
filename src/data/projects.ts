export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'mobile' | 'design';
  technologies: string[];
  github?: string;
  liveUrl?: string;
}

export const projectData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce website with product listings, cart functionality, and secure checkout process.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    github: '#',
    liveUrl: '#'
  },
  {
    id: 2,
    title: 'Health & Fitness App',
    description: 'Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
    image: 'https://images.pexels.com/photos/3927410/pexels-photo-3927410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
    github: '#',
    liveUrl: '#'
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    description: 'Interactive dashboard for visualizing financial data with real-time updates and customizable widgets.',
    image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
    github: '#',
    liveUrl: '#'
  },
  {
    id: 4,
    title: 'Travel Agency Rebrand',
    description: 'Complete visual identity redesign for a travel agency, including logo, website, and marketing materials.',
    image: 'https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'design',
    technologies: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
    liveUrl: '#'
  },
  {
    id: 5,
    title: 'Real Estate Listing Platform',
    description: 'Web platform for real estate listings with advanced search, filtering, and interactive property maps.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
    technologies: ['React', 'Next.js', 'GraphQL', 'MongoDB', 'MapBox'],
    github: '#',
    liveUrl: '#'
  },
  {
    id: 6,
    title: 'Social Networking App',
    description: 'Mobile-first social platform for connecting professionals in creative industries with messaging and event features.',
    image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux', 'WebRTC'],
    github: '#',
    liveUrl: '#'
  }
];