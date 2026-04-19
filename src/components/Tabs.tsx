import {useState } from 'react'
import ProjectList from './ProjectList'
import Resume from './Resume'

// getting the state from parent component
type Props = {
  activeTab: 'projects' | 'resume'
  setActiveTab: (tab: 'projects' | 'resume') => void
}

export default function Tabs({activeTab, setactiveTab}: Props) {

  // placeholder function to see if the button works
  const onClick = () => {
    alert("Button clicked!");
  };

  return (
   <div class="flex border-4 mx-auto px-6 pb-16">
  <button class="hover:bg-gray-400 text-gray-800 border font-bold py-2 px-4"
   onClick={onClick}>
    projects
  </button>
  <button class="hover:bg-gray-400 text-gray-800 border font-bold py-2 px-4"
   onClick={onClick}>
    resume
  </button>
</div>


  )


}
