interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with React and Node.js. Features real-time updates and responsive design.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "Mobile-first e-commerce platform with advanced filtering and search capabilities.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "AI-powered data visualization dashboard built using D3.js and Python backend.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Project Four",
    description:
      "Real-time chat application with end-to-end encryption and file sharing capabilities.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80",
    githubUrl: "#",
    demoUrl: "#",
  },
];
