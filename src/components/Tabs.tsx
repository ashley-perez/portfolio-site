// creating a prop to use
type TabSwitcherProp = {
  activeTab: "projects" | "resume"; // variable that holds current state
  setActiveTab: (tab: "projects" | "resume") => void; // function that doesnt return anything
};

// deconstruct the prop and add it to the function signature!!
// make sure that there are no typos...
export default function Tabs({ activeTab, setActiveTab }: TabSwitcherProp) {
  return (

    // px is the horizontal alignment of the buttons (left and right)
    // how far the button is pushed from left alignment 
    // pb is the vertical space the component takes up
    <menu className="flex mx-auto px-6 pb">
		
      <button
			  // set the state when button is clicked
        onClick={() => setActiveTab("projects")}

				// use the state to change the styling when a button is pressed
				className={`font-bold py-2 px-4 ${activeTab === 'projects' ? 'underline text-black' : 'text-black'}`}
      >
        projects
      </button>
      <button
        onClick={() => setActiveTab("resume")}

				// again changing the button style based on if clicked or not
				className={`font-bold py-2 px-4 ${activeTab === 'resume' ? 'underline text-black' : 'text-black'}`}
      >
        resume
      </button>
    </menu>
  );
}
