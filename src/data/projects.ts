import ScreenShot1 from '../assets/ScreenShot1.png';
import ScreenShot3 from '../assets/ScreenShot3.png';
import ScreenShot4 from '../assets/ScreenShot4.png';
import image from '../assets/image.png';
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
    image: image,
    category: 'mobile',
    technologies: ['Native Android', 'Dezzer Api', 'Picasso','Glide','Material UI','Json Converter'],
    github: 'https://github.com/SHEKHAR011/Music-Streaming-App.git',
    // liveUrl: '#'
  },
  {
    id: 2,
    title: 'Smart Traffic Light Simulation',
    description: 'A dynamic and realistic simulation of a 4-way Indian intersection using Python and Pygame! This project demonstrates a traffic light system with roundabout logic, phase cycling, and vehicles that obey signals.',
    image: ScreenShot1, 
    category: 'CLI',
    technologies: ['Python', 'Pygame'],
    github: 'https://github.com/SHEKHAR011/Traffic-light-system.git',
    //liveUrl: '#'
  },
  {
    id: 3,
    title: 'Discord Bot with Gemini Integration',
    description: 'A versatile Discord bot powered by Python and the Gemini API, offering conversational AI features for smart automation and engaging real-time interactions.',
    image: ScreenShot3,
    category: 'mobile',
    technologies: ['Discord','Python', 'Gemini Api', 'CLI','dotenv'],
    github: 'https://github.com/SHEKHAR011/Discord-Bot.git',
    
  },
  {
    id: 4,
    title: 'Adventure Game',
    description: 'If Elif Else Adventure Game in Python',
    image: ScreenShot4,
    category: 'CLI',
    technologies: ['Python'],
    github: 'https://github.com/SHEKHAR011/Adventure-Game.git',
    
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