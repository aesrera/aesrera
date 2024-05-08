/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 18/12/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  xpovi,
  knowvte,
  femto,
  avatar,
  lms,
  ess,
  essb,
  curaegypt,
  alexcure,
  unilearn,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",
    "Ahmed Essam is a highly accomplished business leader with extensive experience helping startups and local businesses achieve transformational growth.",
    "Through his work developing strategies and fostering partnerships, Ahmed has established a strong track record of enabling organizations to realize their full potential.",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  // {
  //   id: 'projects',
  //   title: 'Projects',
  // },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "FemtoFP&A",
    description: 'AI powered Financial Planning & Analysis SaaS; Comprehensive analytics, performance monitoring & insightful reportingTo level up planning & decision making in real-time.',
    image: femto,
    source_code_link: 'https://github.com/femtofpa',
    demo_link: 'https://www.femtofpa.com',
  },
  {
    name: 'Xpovi',
    description: 'An enterprise solution enabling startups, to tailor and receive their financial models and business plans in few clicks.',
    image: xpovi,
    source_code_link: 'https://www.xpovi.com',
    demo_link: 'https://www.xpovi.com',
  },
  {
    name: 'KnowVTE',
    description: 'VTE is the third most common cause of cardiovascular death, following acute coronary artery disease and stroke, and is responsible for more than 3 million deaths per year worldwide.',
    image: knowvte,
    source_code_link: 'https://github.com/Conference-Organizing-Bureau-COB/gahar',
    demo_link: 'https://knowvte.com',
  },
  {
    name: 'LMS',
    description: 'Online courses platform.',
    image: lms,
    source_code_link: 'https://github.com/Conference-Organizing-Bureau-COB/LMS-DR-Shereef',
    demo_link: 'https://sherifelhawary.com',
  },
  {
    name: 'ESS',
    description: 'The Egyptian Society of Surgeons - ESS.',
    image: ess,
    source_code_link: 'https://github.com/Conference-Organizing-Bureau-COB/new_ess',
    demo_link: 'https://ess-egy.org',
  },
  {
    name: 'ESSB',
    description: 'The Egyptian Scientific Society of Bronchology - ESSB.',
    image: essb,
    source_code_link: 'https://github.com/Conference-Organizing-Bureau-COB/essb',
    demo_link: 'https://essb-eg.org',
  },
  {
    name: 'CuraEgypt',
    description: 'The hospital management hopes to reach the level of service in the specialties available in it, to be a pioneer in the fields of gastrointestinal and orthopedic surgeries.',
    image: curaegypt,
    source_code_link: 'https://github.com/Conference-Organizing-Bureau-COB/cura-elnasr-hospital',
    demo_link: 'https://curaegypt.com',
  },
  {
    name: 'AlexCure',
    description: 'Online hospitality Servises.',
    image: alexcure,
    source_code_link: 'https://github.com/Conference-Organizing-Bureau-COB/ALEX_CURE',
    demo_link: 'https://alex-cure.com',
  },
  {
    name: 'Unilearn',
    description: 'UniLearn empowers learners and trainers with latest technology to build and assess their skills in schools, universities and companies.',
    image: unilearn,
    source_code_link: 'https://github.com/karimmattar/unilearn',
    demo_link: 'https://unilearn.com.eg/home-page',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'Non profits',
    title: 'Non profits',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
