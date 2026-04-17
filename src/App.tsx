// importing what we need
import Hero from './components/Hero'
import ProjectList from './components/ProjectList'

export default function App() {
  // const [activeTab, setActiveTab] = useState(false)


  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
	{ /* the components list that will be in the app */ }
      <Hero />
      <ProjectList />


    </main>
  )
}
