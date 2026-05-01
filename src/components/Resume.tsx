import ResumeCard from "./ResumeCard";
import type { ResumeInfo } from "./ResumeCard";

const cards: ResumeInfo[] = [
  {
    id: 1,
    name: "STEAM K-12",
    time: "December 2024 - Present",
    position: "Game Development & Programming Instructor",
    location: "Remote",
    bullets: ["teach", "create", "reach out"],
    // github:,
    // liveUrl:,
  },
  {
    id: 2,
    name: "Baskin Engineering",
    time: "i forgor",
    position: "Peer Mentor",
    location: "Santa Cruz, CA",
    bullets: ["teach/tutor", "foster community", "work with faculty and peers"],
    // github:,
    // liveurl:,
  },
  {
    id: 3,
    name: "Baskin Engineering",
    time: "i forgor",
    position: "Machine Learning Tutor - CSE 40",
    location: "santa cruz, ca",
    bullets: [
      "teach/tutor",
      "hold office hours",
      "create test questions",
      "python",
    ],
    // github:,
    // liveurl:,
  },
  {
    id: 4,
    name: "Baskin Engineering",
    time: "i forgor",
    position: "Coding Tutor - CUBE",
    location: "santa cruz, ca",
    bullets: [
      "teach/tutor - coding unafraid at baskin engineering",
      "for EOP students",
      "hold office hours",
      "focused on c++ and dsa",
    ],
    // github:,
    // liveurl:,
  },
];

export default function Resume() {
  return (
    <article className="bg-white  mx-auto px-4 ">
      <section className="flex flex-col gap-3">
        {cards.map((card) => (
          <ResumeCard key={card.id} info={card} />
        ))}
      </section>
    </article>
  );
}
