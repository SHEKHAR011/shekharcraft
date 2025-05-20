import ScreenShot from '../assets/ScreenShot.png';
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'mobile' |'CLI';
  technologies: string[];
  github?: string;
  liveUrl?: string;

}

export const projectData: Project[] = 
[{
    id: 1,
    title: 'Music Streaming App with Dezzer',
    description: 'Complete visual identity redesign for a travel agency, including logo, website, and marketing materials.',
    image: 'https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mobile',
    technologies: ['Native Android', 'Dezzer Api', 'Picasso','Glide','Material UI','Json Converter'],
    github: 'htsdadsffdsfd',
    // liveUrl: '#'
  },
  {
    id: 2,
    title: 'Smart Traffic Light Simulation',
    description: 'A dynamic and realistic simulation of a 4-way Indian intersection using Python and Pygame! This project demonstrates a traffic light system with roundabout logic, phase cycling, and vehicles that obey signals.',
    image: ScreenShot, 
    category: 'CLI',
    technologies: ['Python', 'Pygame'],
    github: 'https://github.com/SHEKHAR011/Traffic-light-system',
    //liveUrl: '#'
  },
  {
    id: 3,
    title: 'Discord Bot with Gemini Integration',
    description: 'A versatile Discord bot powered by Python and the Gemini API, offering conversational AI features for smart automation and engaging real-time interactions.',
    image: 'https://images.pexels.com/photos/3927410/pexels-photo-3927410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mobile',
    technologies: ['Discord','Python', 'Gemini Api', 'CLI','dotenv'],
    github: 'https://github.com/SHEKHAR011/Discord-Bot',
    
  },
  {
    id: 4,
    title: 'Adventure Game',
    description: 'If Elif Else Adventure Game in Python',
    image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'CLI',
    technologies: ['Python'],
    github: 'https://github.com/SHEKHAR011/Adventure-Game',
    
  },
  
  // {
  //   id: 5,
  //   title: 'Real Estate Listing Platform',
  //   description: 'Web platform for real estate listings with advanced search, filtering, and interactive property maps.',
  //   image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   category: 'web',
  //   technologies: ['React', 'Next.js', 'GraphQL', 'MongoDB', 'MapBox'],
  //   github: '#',
  //   liveUrl: '#'
  // },
  // {
  //   id: 6,
  //   title: 'Social Networking App',
  //   description: 'Mobile-first social platform for connecting professionals in creative industries with messaging and event features.',
  //   image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   category: 'mobile',
  //   technologies: ['React Native', 'Firebase', 'Redux', 'WebRTC'],
  //   github: '#',
  //   liveUrl: '#'
  // }
];