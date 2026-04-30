// importing what we need
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import Tabs from "./components/Tabs";
import Resume from "./components/Resume";

import { useState } from "react";

export default function App() {
  // creating the states and function that are need to exist in order to switch tabs
  // going to have a tab that swaps between projects and resume
  // useState returns an array with 2 values
  const [activeTab, setActiveTab] = useState<"projects" | "resume">("projects");

  return (
    <main className="min-h-screen bg-white text-gray-900 max-w-4xl mx-auto px-6">
      {/* the components list that will be in the app */}

      <Hero />
      {/* tabs needs to pass the appropriate arguments to TABS */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* conditional rendering based on value of activeTab which is set in tab component */}
      {activeTab === "projects" && <ProjectList />}
      {activeTab === "resume" && <Resume />}
    </main>
  );
}
