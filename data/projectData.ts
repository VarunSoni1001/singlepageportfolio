export type ProjectTypes = {
  projects: {
    title: string;
    description: string;
    githubLink: string;
    liveLink: string;
    img: string;
    skills: string[];
  }[];
};

export const projects = [
  {
    title: "News. (NewsDot)",
    description:
      "A cool news website made with Next.js and Tailwind CSS. It gets the latest news from the News API to keep you in the loop. With features like dark mode and a clean, beautiful design that works well on any device because of its responsiveness, NewsDot makes staying informed easy and fun.",
    githubLink: "https://github.com/VarunSoni1001/newsdot",
    liveLink: "https://newsdot.vercel.app",
    img: "/newsdot_project.png",
    skills: [
      "Next.js",
      "JavaScript",
      "Responsive Design",
      "Tailwind CSS",
      "HTML",
      "Dark Mode",
      "API",
      "Framer Motion",
      "Infinite Scroll",
    ],
  },
  {
    title: "Portfolio",
    description:
      "A cool news website made with Next.js and Tailwind CSS. It gets the latest news from the News API to keep you in the loop. With features like dark mode and a clean, beautiful design that works well on any device because of its responsiveness, NewsDot makes staying informed easy and fun.",
    githubLink: "https://github.com/VarunSoni1001/varunsoni",
    liveLink: "https://varunsoni.vercel.app",
    img: "/portfolio_project.png",
    skills: [
      "Next.js",
      "JavaScript",
      "Responsive Design",
      "Tailwind CSS",
      "HTML",
      "Dark Mode",
      "Framer Motion",
    ],
  },
  {
    title: "TODO LIST",
    description:
      "A dynamic and responsive web application made with Next.js, created for managing to-do lists. The app supports task/to-do creation, marking them as completed, editing, and deletion. All changes are saved in Google's Firebase Realtime Database and authentication, and the app is styled with Tailwind CSS.",
    githubLink: "https://github.com/VarunSoni1001/todo-list-nextjs",
    liveLink: "https://todolistnextapp.vercel.app",
    img: "/todo_project.png",
    skills: [
      "Next.js",
      "Responsive Design",
      "HTML",
      "JavaScript",
      "Tailwind CSS",
      "Firebase Authentication",
      "Firebase Real-time database",
      "CRUD operations",
    ],
  },
];
