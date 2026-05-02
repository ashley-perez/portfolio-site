import ResumeCard from "./ResumeCard";
import type { ResumeInfo } from "./ResumeCard";

const cards: ResumeInfo[] = [
  {
    id: 1,
    name: "STEAM K-12",
    time: "November 2024 - Present",
    position: "Game Development & Programming Instructor",
    location: "Remote",
    bullets: [
      "Developed and delivered lesson plans on game design, programming concepts and how to use the Unity game engine",
      "Taught principles of game development, scripting, collaboration and brainstorming techniques",
      "Communicated regularly with parents to provide progress updates",
      "Designed and recorded Python programming courses",
      "Help foster curiousity and creativity in STEM :)",
    ],
    // github:,
    // liveUrl:,
  },
  {
    id: 2,
    name: "Baskin Engineering",
    time: "September 2023 - December 2024",
    position: "Peer Mentor - MESA Engineering Program",
    location: "Santa Cruz, CA",
    bullets: [
      "Held office hours and delivered one-on-one and group tutoring in math, Python, C/C++, and programming fundamentals",
      "Planned and executed community-building events (e.g., student activities, workshops), fostering an inclusive learning environment",
      "Partnered with faculty and student leaders to advocate for resources, secure funding, and enhance MESA program offerings",
    ],
    // github:,
    // liveurl:,
  },
  {
    id: 3,
    name: "Baskin Engineering",
    time: "March - June 2023",
    position: "Machine Learning Tutor - CSE 40",
    location: "Santa Cruz, CA",
    bullets: [
      "Held regular office hours and assisted students with Python-based assignments including scikit-learn, pandas and data analysis",
      "Reinforced understanding of foundational ML math concepts such as statistics and probability",
      "Partnered with faculty and teaching assistants to design and review exams, quizzes, and course content",
    ],
    // github:,
    // liveurl:,
  },
  {
    id: 4,
    name: "Baskin Engineering",
    time: "June 2023 - December 2023",
    position: "Coding Tutor - CUBE",
    location: "Santa Cruz, CA",
    bullets: [
      "Tutored for Coding Unafraid at Baskin Engineering program to help students from underrepresented backgrounds (e.g., MESA, EOP) to succeed in Data Structures and Algorithms coursework",
      "Held office hours to tutor students in C++ and data structures and algorithms concepts such as linked lists, stacks, queues, etc",
      "Helped students get familiar with Linux, terminal usage, and data visualization",
      "Supported classroom instruction by attending session and reinforcing course matericals outside of lectures",
    ],
    // github:,
    // liveurl:,
  },
  {
    id: 5,
    name: "Baskin Engineering",
    time: "September 2022 - March 2023",
    position: "SEEI Student Assistant",
    location: "Santa Cruz, CA",
    bullets: [
      "Created and managed web pages for diversity and inclusion initiatives within Baskin Engineering using a content management system (CMS)",
      "Met regularly with supervisor to plan webpage timelines and improve promotion of diversity initiatives within Baskin",
      "Contributed to student engagement efforts by supporting online presence and program promotion",
    ],
    // github:,
    // liveurl:,
  },
];

export default function Resume() {
  return (
    <article className="bg-white  mx-auto px-4 ">
      {/*
		  <div className="flex p-6 gap-6">
			   <h2 className="font-lora text-xl font-bold">Education</h2>

			</div>
			*/}

      <section className="flex flex-col gap-3">
        {cards.map((card) => (
          <ResumeCard key={card.id} info={card} />
        ))}
      </section>
    </article>
  );
}
