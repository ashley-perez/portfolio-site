import ProjectCard from './ProjectCard'

// what goes on the grids
// might change this later on
const projects = [
  {
    id: 1,
    name: 'PROJECT 1',
    description: 'lakdsjf;ajdf;ksajfldjl',
    bullets: ['Built with HAHA', 'Deployed on YM'],
    image: '/project1.png',
    github: 'https://github.com/',
  },
  {
    id: 2,
    name: 'project 2',
    description: 'blahblahblah',
    bullets: ['Built with HAHA', 'Deployed on YM'],
    image: '/project2.png',
    github: 'https://github.com/',
  }
  // can add more projects later
]

// actually chooses the layout, def want to change this
export default function ProjectList() {
  return (
    <article className="max-w-3xl mx-auto px-6 pb-16">
	{ /* <h2 className="text-2xl font-semibold mb-6">Projects</h2> */ }
	 <h2 className="text-2xl font-semibold mb-6">Projects</h2> 
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </article>
  )
}
