import { useState } from 'react'

// creating the project type
// dictating what members and attributes should exist and their types
type Project = {
  id: number
  name: string
  description: string
  bullets: string[]
  image: string
  github: string
}

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
 
  // the idea of states is controlled with variables
  // isExpanded starts off as false
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{project.description}</p>

		{ /*this only renders when isExpanded is true */ }
        {isExpanded && (
          <ul className="text-sm text-gray-600 list-disc list-inside mb-3 space-y-1">
            {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}

        <div className="flex gap-3 items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-blue-600 underline"
          >
            {isExpanded ? 'collapse ↑' : 'expand ↓'}
          </button>
          {isExpanded && (
            <a href={project.github} className="text-sm text-gray-500 underline">
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
