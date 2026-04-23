import {useState } from 'react'
// import ProjectList from './ProjectList'
// import Resume from './Resume'

// creating a prop to use
type TabSwitcherProp = {
  activeTab: 'projects' | 'resume' // variable that holds current state
  setActiveTab: (tab: 'projects' | 'resume') => void // function that doesnt return anything
}

// deconstruct the prop and add it to the function signature!!
export default function Tabs({activeTab, setactiveTab}: TabSwitcherProp) {

  // placeholder function to see if the button works
  // const onClick = () => {
  //
  // };

  return (
   <div class="flex border-4 mx-auto px-6 pb-16">
  <button class="hover:bg-gray-400 text-gray-800 border font-bold py-2 px-4"
   onClick={() => setActiveTab('projects')}>
    projects
  </button>
  <button class="hover:bg-gray-400 text-gray-800 border font-bold py-2 px-4"
   onClick={() => setActiveTab('resume')}>
    resume
  </button>
</div>


  )


}
