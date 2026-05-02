import ProjectCard from "./ProjectCard";
import type { Project } from "./ProjectCard";

// what goes on the grids
// might change this later on
// need to specify the type created in ProjectCard
// might need to clean that up....
const projects: Project[] = [
  {
    id: 1,
    name: "Lamplight",
    tags: ["Unity", "C#", "Developer", "Level Design", "Producer"],
    bullets: [
      "3D puzzle platformer made in Unity",
      "Shipped to Steam marketplace, adhering to Steam's guidlines and build specifications",
      "Designed, created and prototyped levels and game mechanics",
    ],
    description:
      "Developed, prototyped, designed levels and game mechanics in Unity. Collaborated with peers to create an immersive experience. Adhered to design standards to make game more accessibe as well as added localization!",
    mainMedia: "/placeholder.jpg",
    mediaType: "image",
    extraImages: [],
    // github: "https://github.com/",
    liveUrl: "https://store.steampowered.com/app/3011380/Lamplight/",
    toLearnMore: true,
  },
  {
    id: 2,
    name: "Personal Portfolio Site",
    tags: ["React", "Tailwind", "Vite", "Web Development"],
    bullets: [
      "Developed and designed a personal site using React, Typescript, TailwindCSS",
      "Created resuable components",
      "Learned and applied React concepts including props, state management and conditional rendering",
      "Deployed using Cloudflare",
      "Continuously iterating and improving the UI/UX and project structure",
    ],
    description: "",
    mainMedia: "/react-logo.png",
    mediaType: "image",
    extraImages: [],
    toLearnMore: false,
    // github: "https://github.com/",
    // liveUrl:
  },
  {
    id: 3,
    name: 'Rewind Prototype - "Old TV"',
    tags: ["Unity", "C#", "Developer", "Designer"],
    bullets: [
      "Developed main rewind mechanic using Linked Lists as the main data structure to store and discard object positions",
      "Able to rewind all events that took place in the last 6 seconds",
      "Ideation came from collaborative brainstorming methods from: A Playful Production Process",
    ],
    description: "",
    mainMedia: "/old-tv.gif",
    mediaType: "image",
    extraImages: [],
    toLearnMore: false,
    // github: "https://github.com/",
    // liveUrl:
  },
  {
    id: 4,
    name: "Hey Dandy",
    tags: ["Phaser", "Javascript", "Developer", "Producer"],
    bullets: [
      "Endless runner created using the Phaser Library",
      "Created and developed main game mechanic",
      "Led gameplay development and collaboratively worked on design elements and visual style",
    ],
    description: "",
    mainMedia: "/heydandy.png",
    mediaType: "image",
    extraImages: [],
    toLearnMore: false,
    // github: "https://github.com/",
    // liveUrl:
  },
  // can add more projects later
];

// actually chooses the layout, def want to change this
export default function ProjectList() {
  return (
    <article className="bg-white  mx-auto px-4 ">
      <section className="flex flex-col gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </article>
  );
}
