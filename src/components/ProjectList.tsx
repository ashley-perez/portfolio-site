import ProjectCard from "./ProjectCard";

// what goes on the grids
// might change this later on
const projects = [
  {
    id: 1,
    name: "PROJECT 1",
    tags: ["react", "tailwind"],
    description: "lakdsjf;ajdf;ksajfldjl",
    mainMedia: "/placeholder.jpg",
    bullets: ["Built with HAHA", "Deployed on YM"],
    image: "/placeholder.jpg",
    github: "https://github.com/",
    extraImages: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
  },
  {
    id: 2,
    name: "project 2",
    tags: ["react", "tailwind"],
    description: "blahblahblah",
    mainMedia: "/placeholder.jpg",
    bullets: ["Built with HAHA", "Deployed on YM"],
    image: "/placeholder.jpg",
    github: "https://github.com/",
    extraImages: [],
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
