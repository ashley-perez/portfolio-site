import ProjectCard from "./ProjectCard";

// what goes on the grids
// might change this later on
// need to specify the type created in ProjectCard
// might need to clean that up....
const projects : Project[] = [
  {
    id: 1,
    name: "PROJECT 1",
    tags: ["react", "tailwind"],
    bullets: ["Built with HAHA", "Deployed on YM"],
    description: "lakdsjf;ajdf;ksajfldjl",
    mainMedia: "/placeholder.jpg",
		mediaType: "image",
    extraImages: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
    // github: "https://github.com/",
		// liveUrl:
  },
  {
    id: 2,
    name: "project 2",
    tags: ["react", "tailwind"],
    bullets: ["Built with HAHA", "Deployed on YM"],
    description: "blahblahblah",
    mainMedia: "/placeholder.jpg",
		mediaType: "image",
    extraImages: [],
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
