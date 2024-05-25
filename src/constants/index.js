import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  postgresql,
  graphql,
  komikult,
  systemtron,
  zestmoney,
  portfolio,
  
  
 
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Data Analytics',
    icon: ux,
  },
  {
    title: 'Yet to come',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
 
  
];

const experiences = [
  {
    title: 'AI/ML Developer',
    company_name: 'SystemTron',
    icon: systemtron,
    iconBg: '#333333',
    date: 'Nov 2023 - Dec 2023',
  },
  {
    title: 'Telecommunication Consultant',
    company_name: 'ZestMoney',
    icon: zestmoney,
    iconBg: '#333333',
    date: 'June 2022 - August 2022',
  },
  {
    title: 'Yet to come',
    company_name: '#',
    icon: '#',
    iconBg: '#333333',
    date: 'yet to come',
  },
  {
    title: 'yet to come',
    company_name: '#',
    icon: '#',
    iconBg: '#333333',
    date: 'yet to come',
  },
];

const projects = [
  {
    id: 'Note-Sharing',
    name: 'NoteX',
    description: 'A user-friendly website designed for the efficient and secure sharing of college notes. This platform facilitates seamless collaboration and easy access to study materials.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-2',
    name: 'Personal Portfolio',
    description:
      'A professional website showcasing my proficiency in web development and data structures and algorithms (DSA), highlighting my skills and diverse project experiences',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    repo: '#',
    demo: '#',
  },
  // {
  //   id: 'project-3',
  //   name: 'Yet to come',
  //   description: 'yet to come',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: '#',
  //   repo: '#',
  //   demo: '#',
  // },
  // {
  //   id: 'project-4',
  //   name: 'yet to come',
  //   description: `yet to come`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: '#',
  //   repo: '#',
  //   demo: '#',
  // },
  // {
  //   id: 'project-5',
  //   name: 'yet to come',
  //   description:
  //     'yet to come',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image:'#',
  //   repo: '#',
  //   demo: '#',
  // },
];

export { services, technologies, experiences, projects };
