import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface SocialLink {
  icon: IconDefinition;
  url: string;
  label: string;
}

export const socials: SocialLink[] = [
  {
    icon: faEnvelope,
    url: "mailto:marat.rahin@gmail.com",
    label: "Email",
  },
  {
    icon: faGithub,
    url: "https://github.com/Pidgeots",
    label: "GitHub",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/marat-lakhin/",
    label: "LinkedIn",
  },
  {
    icon: faTelegram,
    url: "https://t.me/pidgeots",
    label: "Telegram",
  },
];

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Responsive Landing Page",
    description: `Developed and deployed a fully responsive landing page using HTML and CSS, ensuring an intuitive and engaging user experience across all devices.
      The project follows a mobile-first approach, implementing adaptive layouts to provide seamless usability on desktops, tablets, and smartphones.
      This experience enhanced my skills in semantic HTML, responsive design techniques, and cross-browser compatibility, resulting in an accessible and visually appealing solution.`,
    image: `${process.env.PUBLIC_URL}/images/landingPrev.png`,
    link: "https://pidgeots.github.io/sberuniversity-project/",
  },
  {
    title: "To-Do List Application",
    description: `Designed and implemented an interactive to-do list application using JavaScript and Bootstrap, introducing key front-end development concepts such as DOM manipulation, event handling, and data persistence.
      The project resulted in an intuitive and responsive task management solution with a modern UI, showcasing my ability to build dynamic and user-friendly web applications efficiently.`,
    image: `${process.env.PUBLIC_URL}/images/todoPrev.png`,
    link: "https://pidgeots.github.io/to-do-list/",
  },
];

export const landing = {
  greeting: "Hello, I'm Marat!",
  bio1: "A frontend developer",
  bio2: "specialised in React",
  avatarName: "Marat Lakhin",
  avatarSrc: `${process.env.PUBLIC_URL}/images/avatar.jpg`,
};

export const enquiryOptions = [
  { value: "intern", label: "Internship or Junior Position" },
  { value: "hireMe", label: "Freelance project proposal" },
  { value: "jobOpp", label: "Job Opportunity" },
  { value: "other", label: "Other" },
] as const;
