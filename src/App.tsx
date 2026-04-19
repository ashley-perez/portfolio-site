// importing what we need
import Hero from './components/Hero'
import ProjectList from './components/ProjectList'
import Tabs from './components/Tabs'
import Resume from './components/Resume'

import {useState } from 'react'

export default function App() {
  // createing the states that need to exist in order to switch tabs 
  // going to have a tab that swaps between projects and resume
  const [activeTab, setActiveTab] = useState<'projects' | 'resume'>('projects')


  return (
	<main className="min-h-screen bg-gray-50 text-gray-900 max-w-4xl mx-auto px-6">
	{ /* the components list that will be in the app */ }
      <Hero />

	  
	  { /* tabs needs to pass the state to the tabs component */ }
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProjectList />
	  <Resume />


    </main>
  )
}
