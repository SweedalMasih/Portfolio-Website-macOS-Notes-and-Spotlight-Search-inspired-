export type Project = {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  demo?: string;
  viewing?: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "macOS Notes–Inspired Portfolio",
    description:
      "A personal portfolio built as a learning and exploration project, inspired by macOS Notes and Spotlight Search.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Dark Mode",
      "UX Design",
    ],
    repo: "https://github.com/SweedalMasih/mac-notes-portfolio",
    viewing: true,
    featured: true,
  },
  {
    title: "GeoTrackr",
    description:
      "Real-time location tracking using browser APIs and interactive maps.",
    tech: ["JavaScript", "Geolocation API", "Maps"],
    repo: "https://github.com/SweedalMasih/GeoTrackr-",
    demo: "https://geotrackr.netlify.app/",
  },
  {
    title: "Omnifood",
    description:
      "Responsive food landing page built with modern CSS layout techniques.",
    tech: ["HTML", "CSS", "Responsive Design"],
    repo: "https://github.com/SweedalMasih/Omnifood-Project",
    demo: "https://omnifood-sweedal.netlify.app/",
  },
  {
    title: "TextUtils",
    description: "Text transformation and analytics app built with React.",
    tech: ["React", "JavaScript", "State"],
    repo: "https://github.com/SweedalMasih/TextUtils-React",
  },
  {
    title: "withShorts",
    description: "News aggregation app fetching and displaying live headlines.",
    tech: ["React", "REST API", "Async"],
    repo: "https://github.com/SweedalMasih/withShorts",
  },
];
